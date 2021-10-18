import React from "react";

function GetHttpRequest(props) {
    const Http = new XMLHttpRequest();
    let url = "http://localhost:3000/";
    Http.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            console.log("STATUS: OK")
            console.log(JSON.parse(Http.responseText));
        }else {
            console.log("STATUS: ERROR!")
        }
    }
    Http.open("GET", url + {props});
    Http.send();
    return(
        JSON.parse(Http.responseText)
    );
}

export default GetHttpRequest;
