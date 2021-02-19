<!DOCTYPE HTML>
<!--
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Oliver Terrell - About Me</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

	<!-- Favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="../assets/img/favicon.ico">
	<link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon.ico">


	</head>
	<body class="is-preload">
		<!-- Wrapper -->
			<div id="wrapper">


				<!-- Header -->
					<?php include("header.php"); ?>
				<!-- /Header -->


				<!-- Main -->
					<div id="main">
						<div class="inner">
							<h1>About Me</h1>
							<span class="image main"><img src="../assets/img/quad-meet.jpg" alt="" /></span>
							<h3 id="bs-header">My Backstory</h3>
							<!-- <button id="story-link" onclick="toggleStory()" style="position:relative;float:right;bottom:64px;">Long</button> -->
							<div id="brief-story">
							<p>I was born in Virginia, in a small suburb outside of Richmond called Midlothian. When I was in 4th grade, my family moved to State College, Pennsylvania where I spent the rest of my formative years.</p>
							<p>I attended Carnegie Mellon University where I was a member of the Varsity Football and Track & Field teams. I graduated in 2019 with a degree in Neuroscience. Feeling unsatisfied with life in academia, I chose to not pursue a Ph.D.</p>
							<p>I fell in love with software development because it is intellectually stimulating, challenging, and creative. In my two years of experience, I have been chief engineer of three web applications, two of which were developed by a software company I co-founded: <a href="https://greenstargroup.org" target="_blank">Greenstar Group, Inc</a>.</p>
							<p></p>
							</div>

				<!-- Long story -->

							<!-- <div id="long-story" style="display:none;">
							<p>I was born in Virginia, in a small suburb outside of Richmond called Midlothian. When I was in 4th grade, my family moved to State College, Pennsylvania where I spent the rest of my formative years.</p>
							<p>I was recruited to play football for Carnegie Mellon University and enrolled in the Tepper School of Business in 2011. As I grew my love for athletics as a member of the Football and Track & Field teams, I became increasingly passionate about health and wellness. I chose to take a leave of absence from Carnegie Mellon in the spring of 2014 and set my sights on Massage Therapy school.</p>
							<p>My time in massage school taught me much about life. I found answers to many questions I asked, and even more to questions I did not think to ask. The world of holistic health intrigued me a great deal, but I felt I needed a more intellectually stimulating life than what the practice offered to me. I chose to return to Carnegie Mellon in the spring of 2016 with a brand new vision.</p>
							<p>I returned to CMU as a student of Neuroscience in the auspicious Mellon College of Science. My goal was to take what I had learned in massage school and apply my intellectual capabilities to bolstering the science behind some of the concepts I found most intriguing. Alas, there were more lessons to be learned.</p>
							<p>Though I excelled in the Neuroscience core curriculum and was afforded great opportunities as a research assistant, the reality of life in academia became all too apparent. For enumerable reasons, by spring of my senior year I realized the path I had been on was not for me.</p>
							<p>I was hungry for action; I wanted to create. I had just graduated a difficult program from a prestigious university, and had no direction. I began building houses in my hometown of State College with a buddy of mine I met through club rugby. I was working 60-70 hour weeks of hard labor making $12/hour with no benefits. I had never felt so free. I really enjoyed it.</p>
							<p>While working construction, I still worked towards making an impact in the broader scope of health & wellness. I made the contact of a man named Shawn Sherman, who had developed SQUARE1&trade;, a neuromotor method to athletic training, physical therapy, and general wellness.</p>
							<p>While taking Shawn's course, we struck up great conversation and realized we were of very like minds when it came to inadequacies of the current landscape and what was missing. I indeed felt like I had found a better route to achieving the goal I set out to accomplish by returning to college.</p>
							<p>I currently have a soft contract to write the official SQUARE1&trade; textbook. But there was something else I learned that I find more important to me personally. Along this journey I realized that I didn't actually want a career in health and wellness. I had explored every avenue, and earned every opportunity I could have hoped for, and it's simply not what I want to do. My intellectual hunger continued to grow alongside my desire to build and create. It pulled me into a more challenging and creative field.</p>
							<p>In June of 2020, during the coronavirus lockdown, I purchased a $15 Python Masterclass on Udemy, taught by Tim Buchalka. I had taken some programming courses through the Carnegie Mellon School of Computer Science and I loved every one of them. From Intro to Programming where I learned how the internet packages and sends information, all the way to Parallel and Distributed Processing where I built my own neural network.</p>
							<p>Shortly after I began the program, I got in touch with an old friend Jacob, whom I met on the Track & Field team the second time I went to college. He had a startup in the EdTech space called Uncommon Core and I was able to get some real experience working with him.</p>
							<p>For the next 6 months, we would spend every day on Zoom coding together. He was an excellent tutor, having served as a graduate level TA for multiple computer science courses in college. By the third month in I was being left alone to complete solo features and pipelines across Python, PHP, and JavaScript languages.</p>
							<p>An opportunity presented itself to us when a friend of Jacob's FinTech supplier was purchased and was turning off his portfolio optimizing service.</p>
							</div> -->

				<!-- Long story -->

							<h3>Education</h3>
							<p>Coming Soon</p>
							<h3>Skills</h3>
							<p>Coming Soon</p>
							<h3>Work Experience</h3>
							<p>Coming Soon</p>
							<h3>Hobbies & Interests</h3>
							<p>Coming Soon</p>
						</div>
					</div>


				<!-- Footer -->
					<?php include("footer.php"); ?>
				<!-- /Footer -->


			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

		<!-- Toggle Story -->
			<script>
				function toggleStory() {
					var bstory = document.getElementById('brief-story');
					var lstory = document.getElementById('long-story');
					var storyLink = document.getElementById('story-link');
					var bsHeader = document.getElementById('bs-header');

					if (lstory.style.display == "none") {
						lstory.style.display = "block";
						bstory.style.display = "none";
						storyLink.innerHTML = "Brief";
						bsHeader.innerHTML = "My Backstory (Long)";

					} else {
						lstory.style.display = "none";
						bstory.style.display = "block";
						storyLink.innerHTML = "Long";
						bsHeader.innerHTML = "My Backstory (Brief)";
					}
				}
			</script>

	</body>
</html>