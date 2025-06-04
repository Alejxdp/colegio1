document.addEventListener("DOMContentLoaded", function () {
  const mostrarBtn = document.getElementById('materias-btn');
  const volverBtn = document.getElementById('volver-btn');
  const infoGeneral = document.getElementById('info-general');
  const materiasContainer = document.getElementById('materias-container');
  const seccionBoton = document.getElementById('boton-mostrar');
  const infografiaBtns = document.querySelectorAll('.info-btn');

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

    // Cierra todas las tarjetas abiertas
    document.querySelectorAll('.materia-card').forEach(card => {
      card.classList.remove('card-flipped');
    });
  });

  infografiaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const clickedCard = btn.closest('.materia-card');

      // Cierra cualquier otra tarjeta abierta
      document.querySelectorAll('.materia-card').forEach(card => {
        if (card !== clickedCard) {
          card.classList.remove('card-flipped');
        }
      });

      // Alterna la tarjeta actual
      clickedCard.classList.toggle('card-flipped');
    });
  });
});
