const resumos = document.querySelectorAll('.resumos');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let resumoAtual = 0;

function escorderResumo() {
    resumos.forEach(resumo => {
        resumo.classList.remove('aberto')
    });
};

function mostrarResumo() {
    resumos[resumoAtual].classList.add('aberto');
};

setaAvancar.addEventListener('click', function () {

    const totalDeResumos = resumos.length - 1;
    if (resumoAtual === totalDeResumos) {
        console.log('não pode avançar mais');
        return;
    }

    resumoAtual++;

    event.preventDefault();
    escorderResumo();
    mostrarResumo();
});

setaVoltar.addEventListener('click', function () {

    if (resumoAtual === 0) {
        console.log('não tem mais como voltar');
        return;
    }

    resumoAtual--;

    event.preventDefault();
    escorderResumo();
    mostrarResumo();
});