<?php 
    session_start();

    include("../php/config.php");

    if($_SERVER['REQUEST_METHOD'] == "POST") {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $pass = $_POST['password'];

        if(!empty($email) && !empty($pass) && !is_numeric($email)) {

            $query = "INSERT INTO users (username, email, password) value ('$username', '$email', '$pass')";

            mysqli_query($conn, $query);

            echo "<script type='text/javascript'>
                alert('Successfully created')
                window.location.href = '../editprofile.php';
            </script>";
        }
        else {
            echo "<script type='text/javascript'> alert('Please fill up the following !')</script>";
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/adduser.css">
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
                        <a href="../editprofile.php" id="edit-profile">Edit Profile</a>
                        <a href="../login.php" id="log-out">Log Out</a>
                    </div>
                </div>
            </ul>
        </nav>
    </nav>
    <div class="main-body">
        <div class="welcome-body">
            <div class="container">
                <div id="form">
                    <form action="" method="post">
                        <div class="singup-form">
                            <h1>Add Profile</h1>
                            <div id="input-box1">
                                <label for="signup-username" style="font-weight: bold;">Username:</label>
                                <input type="text" name="username" id="signup-username" placeholder="Enter Username" required autocomplete="off" style="font-weight: bold;">
                            </div>
                            <div class="error" id="usernameError"></div>
                            
                            <div id="input-box2">
                                <label for="signup-email" style="font-weight: bold;">Email:</label>
                                <input type="text" name="email" id="signup-email" placeholder="Enter Email" required autocomplete="off" style="font-weight: bold;">
                            </div>
            
                            <div id="input-box3">
                                <label for="signup-password" style="font-weight: bold;">Password:</label>
                                <input type="password" name="password" id="signup-password" placeholder="Enter Password" required autocomplete="off" style="font-weight: bold;">
                            </div>
                            
                            <div class="error" id="passwordError"></div>
            
                            <button style="font-family: oswald;">Add</button>
                        </div>
                    </form>
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