

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let image = document.querySelector("img");
let body = document.querySelector("body");

myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

function helloWorld() {
    myHeading.innerHTML = "Hello world!";
}

function normal() {
    myHeading.innerHTML ="Mozilla is cool";
    image.src = "./images/firefox-icon.png";
    body.style.backgroundColor = "#FF9500";
}

function brave() {
  myHeading.innerHTML = "Brave is cool";
  image.src = "./images/brave.png";
  body.style.backgroundColor = "white";
}