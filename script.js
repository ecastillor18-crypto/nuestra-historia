// Datos de las galerías (placeholders - reemplazar con rutas reales)
const galerias = {
    1: [
        'img/gal1_1.jpg',
        'img/gal1_2.jpg',
        // Agregar más imágenes
    ],
    2: [
        'video/e80dd8d7-1641-4e83-adcc-7d2f7ba923eb.MP4',
        'video/gal2_2.mp4',
        // Agregar más videos
    ],
    3: [
        'video/gal3_1.mp4',
        'video/gal3_2.mp4',
        // Agregar más videos
    ],
    4: [
        'img/gal4_1.jpg',
        'img/gal4_2.jpg',
        // Agregar más imágenes
    ],
    5: [
        'img/gal5_1.jpg',
        'img/gal5_2.jpg',
        // Agregar más imágenes
    ]
};

// Variables globales para la galería actual
let currentGaleria = [];
let currentIndex = 0;

// Elementos DOM
const menuInicial = document.getElementById('menu-inicial');
const menuSegundo = document.getElementById('menu-segundo');
const modalOfensa = document.getElementById('modal-ofensa');
const modalGaleria = document.getElementById('modal-galeria');
const galeriaContenido = document.getElementById('galeria-contenido');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const closeOfensa = document.getElementById('close-ofensa');
const closeGaleria = document.getElementById('close-galeria');

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

// Event listener para regresar al menú inicial desde el segundo menú
document.getElementById('btn-regresar-menu').addEventListener('click', regresarAlMenuInicial);

// Event listeners para cerrar modales
closeOfensa.addEventListener('click', cerrarOfensa);
closeGaleria.addEventListener('click', cerrarGaleria);
document.getElementById('btn-regresar').addEventListener('click', regresarAlMenu);
window.addEventListener('click', (event) => {
    if (event.target === modalOfensa) cerrarOfensa();
    if (event.target === modalGaleria) cerrarGaleria();
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
}

function regresarAlMenuInicial() {
    menuSegundo.classList.add('hidden');
    menuInicial.classList.remove('hidden');
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