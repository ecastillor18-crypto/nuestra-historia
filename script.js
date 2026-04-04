// Datos de las galerías (placeholders - reemplazar con rutas reales)
const galerias = {
    1: [
        'img/PLL/llamada (1).PNG',
        'img/PLL/llamada (1).JPG',
        'img/PLL/llamada (2).JPG',
        'img/PLL/llamada (2).PNG',
        'img/PLL/llamada (3).PNG',
        'img/PLL/llamada (3).PNG',
        // Agregar más imágenes
    ],
    2: [
        'img/PF/PRIMERAFOT (1).JPG',
        'img/PF/PRIMERAFOT (2).JPG',
        'img/PF/PRIMERAFOT (3).JPG',
        'img/PF/PRIMERAFOT (4).JPG',
        'img/PF/PRIMERAFOT (5).JPG',
        'img/PF/PRIMERAFOT (6).JPG',
        'img/PF/PRIMERAFOT (7).JPG',
        'img/PF/PRIMERAFOT (8).JPG',
        'img/PF/PRIMERAFOT (9).JPG',
        'img/PF/PRIMERAFOT (10).JPG',
        'img/PF/PRIMERAFOT (11).JPG',
        'img/PF/PRIMERAFOT (12).JPG',
        'img/PF/PRIMERAFOT (13).JPG',
        'img/PF/PRIMERAFOT (14).JPG',
        'img/PF/PRIMERAFOT (15).JPG',
        'img/PF/PRIMERAFOT (16).JPG',
        'img/PF/PRIMERAFOT (17).JPG',
        'img/PF/PRIMERAFOT (18).JPG',
        'img/PF/PRIMERAFOT (19).JPG',
        'img/PF/PRIMERAFOT (20).JPG',
        'img/PF/PRIMERAFOT (21).JPG',
        'img/PF/PRIMERAFOT (22).JPG',
        'img/PF/PRIMERAFOT (23).JPG',
        'img/PF/convertido.mp4',

        // Agregar más videos
    ],
    3: [
        'img/PMB/MENSAJESBONITOS (1).jpeg',
        'img/PMB/MENSAJESBONITOS (2).jpeg',
        'img/PMB/MENSAJESBONITOS (3).jpeg',
        'img/PMB/MENSAJESBONITOS (4).jpeg',
        'img/PMB/MENSAJESBONITOS (5).jpeg',
        'img/PMB/MENSAJESBONITOS (6).jpeg',
        'img/PMB/MENSAJESBONITOS (7).jpeg',
        'img/PMB/MENSAJESBONITOS (8).jpeg',
        // Agregar más videos
    ],
    4: [
        'img/DCC/DIAQUE (1).JPG',
        'img/DCC/DIAQUE (2).JPG',
        'img/DCC/DIAQUE (3).JPG',
        'img/DCC/DIAQUE (4).JPG',
        'img/DCC/DIAQUE (5).JPG',
        'img/DCC/DIAQUE (6).JPG',
        // Agregar más imágenes
    ],
    5: [
        'img/MMRM/MOMENTOS RAN (1).JPG',
        'img/MMRM/MOMENTOS RAN (1).MP4',
        'img/MMRM/MOMENTOS RAN (2).JPG',
        'img/MMRM/videooconverti2.MP4',
        'img/MMRM/MOMENTOS RAN (3).JPG',
        'img/MMRM/VIDEOCONVERTIDO3.MP4',
        'img/MMRM/MOMENTOS RAN (4).JPG',
        'img/MMRM/MOMENTOS RAN (4).MP4',
        'img/MMRM/MOMENTOS RAN (5).JPG',
        'img/MMRM/MOMENTOS RAN (8).jpg',
        'img/MMRM/MOMENTOS RAN (9).jpg',
        'img/MMRM/MOMENTOS RAN (10).jpg',
        'img/MMRM/MOMENTOS RAN (11).jpg',
        'img/MMRM/MOMENTOS RAN (12).jpg',
        'img/MMRM/MOMENTOS RAN (13).jpg',
        'img/MMRM/MOMENTOS RAN (14).jpg',
        'img/MMRM/MOMENTOS RAN (15).jpg',
        'img/MMRM/MOMENTOS RAN (16).jpg',
         'img/MMRM/MOMENTOS RAN (17).jpg',
        'img/MMRM/MOMENTOS RAN (18).jpg',
        // Agregar más imágenes
    ],
    6: ['img/gal5_1.jpg',],
    7: ['img/gal5_1.jpg',],
    8: ['img/gal5_1.jpg',],
    9: ['img/gal5_1.jpg',],
    10: ['img/gal5_1.jpg',],
    11: ['img/gal5_1.jpg',],
    12: ['img/gal5_1.jpg',],
    13: ['img/gal5_1.jpg',]
};

// Variables globales para la galería actual
let currentGaleria = [];
let currentIndex = 0;

// Elementos DOM
const menuInicial = document.getElementById('menu-inicial');
const menuSegundo = document.getElementById('menu-segundo');
const modalOfensa = document.getElementById('modal-ofensa');
const modalGaleria = document.getElementById('modal-galeria');
const modalProximamente = document.getElementById('modal-proximamente');
const galeriaContenido = document.getElementById('galeria-contenido');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const closeOfensa = document.getElementById('close-ofensa');
const closeGaleria = document.getElementById('close-galeria');
const closeProximamente = document.getElementById('close-proximamente');
const tituloPrincipal = document.getElementById('titulo-principal');

// Event listeners para botones iniciales
document.getElementById('boton1').addEventListener('click', mostrarOfensa);
document.getElementById('boton2').addEventListener('click', mostrarOfensa);
document.getElementById('boton3').addEventListener('click', mostrarMenuSegundo);

// Event listeners para botones del segundo menú
document.getElementById('galeria1').addEventListener('click', () => abrirGaleria(1));
document.getElementById('galeria2').addEventListener('click', () => abrirGaleria(2));
document.getElementById('galeria3').addEventListener('click', () => abrirGaleria(3));
document.getElementById('galeria4').addEventListener('click', () => abrirGaleria(4));
document.getElementById('galeria5').addEventListener('click', () => abrirGaleria(5));
document.getElementById('galeria6').addEventListener('click', mostrarProximamente);
document.getElementById('galeria7').addEventListener('click', mostrarProximamente);
document.getElementById('galeria8').addEventListener('click', () => abrirGaleria(8));
document.getElementById('galeria9').addEventListener('click', () => abrirGaleria(9));
document.getElementById('galeria10').addEventListener('click', () => abrirGaleria(10));
document.getElementById('galeria11').addEventListener('click', () => abrirGaleria(11));
document.getElementById('galeria12').addEventListener('click', () => abrirGaleria(12));
document.getElementById('galeria13').addEventListener('click', () => abrirGaleria(13));

// Event listener para regresar al menú inicial desde el segundo menú
document.getElementById('btn-regresar-menu').addEventListener('click', regresarAlMenuInicial);

// Event listeners para cerrar modales
closeOfensa.addEventListener('click', cerrarOfensa);
closeGaleria.addEventListener('click', cerrarGaleria);
closeProximamente.addEventListener('click', cerrarProximamente);
document.getElementById('btn-regresar').addEventListener('click', regresarAlMenu);
window.addEventListener('click', (event) => {
    if (event.target === modalOfensa) cerrarOfensa();
    if (event.target === modalGaleria) cerrarGaleria();
    if (event.target === modalProximamente) cerrarProximamente();
});

// Navegación en galería
prevBtn.addEventListener('click', () => navegarGaleria(-1));
nextBtn.addEventListener('click', () => navegarGaleria(1));

// Funciones
function mostrarOfensa() {
    modalOfensa.style.display = 'block';
}

function cerrarOfensa() {
    modalOfensa.style.display = 'none';
}

function mostrarMenuSegundo() {
    menuInicial.classList.add('hidden');
    menuSegundo.classList.remove('hidden');
    // Cambiar el título principal al título del segundo menú
    tituloPrincipal.style.display = 'none';
}

function regresarAlMenuInicial() {
    menuSegundo.classList.add('hidden');
    menuInicial.classList.remove('hidden');
    // Restaurar el título principal
    tituloPrincipal.style.display = 'block';
}

function abrirGaleria(num) {
    currentGaleria = galerias[num];
    currentIndex = 0;
    mostrarItemGaleria();
    modalGaleria.style.display = 'block';
}

function cerrarGaleria() {
    modalGaleria.style.display = 'none';
    // Pausar video si está reproduciendo
    const video = galeriaContenido.querySelector('video');
    if (video) video.pause();
}

function mostrarItemGaleria() {
    galeriaContenido.innerHTML = '';
    const item = currentGaleria[currentIndex];
    if (item.toLowerCase().endsWith('.mp4') || item.toLowerCase().endsWith('.webm') || item.toLowerCase().endsWith('.ogg')) {
        // Es un video
        const video = document.createElement('video');
        video.src = item;
        video.controls = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '70vh';
        galeriaContenido.appendChild(video);
    } else {
        // Es una imagen
        const img = document.createElement('img');
        img.src = item;
        img.alt = `Item ${currentIndex + 1}`;
        galeriaContenido.appendChild(img);
    }
    actualizarBotonesNav();
}

function navegarGaleria(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentGaleria.length - 1;
    if (currentIndex >= currentGaleria.length) currentIndex = 0;
    mostrarItemGaleria();
}

function actualizarBotonesNav() {
    prevBtn.style.display = currentGaleria.length > 1 ? 'block' : 'none';
    nextBtn.style.display = currentGaleria.length > 1 ? 'block' : 'none';
}

function regresarAlMenu() {
    cerrarGaleria();
    mostrarMenuSegundo();
}

function mostrarProximamente() {
    modalProximamente.style.display = 'block';
}

function cerrarProximamente() {
    modalProximamente.style.display = 'none';
}