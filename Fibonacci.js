const prompt = require("prompt-sync")({ sigint: true });

var num = Number(prompt("Enter the numer : "));

var a = 0 ;
var b = 1;
console.log(a,b);

for (var i = 0; i < num; i++){
    var next = a + b;
    console.log(next);
    a = b ;
    b = next;
    

}



