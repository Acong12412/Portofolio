var signUpName = document.getElementById("sName");
var signUpEmail = document.getElementById("sEmail");
var signUpPass = document.getElementById("sPass");


function submitform(){
    event.preventDefault();
    var registerUser ={
        name: signUpName.value,
        email: signUpEmail.value,
        password:signUpPass.value,
    }

    console.log("registerUser",registerUser)
    localStorage.setItem("registerUser",JSON.stringify(registerUser));
    window.location.href = "./index.html";
}