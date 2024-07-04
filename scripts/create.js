//import { Sequelize } from "sequelize";
import sequelize from "./conection";

var table = 'pessoas';

const Tables = sequelize.define('pessoas', {
    nome: {type: Sequelize.TEXT},
    email: {type: Sequelize.TEXT},
    funcao: {type: Sequelize.STRING},
    whatsapp: {type: Sequelize.NUMBER}
})

Tables.sync({force: true});