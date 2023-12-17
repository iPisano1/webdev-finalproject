<?php
    include ("php/config.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/homepage.css">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&family=Pixelify+Sans&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/aea1d15b30.js" crossorigin="anonymous"></script>
    <title>QuizTime</title>
</head>
<body>
    <nav class="navbar">
        <nav class="homebar">
            <a href="homepage.php"><span>QuizTime</span></a>
        </nav>
        <nav class="sidebar">
            <ul>
                <a href="playgenre.html"><li>Play</li></a>
                <a href="contactus.html"><li>Contact Us</li></a>
                <a href="profile.html"><li>Profile</li></a>
                <div class="dropdown">
                    <li><i class="fa-solid fa-bars"></i></li>
                    <div class="dropdown-content">
                        <a href="editprofile.php" id="edit-profile">Edit Profile</a>
                        <a href="login.php" id="log-out">Log Out</a>
                    </div>
                </div>
            </ul>
        </nav>
    </nav>
    <div class="main-body">
        <div class="welcome-body">
            <div class="welcome-text">
                <h1>Welcome to QuizTime</h1>
                <p>QuizTime is your go-to hub for quizzes, flashcards, and study tools designed to make learning a breeze. Whether you're a student aiming for academic excellence or an avid learner hungry for new insights, we've got you covered.</p>
                <div class="box1">
                    <a href="playgenre.html">Get Started</a>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="footer-container">
            <div class="socialIcons">
                <a href="https://www.facebook.com/Jose.iPisano/"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/rendyljohn/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/_iPisano_"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div class="footer-bottom">
                <p>Copyright &copy;2023; Designed by <span>Rendyl John Carlos.</span></p>
            </div>
        </div>
    </footer>
</body>
</html>