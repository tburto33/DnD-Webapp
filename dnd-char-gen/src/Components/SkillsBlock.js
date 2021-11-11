import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

function SkillsBlock() {

    // const [mod, setMod] = useState("")
    const [newMod, setNewMod] = useState("")
    const [str, setStr] = useState("")
    const [dex, setDex] = useState("")
    const [int, setInt] = useState("")
    const [wis, setWis] = useState("")
    const [char, setChar] = useState("")

    useEffect( async () => {
        const modifiers = await api.get('/modifiers');
        setStr(modifiers.data['str']);
        setDex(modifiers.data['dex']);
        setInt(modifiers.data['int']);
        setWis(modifiers.data['wis']);
        setChar(modifiers.data['char']);
    }, [newMod]);

    useEffect(() => {
        const getNewModifiers = async () => {
            const newModifiers = await api.get('/modifiers');
            setNewMod(newModifiers.data);
            
        }
        document.getElementById("main-button").addEventListener("click", getNewModifiers);
    }, []);

    return(
        <div class="save-block">
            <div>
                <ul>
                    <li><u>{dex} </u> Acrobatics</li>
                    <li><u>{wis} </u> Animal Handling</li>
                    <li><u>{int} </u> Arcana</li>
                    <li><u>{str} </u> Athletics</li>
                    <li><u>{char} </u> Deception</li>
                    <li><u>{int} </u> History</li>
                    <li><u>{wis} </u> Insight</li>
                    <li><u>{char} </u> Intimidation</li>
                    <li><u>{int} </u> Investigation</li>
                    <li><u>{wis} </u> Medicine</li>
                    <li><u>{int} </u> Nature</li>
                    <li><u>{wis} </u> Perception</li>
                    <li><u>{char} </u> Performance</li>
                    <li><u>{char} </u> Persuasion</li>
                    <li><u>{int} </u> Religion</li>
                    <li><u>{dex} </u> Sleight of Hand</li>
                    <li><u>{dex} </u> Stealth</li>
                    <li><u>{wis} </u> Survival</li>
                </ul>
            </div>
            <div class="text-align">
                Skills
            </div>
        </div>
    );
}

export default SkillsBlock;

// function SkillsBlock(props) {
    //     return(
    //         <div class="save-block">
    //             <div>
    //                 <ul>
    //                     <li><u>{dex} </u> Acrobatics</li>
    //                     <li><u>{str} </u> Animal Handling</li>
    //                     <li><u>{wis} </u> Arcana</li>
    //                     <li><u>{int} </u> Athletics</li>
    //                     <li><u>{char} </u> Deception</li>
    //                     <li><u>{cons} </u> History</li>
    //                     <li><u>-1 </u> Insight</li>
    //                     <li><u>-1 </u> Intimidation</li>
    //                     <li><u>-1 </u> Investigation</li>
    //                     <li><u>-1 </u> Medicine</li>
    //                     <li><u>-1 </u> Nature</li>
    //                     <li><u>-1 </u> Perception</li>
    //                     <li><u>-1 </u> Performance</li>
    //                     <li><u>-1 </u> Persuasion</li>
    //                     <li><u>-1 </u> Religion</li>
    //                     <li><u>-1 </u> Sleight of Hand</li>
    //                     <li><u>-1 </u> Stealth</li>
    //                     <li><u>{wis} </u> Survival</li>
    //                 </ul>
    //             </div>
    //             <div class="text-align">
    //                 Skills
    //             </div>
    //         </div>
    //     );
    // }