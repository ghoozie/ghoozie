function Intro() {
    return <div>
            <header id="masthead" className="site-header" data-anchor-target=".hero" data-top="background: rgba(10,10,30,1); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(0,0,0,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
                   <nav id="primary-navigation" className="site-navigation">
                       <div className="container">
                           <div className="navbar-header page-scroll">

                               <button type="button" className="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                                   <span className="icon-bar"></span>
                                   <span className="icon-bar"></span>
                                   <span className="icon-bar"></span>
                               </button>
                               <a href="#"><img src="assets/img/ghoozie.png" width="160px" /></a>

                           </div>
                           {/* <!-- /.navbar-header --> */}

                           <div className="main-menu" id="portfolio-perfect-collapse">

                               <ul className="nav navbar-nav navbar-right">

                                   <li className="page-scroll"><a href="#hero">Home</a></li>
                                   <li className="page-scroll"><a href="#about">About</a></li>
                                   <li className="page-scroll"><a href="#service">Libraries</a></li>
                                   <li className="page-scroll"><a href="#portfolio">Portfolio</a></li>
                                   <li className="page-scroll"><a href="#contact">Contact</a></li>

                               </ul>
                               {/* <!-- /.navbar-nav --> */}

                           </div>
                           {/* <!-- /.navbar-collapse --> */}

                       </div>
                   </nav>
                   {/* <!-- /.primary-navigation --> */}
               </header>
               {/*<!-- /#header -->*/}

               <div id="hero" className="hero">
                   <div className="container">
                       <div className="row">

                           <div className="col-md-6 ghoozie-text-bg" style={{textAlign:'center',marginTop:'30px'}}>
                               <h1 className="main-name">Oliver Terrell</h1>
                               <div className="page-scroll">
                                   <p className="job-title">Software Developer/Co-Founder of Greenstar Group</p>
                                   <a href="#contact" className="btn btn-border">Contact Me</a>
                                   <div className="clearfix visible-xxs"></div>
                                   <a href="https://ghoozie.tk/oliver_resume.pdf" className="btn btn-fill" target="_blank">View Resumé</a>
                                   <div className="clearfix visible-xxs"></div>
                                   <a href="https://www.linkedin.com/in/oliver-terrell/" className="btn btn-primary" target="_blank">LinkedIn</a>
                               </div>
                           </div>

                           <div className="col-md-6 front-pic">
                               <img src="assets/img/oliver.jpg" alt="oliver-terrell" className="img-fluid" style={{border:'3px solid #fff8e7'}} />
                           </div>

                       </div>
                   </div>
               </div>
               </div>
               {/* <!-- /.hero --> */}
            ;
}

ReactDOM.render(
    <Intro />,
    document.getElementById('Intro')
);