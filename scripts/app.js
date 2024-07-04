const express = require("express");
const app = express();

app.get("/index.html", function(req, res){
    res.end("Essa é a página de logon.");
});
app.get("/src/main.html", function(req, res){
    res.end("Essa é a primeira página logado!");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});

// CARREGANDO PARAMETROS 
app.get("/sobre/:nome/:cargo", function(req, res){
    res.end("<h1>Seja bem vindo "+req.params.nome+"</h1>"+
        "<h2>Sua profissão é "+req.params.cargo+"</h2>"
    );
});

// CARREGANDO PÁGINAS HTML
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});