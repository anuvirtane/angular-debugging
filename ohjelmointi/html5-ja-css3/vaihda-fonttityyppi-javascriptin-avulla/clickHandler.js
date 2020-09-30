

  var clickCount=0;
  var totalClickCount = 0;
  var showClicks = document.getElementById("showClicks");
  

function clickHandler() {
   
    var list = document.getElementById("list");
    var showClicks = document.getElementById("showClicks");
   
    clickCount++;
    totalClickCount++;
    showClicks.innerHTML = totalClickCount;

    var gray = document.getElementById("gray");
    
    if (clickCount == 1) {
        list.style.fontFamily = 'Roboto';
    
    }
    if (clickCount == 2) {
        list.style.fontFamily =  'Mansalva';
    }
    if (clickCount == 3) {
        list.style.fontFamily = 'Grenze';
    }
    if (clickCount == 4) {
        list.style.fontFamily = 'Turret Road';
    }
    if (clickCount == 5) {
        list.style.fontFamily = 'Courier New';
        clickCount = clickCount - 5;
    }
    if (totalClickCount == 10) {
        gray.style.color = "pink";
    }
    if (totalClickCount == 11) {
        gray.style.color = "lightblue";
    }
    if (totalClickCount == 12) {
        gray.style.color = "lightyellow";
    }
    if (totalClickCount == 13) {
        gray.style.color = "magenta";
    }
    if (totalClickCount == 14) {
        gray.style.color = "lightgreen";
    }
    if (totalClickCount == 15) {
        gray.style.color = "blue";
    }
    if (totalClickCount == 16) {
        gray.style.color = "forestgreen";
    }
    if (totalClickCount == 17) {
        gray.style.color = "orange";
    }
    if (totalClickCount == 18) {
        gray.style.color = "brown";
    }
    if (totalClickCount == 19) {
        gray.style.color = "#e100ff";
    }
    if (totalClickCount > 19) {
        gray.style.color = "black";
        gray.innerHTML = "Hyvää työtä! Klikkailu on ilomme."
    }

    
}