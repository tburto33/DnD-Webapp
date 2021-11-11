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
    const [initiative, setInitiative] = useState()
    const [speed, setSpeed] = useState()
    const [newInitiative, setNewInitiative] = useState()
    const [newHp, setNewHp] = useState()
    const [newRace, setNewRace] = useState()
    const [newClss, setNewClss] = useState()
    const [newSpeed, setNewSpeed] = useState()

    useEffect( async () => {
        const getSpeed = await api.get('/speed');
        setSpeed(getSpeed.data);
    }, [newSpeed])
    
    useEffect( async () => {
        const getInitiative = await api.get('/modifiers');
        setInitiative(getInitiative.data['dex']);
    }, [newInitiative])

    useEffect( async () => {
        const getInitialRace = await api.get('/race');
        setRace(getInitialRace.data)
    }, [newRace]);

    useEffect( async () => {
        const getInitialClss = await api.get('/clss');
        setClss(getInitialClss.data)
    }, [newClss]);

    useEffect( async () => {
        const getInitialHp = await api.get('/hp');
        setHp(getInitialHp.data)
    }, [newHp]);

    useEffect(() => {
        const getNewData = async () => {
            const newRace = await api.get('/race');
            setNewRace(newRace.data);
            const newClss = await api.get('/clss');
            setNewClss(newClss.data);
            const newHp = await api.get('/hp');
            setNewHp(newHp.data);
            const newInitiative = await api.get('/modifiers');
            setNewInitiative(newInitiative.data['dex']);
            const newSpeed = api.get('/speed');
            setNewSpeed(newSpeed.data);
        }
        document.getElementById("main-button").addEventListener("click", getNewData);
    },[]);

    const charInfo = {
        charRace: `${race.toUpperCase()}`, 
        charClss: `${clss.toUpperCase()}`, 
        charHp: `${hp}`,
        initiative: `${initiative}`,
        speed: `${speed}`,
        prof: 2,} 
    

    return(
        <div class="char-info">
            {props.name} {charInfo[`${props.item}`]}
        </div>
    );
}

export default CharStats;

    // useEffect(() => {
        
    //     const getCharInfo = async () => {
    //         // const getRace = await api.get('/race');
    //         const getClss = await api.get('/clss');
    //         const getHp = await api.get('/hp');
    //         // setTimeout(setRace(getRace.data), 5000);
    //         setTimeout(setClss(getClss.data), 3000);
    //         setTimeout(setHp(getHp.data), 3000);
    //         // setRace(getRace.data);
    //         setClss(getClss.data);
    //         setHp(getHp.data);
    //     }
    //     document.getElementById("main-button").addEventListener("click", getCharInfo);
    // });