var background = {};
var title = document.getElementById("title")
var description = document.getElementById("description")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")

document.getElementById("inventoryItem").style.display = "none";

function ButtonReset(){
    button1.style.removeProperty("display")
    button2.style.removeProperty("display")
    button3.style.removeProperty("display")
}

function begin(){
    ButtonReset();
background = document.onload = document.body.style.backgroundImage = "url('img/environment1.jpg')"
title.innerHTML = "UNEXPLORED"
description.innerHTML =  "You are an adventurer trying to find the long lost treasure of Sir Francis Drake. You will be traveling across the world, from places like Scotland to Madagascar. Unfortunately for you, you are not the only one trying to find it, so you can expect many hardships along the way. Not only will you have to make sure you deal with the competition, you also have to watch out for mother nature herself, throwing wild animals and natural disasters your way. You are a long way from home. So buckle up, you are in for a wild ride."
button1.innerHTML = "Start Game"
button1.setAttribute("onclick", "level2()");
button2.style.display =  "none"
button3.style.display =  "none"
} 

//location.reload();

function level2(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environmentview.jpg')"
    title.innerHTML = "FROM THE TOP"
    description.innerHTML = "You stand on the very top of the city, the warm sun fills the air."
    button3.setAttribute("onclick","level3()");
    button3.innerHTML = "Go Right"
    button2.innerHTML = "Go left"
    button1.style.display =  "none"


}


function level3(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment2.jpg')"
    title.innerHTML = "A NEW PLACE"
    description.innerHTML = "You find yourself in a long lost ruin."
    button3.setAttribute("onclick", "level4()");
    button2.style.display =  "none"
    button1.style.display =  "none"
    

}

function level4(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment3.jpg')"
    title.innerHTML = "Test"
    description.innerHTML = "Test"
    button1.innerHTML = "Go left"
    

}

begin();

