const mongoose = require('mongoose')

const DividaSchema = new mongoose.Schema({
    data: {
        type: Date,
        default: Date.now(),
    },
    dataPagamento: {
        type: Date,
        require: false
    },
    pessoa: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    valorPagar: {
        type: Number,
        require: true
    },
    valorPago: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        require: true
    },
})

mongoose.model('Divida', DividaSchema)