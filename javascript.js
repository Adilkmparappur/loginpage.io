document.addEventListener('DOMContentLoaded', function(){
//validity checking for login page
    const form1 = document.getElementById("frm1");
    form1.addEventListener('submit', function(loginButton){
        const passwordLength = document.getElementById("password").value.length;
        const username = document.getElementById("username").value;
    //disable login button if the length of the password is less than 8
        if(passwordLength<8){
            loginButton.preventDefault();
        }
    //give red border colour to input box of username if type no values
        if(username.length==0){
            loginButton.preventDefault(); // Prevent form submission
            document.querySelector("#username").style.borderColor="red";
        }else{
            document.querySelector("#username").style.borderColor="#bfbfbf";
        }
    });

});

document.addEventListener('DOMContentLoaded', function(){
//validity checking forand give red border colour if passwords doesn't match
    const form2 = document.getElementById("frm2");
    form2.addEventListener('submit', function(signUpButton){
        const pass1 = document.getElementById('password2').value;
        const pass2 = document.getElementById('confirm-password').value;
        if(pass1 !== pass2) {
            signUpButton.preventDefault(); // Prevent form submission
            document.getElementById("password2").style.borderColor="red";
            document.getElementById("confirm-password").style.borderColor="red";
            document.querySelector("#noMatch").style.color="red";
            document.querySelector("#noMatch").style.animation= "shake 0.3s 0.1s";

        }
        else{
            document.getElementById("password2").style.borderColor="#bfbfbf";
            document.getElementById("confirm-password").style.borderColor="#bfbfbf";
            document.querySelector("#noMatch").style.color="transparent";
        }
    });

});

