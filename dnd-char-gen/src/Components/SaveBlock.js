import React from 'react';

function SaveBlock(props) {
    return(
        <div class="save-block">
            <div>
                <ul>
                    <li><u>-1</u> Strength</li>
                    <li><u>2</u> Dexterity</li>
                    <li><u>4</u> Constitution</li>
                    <li><u>2</u> Intelligence</li>
                    <li><u>6</u> Wisdom</li>
                    <li><u>-1</u> Charisma</li>
                </ul>
            </div>
            <div class="text-align">
                Saving Throws
            </div>
        </div>
    );
}

export default SaveBlock;