// Captura dos elementos
const formulario = document.getElementById('meuFormulario');
const campoNome = document.getElementById('nome');
const campoCheckBox = document.getElementById('meuCheckBox');
const campoSelect = document.getElementById('meuSelect');

// Evento de envio
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // impede envio automático

    // === VALIDAÇÃO DO NOME ===
    if (campoNome.value.trim() === '') {
        alert('O nome é obrigatório.');
        campoNome.focus();
        return;
    }

    // === VALIDAÇÃO DO CHECKBOX ===
    if (!campoCheckBox.checked) {
        alert('Você precisa aceitar os termos.');
        return;
    }

    // === VALIDAÇÃO DO SELECT ===
    if (campoSelect.value === '') {
        alert('Escolha uma opção.');
        campoSelect.focus();
        return;
    }

    // === SE PASSOU EM TODAS ===
    alert('Formulário validado com sucesso!');

    // EXEMPLOS DE MANIPULAÇÃO
    console.log('Nome:', campoNome.value);
    console.log('Aceitou termos:', campoCheckBox.checked);
    console.log('Opção escolhida:', campoSelect.value);

    // Limpar formulário (opcional)
    formulario.reset();
});
