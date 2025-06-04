document.addEventListener("DOMContentLoaded", function () {
  const mostrarBtn = document.getElementById('materias-btn');
  const volverBtn = document.getElementById('volver-btn');
  const infoGeneral = document.getElementById('info-general');
  const materiasContainer = document.getElementById('materias-container');
  const infografiaBtns = document.querySelectorAll('.info-btn');
  const seccionBoton = document.querySelector('.materias-section');

  mostrarBtn.addEventListener('click', () => {
    infoGeneral.style.display = 'none';
    seccionBoton.style.display = 'flex';
    materiasContainer.classList.remove('hidden');
  });

  volverBtn.addEventListener('click', () => {
    infoGeneral.style.display = 'flex';
    seccionBoton.style.display = 'block';
    materiasContainer.classList.add('hidden');

    // Oculta cualquier infografía abierta
    document.querySelectorAll('.extra-info').forEach(info => info.classList.add('hidden'));
  });

  infografiaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const extraInfo = btn.nextElementSibling;
      extraInfo.classList.toggle('hidden');
    });
  });
});
