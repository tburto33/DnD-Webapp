import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

function CharStats() {

    const [race, setRace] = useState("Race")
    const [clss, setClss] = useState("Class")
    const [hp, setHp] = useState("HP")

    useEffect(() => {
        const getCharInfo = async () => {
            const race = await api.get('/race');
            const clss = await api.get('/clss');
            const hp = await api.get('/hp');
            setRace(race.data);
            setClss(clss.data);
            setHp(hp.data);
        }
        getCharInfo();
    });

    return(
        <Row sm={3}>
            <Col>Race: {race.toUpperCase()}</Col>
            <Col>Class: {clss.toUpperCase()}</Col>
            <Col>Hit Points: {hp}</Col>
        </Row>
    );
}

export default CharStats;