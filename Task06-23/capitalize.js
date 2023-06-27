function capitalise(name){
    let arr = ["heanth","bobby"];
    for(let i = 0;i<arr.length;i++){
       var userName = arr[i];
       var char = userName.charAt(0);
       var upp = char.toUpperCase()
       console.log(upp);
    }
    // var cap = name;
    // var upr =cap.charAt(0);
    // var upp = upr.toUpperCase()
    // console.log(upp);
}
capitalise()