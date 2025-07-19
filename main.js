
const btnProyectos = document.getElementById('btnProyectos');
const btnEstudios = document.getElementById('btnEstudios');
const btnSobreMi = document.getElementById('btnSobreMi');

const btnCerrarProyectos = document.getElementById('cerrar');
const btnCerrarEstudios = document.getElementById('cerrar1');
const btnCerrarExperiencia = document.getElementById('cerrar2');

const secciones = {
  proyectos: document.getElementById('Proyectos'),
  estudios: document.getElementById('Estudios'),
  experiencia: document.getElementById('sobremisE'),
};

function ocultarTodasSecciones() {
  Object.values(secciones).forEach((sec) => {
    sec.style.display = 'none';
  });
}

function mostrarSeccion(seccion) {
  ocultarTodasSecciones();
  seccion.style.display = 'block';
}

// Asignar eventos para mostrar secciones
btnProyectos.addEventListener('click', () => mostrarSeccion(secciones.proyectos));
btnEstudios.addEventListener('click', () => mostrarSeccion(secciones.estudios));
btnSobreMi.addEventListener('click', () => mostrarSeccion(secciones.experiencia));

// Asignar eventos para cerrar secciones
btnCerrarProyectos.addEventListener('click', () => (secciones.proyectos.style.display = 'none'));
btnCerrarEstudios.addEventListener('click', () => (secciones.estudios.style.display = 'none'));
btnCerrarExperiencia.addEventListener('click', () => (secciones.experiencia.style.display = 'none'));


// Carrusel Diagramas
const slider = document.querySelector('#carrusel-diagramas .slider');
const imgs = Array.from(slider.querySelectorAll('img'));
const btnIzq = document.querySelector('#carrusel-diagramas .izquierda');
const btnDer = document.querySelector('#carrusel-diagramas .derecha');

let currentIndex = 0; // índice del centro visible (imagen con clase active)

// Función para actualizar la posición y estilos de las imágenes
function updateSlider() {
  const total = imgs.length;
  // Queremos mostrar 5 imágenes visibles: posiciones -2, -1, 0, 1, 2 (circular)
  // La imagen central es imgs[currentIndex]

  imgs.forEach((img, i) => {
    img.classList.remove('active');
    img.style.opacity = '0.3';
    img.style.width = '110px';
    img.style.height = '80px';
    img.style.boxShadow = 'none';
    img.style.order = '0'; // reset

    // Calculamos distancia circular al currentIndex
    let diff = i - currentIndex;
    if (diff < -imgs.length / 2) diff += imgs.length;
    if (diff > imgs.length / 2) diff -= imgs.length;

    if (diff === 0) {
      // Imagen central
      img.classList.add('active');
      img.style.opacity = '1';
      img.style.width = '180px';
      img.style.height = '130px';
      img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
      img.style.order = 0;
    } else if (Math.abs(diff) === 1) {
      img.style.opacity = '0.6';
      img.style.order = diff;
    } else if (Math.abs(diff) === 2) {
      img.style.opacity = '0.3';
      img.style.order = diff;
    } else {
      // Ocultamos las que están muy lejos para evitar superposiciones
      img.style.opacity = '0';
      img.style.width = '0';
      img.style.height = '0';
      img.style.margin = '0';
      img.style.order = 99;
    }
  });
}

// Botones
btnDer.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgs.length;
  updateSlider();
});

btnIzq.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  updateSlider();
});

// Inicializar
updateSlider();

