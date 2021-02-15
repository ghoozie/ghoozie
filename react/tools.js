function LineBreak() {
    return(<>
        <hr />
    </>);
}


function mprint(label,log) {
    console.log(label + ":");
    console.log(log);
}


function showHide(elem) {
    const brick = document.getElementById(elem);
    if (brick.style.display == "none") {
        brick.style.display = "block";
    } else {
        brick.style.display = "none";
    }
}
