let meuObjeto = {
    nome: "Vitor",
    idade: 38,
    cidade: "Bauru",
    ehEstudante: true,
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        bairro: "Centro"
    }
};

//Convertendo o objeto para JSON
let meuJson = JSON.stringify(meuObjeto);
console.log(meuJson);

//convertendo o JSON de volta para um objeto
let objetoNovo = JSON.parse(meuJson);
console.log(objetoNovo);