var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var h1 = document.querySelector("#main h1");

main.addEventListener("mousemove",function(value){
    cursor.style.left = (value.x + 15) + "px";
    cursor.style.top = (value.y + 15)+ "px";
});

h1.addEventListener("mouseenter",function(){
    cursor.style.scale = 2.1;
})


h1.addEventListener("mouseleave",function(){
    cursor.style.scale = 1;
})
