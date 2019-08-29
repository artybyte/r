function clamp( n, min, max ) {

    return n > max ? max : ( n < min ? min : n );

}

function getElement(str) {

    return document.getElementById(str);

}


// for
// in - key
// of - val

const FETCH_OPTIONS = {

        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        //headers: {
        //'Access-Control-Allow-Origin':'*',
        //    'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        //},
        //redirect: 'follow', // manual, *follow, error
        //referrer: 'no-referrer', // no-referrer, *client
        //body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"

};

const gettuneSearchURL = 'https://get-tune.cc/search/f/';
const songNameInput = getElement("name_input");
const songContainer = getElement("song_container");

function p() {

    for ( let a of arguments ) {

        console.log(a);

    }

}

function fetchPage() {

    return fetch(gettuneSearchURL + songNameInput.value, FETCH_OPTIONS);

}

function init_request() {

    songContainer.innerHTML = '';

    if ( songNameInput.value.trim() != '' ) {

        fetchPage().then(data => p(data));

    } else {

        var l = document.createElement("h1");
        l.classList.add('label__small');
        l.innerText = 'Empty request';

        songContainer.appendChild(l);

    }

}
