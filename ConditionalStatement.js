const prompt = require("prompt-sync")();
var num1 = Number(prompt("Enter number 1 : "));
var num2 = Number(prompt("Enter second number : "));
var num3 = Number(prompt("Enter the third number: "));

if(num1 > num2){
    console.log("The largest number among three number " + " : " + num1);
}

else if(num2 > num3){
    console.log("The largest number among three number" + " : " + num2);
}

else{
    console.log("The largest number among three number" + " : " +  num3);
}



