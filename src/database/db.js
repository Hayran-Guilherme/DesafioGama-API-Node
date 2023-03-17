import { Sequelize } from "sequelize";

const DB_NAME = 'teste_db';
const DB_USER = 'hayran';
const DB_PASS = '251604';
const configs = {
    dialect: 'mtsql',
    host: 'localhost',
    port: 3306
}

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, configs);

(async () => {
    try{
        await db.authenticated();
        console.log('Conexão bem sucedida')
    } catch (err){
        console.error(err)
    }
})();

export {db};