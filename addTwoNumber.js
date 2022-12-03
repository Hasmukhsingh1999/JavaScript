// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
const prompt = require("prompt-sync")({ sigint: true });

var array = [2,5,8,10,32];
var target = Number(prompt("Enter the targeted number : "));
var new_arr = [];
for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
        new_arr.push(i);
        new_arr.push(j);
        // new_arr.pop(j);
        }
    }
    if (array[i] + array[j] === 99999){
        new_arr.pop();
    }
}
console.log("The position of the elements who's sum is  " + " : " + [new_arr]);


