function submit(){
    let inputName = document.getElementById("name").value;
    let inputEmail = document.getElementById("email").value;
    let inputReason = document.getElementById("contact-reason").value;

    if(!inputName || !inputEmail || !inputReason){
        alert("Invalid Credentials");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact-reason").value = "";
    }
    else if(inputName && inputEmail && inputReason){
        alert("Submit Successfully");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact-reason").value = "";
    }
    else{
        alert("Error");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact-reason").value = "";
    }
}