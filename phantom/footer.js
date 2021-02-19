function Footer() {
    return(<>
        <footer id="footer">
            <div className="inner">
                <section>
                    <h2>Get in touch</h2>
                        <div className="row">
                            <div className="col-6 col-12-medium">
                                <ul className="alt">
                                    <li><a href="mailto:ost@alumni.cmu.edu" className="fa fa-envelope">&nbsp;ost@alumni.cmu.edu</a></li>
                                    <li><a className="fa fa-phone">&nbsp;(814) 360-7508</a></li>
                                    {/* {<!-- <li><a href="https://github.com/ghoozie" target="_blank" className="fas fa-laptop-code" aria-hidden="true"> GitHub</a></li> -->} */}
                                    <li><a href="https://linkedin.com/in/oliver-terrell" target="_blank" className="icon brands fas fa-linkedin" aria-hidden="true">&nbsp;LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                </section>
                <section aria-hidden="true">
                    <h2>Follow</h2>
                    <ul className="icons">
                        <li><a href="https://linkedin.com/in/oliver-terrell" target="_blank" className="icon brands style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://instagram.com/ghoozie_" target="_blank" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://github.com/ghoozie" target="_blank" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="mailto:ost@alumni.cmu.edu" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
                    </ul>
                </section>
                <ul className="copyright">
                    <li><code>&copy; ghoozie</code> All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    </>);
}


ReactDOM.render(
    <Footer />,
    document.getElementById("footer-inject")
);