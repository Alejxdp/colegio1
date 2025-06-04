document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById('materias-btn');
  const infoGeneral = document.getElementById('info-general');
  const materiasContainer = document.getElementById('materias-container');
  const infografiaBtns = document.querySelectorAll('.info-btn');

  boton.addEventListener('click', () => {
    infoGeneral.style.display = 'none';
    boton.style.display = 'none';
    materiasContainer.classList.remove('hidden');
  });

  infografiaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const extraInfo = btn.nextElementSibling;
      extraInfo.classList.toggle('hidden');
    });
  });
});
