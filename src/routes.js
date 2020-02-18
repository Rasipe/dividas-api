const express = require('express');
const routes = express.Router();

const DividaController = require('./controllers/DividaController')

routes.get('/dividas', DividaController.pegarTodos)
routes.get('/dividas/:id', DividaController.pegar)
routes.post('/dividas', DividaController.novaDivida)
routes.put('/dividas/pagar/:id', DividaController.pagar)
routes.put('/dividas/reagendar/:id', DividaController.reagendar)

module.exports = routes