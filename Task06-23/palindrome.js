

function rev(){
    var palindrome = "AHA";
    var spl =palindrome.split("").reverse().join("");
    var pal = spl;
    if(palindrome != pal){
        console.log("It is not a palindrome");
    }
    else{
        console.log("It is a palindrome");
    }
    // console.log(spl);
}
rev()