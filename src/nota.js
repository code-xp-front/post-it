export default class Nota {
    constructor(novoTitulo, novoTexto) {
        // modificadores visibilidade
        this.titulo = novoTitulo;
        this.texto = novoTexto;
        this.editando = false;
    }
}