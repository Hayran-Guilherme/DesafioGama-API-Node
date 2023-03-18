const express = require("express");
const routes = require("./routes");
const handleError = require("./middlewares/handleError");

const db = require("./database");
 
const app = express();

const port = 3306;

db.hasConection();

app.use(express.json());

app.use(routes);
app.use(handleError);

app.listen(port, () => console.log("Servidor rodando na porta 3306"));