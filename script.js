function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.galeria');
  secciones.forEach(seccion => seccion.style.display = 'none');
  const activa = document.getElementById(id);
  if (activa) activa.style.display = 'block';
}

// Mostrar sección "Porcelanato" al cargar la página
window.onload = function () {
  mostrarSeccion('porcelanato');
};
