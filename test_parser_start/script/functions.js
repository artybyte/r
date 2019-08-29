function clamp( n, min, max ) {

    return n > max ? max : ( n < min ? min : n );

}

// for
// in - key
// of - val

function p() {

    for ( let a of arguments ) {

        console.log(a);

    }

}
