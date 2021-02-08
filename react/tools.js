function LineBreak() {
    return(<>
        <hr />
    </>);
}


function mprint(name,log) {
    console.log(name + ":");
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
