module.exports = class HTTPError extends Error{
    constructor(mensagem, status) {
        super(mensagem)
        this.status = status
    }
}
