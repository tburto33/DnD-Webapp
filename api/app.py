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
def set_race():
    race = random.choice(char_race.char_race)
    return race

@app.route('/create-char/<race>/<clss>')
def create_char(race, clss):
    char_race = race
    char_clss = clss
    # stats.set_ability_rolls(race)
    # stats.set_ability_modifiers()
    # char_hp = stats.set_starting_hp(clss)
    return race + ',' + clss
