// Base URL for content loading
// En localhost: /
// En GitHub Pages: /nuestra-historia/
if (typeof window.BASE_URL === 'undefined') {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.BASE_URL = '/';
    } else if (window.location.hostname.includes('github.io')) {
        window.BASE_URL = '/nuestra-historia/';
    } else {
        window.BASE_URL = '/';
    }
}

const BASE_URL = window.BASE_URL;
console.log('script.js BASE_URL:', BASE_URL);

// Datos de las galerías (rutas desde GitHub)
const galerias = {
    1: [
        BASE_URL + 'img/PLL/llamada (1).PNG',
        BASE_URL + 'img/PLL/llamada (1).JPG',
        BASE_URL + 'img/PLL/llamada (2).JPG',
        BASE_URL + 'img/PLL/llamada (2).PNG',
        BASE_URL + 'img/PLL/llamada (3).PNG',
        BASE_URL + 'img/PLL/llamada (3).PNG',
        // Agregar más imágenes
    ],
    2: [
        BASE_URL + 'img/PF/PRIMERAFOT (1).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (2).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (3).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (4).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (5).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (6).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (7).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (8).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (9).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (10).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (11).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (12).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (13).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (14).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (15).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (16).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (17).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (18).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (19).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (20).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (21).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (22).JPG',
        BASE_URL + 'img/PF/PRIMERAFOT (23).JPG',
        'img/PF/WhatsApp Video 2026-04-06 at 12.48.50 AM.mp4',

        // Agregar más videos


    ],
    3: [
        BASE_URL + 'img/PMB/MENSAJESBONITOS (1).jpeg',
        BASE_URL + 'img/PMB/MENSAJESBONITOS (2).jpeg',
        BASE_URL + 'img/PMB/MENSAJESBONITOS (3).jpeg',
        BASE_URL + 'img/PMB/MENSAJESBONITOS (4).jpeg',
        BASE_URL + 'img/PMB/MENSAJESBONITOS (5).jpeg',
        BASE_URL + 'img/PMB/MENSAJESBONITOS (6).jpeg',
        BASE_URL + 'img/PMB/MENSAJESBONITOS (7).jpeg',
        BASE_URL + 'img/PMB/MENSAJESBONITOS (8).jpeg',
        // Agregar más videos
    ],
    4: [
        BASE_URL + 'img/DCC/DIAQUE (1).JPG',
        BASE_URL + 'img/DCC/DIAQUE (2).JPG',
        BASE_URL + 'img/DCC/DIAQUE (3).JPG',
        BASE_URL + 'img/DCC/DIAQUE (4).JPG',
        BASE_URL + 'img/DCC/DIAQUE (5).JPG',
        BASE_URL + 'img/DCC/DIAQUE (6).JPG',
        // Agregar más imágenes
    ],
    5: [
        BASE_URL + 'img/MMRM/MOMENTOS RAN (1).JPG',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (2).JPG',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (3).JPG',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (4).JPG',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (5).JPG',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (8).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (9).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (10).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (11).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (12).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (13).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (14).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (15).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (16).jpg',
         BASE_URL + 'img/MMRM/MOMENTOS RAN (17).jpg',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (18).jpg',
        'img/MMRM/2e565a9e-1246-4d45-9e6f-faab1aca1126.MP4',
        'img/MMRM/6e8fd122-3011-43be-ae00-c10c84b74ae4.MP4',
        'img/MMRM/WhatsApp Video 2026-04-06 at 12.58.58 AM.mp4',
        'img/MMRM/WhatsApp Video 2026-04-06 at 12.59.37 AM.mp4',
        // Agregar más imágenes
    ],
    6: [
        
        // aqui no
    ],
    
    7: [
        // aqui no
    ],
    8: [BASE_URL + 'img/MR/MOMENROMANT (1).jpg',
        BASE_URL + 'img/MR/MOMENROMANT (1).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (1).PNG',
        BASE_URL + 'img/MR/MOMENROMANT (2).JPG',
        BASE_URL + 'img/MR/MOMENROMANT (2).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (3).JPG',
        BASE_URL + 'img/MR/MOMENROMANT (4).JPG',
        BASE_URL + 'img/MR/MOMENROMANT (5).JPG',
        BASE_URL + 'img/MR/WhatsApp Video 2026-04-04 at 2.10.19 AM.mp4',
        BASE_URL + 'img/MR/MOMENROMANT (6).JPG',
        BASE_URL + 'img/MR/MOMENROMANT (6).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (7).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (8).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (9).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (10).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (11).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (12).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (13).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (14).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (3).MP4',
        BASE_URL + 'img/MR/MOMENROMANT (4).MP4',
    ],

    9: [BASE_URL + 'img/TU/TU (1).JPG',
        BASE_URL + 'img/TU/TU (1).PNG',
        BASE_URL + 'img/TU/TU (2).JPG',
        BASE_URL + 'img/TU/TU (2).PNG',
        BASE_URL + 'img/TU/TU (3).JPG',
        BASE_URL + 'img/TU/TU (3).PNG',
        BASE_URL + 'img/TU/TU (4).JPG',
        BASE_URL + 'img/TU/TU (4).PNG',
        BASE_URL + 'img/TU/TU (5).JPG',
        BASE_URL + 'img/TU/TU (5).PNG',
        BASE_URL + 'img/TU/TU (6).JPG',
        BASE_URL + 'img/TU/TU (7).JPG',
        BASE_URL + 'img/TU/TU (8).JPG',
        BASE_URL + 'img/TU/TU (9).jpg',
        BASE_URL + 'img/TU/TU (10).jpg',
        BASE_URL + 'img/TU/TU (11).jpg',
        BASE_URL + 'img/TU/TU (12).jpg',
        BASE_URL + 'img/TU/TU (13).jpg',
        BASE_URL + 'img/TU/TU (14).jpg',
        BASE_URL + 'img/TU/TU (15).jpg',
        BASE_URL + 'img/TU/TU (16).jpg',
        BASE_URL + 'img/TU/TU (17).JPG',
        BASE_URL + 'img/TU/TU (18).JPG',
        BASE_URL + 'img/TU/TU (19).JPG',
        BASE_URL + 'img/TU/TU (20).JPG',
        BASE_URL + 'img/TU/TU (21).JPG',
        BASE_URL + 'img/TU/TU (22).jpg',
        BASE_URL + 'img/TU/TU (23).jpg',
        BASE_URL + 'img/TU/TU (24).jpg',
        'img/TU/WhatsApp Video 2026-04-03 at 3.24.09 AM (4).mp4',
        'img/TU/WhatsApp Video 2026-04-06 at 1.05.03 AM (1).mp4',
        'img/TU/WhatsApp Video 2026-04-06 at 1.05.03 AM (2).mp4',
        'img/TU/WhatsApp Video 2026-04-06 at 1.05.03 AM (3).mp4',
        'img/TU/WhatsApp Video 2026-04-06 at 1.05.05 AM.mp4',
        'img/TU/WhatsApp Video 2026-04-06 at 1.05.08 AM.mp4',
        'img/TU/4717f448-b716-48ff-9d7a-40c01553c5a6.MP4',
        
    ],
    10: [
         'img/TTK/TTK (1).MP4',
         'img/TTK/TTK (2).MP4',
         'img/TTK/TTK (3).MP4',
         'img/TTK/TTK (4).MP4',
         'img/TTK/TTK (5).MP4',
         'img/TTK/TTK (6).MP4',
         'img/TTK/TTK (7).MP4',
         'img/TTK/TTK (8).MP4',
         'img/TTK/TTK (9).MP4',
         'img/TTK/TTK (10).MP4',
         'img/TTK/TTK (11).MP4',
         'img/TTK/TTK (12).MP4',
         'img/TTK/TTK (13).MP4',
         'img/TTK/TTK (14).MP4',
         'img/TTK/TTK (15).MP4',
         'img/TTK/TTK (16).MP4',
         'img/TTK/TTK (17).MP4',
         'img/TTK/TTK (18).MP4',
         'img/TTK/TTK (19).MP4',
         'img/TTK/TTK (20).MP4',
         'img/TTK/TTK (21).MP4',
         'img/TTK/TTK (22).MP4',
         'img/TTK/TTK (23).MP4',
         'img/TTK/TTK (24).MP4',
         'img/TTK/TTK (25).MP4',
         'img/TTK/TTK (26).MP4',
         'img/TTK/TTK (27).MP4',
         'img/TTK/TTK (28).MP4',
         'img/TTK/TTK (29).MP4',
         'img/TTK/TTK (30).MP4',
         'img/TTK/TTK (31).MP4',
         'img/TTK/TTK (32).MP4',
         'img/TTK/TTK (33).MP4',
         'img/TTK/TTK (34).MP4',
         'img/TTK/TTK (35).MP4',
         'img/TTK/TTK (36).MP4',
         'img/TTK/TTK (37).MP4',
         'img/TTK/TTK (38).MP4',
         'img/TTK/TTK (39).MP4',
         'img/TTK/TTK (40).MP4',
         'img/TTK/TTK (41).MP4',
         'img/TTK/TTK (42).MP4',
         'img/TTK/TTK (43).MP4',
         'img/TTK/TTK (45).MP4',
         'img/TTK/TTK (44).MP4',
         'img/TTK/TTK (46).MP4',
         'img/TTK/TTK (47).MP4',
         'img/TTK/TTK (48).MP4',
         'img/TTK/TTK (49).MP4',
         'img/TTK/TTK (50).MP4',
         'img/TTK/TTK (51).MP4',
         'img/TTK/TTK (52).MP4',
         'img/TTK/TTK (53).MP4',
         'img/TTK/TTK (54).MP4',
         'img/TTK/TTK (55).MP4',
         'img/TTK/TTK (56).MP4',
         'img/TTK/TTK (57).MP4',
         'img/TTK/TTK (58).MP4',
         'img/TTK/TTK (59).MP4',
         'img/TTK/TTK (60).MP4',
         'img/TTK/TTK (70).mp4',
         'img/TTK/TTK (71).MP4',
         'img/TTK/TTK (72).MP4',
         'img/TTK/TTK (73).MP4',
         'img/TTK/TTK (74).MP4',
         'img/TTK/TTK (75).MP4',
         'img/TTK/TTK (76).MP4',
         'img/TTK/TTK (77).MP4',
         'img/TTK/TTK (78).MP4',
         'img/TTK/TTK (79).MP4',
         'img/TTK/TTK (80).MP4',
         'img/TTK/TTK (81).MP4',
         'img/TTK/TTK (82).MP4',
         'img/TTK/TTK (83).MP4',
         'img/TTK/TTK (84).MP4',
         'img/TTK/TTK (85).MP4',
         'img/TTK/TTK (86).MP4',
         'img/TTK/TTK (87).MP4',
         'img/TTK/TTK (88).MP4',
         'img/TTK/TTK (89).MP4',
         'img/TTK/TTK (90).MP4',
         'img/TTK/TTK (91).MP4',
         'img/TTK/TTK (92).MP4',
         'img/TTK/TTK (93).MP4',
         'img/TTK/TTK (94).MP4',
         'img/TTK/TTK (95).MP4',
         'img/TTK/TTK (96).MP4',
         'img/TTK/TTK (97).MP4',
         'img/TTK/TTK (98).MP4',
         'img/TTK/TTK (99).MP4',
         'img/TTK/TTK (100).MP4',
         'img/TTK/TTK (101).MP4',
         'img/TTK/TTK (102).MP4',
         'img/TTK/TTK (103).MP4',
         'img/TTK/TTK (104).MP4',
         'img/TTK/TTK (105).MP4',
         'img/TTK/TTK (106).MP4',
         'img/TTK/TTK (107).MP4',
         'img/TTK/TTK (108).MP4',
         'img/TTK/TTK (109).MP4',
         'img/TTK/TTK (110).MP4',
         'img/TTK/TTK (111).MP4',
        

            
    ],
    11: [
        BASE_URL + 'img/YO/YO (1).JPG',
        BASE_URL + 'img/YO/YO (1).mp4',
        BASE_URL + 'img/YO/YO (2).JPG',
        BASE_URL + 'img/YO/YO (2).MP4',
        BASE_URL + 'img/YO/YO (3).JPG',
        BASE_URL + 'img/YO/YO (4).JPG',
        BASE_URL + 'img/YO/YO (5).JPG',
        BASE_URL + 'img/YO/YO (6).JPG',
        BASE_URL + 'img/YO/YO (7).JPG',
        BASE_URL + 'img/YO/YO (8).JPG',
        BASE_URL + 'img/YO/YO (9).JPG',
        BASE_URL + 'img/YO/YO (10).JPG',
        BASE_URL + 'img/YO/YO (11).JPG',
        BASE_URL + 'img/YO/YO (12).JPG',
        BASE_URL + 'img/YO/YO (13).JPG',
        BASE_URL + 'img/YO/YO (14).JPG',
        BASE_URL + 'img/YO/YO (15).JPG',
        BASE_URL + 'img/YO/YO (16).JPG',
        BASE_URL + 'img/YO/YO (17).JPG',
        BASE_URL + 'img/YO/YO (18).JPG',
        BASE_URL + 'img/YO/YO (19).JPG',
        BASE_URL + 'img/YO/YO (20).JPG',
        BASE_URL + 'img/YO/YO (21).jpg',
        BASE_URL + 'img/YO/YO (22).jpg',
        BASE_URL + 'img/YO/YO (23).jpg',
        BASE_URL + 'img/YO/YO (24).jpg',

    ],
    12: [
        BASE_URL + 'img/VDN/VIDEOSNUESTR (1).mp4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (2).mp4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (3).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (4).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (5).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (6).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (7).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (8).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (9).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (10).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (11).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (12).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (13).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (14).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (15).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (16).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (17).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (18).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (19).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (20).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (21).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (22).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (23).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (24).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (25).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (26).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (27).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (28).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (29).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (30).MP4',
        BASE_URL + 'img/VDN/VIDEOSNUESTR (31).mp4',
        BASE_URL + 'img/VDN/WhatsApp Video 2026-04-04 at 3.25.06 AM.mp4',
    
    ],


    13: [
        BASE_URL + 'img/FDN/FDN (1).jpeg',
        BASE_URL + 'img/FDN/FDN (1).JPG',
        BASE_URL + 'img/FDN/FDN (2).jpeg',
        BASE_URL + 'img/FDN/FDN (2).JPG',
        BASE_URL + 'img/FDN/FDN (3).jpeg',
        BASE_URL + 'img/FDN/FDN (3).JPG',
        BASE_URL + 'img/FDN/FDN (4).JPG',
        BASE_URL + 'img/FDN/FDN (5).JPG',
        BASE_URL + 'img/FDN/FDN (6).JPG',
        BASE_URL + 'img/FDN/FDN (7).JPG',
        BASE_URL + 'img/FDN/FDN (8).JPG',
        BASE_URL + 'img/FDN/FDN (9).JPG',
        BASE_URL + 'img/FDN/FDN (10).JPG',
        BASE_URL + 'img/FDN/FDN (11).JPG',
        BASE_URL + 'img/FDN/FDN (12).JPG',
        BASE_URL + 'img/FDN/FDN (13).JPG',
        BASE_URL + 'img/FDN/FDN (14).JPG',
        BASE_URL + 'img/FDN/FDN (15).JPG',
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
document.getElementById('btn-regresar').addEventListener('click', cerrarGaleria);
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
    console.log(`Opening gallery ${num}, total items: ${currentGaleria ? currentGaleria.length : 'undefined'}`);
    console.log('First item:', currentGaleria && currentGaleria[0]);
    console.log('All items:', currentGaleria);
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
    
    // Filtrar items vacíos
    if (!item || item.trim() === '') {
        console.warn('Item vacío en index', currentIndex);
        galeriaContenido.innerHTML = '<p>Contenido no disponible</p>';
        actualizarBotonesNav();
        return;
    }
    
    console.log('Cargando item:', item);
    
    if (item.toLowerCase().endsWith('.mp4') || item.toLowerCase().endsWith('.webm') || item.toLowerCase().endsWith('.ogg')) {
        // Es un video
        const video = document.createElement('video');
        video.src = item;
        video.controls = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '70vh';
        video.preload = 'metadata';
        
        // Event listeners para debugging
        video.addEventListener('loadstart', () => console.log('Video loadstart:', item));
        video.addEventListener('loadedmetadata', () => console.log('Video loadedmetadata:', item));
        video.addEventListener('canplay', () => console.log('Video canplay:', item));
        video.addEventListener('error', (e) => {
            console.error('Video error:', item, e.message);
            video.innerHTML = '<p>Error loading video</p>';
        });
        
        galeriaContenido.appendChild(video);
    } else {
        // Es una imagen
        const img = document.createElement('img');
        img.src = item;
        img.alt = `Item ${currentIndex + 1}`;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '70vh';
        
        img.addEventListener('load', () => console.log('Image loaded:', item));
        img.addEventListener('error', (e) => {
            console.error('Image error:', item, e.message);
            img.innerHTML = '<p>Error loading image</p>';
        });
        
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

