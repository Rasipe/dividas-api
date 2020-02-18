const repository = require('../repositories/DividaRepository')
const HTTPError = require('../util/HTTPError')

module.exports = {
    async pegarTodos() {
        return await repository.pegarTodos()
    },
    async pegar(id) {
        return await repository.pegar(id)
    },
    async novaDivida(divida) {
        return repository.novaDivida(divida)
    },
    async pagar(id, valor) {
        valor = parseFloat(valor)
        let divida = await repository.pegar(id)
        divida.valorPago += valor;
        
        if ((divida.valorPagar < 0 && valor < 0) || (divida.valorPagar > 0 && valor > 0))
            throw new HTTPError('Não pode aumentar a divida, abra uma nova', 400)
        divida.total = divida.valorPagar + divida.valorPago

        if (divida.total < 0 && divida.valorPagar > 0)
            throw new HTTPError('Não pode pagar um valor maior do que está devendo', 400)
        if (divida.total > 0 && divida.valorPagar < 0)
            throw new HTTPError('Não pode receber um valor maior do que te devem', 400)
        return await repository.atualizar(id, divida)
    },
    async reagendar(id, data) {
        let divida = await repository.pegar(id)
        let novaData = new Date(data)
        if (novaData.getTime() < Date.now())
            throw new HTTPError('Não pode Reagendar para uma data que já passou')
        divida.dataPagamento = novaData
        return await repository.atualizar(id, divida)
    }
}