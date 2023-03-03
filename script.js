

var isBlack = true;
function test(){
    var x = document.getElementById("search").value;
    document.getElementById("test").innerHTML= x;
}

function black(){
    var x = document.getElementById("body");
    var w = document.getElementById("white");
    var b = document.getElementById("black");
    var n = document.getElementById("nav");
    if(isBlack == false){
        isBlack = true;
        n.style.backgroundColor= "black"
        x.style.backgroundColor= "#354026";
        w.id = "black";
        b.id = "white";
    }else{
        isBlack=false
        n.style.backgroundColor= "#034D63"
        x.style.backgroundColor= "#805E73";
        w.id = "black";
        b.id = "white";
    }    
}

function insert(){
    //get id from last save
    // localStorage.clear();
    // en testjson guardar el ultimo id entonces al principio se saca eso y se hace for loop con ese id para recuperar las imagenes
    var id ; 
    let data = localStorage.getItem("testJSON");
    let obj = JSON.parse(data);
    if(obj!=null){id=obj.id;}else{id=0;}
    console.log(data);
   
    //save new data
    var holder = document.getElementById("cardHolder");
    var url = document.getElementById("IMGLink").value;
    var text = document.getElementById("IMGText").value;
    var date = document.getElementById("IMGDate").value;

    //reset id
    // id = 0;
    const myObj = {url: url, text: text, date:date, id:id };
    
    const myJSON = JSON.stringify(myObj);
    //creating the card
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    li.className="card";
    li.innerHTML = id;
    holder.appendChild(li);
    img.src=url;
    li.appendChild(img);
    div.innerHTML=text +"\n" + date;
    li.appendChild(div);

    localStorage.setItem("testJSON" + id, myJSON);

    id = id+1;

    const idObj = {id:id};
    const idJSON = JSON.stringify(idObj);
    console.log(idObj);
    localStorage.setItem("testJSON" ,idJSON);
    // localStorage.clear();
}
function pull(){
    let data = localStorage.getItem("testJSON");
    let obj = JSON.parse(data);
    
    for(let i = 0; i < obj.id;i++){
        let data=localStorage.getItem("testJSON" + i);
        let obj = JSON.parse(data);
        console.log(obj+ " "+i);
        if(obj == null){continue;}
        var holder = document.getElementById("cardHolder");
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        li.className="card";
        li.innerHTML = obj.id;
        holder.appendChild(li);
        img.src=obj.url;
        li.appendChild(img);
        div.innerHTML=obj.text +"\n" + obj.date;
        li.appendChild(div);
    }
    
    
}
function clear(){
    localStorage.clear();
    console.log("cleard");
}

function retrive(){
    fetch('./testJSON.json')
    .then((response) => response.json())
    .then((json) => console.log(json.title));

}