var animateButton = function(e) {
  e.preventDefault();

  e.target.classList.remove('animate');
  void e.target.offsetWidth;
  e.target.classList.add('animate');

  setTimeout(function(){
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
const frases = [
  "Te amo",
  "Eres mi adoración🍓",
  "Sigue brillando cariño✨",
  "Estas preciosa",
  "Para la mujer más preciosa",
  "Gracias por estar aquí",
  "Gracias por iluminar mis días",
  "Por qué negar, que estoy de ti enamorado💖",
  "Eres un encanto, eres una flor🌹",
  "Admire all for you",
  "'Cause there's nothing like it, locking my eyes with you",
  "I wish I could see you",
  "I wish we could talk",
  "Yo nunca había pensado que estando tú a mi lado iba a sentirme tan feliz",
  "I could die for you",
  "More than a woman to me",
  "I need you more than anything in my life",
  "I want you more than anything in my life",
  "I love you more than anyone in my life",
  "Cariño, no soporto estar sin ti",
  "I can't see anyone but you",
  "I only have eyes for you dear"
];

let indiceFrase = 0;

function mostrarFraseAnimada() {
  const contenedor = document.getElementById("frase-contenedor");

  const p = document.createElement("p");
  p.className = "frase";
  p.textContent = frases[indiceFrase];

  contenedor.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 3000);

  indiceFrase = (indiceFrase + 1) % frases.length;
}

document.querySelector(".bubbly-button").addEventListener("click", e => {
  e.preventDefault();
  mostrarFraseAnimada();
});
function mostrarFraseAnimada() {
  const contenedor = document.getElementById("frase-contenedor");

  const p = document.createElement("p");
  p.className = "frase";
  p.textContent = frases[indiceFrase];

  contenedor.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 2000); 
  indiceFrase = (indiceFrase + 1) % frases.length;
}
