var arr = [1,2,3,4,5,6];
var new_arr = []
var odd_arr = []
arr.forEach(function(val){
    if(val%2===0){
        new_arr.push(val);
        
    }
    else if(val%2===1){
        odd_arr.push(val);
    }
    else{
        console.log("You got that wrong");
    }

})
console.log("The even value elements  ",new_arr);
console.log("The odd value elements  ",odd_arr);

