
document.querySelector("#btn").addEventListener('click', () => {
	    validUsername();
        validPassword();
})
function validUsername() {
    var inp = document.getElementById("userName").value.trim();
    if (inp == "") {
        document.querySelector("#unameErr").innerHTML = `<i class="fa-duotone fa-circle-exclamation" style="--fa-primary-color: #ff0026; --fa-secondary-color: #ff0026;"></i> Enter user name`;
        document.getElementById("unameErr").classList.add("inputError");
        document.getElementById("userName").classList.add("inputFieldsWrong");

    } else {
        document.querySelector("#unameErr").innerHTML = "";
        document.getElementById("userName").classList.add("inputFieldCorr");
    }
    if (inp != "" && inp.length < 5) {
        document.querySelector("#unameErr").innerHTML = `<i class="fa-duotone fa-circle-exclamation" style="--fa-primary-color: #ff0026; --fa-secondary-color: #ff0026;"></i> Enter valid user name`;
        document.getElementById("unameErr").classList.add("inputError");
        document.getElementById("userName").classList.add("inputFieldsWrong");
        document.getElementById("userName").classList.remove("inputFieldCorr");
    }

}
function validPassword(){
    var userPassw = document.querySelector("#uPassword").value.trim();
    if (userPassw == "") {
        document.getElementById("uPassErr").innerHTML = `<i class="fa-duotone fa-circle-exclamation" style="--fa-primary-color: #ff0026; --fa-secondary-color: #ff0026;"></i> Enter your password`;
        document.getElementById("uPassErr").classList.add("inputError");
        document.getElementById("uPassword").classList.add("inputFieldsWrong");
    }else{
        document.getElementById("uPassErr").innerHTML = "";
        document.getElementById("uPassword").classList.add("inputFieldCorr");

    }
    if (userPassw != "" && userPassw.length < 8) {
        document.getElementById("uPassErr").innerHTML =`<i class="fa-duotone fa-circle-exclamation" style="--fa-primary-color: #ff0026; --fa-secondary-color: #ff0026;"></i> Enter a valid password`;
        document.getElementById("uPassErr").classList.add("inputError");
        document.getElementById("uPassword").classList.add("inputFieldsWrong");
        document.getElementById("uPassword").classList.remove("inputFieldCorr");
    }
}