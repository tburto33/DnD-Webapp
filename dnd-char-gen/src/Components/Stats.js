import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

//TODO: Race behind one call...WHY?
function CharStats(props) {

    const [race, setRace] = useState("Race")
    const [clss, setClss] = useState("Class")
    const [hp, setHp] = useState("HP")

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

    

    return(
        <div>
            {props.name}: {}
        </div>
        // <Row sm="auto">
        //     <Col sm>Race: {race.toUpperCase()}</Col>
        //     <Col sm>Class: {clss.toUpperCase()}</Col>
        //     <Col sm>Hit Points: {hp}</Col>
        // </Row>
    );
}

export default CharStats;