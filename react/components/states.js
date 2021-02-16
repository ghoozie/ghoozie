
function States(props) {
    var rString = props.rString;
    var setRString = props.setRString;
    var count = props.count;
    var setCount = props.setCount;
    var fun = props.fun;

    function prog() {
        if (rString.length == fun.length) {
            if (document.title == 'ghoozie') {
                document.title = 'ghoozie WRLD';
            } else {
                document.title = 'ghoozie';
            }
        } else {
            setCount(count + 1);
            setRString(fun.slice(0, count));
        }
    }

    function mShow() {
        if (rString.length == fun.length) {
            $('#states-box').toggle();
        } else {
        if (count > 1) {
            setCount(count - 1);
            setRString(fun.slice(0, count));
        }}
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