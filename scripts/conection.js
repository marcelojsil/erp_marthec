const Sequelize  = require('sequelize')
const sequelize = new Sequelize('imobiliaria','root','', {
    host: "localhost",
    dialect: 'mysql'
})

/* verifica a conexão com o bd
sequelize.authenticate().then(
    function(){
        console.log("Conectado com Sucesso")
    }
).catch(
    function(erro){
        console.log("Falha ao conectar: "+erro)
    }
) */

export default {Sequelize, sequelize}


