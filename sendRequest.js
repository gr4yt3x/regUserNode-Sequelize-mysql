//Esse arquivo é responsável por mandar uma requisição POST para o /cadastrar com os dados do cadastro, ele foi criado para substituir um front-end enquanto estou desenvolvendo. 
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let request = new XMLHttpRequest();
request.open('POST','http://localhost:3000/cadastro', false);

let data = {name: "Robertinho", age: 25}; //body da requisição que vai ser enviado
let data_string = JSON.stringify(data); //transforma o body de JSON para texto

request.send(data_string); //envia a requisição 
console.log(request.responseText); //mostra na tela a resposta recebida 
