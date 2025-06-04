document.addEventListener("DOMContentLoaded", function () {
  const mostrarBtn = document.getElementById('materias-btn');
  const volverBtn = document.getElementById('volver-btn');
  const infoGeneral = document.getElementById('info-general');
  const materiasContainer = document.getElementById('materias-container');
  const infografiaBtns = document.querySelectorAll('.info-btn');
  const seccionBoton = document.getElementById('boton-mostrar');

  // Mostrar materias
  mostrarBtn.addEventListener('click', () => {
  infoGeneral.classList.add('hidden');
  seccionBoton.classList.add('hidden');

  // Aplica clase animada
  materiasContainer.classList.remove('hidden');
  materiasContainer.classList.add('fade-in');

  volverBtn.classList.remove('hidden');
});

volverBtn.addEventListener('click', () => {
  infoGeneral.classList.remove('hidden');
  seccionBoton.classList.remove('hidden');

  // Oculta materias y elimina animación
  materiasContainer.classList.add('hidden');
  materiasContainer.classList.remove('fade-in');

  volverBtn.classList.add('hidden');

  // Oculta infografías
  document.querySelectorAll('.extra-info').forEach(info => info.classList.add('hidden'));
});


  // Mostrar/ocultar infografías
  infografiaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const extraInfo = btn.nextElementSibling;
      extraInfo.classList.toggle('hidden');
    });
  });
});
