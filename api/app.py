from os import stat
from flask import Flask, jsonify
from data import char_class, char_race
import stats
import random

app = Flask(__name__)

@app.route('/world')
def hello_world():
    return str("Hello World")

@app.route('/d20')
def set_d20_roll(min_num=1, max_num=20):
    return str(random.randint(min_num, max_num))

@app.route('/ability-rolls')
def set_ability_roll():
   return stats.char_abilities

@app.route('/modifiers')
def set_modifiers():
    return stats.char_modifiers

@app.route('/test')
def set_char():
    clss = random.choice(char_class.char_class)
    race = random.choice(char_race.char_race)
    return clss + ',' + race

@app.route('/race')
def get_race():
    race = random.choice(char_race.char_race)
    return {'race': race}

@app.route('/race-desc')
def race_desc():
    race = random.choice(char_race.char_race)
    get_char_desc = char_race.races[race]
    return get_char_desc
    

@app.route('/create-char')
def create_char():
    race = random.choice(char_race.char_race)
    clss = random.choice(char_class.char_class)
    stats.set_ability_rolls(race)
    abilities = stats.char_abilities
    stats.set_ability_modifiers()
    modifiers = stats.char_modifiers
    char_hp = stats.set_starting_hp(clss)
    race_desc = char_race.races[race]
    clss_desc = char_class.classes[clss]

    return {'race': race,
    'clss': clss,
    'hp': str(char_hp),
    'abilities': str(abilities),
    'modifiers': str(modifiers),
    'race-desc': race_desc,
    'clss-desc': clss_desc}
    # return race + ', ' + clss + ', ' + str(char_hp) + ', ' + str(abilities) + ', ' + str(modifiers) + ', ' + race_desc + ', ' + clss_desc 
