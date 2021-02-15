// TODO: add webpack to allow for imports of useState needed for hooks


const rString = "Fun With States!";
const [count, setCount] = React.useState(0);


function statesIncrement() {
    setCount(count + 1);
}

function States() {
    return(<>
        <div id="states-container" onClick={() => statesIncrement()}>
            <h2 style={{color:'black'}}>{count}</h2>
        </div>

        <LineBreak />

    </>);
}