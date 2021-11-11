import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const api = axios.create({
   baseURL: "http://localhost:3000"
})

const abilityURL = '/abilities';
const modURL = '/modifiers';

//TODO: All Stats behind one API call on display...WHY?

function StatBlock(props) {
    
    const [stat, setStat] = useState("Stat")
    const [mod, setMod] = useState("Mod")
    const [statName, setStatName] = useState('Ability')
    const [newAbility, setNewAbility] = useState()
    const [newMod, setNewMod] = useState()

    useEffect( async () => {
        const setInitialAbilities = await api.get(`${abilityURL}`);
        setStat(setInitialAbilities.data[`${props.ability}`]);
    }, [newAbility])

    useEffect( async () => {
        const setInitialMods = await api.get(`${modURL}`);
        setMod(setInitialMods.data[`${props.mod}`]);
    }, [newMod])

    useEffect(() => {
        setStatName(`${props.statType}`);
    }, [])


    useEffect(() => {
        const getAbilities = async () => {
            const ability = await api.get('/abilities');
            const modifier = await api.get('/modifiers');
            setNewAbility(ability.data[`${props.ability}`]);
            setNewMod(modifier.data[`${props.mod}`]);
            setStatName(`${props.statType}`);
        }
        document.getElementById("main-button").addEventListener("click", getAbilities);
    }, []);

    return (
        <div class="stat-block">
            <div>
                {statName}
            </div>
            <div>
                {stat}
            </div>
            <div class="stat-mod">
                {mod}
            </div>
        </div>
    );
}

export default StatBlock;