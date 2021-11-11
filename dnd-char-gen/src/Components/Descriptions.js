import React, { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

function Descriptions() {

    const [raceDesc, setRaceDesc] = useState()
    const [clssDesc, setClssDesc] = useState()
    const [newRaceDesc, setNewRaceDesc] = useState()
    const [newClssDesc, setNewClssDesc] = useState()

    useEffect( async () => {
        const getRaceDesc = await api.get('/race-desc');
        setRaceDesc(getRaceDesc.data)
    }, [newRaceDesc])

    useEffect( async () => {
        const getClssDesc = await api.get('/clss-desc');
        setClssDesc(getClssDesc.data);
    }, [newClssDesc])

    useEffect(() => {
        const getNewDesc = async () => {
            const newRaceDesc = await api.get('/race-desc');
            const newClssDesc = await api.get('/clss-desc');
            setNewRaceDesc(newRaceDesc.data);
            setNewClssDesc(newClssDesc.data);
        }
        document.getElementById("main-button").addEventListener("click", getNewDesc)
    }, [])

    return (
        <div class="desc-block">
            <div>
                <b>Race Info:</b>
            <p>
                <b>{raceDesc}</b>
            </p>
            </div>
            <p>
                <b>{clssDesc}</b>
            </p>
        </div>
    );
}

export default Descriptions;