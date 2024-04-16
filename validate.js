//Seu JavaScript de validação aqui
document.addEventListener('DOMContentLoaded', function() {
    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var assuntoInput = document.getElementById('assunto');
    var mensagemTextarea = document.getElementById('mensagem');
    var enviarBtn = document.getElementById('enviar');

    // Função para verificar se todos os campos estão preenchidos
    function verificarCampos() {
        if (nomeInput.value.trim() !== '' && emailInput.value.trim() !== '' && assuntoInput.value.trim() !== '' && mensagemTextarea.value.trim() !== '') {
            enviarBtn.disabled = false; // Ativa o botão de envio
        } else {
            enviarBtn.disabled = true; // Desativa o botão de envio
        }
    }

    // Adiciona um listener de evento para cada campo do formulário
    nomeInput.addEventListener('input', verificarCampos);
    emailInput.addEventListener('input', verificarCampos);
    assuntoInput.addEventListener('input', verificarCampos);
    mensagemTextarea.addEventListener('input', verificarCampos);

    // Adiciona um listener de evento para o envio do formulário
    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        // Aqui você pode enviar o formulário para o servidor utilizando AJAX ou realizar qualquer outra ação necessária
        console.log('Formulário enviado! Em breve entrarei em contato!');
    });
});
