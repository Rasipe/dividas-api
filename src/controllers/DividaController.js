const service = require('../services/DividaService')

module.exports = {
    async pegarTodos(req, res) {
        return res.json(await service.pegarTodos());
    },
    async pegar(req, res) {
        return res.json(await service.pegar(req.params.id));
    },
    async novaDivida(req, res) {
        let divida = req.body
        divida.total = divida.valorPagar
        return res.json(await service.novaDivida(req.body))
    },
    async pagar(req, res) {
        try {
            return res.json(await service.pagar(req.params.id, req.body.pagar));
        } catch (e){
            if (e.status)
                res.status(e.status).send(e.message)
            else
                res.status(500).send(e.message)
        }
    },
    async reagendar(req, res) {
        try {
            return res.json(await service.reagendar(req.params.id, req.body.data))
        } catch (e) {
            if (e.status)
                res.status(e.status).send(e.message)
            else
                res.status(500).send(e.message)
        }
    }
}