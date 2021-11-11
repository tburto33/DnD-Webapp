import helpers

# Calculates abilities before passives
def ability_roll():
    total = []
    # Simulates rolling 4 1d6 dice
    roll_one = helpers.dice_roll(1, 6)
    roll_two = helpers.dice_roll(1, 6)
    roll_three = helpers.dice_roll(1, 6)
    roll_four = helpers.dice_roll(1, 6)
    # Places 4 rolls in list and removes lowest before totaling
    total.append(roll_one)
    total.append(roll_two)
    total.append(roll_three)
    total.append(roll_four)
    total.remove(min(total))

    return sum(total)


# Determines modifiers based on ability rolls
def ability_modifier(ability):
    modifier = 0

    if ability == 1:
        modifier = -5
    if ability == 2 or ability == 3:
        modifier = -4
    if ability == 4 or ability == 5:
        modifier = -3
    if ability == 6 or ability == 7:
        modifier = -2
    if ability == 8 or ability == 9:
        modifier = -1
    if ability == 10 or ability == 11:
        modifier = 0
    if ability == 12 or ability == 13:
        modifier = +1
    if ability == 14 or ability == 15:
        modifier = +2
    if ability == 16 or ability == 17:
        modifier = +3
    if ability == 18 or ability == 19:
        modifier = +4
    if ability == 20:
        modifier = +5
    return modifier


# Rolls for each ability, adds racial passives if needed.
def set_ability_rolls(char_race):
    char_abilities.update({"str": strength(char_race)})
    char_abilities.update({"dex": dexterity(char_race)})
    char_abilities.update({"cons": constitution(char_race)})
    char_abilities.update({"int": intelligence(char_race)})
    char_abilities.update({"wis": wisdom(char_race)})
    char_abilities.update({"char": charisma(char_race)})


# Calculates modifiers from ability rolls and then stores them into char_modifier_dict
def set_ability_modifiers():
    char_modifiers.update({"str": ability_modifier(char_abilities["str"])})
    char_modifiers.update({"dex": ability_modifier(char_abilities["dex"])})
    char_modifiers.update({"cons": ability_modifier(char_abilities["cons"])})
    char_modifiers.update({"int": ability_modifier(char_abilities["int"])})
    char_modifiers.update({"wis": ability_modifier(char_abilities["wis"])})
    char_modifiers.update({"char": ability_modifier(char_abilities["char"])})


# Stores character ability rolls
char_abilities = {
    "str": 0,
    "dex": 0,
    "cons": 0,
    "int": 0,
    "wis": 0,
    "char": 0,
}


# Stores character modifiers
char_modifiers = {
    "str": 0,
    "dex": 0,
    "cons": 0,
    "int": 0,
    "wis": 0,
    "char": 0,
}


# Calculates starting HP based on class and constitution modifier
def set_starting_hp(char_class):
    cons_mod = char_modifiers["cons"]
    hit_points = {
        "barbarian": 12,
        "fighter": 10,
        "paladin": 10,
        "ranger": 10,
        "bard": 8,
        "cleric": 8,
        "druid": 8,
        "monk": 8,
        "rogue": 8,
        "warlock": 8,
        "sorcerer": 6,
        "wizard": 6,
    }
    return hit_points[char_class] + cons_mod


# The following functions add racial passives into ability rolls
def strength(race):
    if race == "dragonborn" or race == "half-orc":
        str_total = ability_roll() + 2
    elif race == "human":
        str_total = ability_roll() + 1
    else:
        str_total = ability_roll()
    return str_total


def dexterity(race):
    if race == "elf" or race == "human" or race == "halfling":
        dex_total = ability_roll() + 2
    elif race == "human":
        dex_total = ability_roll() + 1
    else:
        dex_total = ability_roll()
    return dex_total


def constitution(race):
    if race == "dwarf":
        cons_total = ability_roll() + 2
    elif race == "human" or race == "half-orc":
        cons_total = ability_roll() + 1
    else:
        cons_total = ability_roll()
    return cons_total


def intelligence(race):
    if race == "gnome":
        int_total = ability_roll() + 2
    elif race == "human" or race == "tiefling":
        int_total = ability_roll() + 1
    else:
        int_total = ability_roll()
    return int_total


def wisdom(race):
    if race == "human":
        wis_total = ability_roll() + 1
    else:
        wis_total = ability_roll()
    return wis_total


def charisma(race):
    if race == "half-elf" or race == "tiefling":
        char_total = ability_roll() + 2
    elif race == "human" or race == "dragonborn":
        char_total = ability_roll() + 1
    else:
        char_total = ability_roll()
    return char_total

#Sets player character speed based on race
def char_speed(race):
    if race == "dwarf" or race == "gnome" or race == "halfling":
        speed = 25
    else:
        speed = 30
    return speed

