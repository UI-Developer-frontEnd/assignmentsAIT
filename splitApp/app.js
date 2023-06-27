function splitBill() {
    var userAmount = document.getElementById("amount").value;
    var userPersons = document.getElementById("people").value;
    var resultAmount = (userAmount / userPersons).toFixed(2);
    var amountErr = document.getElementById("amoErr");
    var perErr = document.getElementById("pepErr");
    if(userAmount<=0){debugger;
        amountErr.innerHTML= `Enter valid amount`;
        document.getElementById("amoErr").classList.add("amountErr");
        document.getElementById("inpdiv").classList.add("input2Err");
        if(userPersons <=1){
            perErr.innerHTML =`Enter number of persons greater than 1.`
            document.getElementById("pepErr").classList.add("amountErr");
            document.getElementById("inpdiv").classList.add("input2Err");
            document.getElementById("perDiv").classList.add("input2Err");
        }
    }
        else if(userPersons <=1){
            perErr.innerHTML =`Enter number of persons greater than 1.`
            document.getElementById("pepErr").classList.add("amountErr");
            document.getElementById("perDiv").classList.add("input2Err");
        }
        else if(userAmount>0 && userPersons > 1){
            document.getElementById("res").value = resultAmount;
            document.getElementById("inpdiv").classList.add("input2Corr");
            document.getElementById("perDiv").classList.add("input2Corr");
        }
}
function ramdomGenerator(){debugger;
    var rand = Math.round(Math.random()*10);
    var userAmount = document.getElementById("amount").value = rand;
}