
function States(props) {
    var rString = props.rString;
    var setRString = props.setRString;
    var fun = props.fun;

    function prog() {
        if (rString.length == fun.length) {
            if (document.title == 'ghoozie') {
                document.title = 'ghoozie WRLD';
            } else {
                document.title = 'ghoozie';
            }
        } else {
            setRString(fun.slice(0, rString.length + 1));
        }
    }

    function mShow() {
        if (rString.length == fun.length) {
            $('#states-box').toggle();
        } else {
            if (rString.length > 1) {
                setRString(fun.slice(0, rString.length - 1));
            }
        }
    }

    return(<>
        <div id="states-container" style={{width:'100%'}} onMouseOver={() => prog()} onClick={() => mShow()}>
            <h2 style={{color:'black'}}>{rString}</h2>
        </div>
        <div id="states-box" style={{display:'none'}}>
            FUN WITH STATES!
        </div>

        <LineBreak />

    </>);
}