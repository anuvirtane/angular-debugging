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