import random
from data import char_class, char_race
import stats

# Dice roll simulator
def dice_roll(min_num, max_num):
    int(min_num)
    int(max_num)
    return random.randint(min_num, max_num)
     