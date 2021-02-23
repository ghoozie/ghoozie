
// Index
document.write('<li><a href="index.html">Home</a></li>');


//About Me
document.write('<li><a href="aboutme.html">About Me</a></li>');


// Code Samples
document.write('<li><a href="code.html">Code Samples</a></li>');


// Projects
document.write('<li><a href="#">Projects (Coming soon)</a></li></ul><hr style="position:relative;width:20%;left:40%;margin-bottom:37px;opacity:0.25;">');


// Greenstar
const greenStar = 'window.open("https://greenstargroup.org");return false;';
document.write('<ul><li><a href="#" onclick='+greenStar+'>Greenstar Group&emsp;<i class="fa-sm fas fa-external-link-alt"></i></a></li>');


// Uncommon Core
const uncommonCore = 'window.open("https://uncommoncore.io");return false;';
document.write('<li><a href="#" onclick='+uncommonCore+'>Uncommon Core&emsp;<i class="fa-sm fas fa-external-link-alt"></i></a></li>');


// LinkedIn
const linkedIn = 'window.open("https://linkedin.com/in/oliver-terrell");return false;';
document.write('<li><a href="#" onclick='+linkedIn+'>LinkedIn&reg;&emsp;<i class="fa-sm fas fa-external-link-alt"></i></a></li></ul>');