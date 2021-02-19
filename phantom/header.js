function Header() {
    return(<>
    {/* <!-- Header --> */}
        <header id="header">
            <div className="inner">

                {/* {<!-- Logo -->} */}
                    <a href="index.html" className="logo">
                        <span className="symbol"><img src="../assets/img/favicon.ico" alt="" /></span><span className="title">Welcome</span>
                    </a>

                {/* {<!-- Nav -->} */}
                    <nav>
                        <ul>
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>

            </div>
        </header>

    {/* <!-- Menu --> */}
        <nav id="menu">
            <h2>Menu</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutme.html">About Me</a></li>
                <li><a href="code.html">Code Samples</a></li>
                {/* {<!-- <li><a href="projects.html">Projects</a></li> -->} */}
                <li><a href="#" onClick={() => {window.open("https://linkedin.com/in/oliver-terrell");return false;}}>LinkedIn&reg;</a></li>
            </ul>
        </nav>
    </>);
}


ReactDOM.render(
    <Header />,
    document.getElementById("header-inject")
);