// script.js

var wyslij = document.querySelector('#wyslij');
let div = document.querySelector("#wynik");

// Definicja funkcji sprawdz()
function sprawdz() {
    var elementyRadio = document.querySelectorAll(".aaa");
    for (const radio of elementyRadio) {
        radio.addEventListener("click", function () {
            div.innerHTML = radio.value;
        });
    }
}

// Dodaj obsługę zdarzenia kliknięcia dla przycisku o id "wyslij"
wyslij.addEventListener("click", function() {
    sprawdz(); // Wywołaj funkcję sprawdz() po kliknięciu przycisku "wyslij"
});
