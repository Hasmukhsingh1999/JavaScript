var databases = [
    {name:"Sarah Logan",status:"Strangers",img:"https://i.pinimg.com/564x/e3/3c/ef/e33ceff89de6fdea10155eb5096ea148.jpg"},
    
    // {name:"Katie Elizabeth",status:"Stargers",img:"https://i.pinimg.com/564x/1a/0a/c6/1a0ac6a684121b2e1d92d29449edd59b.jpg"},
    
    {name:"Chelsea Marie" , status:"Strangers" ,img:"https://i.pinimg.com/564x/bd/5b/07/bd5b07f6b02b94d13ec1e5df1098a1e3.jpg"}
]


function virtual(){
    var str = " ";
    databases.forEach((function(values,index){
        str += `<div id="card">
        <img src="${values.img}" >
        <h2>${values.name}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur officiis vel ad?</p>
        <h5 id=${values.status.split("  ").join(" ")}>${values.status}</h5>
        <!-- <button>Add Friend</button> -->
        <a href="#">
            <span class="${values.status > "Friends" ? "Green" : "yellow" }" id="${index}">${values.status > "Starngers" ? "Add Friend" : "Cancel"}</span>
            <div class="liquid"></div>
        </a>

    </div>`

    }));
    document.querySelector("#cards").innerHTML=str;
}

virtual();
var flag = 0;
// var timer;
document.querySelector("#cards").addEventListener("click",function(details){
    // databases[details.target.id].status = "Request Send";
    // virtual();
    // setTimeout(function(){
    //     databases[details.target.id].status = "Friends";
    //     virtual();

    // },2000);

    if(flag===0){
        databases[details.target.id].status = "Sending...";
        virtual();
        setTimeout(function(){
            databases[details.target.id].status = "Friends";
            
            virtual();
    
        },20);
        flag=1;
        

    }
    else{
        databases[details.target.id].status = "Removing Friend...";
        virtual();
        setTimeout(function(){
            databases[details.target.id].status = "Strangers";
            virtual();
    
        },2000);
        flag=0;
        

    }
});





