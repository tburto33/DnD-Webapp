import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

function MainButton() {
    const getHttpRequest = async () =>  {
        const getChar = await api.get('/create-char');
        console.log(getChar.data);
    }    
    return(
        <Button variant="primary" size="lg" id="main-button" onClick={getHttpRequest}>REROLL</Button>
    );
}

export default MainButton;


// const Http = new XMLHttpRequest();
//         const url = 'http://localhost:3000/create-char';
//         Http.onreadystatechange = function() {
//             if(this.readyState === 4 && this.status === 200) {
//                 console.log(JSON.parse(Http.responseText));
//                 var data = JSON.parse(Http.responseText);
//                 let race = data.race;
//                 let clss = data.clss;
//                 let hp = data.hp;
//                 let abilities = data.abilities;
//                 let modifiers = data.modifiers;
//                 console.log(race, clss, hp, abilities, modifiers);
//             }
//         }
//         Http.open("GET", url);
//         Http.send();