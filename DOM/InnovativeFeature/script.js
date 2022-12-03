var databases = [
    {name:"Sarah Logan",status:"Strangers",img:"https://i.pinimg.com/564x/e3/3c/ef/e33ceff89de6fdea10155eb5096ea148.jpg",justify:"Add Friend"},
    
    {name:"Katie Elizabeth",status:"Stargers",img:"https://i.pinimg.com/564x/1a/0a/c6/1a0ac6a684121b2e1d92d29449edd59b.jpg",justify:"Add Friend"},
    
    {name:"Chelsea Marie" , status:"Strangers" ,img:"https://i.pinimg.com/564x/bd/5b/07/bd5b07f6b02b94d13ec1e5df1098a1e3.jpg",justify:"Add Friend"}
]

var btn = document.querySelector("button")


function virtual(){
    var str = " ";
   
    databases.forEach(function(value,index){
        str += `<div id="card">
        <img src="${value.img}" >
        <h2>${value.name}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur officiis vel ad?</p>
        <h5>${value.status}</h5>
        <button id="${index}">${value.justify}</button>
    
    </div>`
    
    });
    document.querySelector("#cards").innerHTML = str;
    

}

virtual();





document.querySelector("#cards").addEventListener("click",function(details){
    
    
    databases[details.target.id].status = "Friend Request Send";
    
    virtual();
    databases[details.target.id].justify = "Remove Friend";
  
    virtual();
    setTimeout(function(){
        
    });
    

    


});



