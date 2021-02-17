// I never go anywhere without my trusty mprint
function mprint(label,log) {
    console.log(label + ":");
    console.log(log);
}


// For if I want to play with more fun section separators later
function LineBreak() {
    return(<>
        <hr />
    </>);
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
