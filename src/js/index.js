const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const infos = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(index);

        esconderInformacoesAtivas();
        
        mostrarInformacoes(index);
    });
});

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imgAtiva = document.querySelector(".imagem-ativa");
    imgAtiva.classList.remove("imagem-ativa");
}

function mostrarImagemDeFundo(index) {
    imagens[index].classList.add("imagem-ativa");
}

function esconderInformacoesAtivas() {
    const infoAtiva = document.querySelector(".info-ativa");
    infoAtiva.classList.remove("info-ativa");
}

function mostrarInformacoes(index) {
    infos[index].classList.add("info-ativa");
}