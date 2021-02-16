
function States(props) {
    var rString = props.rString;
    var setRString = props.setRString;
    var count = props.count;
    var setCount = props.setCount;
    var fun = props.fun;
    var fLength = props.fLength

    function prog() {
        setCount(count + 1);
        setRString(fun.slice(0, count));

        if (rString.length == fLength) {
            $('#states-box').toggle();
        }
    }

    return(<>
        <div id="states-container" style={{width:'100%'}} onClick={() => prog()}>
            <h2 style={{color:'black'}}>{rString}</h2>
        </div>
        <div id="states-box" style={{display:'none'}}>
            FUN WITH STATES!
        </div>

        <LineBreak />

    </>);
}