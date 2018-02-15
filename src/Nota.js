class Nota {
    constructor(novoTitulo, novoTexto, novoEditando = false) {
        this.titulo = novoTitulo;
        this.texto = novoTexto;
        this.editando = novoEditando;
    }
};

export default Nota;