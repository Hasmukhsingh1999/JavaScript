var btn = document.querySelector(" #card button");
var htag  = document.querySelector("#card h5");

var flag=0;
btn.addEventListener("click",function(){
    if (flag==0){
        htag.innerHTML="Request Sending";
            htag.style.color = "black";
            btn.innerHTML="cancel request";
            flag=1;
        setTimeout(function(){
            htag.innerHTML="Friends ";
            htag.style.color = "#0f0c29";
            btn.innerHTML="Remove Friends";
            
        },2000);

    }
    else{
        htag.innerHTML="Starnger";
            htag.style.color = "#0f0c29";
            btn.innerHTML="Add Friend";
            flag = 0;
           
    }
});
