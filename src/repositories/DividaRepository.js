const mongoose = require('mongoose');
const Divida = mongoose.model('Divida')

module.exports = {
    async pegarTodos() {
        return await Divida.find()
    },
    async pegar(id) {
        return await Divida.findById(id);
    },
    async novaDivida(divida) {
        return await Divida.create(divida)
    },
    async atualizar(id, divida) {
        return await Divida.findByIdAndUpdate(id, divida, { new: true });
    }
}