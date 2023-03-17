import express from 'express';
import routes from './routes/routes.js';

const app = express();

const port = 3333;

app.use(express.json());
app.use(routes);

global.test = []


app.listen(port, () => console.log(`server running on localhost: 3333:${port}`));