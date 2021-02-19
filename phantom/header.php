<header id="header">
    <div class="inner">

        <!-- Logo -->
            <a href="index.php" class="logo">
                <span class="symbol"><img src="../assets/img/favicon.ico" alt="" /></span><span class="title" id="globe-nav-link"></span>
            </a>

        <!-- Dynamic script for header link innerHTML -->
            <script>
            if(!window.location.href.includes('index.php')){document.getElementById('globe-nav-link').innerHTML='Home';}else{document.getElementById('globe-nav-link').innerHTML='Welcome';}
            </script>

        <!-- Nav -->
            <nav>
                <ul>
                    <li><a href="#menu">Menu</a></li>
                </ul>
            </nav>

    </div>
</header>

<!-- Menu -->
<nav id="menu">
    <h2>Menu</h2>
    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="aboutme.php">About Me</a></li>
        <li><a href="code.php">Code Samples</a></li>
        <!-- <li><a href="projects.php">Projects</a></li> -->
        <li><a href="#" onclick='window.open("https://linkedin.com/in/oliver-terrell");return false;'>LinkedIn&reg;</a></li>
    </ul>
</nav>