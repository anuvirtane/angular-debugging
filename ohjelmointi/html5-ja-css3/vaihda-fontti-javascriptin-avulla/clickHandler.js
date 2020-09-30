

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
        list.style.fontSize = "20px";
    
    }
    if (clickCount == 2) {
        list.style.fontSize = "24px";
    }
    if (clickCount == 3) {
        list.style.fontSize = "28px";
    }
    if (clickCount == 4) {
        list.style.fontSize = "32px";
    }
    if (clickCount == 5) {
        list.style.fontSize = "16px"; 
        clickCount = 0;
    }
    if (totalClickCount == 10) {
        gray.style.backgroundColor = "pink";
    }
    if (totalClickCount == 11) {
        gray.style.backgroundColor = "lightblue";
    }
    if (totalClickCount == 12) {
        gray.style.backgroundColor = "lightyellow";
    }
    if (totalClickCount == 13) {
        gray.style.backgroundColor = "magenta";
    }
    if (totalClickCount == 14) {
        gray.style.backgroundColor = "lightgreen";
    }
    if (totalClickCount == 15) {
        gray.style.backgroundColor = "blue";
    }
    if (totalClickCount == 16) {
        gray.style.backgroundColor = "forestgreen";
    }
    if (totalClickCount == 17) {
        gray.style.backgroundColor = "orange";
    }
    if (totalClickCount == 18) {
        gray.style.backgroundColor = "brown";
    }
    if (totalClickCount == 19) {
        gray.style.backgroundColor = "#e100ff";
    }
    if (totalClickCount > 19) {
        gray.style.backgroundColor = "rgb(243, 239, 239)";
        gray.innerHTML = "Hyvin klikkailtu! Ei enempää yllätyksiä luvassa."
    }

    
}