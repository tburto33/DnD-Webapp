import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const api = axios.create({
   baseURL: "http://localhost:3000"
})

function StatBlock(props) {

    const [stat, setStat] = useState([])
    const [mod, setMod] = useState([])
    const [statName, setStatName] = useState('Ability')

    useEffect(() => {
        const getAbilities = async () => {
            const response = await api.get('/abilities');
            console.log(response);
            console.log(response.data);
            setStat(response.data["str"]);
        }
        getAbilities();
    }, [])

    useEffect(() => {
        const getModifiers = async () => {
            const response = await api.get('/modifiers');
            console.log(response);
            // setMod(modifier["str"]);
        }
        getModifiers();
    }, [])

    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max)
    // }

    function setAbilityName() {
        setStatName(`${props.statType}`)
    }

    // function setAbility() {
    //     setStat(getRandomInt(20))
    // }

    // function setModifier() {
    //     setMod(getRandomInt(5))
    // }

    function setAll() {
        setAbilityName();
    }

    return (
        <div class="stat-block">
            <button id="test-btn" onClick={setAll}>TEST</button>
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