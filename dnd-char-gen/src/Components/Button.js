import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function MainButton() {
    function getHttpRequest() {
        const Http = new XMLHttpRequest();
        const url = 'http://localhost:3000/create-char';
        Http.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                console.log(JSON.parse(Http.responseText));
                var data = JSON.parse(Http.responseText);
                race = data.race;
                clss = data.clss;
                hp = data.hp;
                abilities = data.abilities;
                modifiers = data.modifiers;
                console.log(race, clss, hp, abilities, modifiers);
            }
        }
        Http.open("GET", url);
        Http.send();
    }    
    return(
        <Button variant="primary" size="lg" id="main-button" onClick={getHttpRequest}>REROLL</Button>
    );
}

export default MainButton;
export {race, clss, hp, abilities, modifiers};