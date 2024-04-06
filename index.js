var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImg1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src", randomImg1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImg2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 win!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
