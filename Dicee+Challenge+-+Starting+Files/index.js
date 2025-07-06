var randomNumer1 = Math.floor(Math.random() * 6) +1;

var randomImage1 = "dice" + randomNumer1 + ".png";

var randomImageSource = "./images/" + randomImage1;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumer2 = Math.floor(Math.random()*6) +1;
var randomImage2 = "dice" + randomNumer2 + ".png";
var randomImageSource2 = "./images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

document.querySelector("h1").innerHTML = "Refresh Me!";
if (randomImage1 > randomImage2) {
   document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if ( randomImage1< randomImage2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}