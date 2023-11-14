const botoes = document.querySelectorAll('.personagem');
const personagens = document.querySelectorAll(".ficha-do-personagem");

botoes.forEach((personagem, indice) => {
    personagem.addEventListener("click", () => {
        event.preventDefault();
        desselecionarBotao();
        desselecionarPersonagem();

        personagem.classList.add("selecionado");
        personagens[indice].classList.add('selecionado');
    });
});

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".personagem.selecionado");
    botaoSelecionado.classList.remove("selecionado");
};

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".ficha-do-personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
};
