let campoNome = document.getElementById('name');

//Le o valor atual do campo
let nomeAtual = campoNome.value;

//Define um novo valor para o campo
campoNome.value = 'Novo Nome';

let campoCheckBox = document.getElementById('meuCheckBox');

//Verifica se a caixa de seleção esta marcada
let isChecked = campoCheckBox.checked;

//Marca a caixa de seleção
campoCheckBox.checked = true;
//Desmarca a caixa de seleção
campoCheckBox.checked = false;