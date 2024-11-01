const formulario = document.querySelector("#meuFormulario");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
const campoA = parseFloat(document.querySelector("#campoA").value);
    const campoB = parseFloat(document.querySelector("#campoB").value);
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido: o número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido: o número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});