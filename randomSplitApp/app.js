var randomnumber = Math.round(Math.random()*10000);
var randomPerson = Math.round(Math.random()*100);
function ramdomGenerator(){   
    document.getElementById("people").value= randomPerson;
    document.getElementById("amount").value = randomnumber;
}
function split(){
    var splitedResult = (randomnumber+randomPerson).toFixed(2);
    document.getElementById("res").value = splitedResult;
}
