var menuIcon = document.getElementById('menu-icon'); // Seleciona o ícone do menu
var menu = document.querySelector('.menu'); // Seleciona o menu

const imgClose = 'src/assets/icons/close-outline.svg';
const imgOpen = 'src/assets/icons/reorder-four-outline.svg';

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('ativa'); // Alterna a classe 'ativa' no menu

    // Verifica o estado e muda a imagem do ícone
    if (menu.classList.contains('ativa')) {
        menuIcon.src = imgClose; // Muda para o ícone "X"
    } else {
        menuIcon.src = imgOpen; // Muda de volta para o ícone original
    }
});