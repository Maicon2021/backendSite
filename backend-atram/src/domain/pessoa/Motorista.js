class Motorista extends Pessoa {

    constructor(id, nome, cpf, email, telefone, endereco, bairro, cidade, estado, cep, cnh, validadeCnh, categoriaCnh) {
        super(id, nome, cpf, email, telefone, endereco, bairro, cidade, estado, cep);
        this.cnh = cnh;
        this.validadeCnh = validadeCnh;
        this.categoriaCnh = categoriaCnh;
        this.veiculosIds = [];
    }


    // Método para associar um veículo ao motorista pelo ID do veículo
    adicionarVeiculo(veiculoId) {
        if (!this.veiculosIds.includes(veiculoId)) {
            this.veiculosIds.push(veiculoId);
            console.log(`Veículo com ID ${veiculoId} associado a ${this.nome}.`);
        } else {
            console.log(`Veículo com ID ${veiculoId} já está associado a ${this.nome}.`);
        }
    }

    // Método para desassociar um veículo do motorista pelo ID do veículo
    removerVeiculo(veiculoId) {
        if (this.veiculosIds.includes(veiculoId)) {
            this.veiculosIds = this.veiculosIds.filter(id => id !== veiculoId);
            console.log(`Veículo com ID ${veiculoId} desassociado de ${this.nome}.`);
        } else {
            console.log(`Veículo com ID ${veiculoId} não está associado a ${this.nome}.`);
        }
    }


    toJson() {
        return {
            id: this.id,
            nome: this.nome,
            cpf: this.cpf,
            email: this.email,
            telefone: this.telefone,
            endereco: this.endereco,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            cep: this.cep,
            cnh: this.cnh,
            validadeCnh: this.validadeCnh,
            categoriaCnh: this.categoriaCnh
        };
    }

  

}