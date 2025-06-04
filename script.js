document.addEventListener("DOMContentLoaded", function () {
  const mostrarBtn = document.getElementById('materias-btn');
  const volverBtn = document.getElementById('volver-btn');
  const infoGeneral = document.getElementById('info-general');
  const materiasContainer = document.getElementById('materias-container');
  const infografiaBtns = document.querySelectorAll('.info-btn');
  const seccionBoton = document.getElementById('boton-mostrar');

  // Mostrar materias
  mostrarBtn.addEventListener('click', () => {
    infoGeneral.classList.add('hidden');          // Oculta la información general
    seccionBoton.classList.add('hidden');         // Oculta el botón "Mostrar Materias"
    materiasContainer.classList.remove('hidden'); // Muestra el contenedor de materias
    volverBtn.classList.remove('hidden');         // Muestra el botón "Volver"
  });

  // Volver al contenido principal
  volverBtn.addEventListener('click', () => {
    infoGeneral.classList.remove('hidden');
    seccionBoton.classList.remove('hidden');
    materiasContainer.classList.add('hidden');
    volverBtn.classList.add('hidden');

    // Oculta cualquier infografía abierta
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
