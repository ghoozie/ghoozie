function intro() {
    return <header id="masthead" class="site-header" data-anchor-target=".hero" data-top="background: rgba(10,10,30,1); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(0,0,0,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
                   <nav id="primary-navigation" class="site-navigation">
                       <div class="container">
                           <div class="navbar-header page-scroll">

                               <button type="button" class="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                                   <span class="icon-bar"></span>
                                   <span class="icon-bar"></span>
                                   <span class="icon-bar"></span>
                               </button>
                               <a href="#"><img src="assets/img/ghoozie.png" width="160px"></a>

                           </div><!-- /.navbar-header -->

                           <div class="main-menu" id="portfolio-perfect-collapse">

                               <ul class="nav navbar-nav navbar-right">

                                   <li class="page-scroll"><a href="#hero">Home</a></li>
                                   <li class="page-scroll"><a href="#about">About</a></li>
                                   <li class="page-scroll"><a href="#service">Libraries</a></li>
                                   <li class="page-scroll"><a href="#portfolio">Portfolio</a></li>
                                   <li class="page-scroll"><a href="#contact">Contact</a></li>

                               </ul><!-- /.navbar-nav -->

                           </div><!-- /.navbar-collapse -->

                       </div>
                   </nav><!-- /.primary-navigation -->
               </header><!-- /#header -->

               <div id="hero" class="hero">
                   <div class="container">
                       <div class="row">

                           <div class="col-md-6 ghoozie-text-bg" style="text-align:center;margin-top:30px;">
                               <h1 class="main-name">Oliver Terrell</h1>
                               <div class="page-scroll">
                                   <p class="job-title">Software Developer/Co-Founder of Greenstar Group</p>
                                   <a href="#contact" class="btn btn-border">Contact Me</a>
                                   <div class="clearfix visible-xxs"></div>
                                   <a href="https://ghoozie.tk/oliver_resume.pdf" class="btn btn-fill" target="_blank">View Resumé</a>
                                   <div class="clearfix visible-xxs"></div>
                                   <a href="https://www.linkedin.com/in/oliver-terrell/" class="btn btn-primary" target="_blank">LinkedIn</a>
                               </div>
                           </div>

                           <div class="col-md-6 front-pic">
                               <img src="assets/img/oliver.jpg" alt="oliver-terrell" class="img-fluid" style="border:3px solid #fff8e7;">
                           </div>

                       </div>
                   </div>
               </div><!-- /.hero -->;
}

ReactDOM.render(
    <intro />,
    document.getElementById('intro')
);