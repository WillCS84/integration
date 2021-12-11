/*
* GET: Buscar uma infromação do Back-End
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no Back-end
* DELETE: Deletar uma infromação no back-end
*
* TIPOS de Parametros
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request body: Corpo da requisição , utilizado para criar ou alterar recursos
*
*
*
*
*/

const express = require ( 'express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

