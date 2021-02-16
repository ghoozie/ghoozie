
function States(props) {
    var count = props.count;

    return(<>
        <div id="states-container" onClick={() => props.inc()}>
            <h2 style={{color:'black'}}>{count}</h2>
        </div>

        <LineBreak />

    </>);
}