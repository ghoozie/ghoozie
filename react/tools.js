function goReact() {
    var loca = window.location.href;
    if (loca.includes('localhost')) {
        window.location.replace(loca.slice(0,23) + 'react/Rindex.html');
    } else {
        window.location.replace('https://ghoozie.tk/react/Rindex.html');
    }
}


// I never go anywhere without my trusty mprint
function mprint(label,log) {
    console.log(label + ":");
    console.log(log);
}


// Equivalent to jQuery.toggle() method
function showHide(elem) {
    const brick = document.getElementById(elem);
    if (brick.style.display == "none") {
        brick.style.display = "block";
    } else {
        brick.style.display = "none";
    }
}


// For if I want to play with more fun section separators later
function LineBreak() {
    return(<>
        <hr />
    </>);
}
