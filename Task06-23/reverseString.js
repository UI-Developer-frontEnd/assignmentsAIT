function reversing(name){
    var reverseStr=name.split(""); //This will split string into array ["H","e","m","a","n","t","h" ]
    var strRev = reverseStr.reverse(); //This will reverse the string   ["h","t","n","a","m","e","H"]
    var arrjoin = strRev.join(""); //This will join the string as a word and returns array into a new word
    var res = console.log(arrjoin);
    return res;
}
reversing("HEMANTH")