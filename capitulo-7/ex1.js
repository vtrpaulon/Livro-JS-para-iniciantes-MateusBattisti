const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const termos = document.getElementById('termos');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Nome
    if (nome.value.trim() === '') {
        alert('O nome não pode estar vazio');
        nome.focus();
        return;
    }

    // Email
    if (!email.value.includes('@') || !email.value.includes('.')) {
        alert('Por favor, insira um e-mail válido');
        email.focus();
        return;
    }

    // Senha
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regexSenha.test(senha.value)) {
        alert('A senha deve ter no mínimo 8 caracteres, com letras e números');
        senha.focus();
        return;
    }

    // Termos
    if (!termos.checked) {
        alert('Você precisa aceitar os termos');
        return;
    }

    // Sucesso
    console.log('Nome:', nome.value);
    console.log('E-mail:', email.value);
    console.log('Aceitou termos:', termos.checked);

    alert('Formulário enviado com sucesso!');
    form.reset();
});
