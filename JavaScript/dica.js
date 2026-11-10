var dicas = [
    "Banco nunca pede senha por telefone.",
    "Desconfie de qualquer mensagem com pressa.",
    "Confirme pedidos de Pix ligando para a pessoa.",
    "Não clique em links encurtados que você não esperava.",
    "Nunca passe o código que chegou por SMS."
];

function novaDica() {
    var numero = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").innerHTML = dicas[numero];
}

novaDica();