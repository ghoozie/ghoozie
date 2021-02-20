var linkedIn = 'window.open("https://linkedin.com/in/oliver-terrell");return false;';

document.write('<li><a href="index.html">Home</a></li><li><a href="aboutme.html">About Me</a></li><li><a href="code.html">Code Samples</a></li><!-- <li><a href="projects.html">Projects</a></li> --><li><a href="#" onclick='+linkedIn+'>LinkedIn&reg;</a></li>');