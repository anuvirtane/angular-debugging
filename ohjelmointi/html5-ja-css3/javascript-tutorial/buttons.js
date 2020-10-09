//carousel buttons:

//find aargh button and text elements

let aarghButton = document.getElementById("aarghButton");
let aarghText = document.getElementById("aarghText");

//add click function to aargh button
aarghButton.addEventListener("click", function() {
    
    aarghText.innerHTML = "Se on syvästi inhimillistä.";
    aarghButton.style.display = "none";
   
  });

//find ooh button and text elements
  let oohButton = document.getElementById("oohButton");
  let oohText = document.getElementById("oohText");

  //add click function to ooh button
oohButton.addEventListener("click", function() {
    
    oohText.innerHTML = "Tätäkin.";
    oohButton.style.display = "none";
   
  });

//find patience button and text elements
  let patienceButton = document.getElementById("patienceButton");
  let patienceText = document.getElementById("patienceText");

  //add click function to ooh button
patienceButton.addEventListener("click", function() {
    
    patienceText.innerHTML = "Ei voi muuta kuin jatkaa.";
    patienceButton.style.display = "none";
   
  });



//jstutorial buttons:

//find jstutorialWindowBtn
let jstutorialWindowBtn = document.getElementById("jstutorialWindowBtn");


//add click function to jstutorialWindowBtn: open new window, first javascripttutorial.net and then after 3 s this page
jstutorialWindowBtn.addEventListener("click", function() {
  
  //define window opening settings 
    let features = 'height=600,width=800',
    url = 'https://www.javascripttutorial.net/javascript-bom/javascript-window/';

let jsWindow = window.open(url, 'about', features);

    setTimeout(() => {
        window.open('https://intra.bc.fi/s2000604/portfolio/ohjelmointi/html5-ja-css3/javascript-tutorial/', 'about')
    }, 3000);


});

//find jstutorialPromptBtn and add click counter
let jstutorialPromptBtn = document.getElementById("jstutorialPromptBtn");
let clickCounter = 0;

//add click function to jstutorialPromptBtn: prompt

jstutorialPromptBtn.addEventListener("click", function() {
  clickCounter++;
  if (clickCounter === 1) {
    let result = window.prompt("Voit kirjoittaa tekstikenttään, mutta se ei tee mitään.");
  }
  if (clickCounter ===2) {
    let answer = prompt('Karaoke vai hiljaisuus?');

    let feedback = answer.toLowerCase() === '' ? '' :
    `${answer}! Oijoi.`;

    alert(feedback);
    clickCounter = 0;


  };

  //setTimeout -buttons have their event listeners attached in HTML. Below only setTimeout

  let showBtn = document.getElementById("showBtn");
  let cancelBtn = document.getElementById("cancelBtn");

  var timeoutID;

  showBtn.addEventListener("click", function() {
    timeoutID = setTimeout(alert, 3000, 'Tämä tervehdys tuli 3 sekunnin viiveellä.');
  });

 

 cancelBtn.addEventListener("click", function () {
    clearTimeout(timeoutID);
  });
    
  
 
});

