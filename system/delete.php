<?php
    include ("../php/config.php");
    if(isset($_GET['deleteid'])){
        $id = $_GET['deleteid'];

        $query = "DELETE FROM users WHERE id=$id";
        $result = mysqli_query($conn, $query);
        if($result){
            header('location: ../editprofile.php');
        }
        else{
            die(mysqli_error($conn));
        }
    }
?>