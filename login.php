<?php
    session_start();

    include("php/config.php");


    if($_SERVER['REQUEST_METHOD'] == "POST") {

        $user = $_POST['username'];
        $pass = $_POST['password'];

        if(!empty($user) && !empty($pass) && !empty($user)) {

            $query = "SELECT * FROM users WHERE username = '$user' LIMIT 1";
            $result = mysqli_query($conn, $query);

            if($result) { 
                if($result && mysqli_num_rows($result) > 0) {

                    $user_data = mysqli_fetch_assoc($result);

                    if($user_data['password'] == $pass) {
                        header("location: homepage.php");
                        die;
                    }
                }
            }
            echo "<script type='text/javascript'> alert('Wrong credentials')</script>";
        }
        else {
            echo "<script type='text/javascript'> alert('Wrong credentials')</script>";
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&family=Pixelify+Sans&display=swap" rel="stylesheet">
    <!-- <script defer src="login.js"></script> -->
    <title>QuizTime</title>
</head>
<body>
    <div class="container">
        <div id="form">
            <div class="login-form">
                <h1>Log In</h1>
                <form action="" method="post">
                    <div class="input-box">
                        <!-- <label for="username" style="font-weight: bold;">Username:</label> -->
                        <input type="text" name="username" id="username" placeholder="Username" required autocomplete="off" style="font-weight: bold;">
                    </div>
                    <div class="error" id="usernameError"></div>
                    
                    <div class="input-box">
                        <!-- <label for="password" style="font-weight: bold;">Password:</label> -->
                        <input type="password" name="password" id="password" placeholder="Password" required autocomplete="off" style="font-weight: bold;">
                    </div>
                    <div class="error" id="passwordError"></div>
                    
                    <button type="submit" value="submit" style="font-family: oswald;">Log In</button>

                    <p>Dont have an account? <a href="register.php">Sign Up.</a></p>
                </form>
            </div>
        </div>
        <div class="sideform">
            <div class="box-design">
                <h1>QUIZ TIME</h1>

                <h3>Welcome to <span>QuizTime</span></h3>

                <p>Welcome to QuizTime, your ultimate destination for interactive learning! Dive into a world of knowledge with our dynamic platform that functions much like Quizlet but with a unique twist. Here, learning becomes an engaging adventure.</p>


            </div>
        </div>
    </div>
</body>
</html>