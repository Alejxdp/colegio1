document.addEventListener("DOMContentLoaded", function () {
  const mostrarBtn = document.getElementById('materias-btn');
  const volverBtn = document.getElementById('volver-btn');
  const infoGeneral = document.getElementById('info-general');
  const materiasContainer = document.getElementById('materias-container');
  const seccionBoton = document.getElementById('boton-mostrar');
  const infoBtns = document.querySelectorAll('.info-btn');
  const flipCards = document.querySelectorAll('.flip-card');

  mostrarBtn.addEventListener('click', () => {
    infoGeneral.classList.add('hidden');
    seccionBoton.classList.add('hidden');
    materiasContainer.classList.remove('hidden');
    materiasContainer.classList.add('fade-in');
    volverBtn.classList.remove('hidden');
  });

  volverBtn.addEventListener('click', () => {
    infoGeneral.classList.remove('hidden');
    seccionBoton.classList.remove('hidden');
    materiasContainer.classList.add('hidden');
    materiasContainer.classList.remove('fade-in');
    volverBtn.classList.add('hidden');
    flipCards.forEach(card => card.classList.remove('flipped'));
  });

  infoBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      flipCards.forEach((card, i) => {
        if (i === index) {
          card.classList.toggle('flipped');
        } else {
          card.classList.remove('flipped');
        }
      });
    });
  });
});
