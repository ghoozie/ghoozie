const loca = window.location.href;
const bootstrap = loca.slice(0, loca.length - 18);
const dirtyWings = 'back';

function SubHeader() {
    return(<>
        <div id="subheader-container">
            <h4>Software Engineer specializing in Web Applications</h4>
            <a href="https://ghoozie.tk/oliver_resume.pdf" target="_blank">Resumé</a> &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/oliver-terrell/"target="_blank">LinkedIn</a> &nbsp;&nbsp;
            <a href="mailto:ost@alumni.cmu.edu?subject=Message from ghoozie.tk">Contact Me</a>
        </div>

    </>);
}


function Header() {
    return(<>
        <div id="header-container">
            <div id="backbutton" style={{position:'absolute',top:'95%',left:'95%'}}><a href={bootstrap}>{dirtyWings}</a></div>
            <h1 onClick={() => $('#subheader-container').toggle()}>Oliver Terrell (/ghoozie)</h1>
        </div>

        <SubHeader />
        <LineBreak />

    </>);
}


function Ghoozie() {
    const rString = "Fun With States!";
    const [count, setCount] = React.useState(0);

    function inc() {
        setCount(count + 1);
    }

    return(<>
        <Header />
        <Projects />
        <Skills />
        <States count={count} setCount={setCount} inc={inc} />
    </>);
}


ReactDOM.render(
    <Ghoozie />,
    document.getElementById("ghoozie")
);