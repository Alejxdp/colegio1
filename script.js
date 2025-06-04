document.addEventListener("DOMContentLoaded", function () {
  const mostrarBtn = document.getElementById('materias-btn');
  const volverBtn = document.getElementById('volver-btn');
  const infoGeneral = document.getElementById('info-general');
  const materiasContainer = document.getElementById('materias-container');
  const infografiaBtns = document.querySelectorAll('.info-btn');
  const seccionBoton = document.getElementById('boton-mostrar');

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

    document.querySelectorAll('.extra-info').forEach(info => info.classList.add('hidden'));
  });

  infografiaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const extraInfo = btn.nextElementSibling;
      extraInfo.classList.toggle('hidden');
    });
  });
});
