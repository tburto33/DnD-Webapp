import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const api = axios.create({
   baseURL: "http://localhost:3000"
})

//TODO: All Stats behind one API call on display...WHY?

function StatBlock(props) {
    
    const [stat, setStat] = useState("Stat")
    const [mod, setMod] = useState("Mod")
    const [statName, setStatName] = useState('Ability')

    useEffect(() => {
        const getAbilities = async () => {
            const ability = await api.get('/abilities');
            const modifier = await api.get('/modifiers');
            console.log(ability, modifier);
            setStat(ability.data[`${props.ability}`]);
            setMod(modifier.data[`${props.mod}`]);
            setStatName(`${props.statType}`);
        }
        document.getElementById("main-button").addEventListener("click", getAbilities);
    }, [stat, mod]);

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