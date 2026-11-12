var tamanho = 18;

function aumentar() {
    tamanho = tamanho + 2;
    document.body.style.fontSize = tamanho + "px";
}

function diminuir() {
    tamanho = tamanho -2;
    document.body.style.fontSize = tamanho + "px";
}

function trocarTema() {
    // toggle: se o body não tem a classe "escuro", coloca. Se tem, tira.
    document.body.classList.toggle("escuro");
}