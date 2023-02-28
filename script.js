var bool = true;
function test(){
    var x = document.getElementById("search").value;
    document.getElementById("test").innerHTML= x;
}

function black(){
    var x = document.getElementById("body");
    if(bool == false){
        bool = true;
        x.style.backgroundColor= "#1f2d27";
    }else{
        bool=false
        x.style.backgroundColor= "rgb(159, 189, 176)";
    }
    
}
