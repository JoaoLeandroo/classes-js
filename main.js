
class Shop {
    constructor(pagamento) {
        this.pagamento = pagamento;
    }

    debito() {
        // Desconto de 35%
        const desconto = (this.pagamento * 35) / 100
        return this.pagamento - desconto
    }

    credito() {
        // Sem desconto
        return this.pagamento
    }

    pix() {
        // Desconto de 50%
        const desconto = (this.pagamento * 50) / 100
        return this.pagamento - desconto
    }

    boleto() {
        // Desconto de 12%
        const desconto = (this.pagamento * 12) / 100
        return this.pagamento - desconto
    }
}

const clientX = new Shop(355) 

console.log(`Valor total: ${clientX.pagamento}, com desconto de 35% o valor final é ${clientX.debito()}`)
console.log(`Valor total: ${clientX.pagamento}, Compras no credito não possurem desconto.`)
console.log(`Valor total: ${clientX.pagamento}, com desconto de 50% o valor final é ${clientX.pix()}`)
console.log(`Valor total: ${clientX.pagamento}, com desconto de 12% o valor final é ${clientX.boleto()}`)