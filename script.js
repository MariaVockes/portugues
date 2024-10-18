function ola() {
    alert("oiiiii")
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener('click', mudarParaDarkMode)

function mudarParaDarkMode() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle('dark-mode')
}