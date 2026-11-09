function validar() {
    
    document.getElementById("sucesso").textContent = "";

    setTimeout(apagarMensagem, 3000);

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

document.getElementById("sucesso").textContent = "Mensagem enviada com sucesso!";


document.getElementById("nome").value = "";
document.getElementById("email").value = "";
document.getElementById("mensagem").value = "";

return false;
}

function apagarMensagem() {
    document.getElementById("sucesso").textContent = "";
}