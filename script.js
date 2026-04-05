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
        BASE_URL + 'img/PF/convertido.mp4',

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
        BASE_URL + 'img/MMRM/MOMENTOS RAN (1).MP4',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (2).JPG',
        BASE_URL + 'img/MMRM/videooconverti2.MP4',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (3).JPG',
        BASE_URL + 'img/MMRM/VIDEOCONVERTIDO3.MP4',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (4).JPG',
        BASE_URL + 'img/MMRM/MOMENTOS RAN (4).MP4',
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
        BASE_URL + 'img/TU/TU (1).MP4',
        BASE_URL + 'img/TU/TU (1).PNG',
        BASE_URL + 'img/TU/TU (2).JPG',
        BASE_URL + 'img/TU/TU (2).MP4',
        BASE_URL + 'img/TU/TU (2).PNG',
        BASE_URL + 'img/TU/TU (3).JPG',
        BASE_URL + 'img/TU/TU (3).MP4',
        BASE_URL + 'img/TU/TU (3).PNG',
        BASE_URL + 'img/TU/TU (4).JPG',
        BASE_URL + 'img/TU/WhatsApp Video 2026-04-04 at 2.10.22 AM.mp4',
        BASE_URL + 'img/TU/TU (4).PNG',
        BASE_URL + 'img/TU/TU (5).JPG',
        BASE_URL + 'img/TU/TU (5).MP4',
        BASE_URL + 'img/TU/TU (5).PNG',
        BASE_URL + 'img/TU/TU (6).JPG',
        BASE_URL + 'img/TU/TU (6).MP4',
        BASE_URL + 'img/TU/TU (7).JPG',
        BASE_URL + 'img/TU/TU (7).mp4',
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
        
    ],
    10: [BASE_URL + 'img/TTK/TIKTK (1).MP4',
        BASE_URL + 'img/TTK/TIKTK (2).MP4',
        BASE_URL + 'img/TTK/TIKTK (3).MP4',
        BASE_URL + 'img/TTK/TIKTK (4).MP4',
        BASE_URL + 'img/TTK/TIKTK (5).MP4',
        BASE_URL + 'img/TTK/TIKTK (6).MP4',
        BASE_URL + 'img/TTK/TIKTK (7).MP4',
        BASE_URL + 'img/TTK/TIKTK (8).MP4',
        BASE_URL + 'img/TTK/TIKTK (9).MP4',
        BASE_URL + 'img/TTK/TIKTK (10).MP4',
        BASE_URL + 'img/TTK/TIKTK (11).MP4',
        BASE_URL + 'img/TTK/TIKTK (12).MP4',
        BASE_URL + 'img/TTK/TIKTK (13).MP4',
        BASE_URL + 'img/TTK/TIKTK (14).MP4',
        BASE_URL + 'img/TTK/TIKTK (15).MP4',
        BASE_URL + 'img/TTK/TIKTK (16).MP4',
        BASE_URL + 'img/TTK/TIKTK (17).MP4',
        BASE_URL + 'img/TTK/TIKTK (18).MP4',
        BASE_URL + 'img/TTK/TIKTK (19).MP4',
        BASE_URL + 'img/TTK/TIKTK (20).MP4',
        BASE_URL + 'img/TTK/TIKTK (21).MP4',
        BASE_URL + 'img/TTK/TIKTK (22).MP4',
        BASE_URL + 'img/TTK/TIKTK (23).MP4',
        BASE_URL + 'img/TTK/TIKTK (24).MP4',
        BASE_URL + 'img/TTK/TIKTK (25).MP4',
        BASE_URL + 'img/TTK/TIKTK (26).MP4',
        BASE_URL + 'img/TTK/TIKTK (27).MP4',
        BASE_URL + 'img/TTK/TIKTK (28).MP4',
        BASE_URL + 'img/TTK/TIKTK (29).MP4',
        BASE_URL + 'img/TTK/TIKTK (30).MP4',
        BASE_URL + 'img/TTK/TIKTK (31).MP4',
        BASE_URL + 'img/TTK/TIKTK (32).MP4',
        BASE_URL + 'img/TTK/TIKTK (33).MP4',
        BASE_URL + 'img/TTK/TIKTK (34).MP4',
        BASE_URL + 'img/TTK/TIKTK (35).MP4',
        BASE_URL + 'img/TTK/TIKTK (36).MP4',
        BASE_URL + 'img/TTK/TIKTK (37).MP4',
        BASE_URL + 'img/TTK/TIKTK (38).MP4',
        BASE_URL + 'img/TTK/TIKTK (39).MP4',
        BASE_URL + 'img/TTK/TIKTK (40).MP4',
        BASE_URL + 'img/TTK/TIKTK (41).MP4',
        BASE_URL + 'img/TTK/TIKTK (42).MP4',
        BASE_URL + 'img/TTK/TIKTK (43).MP4',
        BASE_URL + 'img/TTK/TIKTK (44).MP4',
        BASE_URL + 'img/TTK/TIKTK (45).MP4',
        BASE_URL + 'img/TTK/TIKTK (46).MP4',
        BASE_URL + 'img/TTK/TIKTK (47).MP4',
        BASE_URL + 'img/TTK/TIKTK (48).MP4',
        BASE_URL + 'img/TTK/TIKTK (49).MP4',
        BASE_URL + 'img/TTK/TIKTK (50).MP4',
        BASE_URL + 'img/TTK/TIKTK (51).MP4',
        BASE_URL + 'img/TTK/TIKTK (52).MP4',
        BASE_URL + 'img/TTK/TIKTK (53).MP4',
        BASE_URL + 'img/TTK/TIKTK (54).MP4',
        BASE_URL + 'img/TTK/TIKTK (55).MP4',
        BASE_URL + 'img/TTK/TIKTK (57).MP4',
        BASE_URL + 'img/TTK/TIKTK (56).MP4',
        BASE_URL + 'img/TTK/TIKTK (58).MP4',
        BASE_URL + 'img/TTK/TIKTK (59).MP4',
        BASE_URL + 'img/TTK/TIKTK (60).MP4',
        BASE_URL + 'img/TTK/TIKTK (61).MP4',
        BASE_URL + 'img/TTK/TIKTK (62).MP4',
        BASE_URL + 'img/TTK/TIKTK (63).MP4',
        BASE_URL + 'img/TTK/TIKTK (64).MP4',
        BASE_URL + 'img/TTK/TIKTK (65).MP4',
        BASE_URL + 'img/TTK/TIKTK (66).MP4',
        BASE_URL + 'img/TTK/TIKTK (67).MP4',
        BASE_URL + 'img/TTK/TIKTK (68).MP4',
        BASE_URL + 'img/TTK/TIKTK (69).MP4',
        BASE_URL + 'img/TTK/TIKTK (70).MP4',
        BASE_URL + 'img/TTK/TIKTK (71).MP4',
        BASE_URL + 'img/TTK/TIKTK (72).MP4',
        BASE_URL + 'img/TTK/TIKTK (73).MP4',
        BASE_URL + 'img/TTK/TIKTK (74).MP4',
        BASE_URL + 'img/TTK/TIKTK (75).MP4',
        BASE_URL + 'img/TTK/TIKTK (76).MP4',
        BASE_URL + 'img/TTK/TIKTK (77).MP4',
        BASE_URL + 'img/TTK/TIKTK (78).MP4',
        BASE_URL + 'img/TTK/TIKTK (79).MP4',
        BASE_URL + 'img/TTK/TIKTK (80).MP4',
        BASE_URL + 'img/TTK/TIKTK (81).MP4',
        BASE_URL + 'img/TTK/TIKTK (82).MP4',
        BASE_URL + 'img/TTK/TIKTK (83).MP4',
        BASE_URL + 'img/TTK/TIKTK (84).MP4',
        BASE_URL + 'img/TTK/TIKTK (85).MP4',
        BASE_URL + 'img/TTK/TIKTK (86).MP4',
        BASE_URL + 'img/TTK/TIKTK (87).MP4',
        BASE_URL + 'img/TTK/TIKTK (88).MP4',
        BASE_URL + 'img/TTK/TIKTK (89).MP4',
        BASE_URL + 'img/TTK/TIKTK (90).MP4',
        BASE_URL + 'img/TTK/TIKTK (91).MP4',
        BASE_URL + 'img/TTK/TIKTK (92).MP4',
        BASE_URL + 'img/TTK/TIKTK (93).MP4',
        BASE_URL + 'img/TTK/TIKTK (94).MP4',
        BASE_URL + 'img/TTK/TIKTK (95).MP4',
        BASE_URL + 'img/TTK/TIKTK (96).MP4',
        BASE_URL + 'img/TTK/TIKTK (97).MP4',
        BASE_URL + 'img/TTK/TIKTK (98).MP4',
        BASE_URL + 'img/TTK/TIKTK (99).MP4',
        BASE_URL + 'img/TTK/TIKTK (100).MP4',
        BASE_URL + 'img/TTK/TIKTK (101).MP4',
        BASE_URL + 'img/TTK/TIKTK (102).MP4',
        BASE_URL + 'img/TTK/TIKTK (103).MP4',
        BASE_URL + 'img/TTK/TIKTK (104).MP4',
        BASE_URL + 'img/TTK/TIKTK (105).mp4',
        BASE_URL + 'img/TTK/TIKTK (106).mp4',
        BASE_URL + 'img/TTK/TIKTK (107).mp4',
        BASE_URL + 'img/TTK/TIKTK (108).mp4',
        BASE_URL + 'img/TTK/TIKTK (109).MP4',
        BASE_URL + 'img/TTK/TIKTK (110).MP4',
        BASE_URL + 'img/TTK/TIKTK (111).MP4',
        '',

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

// Variables para swipe/drag
let isDragging = false;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let isSwiping = false;

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
    mostrarItemGaleria();
    modalGaleria.style.display = 'block';
    agregarEventosSwipe();
}

function cerrarGaleria() {
    modalGaleria.style.display = 'none';
    quitarEventosSwipe();
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

// Funciones para swipe/drag
function agregarEventosSwipe() {
    const content = document.querySelector('.modal-content-galeria');
    
    // Touch events para móvil
    content.addEventListener('touchstart', handleTouchStart, { passive: false });
    content.addEventListener('touchmove', handleTouchMove, { passive: false });
    content.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Mouse events para desktop
    content.addEventListener('mousedown', handleMouseDown);
    content.addEventListener('mousemove', handleMouseMove);
    content.addEventListener('mouseup', handleMouseUp);
    content.addEventListener('mouseleave', handleMouseUp);
}

function quitarEventosSwipe() {
    const content = document.querySelector('.modal-content-galeria');
    
    content.removeEventListener('touchstart', handleTouchStart);
    content.removeEventListener('touchmove', handleTouchMove);
    content.removeEventListener('touchend', handleTouchEnd);
    
    content.removeEventListener('mousedown', handleMouseDown);
    content.removeEventListener('mousemove', handleMouseMove);
    content.removeEventListener('mouseup', handleMouseUp);
    content.removeEventListener('mouseleave', handleMouseUp);
}

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isSwiping = true;
}

function handleTouchMove(e) {
    if (!isSwiping) return;
    e.preventDefault();
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    if (!isSwiping) return;
    const diffX = startX - currentX;
    const diffY = startY - currentY;
    const threshold = 50;
    
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > threshold) {
        // Swipe vertical
        if (diffY > 0) {
            // Swipe hacia arriba - no hacer nada
        } else {
            // Swipe hacia abajo - cerrar galería
            cerrarGaleria();
        }
    } else if (Math.abs(diffX) > threshold) {
        // Swipe horizontal - navegar
        if (diffX > 0) {
            navegarGaleria(1);
        } else {
            navegarGaleria(-1);
        }
    }
    isSwiping = false;
}

function handleMouseDown(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    e.preventDefault();
}

function handleMouseMove(e) {
    if (!isDragging) return;
    currentX = e.clientX;
    currentY = e.clientY;
}

function handleMouseUp(e) {
    if (!isDragging) return;
    const diffX = startX - currentX;
    const diffY = startY - currentY;
    const threshold = 50;
    
    if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            navegarGaleria(1);
        } else {
            navegarGaleria(-1);
        }
    }
    isDragging = false;
}