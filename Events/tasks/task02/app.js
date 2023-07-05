document.getElementById("btn").addEventListener('click', () => {
    validUserName();
    validEmail();
    validPassword();
    validMob();
})

function validUserName() {
    let userName = document.getElementById("userName").value.trim();
    if (userName == "") {
        var validUserName = document.getElementById("uNameErr");
        validUserName.innerHTML = "Enter your user name";
        validUserName.classList.add("invalid");
        document.getElementById("userName").classList.add("invDetails")
    } else {
        document.getElementById("uNameErr").innerHTML = "";
    }
    if (userName != "") {
        var userPattern = /^[A-Z][A-Z a-z]{5,20}$/;
        if (!userPattern.test(userName)) {
            document.getElementById("uNameErr").innerHTML = "Enter a valid username between 5-20 characters";
            document.getElementById("uNameErr").classList.add("invalid")
            document.getElementById("userName").classList.add("invDetails")
            document.getElementById("userName").classList.remove("validDetails")
        } else {
            document.getElementById("uNameErr").innerHTML = ""
            document.getElementById("userName").classList.add("validDetails")
        }
    }
}

function validEmail() {
    let userEmail = document.getElementById("userMail").value.trim();
    if (userEmail == "") {
        let invalidEmail = document.getElementById("uMailErr");
        invalidEmail.innerHTML = "Enter you password"
        invalidEmail.classList.add("invalid")
        document.getElementById("userMail").classList.add("invDetails")

    } else {
        document.getElementById("uNameErr").innerHTML = "";
    }
    if (userEmail != "") {
        let emailPattern = /^([A-Z a-z 0-9]{10,40}).@([a-z]{5,8}).([a-z]{2,3})$/;
        if (!emailPattern.test(userEmail)) {
            document.getElementById("uMailErr").innerHTML = "Enter a valid Email which includes (@,_)."
            document.getElementById("uMailErr").classList.add("invalid");
            document.getElementById("userMail").classList.add("invDetails")
            document.getElementById("userMail").classList.remove("validDetails")
        } else {
            document.getElementById("uMailErr").innerHTML = "";
            document.getElementById("userMail").classList.add("validDetails")
        }
    }
}

function validPassword(){
    let userPass = document.getElementById("userPassword").value.trim();
    if(userPass == ""){
        let invalidPass = document.getElementById("uPassErr");
        invalidPass.innerHTML="Enter your password";
        invalidPass.classList.add("invalid")
        document.getElementById("userPassword").classList.add("invDetails")
    }
    if(userPass != ""){
        let validPassPattern = /^[A-Z a-z /d]{8,30}$/
        if(!validPassPattern.test(userPass)){
        document.getElementById("uPassErr").innerHTML="Enter a valid passwor which can include alphanumeric between 8-30 characters.";
        document.getElementById("uPassErr").classList.add("invalid")
        document.getElementById("userPassword").classList.add("invDetails")
        document.getElementById("userPassword").classList.remove("validDetails")
    }
    else{
        document.getElementById("uPassErr").innerHTML="";
        document.getElementById("userPassword").classList.add("validDetails")
    }
    }
}
function validMob(){
    let validMobile = document.getElementById("userMob").value.trim();
    if(validMobile == ""){
        let invalidmob = document.querySelector("#uMobErr");
        invalidmob.innerHTML = "Enter your mobile number";
        invalidmob.classList.add("invalid")
        document.querySelector("#userMob").classList.add("invDetails")
    }
    if(validMobile != ""){
        let validMobPattern = /^[6-9][0-9]{9}$/
        if(!validMobPattern.test(validMobile)){
        document.getElementById("uMobErr").innerHTML="Enter a valid mobile number.";
        document.getElementById("uMobErr").classList.add("invalid");
        document.getElementById("userMob").classList.add("invDetails");
        document.getElementById("userMob").classList.remove("validDetails")

    }
    else{
        document.getElementById("uMobErr").innerHTML="";
        document.getElementById("userMob").classList.add("validDetails")
    }
    }
}