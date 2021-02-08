
function Header() {
    return(<>
        <div id="header-container"><h1>Oliver Terrell (/ghoozie)</h1></div>
    </>);
}

function SubHeader() {
    return(<>
        <div id="subheader-container"><h4>Software Engineer specializing in Web Applications</h4></div>
    </>);
}



function LineBreak() {
    return(<>
        <hr />
    </>);
}


function Ghoozie() {
    return(<>
        <Header />
        <SubHeader />
        <LineBreak />
        <SkillsHeader />
    </>);
}


ReactDOM.render(
    <Ghoozie />,
    document.getElementById("ghoozie")
);