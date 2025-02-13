class Validate {

    constructor() {
        if (this.constructor === Validate) {
            throw new Error("Classe abstrat não pode ser intanciada diretamente");
        }

        if (typeof this.validateCPF !== 'function') {
            throw new Error("Deve ser implementado o método validateCPF");
        }
    }
}