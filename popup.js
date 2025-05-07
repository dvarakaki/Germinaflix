const popup = document.getElementById('popup-container');
const abrirBotao = document.getElementById('abrir-popup');
const fecharBotao = document.getElementById('fechar-popup');

abrirBotao.addEventListener('click', () => {
    popup.classList.add('visible');
});

fecharBotao.addEventListener('click', () => {
    popup.classList.remove('visible');
});

// Opção: Fechar o pop-up ao clicar fora dele
document.addEventListener('click', (event) => {
    if (event.target.closest('.popup') === null && popup.classList.contains('visible')) {
        popup.classList.remove('visible');
    }
});