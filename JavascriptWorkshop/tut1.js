// for and while entry control loop
// do while is an exit control loop

// for(var i=100;i>0;i=i/10){
//     console.log(i);
// }
// const prompt = require("prompt-sync")();
// var num = Number(prompt("ENter the number : "));




// var num = 1990
// if(num%400===0  && num%100===0 ){
//     console.log("The year is a leap ");
// }
// else if(num%4===0){
//     console.log("The year is  leap year");
// }
// else{
//     console.log("Not  a leap");
// }


// const prompt = require("prompt-sync")();

// var vowels = prompt("Enter any number : ");
// if(vowels=='a' || vowels =='e' || vowels=='i' || vowels=='o' || vowels=='u' ){
//     console.log("Alphabet is a vowels");
// }
// else{
//     console.log("ALl consonant");
// }


// const prompt = require("prompt-sync")();

// var num  = prompt("Enter any number : ");
// for(var i = 1;i<=10;i++){
//     console.log(i*num);
// }



// const prompt = require("prompt-sync")();

// var num  = prompt("Enter any number : ");

// var sum = 0;
// for(var i=0;i<=num;i++){
//     sum+=i;
//     console.log(sum)
// }

// const prompt = require("prompt-sync")();
// var num  = prompt("Enter any number : ");
// for(var i = 1;i<=num ;i++){
//     if(i%num===0){
//         console.log(i)
//     }
// }





// const prompt = require("prompt-sync")();
// var num  = Number(prompt("Enter any number : "));
// var rev,digit= 0;
// while(num!=0){
//     digit = num%10;
//     rev = (rev*10) + digit;
//     num = num/10;
   
// }

// console.log(rev);

// var arr = [5,2,1,7];
// var min_num =arr[0];
// for(var i=0;i>arr.length;i++){
//     if(arr[i]<min_num){
//         min_num = arr[i];
//     }
   
   
// }
// console.log(min_num);


// var arr = [1,2,4,5,3];ujh
// function isSorted(){
//     for(var i=0;i>arr.length ;i++){
//         for(var j=i;j>arr.length;j++){
//             if(arr[i]>arr[j]){
//                var temp = arr[i];
//                arr[i] =arr[j]
//                arr[j] = temp; 
//             }
//         }
//     }
//     console.log(temp);
    
// }

// isSorted();

// function isSorted(){
//     for(var i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             return false;
//         }
//     }
//     return true;
// }


// var  arr = [1,2,3,4,5];
// var i = arr[0];
// var j = arr.length;
// while(i>j){
//     var temp = i;
//     i = j;
//     j =temp;
//     i++;
//     j--;
// }
// console.log(temp);


// const prompt = require("prompt-sync")();
// var num  = Number(prompt("Enter any number : "));
// var arr = [1,2,3,4,5]
// var temp  = arr[0];
// for(var i=0; i<arr.length-1;i++){
//     arr[i] = arr[i+1];
//     arr[arr.length-1] = temp;

// }
// console.log(arr)


// var str = "abcd";
// for(var i = 0;i<str.length;i++){
//     console.log(str.charAt(i));
// }


var str = "AbcDt";
for(var i= 0;i<str.length;i++){
    if(str.u)
}