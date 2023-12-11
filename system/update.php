<?php
    include ("../php/config.php");

    $id = $_GET['updateid'];

    $query = "SELECT * FROM users WHERE id=$id";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    $name = $row['username'];
    $email = $row['email'];
    $password = $row['password'];

    if(isset($_POST['submit'])){
        $name = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $query = "UPDATE users SET id='$id', username='$name', email='$email', password='$password' WHERE id=$id";
        $result = mysqli_query($conn, $query);

        if($result){
            header('location: ../editprofile.php');
        }
        else{
            die(mysqli_error($conn));
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/update.css">
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
                <a href=""><li>Library</li></a>
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
                            <h1>Edit Profile</h1>
                            <div id="input-box1">
                                <label for="signup-username" style="font-weight: bold;">Username:</label>
                                <input type="text" name="username" id="signup-username" placeholder="Enter Username" required autocomplete="off" value=<?php echo $name;?>>
                            </div>
                            <div class="error" id="usernameError"></div>
                            
                            <div id="input-box2">
                                <label for="signup-email" style="font-weight: bold;">Email:</label>
                                <input type="text" name="email" id="signup-email" placeholder="Enter Email" required autocomplete="off" value=<?php echo $email;?>>
                            </div>
            
                            <div id="input-box3">
                                <label for="signup-password" style="font-weight: bold;">Password:</label>
                                <input type="text" name="password" id="signup-password" placeholder="Enter Password" required autocomplete="off" value=<?php echo $password;?>>
                            </div>
                            <div class="buttons">
                                <button style="font-family: oswald;" type="submit" name="submit">Update</button>
                            </div>
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