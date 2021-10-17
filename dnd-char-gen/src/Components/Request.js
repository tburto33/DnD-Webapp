function getHttpRequest(props) {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/create-char';
    Http.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(Http.responseText));
            var data = JSON.parse(Http.responseText);
        }
    }
    Http.open("GET", url);
    Http.send();
}

//MAKE: const url = `http://localhost:3000/{props.url}`;