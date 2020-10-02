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

//define window opening settings 

/*let features = 'height=600,width=800',
    url = 'https://www.javascripttutorial.net/javascript-bom/javascript-window/';

let jsWindow = window.open(url, 'about', features); */



//add click function to jstutorialWindowBtn 
jstutorialWindowBtn.addEventListener("click", function() {
  
    let features = 'height=600,width=800',
    url = 'https://www.javascripttutorial.net/javascript-bom/javascript-window/';

let jsWindow = window.open(url, 'about', features);

    setTimeout(() => {
        window.open('https://intra.bc.fi/s2000604/portfolio/ohjelmointi/html5-ja-css3/javascript-tutorial/', 'about')
    }, 3000);

  
 
});
