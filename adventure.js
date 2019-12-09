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
button1.setAttribute("onclick", "level1()");
button2.style.display =  "none"
button3.style.display =  "none"
console.log(title);
} 

//location.reload();

function level1(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environmentview.jpg')"
    title.innerHTML = "FROM THE TOP"
    description.innerHTML = "You stand on the very top of the city, the warm sun fills the air."
    button3.innerHTML = "Go Right"
    button3.setAttribute("onclick","level2()");
    button2.innerHTML = "Go left"
    button2.setAttribute("onclick", "level1fail()");
    button1.style.display =  "none"
    console.log(title);


}

function level1fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}


function level2(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment3.jpg')"
    title.innerHTML = "A NEW PLACE"
    description.innerHTML = "Will you climb up there?"
    button1.setAttribute("onclick", "level3()");
    button1.innerHTML = "Right choice"
    button2.setAttribute("onclick", "level2fail()");
    button2.innerHTML = "Wrong choice"
    button3.style.display =  "none"
    console.log(title);
}

function level2fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level3(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment2.jpg')"
    title.innerHTML = "THE RUINS"
    description.innerHTML = "You find yourself in a long lost ruin."
    button1.setAttribute("onclick", "level4()");
    button1.innerHTML = "Right choice"
    button2.setAttribute("onclick", "level3fail()");
    button2.innerHTML = "Wrong choice"
    button3.style.display =  "none"
    console.log(title);
}

function level3fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level4(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environmentcave1.jpg')"
    title.innerHTML = "THE CAVES"
    description.innerHTML = "You find yourself in wet, cold and dark caves."
    button1.setAttribute("onclick", "level4fail()");
    button1.innerHTML = "Wrong choice"
    button2.setAttribute("onclick", "level5()");
    button2.innerHTML = "Right choice"
    button3.style.display =  "none"
    console.log(title);
}

function level4fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level5(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/encounter1.jpg')"
    title.innerHTML = "THE FIGHT"
    description.innerHTML = "You're getting shot at! Other people want to get to the artifact before you do! What will you do?"
    button1.setAttribute("onclick", "level5fail()");
    button1.innerHTML = "Wrong choice"
    button2.setAttribute("onclick", "level6()");
    button2.innerHTML = "Right choice"
    button3.style.display =  "none"
    console.log(title);
}

function level5fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level6(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment5.jpg')"
    title.innerHTML = "THE FIGHT: CONTINUED"
    description.innerHTML = "You decide to run away!"
    button1.setAttribute("onclick", "level5fail()");
    button1.innerHTML = "Keep Running"
    button2.setAttribute("onclick", "level7()");
    button2.innerHTML = "Shoot Back"
    button3.style.display =  "none"
    console.log(title);
}

function level6fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level7(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/encounter2.jpg')"
    title.innerHTML = "THE CALM AFTER THE STORM"
    description.innerHTML = "You manage to come out of the fight victorious!"
    button1.setAttribute("onclick", "level8()");
    button1.innerHTML = "Right Choice"
    button2.setAttribute("onclick", "level7fail()");
    button2.innerHTML = "Wrong Choice"
    button3.style.display =  "none"
    console.log(title);
}

function level7fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')" //je slaat af en er is nog een enemy die leeft xd
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level8(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/hotel.jpg')"
    title.innerHTML = "REST UP"
    description.innerHTML = "You rest in a hotel"
    button1.setAttribute("onclick", "level9()");
    button1.innerHTML = "Right Choice"
    button2.setAttribute("onclick", "level8fail()");
    button2.innerHTML = "Wrong Choice"
    button3.style.display =  "none"
    console.log(title);
}

function level8fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}


function level9(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/hotel2.jpg')"
    title.innerHTML = "Some other thing"
    description.innerHTML = "i dont know yet lmao"
    button1.setAttribute("onclick", "level10()");
    button1.innerHTML = "Right Choice"
    button2.setAttribute("onclick", "level9fail()");
    button2.innerHTML = "Wrong Choice"
    button3.style.display =  "none"
    console.log(title);
}

function level9fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level10(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/hotel3.jpg')"
    title.innerHTML = "Yet another thing"
    description.innerHTML = "still dont know yet"
    button1.setAttribute("onclick", "ending()");
    button1.innerHTML = "Right Choice"
    button2.setAttribute("onclick", "level10fail()");
    button2.innerHTML = "Wrong Choice"
    button3.style.display =  "none"
    console.log(title);
}

function level10fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "Oh shit!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function ending(){
    ButtonReset();
background = document.onload = document.body.style.backgroundImage = "url('img/environment1.jpg')"
title.innerHTML = "THE END"
description.innerHTML =  "You won!"
button1.innerHTML = "Play Again?"
button1.setAttribute("onclick", "begin()");
button2.style.display =  "none"
button3.style.display =  "none"
console.log(title);
} 


begin();