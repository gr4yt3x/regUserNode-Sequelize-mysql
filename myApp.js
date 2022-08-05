const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const user = require('./models/User');

app.use(bodyParser.text());


app.post('/cadastro', async (req,res) => {
    //recebe a requisição e transforma ela em JSON(json.parse)
    let body = JSON.parse(req.body);
    

    await user.create(body)
    .then(() => {
    return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso"
    })
    }).catch((error) => {
        console.log(error);
        res.status(400).json({
            erro: true,
            mensagem: "O usuário não foi cadastrado"
        });
    })
})




app.listen('3000', () => console.log("servidor ligado na porta 3000..."));

