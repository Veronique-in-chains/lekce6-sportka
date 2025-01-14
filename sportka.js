// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:


// SPORTKA

let osudi = [];
let tazenaCisla = [];
let vyherniCisla = document.querySelector("#vyherni-cisla");

// generování osudí:
for (let i = 1; i <= 49; i = i + 1) {
  osudi.push(i);
}

// z osudí vyberu sedm náhodných čísel:
for (let i = 0; i < 7; i++) {
  let vyherniIndex = Math.floor(Math.random() * osudi.length);
  let vyherniCislo = osudi[vyherniIndex];
  tazenaCisla.push(vyherniCislo);
  osudi.splice(vyherniIndex, 1);
}


// výpis do HTML:
for (let j = 0; j < tazenaCisla.length; j++) {
  vyherniCisla.innerHTML += "<span class='cislo'>" + tazenaCisla[j] + "</span>";
}