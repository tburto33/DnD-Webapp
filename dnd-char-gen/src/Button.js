import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


var characterData = [];
function MainButton() {
    function getHttpRequest() {
        characterData.length = 0;
        const Http = new XMLHttpRequest();
        const url = 'http://localhost:3000/create-char';
        Http.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                console.log(Http.responseText);
                characterData.push(JSON.parse(Http.responseText));
                console.log(characterData);
            }
        }
        Http.open("GET", url);
        Http.send();
    }    
    return(
        <Button variant="primary" size="lg" onClick={getHttpRequest}>REROLL</Button>
    );
}

export default MainButton;
export {characterData};