
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


const slider = document.querySelector('#carrusel-diagramas .slider');
const imgs = Array.from(slider.querySelectorAll('img'));
const btnIzq = document.querySelector('#carrusel-diagramas .izquierda');
const btnDer = document.querySelector('#carrusel-diagramas .derecha');

let currentIndex = 0;

// Función que decide cuántas imágenes mostrar según el ancho de pantalla
function getVisibleCount() {
  const width = window.innerWidth;
  if (width <= 480) return 1;
  if (width <= 768) return 3;
  return 5;
}

function updateSlider() {
  const total = imgs.length;
  const visibleCount = getVisibleCount();
  const half = Math.floor(visibleCount / 2);

  imgs.forEach((img, i) => {
    img.classList.remove('active');
    img.style.opacity = '0';
    img.style.width = '0';
    img.style.height = '0';
    img.style.boxShadow = 'none';
    img.style.order = '0';
    img.style.margin = '0';
  });

  for (let offset = -half; offset <= half; offset++) {
    let imgIndex = (currentIndex + offset + total) % total;
    let img = imgs[imgIndex];

    let absOffset = Math.abs(offset);

    // Mostrar imagen con tamaño y estilo según su distancia al centro
    if (absOffset === 0) {
      img.classList.add('active');
      img.style.opacity = '1';
      img.style.width = visibleCount === 1 ? '180px' : '180px';
      img.style.height = visibleCount === 1 ? '130px' : '130px';
      img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
      img.style.order = 0;
      img.style.margin = '0 0.5rem';
    } else if (absOffset === 1) {
      img.style.opacity = '0.6';
      img.style.width = visibleCount === 1 ? '0' : '110px';
      img.style.height = visibleCount === 1 ? '0' : '80px';
      img.style.order = offset;
      img.style.margin = '0 0.3rem';
    } else if (absOffset === 2 && visibleCount === 5) {
      img.style.opacity = '0.3';
      img.style.width = '110px';
      img.style.height = '80px';
      img.style.order = offset;
      img.style.margin = '0 0.3rem';
    }
  }
}

btnDer.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgs.length;
  updateSlider();
});

btnIzq.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  updateSlider();
});

window.addEventListener('resize', updateSlider);

// Inicializar
updateSlider();

