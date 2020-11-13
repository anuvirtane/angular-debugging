let okButton = document.getElementById("ok");
let notOkButton = document.getElementById("notOk");

okButton.addEventListener("click", function() {
    okButton.innerHTML = "Siirry alaspäin";
    notOkButton.innerHTML = "Juttu jatkuu alla";
  });

notOkButton.addEventListener("click", function() {
    okButton.innerHTML = "Siirry silti alaspäin";
    notOkButton.innerHTML = "Juttu jatkuu nimittäin alla";
})