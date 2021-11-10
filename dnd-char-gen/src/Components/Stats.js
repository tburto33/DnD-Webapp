import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

//TODO: Race behind one call...WHY?
function CharStats(props) {

    const [race, setRace] = useState("")
    const [clss, setClss] = useState("")
    const [hp, setHp] = useState("")

    useEffect(() => {
        
        const getCharInfo = async () => {
            const getRace = await api.get('/race');
            const getClss = await api.get('/clss');
            const getHp = await api.get('/hp');
            setRace(getRace.data);
            setClss(getClss.data);
            setHp(getHp.data);
        }
        document.getElementById("main-button").addEventListener("click", getCharInfo);
    }, [race, clss, hp]);
    

    const charInfo = {
        charRace: `${race.toUpperCase()}`, 
        charClss: `${clss.toUpperCase()}`, 
        charHp: `${hp}`} 
    

    return(
        <div class="char-info">
            {props.name} {charInfo[`${props.item}`]}
        </div>
    );
}

export default CharStats;