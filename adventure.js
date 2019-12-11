var background = {};
var inventory = {"key" : false}
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
    description.innerHTML = "You stand on the very top of the city, the warm sun fills the air. You're about to embark on your greatest journey yet. Looking for the long lost treasure of Sir Francis Drake. You step off the pillar and make your way to the tower exit. Unfortunately for you, there's 50 flights of stairs waiting for you. Luckily however, there's an elevator that can also bring you to the bottom floor. What will you do?"
    button3.innerHTML = "Take Stairs"
    button3.setAttribute("onclick","level2()");
    button2.innerHTML = "Take Elevator"
    button2.setAttribute("onclick", "level1fail()");
    button1.style.display =  "none"
    console.log(title);


}

function level1fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "You decide to take the elevator. Unfortuanately, the mechanism of the elevator isn't exactly up to code. The elevator cables aren't strong enough and snap. You fall to your death!"
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
    description.innerHTML = "You take your jeep and head towards the jungle. You try your best to make sense of the coordinates on your map, and eventually you hit a dead end. You step out of your jeep. You seem to have reached a dead-end. The only way to continue is to either head back or leave your jeep and try to climb up. What will you do?"
    button1.setAttribute("onclick", "level3()");
    button1.innerHTML = "Climb Up"
    button2.setAttribute("onclick", "level2fail()");
    button2.innerHTML = "Head Back"
    button3.style.display =  "none"
    console.log(title);
}

function level2fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "You drive back the way you came. After some hours and kilometers, your jeep runs out of gas. You try to continue on foot, but quickly succumb to the heat and a lack of water. You die of dehydration and exhaustion."
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function level3(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment2.jpg')"
    title.innerHTML = "THE RUIN"
    description.innerHTML = "After climbing for a while, and some close calls, you manage to climb up over the ledge and venture forth. You find yourself in a long lost ruin. There's nothing on the map that indicates it ever existed, so you can't rely on it any longer. You have to decide where you'll go next. Will you go into the mansion or the warehouse?"
    button1.setAttribute("onclick", "level4()");
    button1.innerHTML = "The Mansion"
    button2.setAttribute("onclick", "level3fail()");
    button2.innerHTML = "The Warehouse"
    button3.style.display =  "none"
    console.log(title);
}

function level3fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "You try to open the warehouse door. The door's lock jams and it's hard to get it open, but after some struggle you manage to get inside. You walk a little further and see a huge treasure chest behind a wooden plank that was covering a hole in the wall. You try to pick it up, but then dynamite explodes, killing you instantly. It was boobytrapped."
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
    description.innerHTML = "The door's lock jams and it's hard to get it open, but after some struggle you manage to get in. You make your way through and see a lot of old artifacts and mementos, but no real signs of any treasure. You find your way out through the backdoor, and proceed further into the jungle on foot. Hours pass, and as the night falls you reach the opposite end of the ravine. You find yourself in wet, cold and dark caves. Will you take the left or right pathway?"
    button1.setAttribute("onclick", "level4fail()");
    button1.innerHTML = "Left Pathway"
    button2.setAttribute("onclick", "level5()");
    button2.innerHTML = "Right Pathway"
    button3.style.display =  "none"
    console.log(title);
}

function level4fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "You step into the left pathway, but before you can even make it halfway through, a huge boulder drops from the top, and crushes your body!"
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
    description.innerHTML = "You traverse through the caves, and even make yourself a torch with a stick, coal and flint you found in there. You can even get a little warmth from the fire. More hours pass, and the sun is starting to rise again. All is well, as you're traveling through the vegitation, until suddenly stuff starts to skim past your ear. Then you realize it! You're getting shot at! Other people want to get to the treasure before you do! What will you do?"
    button1.setAttribute("onclick", "level5fail()");
    button1.innerHTML = "Shoot Back"
    button2.setAttribute("onclick", "level6()");
    button2.innerHTML = "Run Away"
    button3.style.display =  "none"
    console.log(title);
}

function level5fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "You decide to shoot back! You find yourself the best cover you can, and stick to it like glue. You take your gun and switch the safety off. You try to shoot back, but you run out of ammo. Then you get shot square in the face!"
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
    description.innerHTML = "You decide to run away! Bullets and explosions pass you by, as you make a break for it to anything that looks like cover you can hide behind. What is your next approach?"
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
    description.innerHTML = "You keep running, even though it feels like you're about to pass out from the exhaustion at any given moment now. You try to jump the gap between the ravine, but fall into it, crushing all of your bones."
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
    description.innerHTML = "You finish of the last people and manage to come out of the fight victorious! After you stop for a while to catch your breath and digest what you just happened, you decide you can forget about all of this on your way back home, hundreds and thousands of dollars richer after finding the treasure. But the question is, which way will you go? Left or right?"
    button1.setAttribute("onclick", "level8()");
    button1.innerHTML = "Head Left"
    button2.setAttribute("onclick", "level7fail()");
    button2.innerHTML = "Head Right"
    button3.style.display =  "none"
    console.log(title);
}

function level7fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')" //je slaat af en er is nog een enemy die leeft xd
    title.innerHTML = "You Died!"
    description.innerHTML = "You head right, and to your surprise, there is 1 more bad guy still alive on the floor, with his gun drawn at you. He pulls the trigger and shoots you."
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
    description.innerHTML = "You head to the left and get back on the road, which for once is actually marked on the map. You keep heading to the marked X on your map, but eventually you're too tired to continue. You need some sleep if you wanna survive this trip. So you decide to head to a nearby hotel and rest up there. You book your room and get the key. Before you head up to it, you realize you're really thristy. What will you prioritize? Getting a drink or taking care of your sleep?"
    button1.setAttribute("onclick", "level9()");
    button1.innerHTML = "Go Sleep"
    button2.setAttribute("onclick", "level8fail()");
    button2.innerHTML = "Get Drink"
    button3.style.display =  "none"
    console.log(title);
}

function level8fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Died!"
    description.innerHTML = "You walk up to the vending machine and you insert a coin. You type in the number, and the claw grabs the drink you've selected, and slowly but surely makes its way to the basket, until out of nowhere... It stops moving. You wait patiently for any more movements to occur, but nothing happens. You try giving the machine a smack, but alas, nothing happens. You give it a kick, still no movement. You become more angry at every attempt. You try to shake the machine so the bottle will drop down, but then the entire vending machine falls on top of you, crushing almost every single bone in your body."
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}


function level9(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment6.png')" //sleutel vinden
    title.innerHTML = "SCOTLAND"
    description.innerHTML = "After sleeping and resting up, you leave the hotel to continue your search for the treasure. You follow the trail and the marked out map and you reach your destination. You solve a puzzle there and figure out that you've got to go to Scotland to find the treasure, so thats what you do! Now you've arrived and you're following the new coordinates. There's a key on the floor. Will you take it?"
    button1.setAttribute("onclick", "takekey()"); //, "key" = true
    button1.innerHTML = "Take Key"
    button2.setAttribute("onclick", "level10()");
    button2.innerHTML = "Continue"
    button3.style.display =  "none"
    console.log(title);
}


function level10(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/environment8.jpg')"
    title.innerHTML = "RESOLUTION"
    description.innerHTML = "This is it. You're in the treasure room. You can see the treasure chest in all it's glory. All you have to do is unlock it and open it!"
    // button1.setAttribute("onclick", "ending()");
    button1.innerHTML = "Open The Chest";
    // button2.setAttribute("onclick", "level10fail()");
    // button2.innerHTML = "Try To Open Without The Key"
    button3.style.display =  "none"
    button2.style.display =  "none"
    console.log(title);

    if (inventory ["key"] == true) {
        button1.setAttribute("onclick", "ending()");
    }
    else {
        button1.setAttribute("onclick", "level10fail()");
    } 
}

function level10fail(){
    ButtonReset();
    background = document.onload = document.body.style.backgroundImage = "url('img/gameover.jpg')"
    title.innerHTML = "You Failed!"
    description.innerHTML = "You manage to find your way into the treasure room. Unfortunately, you can't open the chest without the key, the entire jourey was for nothing!"
    button1.innerHTML = "Try Again?"
    button1.setAttribute("onclick", "begin()");
    button2.style.display =  "none"
    button3.style.display =  "none"
    console.log(title);
}

function ending(){
    ButtonReset();
background = document.onload = document.body.style.backgroundImage = "url('img/treasure1.png')"
title.innerHTML = "THE END"
description.innerHTML =  "You insert  the lock and twist it slowly. Adrenaline starts flowing through your body. You open the chest and it's filled with gold and ancient jewelry. You won!"
button1.innerHTML = "Play Again?"
button1.setAttribute("onclick", "begin()");
button2.style.display =  "none"
button3.style.display =  "none"
console.log(title);
} 

function takekey(){
    inventory ["key"] = true;
    button1.style.display =  "none"

}


begin();