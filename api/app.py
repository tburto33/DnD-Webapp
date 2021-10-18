from os import stat
from flask import Flask, json, jsonify
from data import char_class, char_race
import stats
import random

app = Flask(__name__)

#Just for testing purposes and its DND have to have D20 in there somewhere...
@app.route('/d20')
def set_d20_roll(min_num=1, max_num=20):
    return str(random.randint(min_num, max_num))

#Endpoints below pull data from JSON file for front-end
@app.route('/abilities')
def get_abilities():
    file = open('playerChar.json')
    data = json.load(file)
    return data['abilities']

@app.route('/modifiers')
def get_modifiers():
    file = open('playerChar.json')
    data = json.load(file)
    return data['modifiers']

@app.route('/clss')
def get_clss():
    file = open('playerChar.json')
    data = json.load(file)
    return data['clss']

@app.route('/race')
def get_race():
    file = open('playerChar.json')
    data = json.load(file)
    return data['race']

@app.route('/hp')
def get_hp():
    file = open('playerChar.json')
    data = json.load(file)
    return data['hp']

#Creates new random character and saves it to JSON file
@app.route('/create-char')
def create_char():
    race = random.choice(char_race.char_race)
    clss = random.choice(char_class.char_class)
    stats.set_ability_rolls(race)
    abilities = stats.char_abilities
    stats.set_ability_modifiers()
    modifiers = stats.char_modifiers
    char_hp = stats.set_starting_hp(clss)

    char_stats = {
        'race': race,
        'clss': clss,
        'hp': str(char_hp),
        'abilities': str(abilities),
        'modifiers': str(modifiers)
    }

    # JSON used as temporary database for now
    char_to_json = json.dumps(char_stats, indent = 4)

    with open("playerChar.json", "w") as outfile:
        outfile.write(char_to_json)

    # return jsonify(
    # {'race': race,
    # 'clss': clss,
    # 'hp': str(char_hp),
    # 'abilities': str(abilities),
    # 'modifiers': str(modifiers)}) 
