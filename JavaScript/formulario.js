function validar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

if (nome == "") {
    alert("Digite seu nome:");
    return false;
}

if (email.indexOf("@") == -1) {
    alert("Digite um e-mail válido.");
    return false;
}

if (mensagem == "") {
    alert("Digite sua mensagem.");
    return false;
}

alert("Mensagem enviada com sucesso!");
return false;
}