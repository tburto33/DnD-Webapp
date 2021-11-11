import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

function SaveBlock() {

    const [newMod, setNewMod] = useState()
    const [str, setStr] = useState()
    const [dex, setDex] = useState()
    const [int, setInt] = useState()
    const [wis, setWis] = useState()
    const [char, setChar] = useState()
    const [cons, setCons] = useState()

    useEffect( async () => {
        const modifiers = await api.get('/modifiers');
        setStr(modifiers.data['str']);
        setDex(modifiers.data['dex']);
        setInt(modifiers.data['int']);
        setWis(modifiers.data['wis']);
        setChar(modifiers.data['char']);
        setCons(modifiers.data['cons'])
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
                    <li><u>{str} </u> Strength</li>
                    <li><u>{dex} </u> Dexterity</li>
                    <li><u>{cons} </u> Constitution</li>
                    <li><u>{int} </u> Intelligence</li>
                    <li><u>{wis} </u> Wisdom</li>
                    <li><u>{char} </u> Charisma</li>
                </ul>
            </div>
            <div class="text-align">
                Saving Throws
            </div>
        </div>
    );
}

export default SaveBlock;