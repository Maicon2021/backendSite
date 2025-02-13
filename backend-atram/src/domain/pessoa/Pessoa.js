class Pessoa extends Validate {

        constructor(id, nome, cpf, email, telefone, endereco, bairro, cidade, estado, cep) {
            super();
            this.id = id;
            this.nome = nome;
            this.cpf = cpf;
            this.email = email;
            this.telefone = telefone;
            this.endereco = endereco;
            this.bairro = bairro;
            this.cidade = cidade;
            this.estado = estado;
            this.cep = cep;

    }

    static fromJson(json) {
        return new Pessoa(json.id, json.nome, json.cpf, json.email, json.telefone, json.endereco, json.bairro, json.cidade, json.estado, json.cep);
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
            cep: this.cep
        };
    }
    
    // Implementação do método validateCPF
    validateCPF() {
        if (!this.cpf || typeof this.cpf !== "string") {
            return false;
        }

        const cpfLimpo = this.cpf.replace(/\D/g, "");

        if (cpfLimpo.length !== 11) {
            return false;
        }

        if (cpfLimpo === "00000000000" || cpfLimpo === "11111111111" || cpfLimpo === "22222222222" || cpfLimpo === "33333333333" || cpfLimpo === "44444444444" || cpfLimpo === "55555555555" || cpfLimpo === "66666666666" || cpfLimpo === "77777777777" || cpfLimpo === "88888888888" || cpfLimpo === "99999999999") {
            return false;
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
        }

        let resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        if (resto !== parseInt(cpfLimpo.charAt(9))) {
            return false;
        }

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
        }

        resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        if (resto !== parseInt(cpfLimpo.charAt(10))) {
            return false;
        }

        return true;        


    }

    get id() {
        return this.id;
    }

    get nome() {
        return this.nome;
    }

    get cpf() {
        return this.cpf;
    }

    get email() {
        return this.email;
    }

    get telefone() {
        return this.telefone;
    }

    get endereco() {
        return this.endereco;
    }

    get bairro() {
        return this.bairro;
    }

    get cidade() {
        return this.cidade;
    }

    get estado() {
        return this.estado;
    }

    get cep() {
        return this.cep;
    }

    set id(id) {
        this.id = id;
    }

    set nome(nome) {
        this.nome = nome;
    }

    set cpf(cpf) {
        this.cpf = cpf;
    }

    set email(email) {
        this.email = email;
    }

    set telefone(telefone) {
        this.telefone = telefone;
    }

    set endereco(endereco) {
        this.endereco = endereco;
    }

    set bairro(bairro) {
        this.bairro = bairro;
    }

    set cidade(cidade) {
        this.cidade = cidade;
    }

    set estado(estado) {
        this.estado = estado;
    }

    set cep(cep) {
        this.cep = cep;
    }




}