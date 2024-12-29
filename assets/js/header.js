// header.js

// Obtener los elementos del DOM
export const navMenu = document.getElementById('nav-menu');
export const navToggle = document.getElementById('nav-toggle');
export const navClose = document.getElementById('nav-close');

// Función para mostrar el menú
export function showMenu() {
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
}

// Función para ocultar el menú
export function hideMenu() {
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
}

// Si necesitas inicializar algo desde el archivo importado
showMenu();
hideMenu();

