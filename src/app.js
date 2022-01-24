/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.getElementById("numeros").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexnumber = Math.floor(Math.random() * number.length);
  return number[indexnumber];
};

let generateRandomSuit = () => {
  let suit = ["heart", "diamond", "club", "spade"];
  let indexsuit = Math.floor(Math.random() * suit.length);
  return suit[indexsuit];
};
