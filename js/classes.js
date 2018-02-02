class Nota {
    constructor(novoTitulo, novoTexto) {
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = false;
    }

    get titulo() {
        return this._titulo;
    }

    get texto() {
        return this._texto;
    }

    get editando() {
        return this._editando;
    }

    set titulo(tituloAlterado) {
        this._titulo = tituloAlterado;
    }

    set texto(textoAlterado) {
        this._texto = textoAlterado;
    }

    set editando(editandoAlterado) {
        this._editando = editandoAlterado;
    }
};

class ClasseNovaLista extends Array {
    constructor() {
        // this._listaNotas = [];
        super();
        this._secao = document.getElementsByClassName("notes")[0];
    }

    push(novoTitulo, novoTexto) {

        // let nota = {
        //     titulo: novoTitulo,
        //     texto: novoTexto,
        //     editando: false
        // };

        let novaNota = new Nota(novoTitulo, novoTexto);

        super.push(novaNota);
        atualizarSecao(this._secao);

    }

    editar(index) {

        this[index].editando = true;
        atualizarSecao(this._secao);

    }

    splice(index) {

        super.splice(index, 1);
        atualizarSecao(this._secao);

    }

    salvar(index, novoTitulo, novoTexto) {

        this[index].titulo = novoTitulo;
        this[index].texto = novoTexto;
        this[index].editando = false;

        atualizarSecao(this._secao);

    }

    pegar(index) {
        return this[index]
    }
    contaTotal() {
        return this.length
    }
};

let novaLista = new ClasseNovaLista();



const atualizarSecao = secao => {

    let inserirHTML = "";

    for (let index = 0; index < novaLista.contaTotal(); index++) {

        let notaAtual = novaLista.pegar(index);

        if (notaAtual.editando == true) {

            inserirHTML += `<form class="note note--editing">
                    <input class="note__title note__title--editing" type="text" name="title" placeholder="Título" value="${notaAtual.titulo}" autofocus /> 
                    <textarea class="note__body note__body--editing" name="body" rows="5" placeholder="Criar uma nota..."> ${notaAtual.texto} </textarea>
                    <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.body, this.form, ${index} )"> Salvar </button> 
                    </form>`;

        } else {

            inserirHTML += `<form class="note" onclick="editarNota(${index})">
                    <button class="note__excluir" onclick="excluirNota(event, ${index} )">
                    <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <h1 class="note__title"> ${notaAtual.titulo} </h1>
                    <p class="note__body"> ${notaAtual.texto} </p>
                    </form>`;
        }
    }

    secao.innerHTML = inserirHTML;

};


const editarNota = index => novaLista.editar(index);


const adicionarNota = (inputTitulo, inputTexto, formulario, index) => {

    console.log(inputTexto);

    if (novaLista.pegar(index)) {

        novaLista.salvar(index, inputTitulo.value, inputTexto.value);

    } else {

        novaLista.push(inputTitulo.value, inputTexto.value);
        formulario.reset();

    }
};


const excluirNota = (evento, index) => {

    evento.stopPropagation();

    novaLista.listaNotas.splice(index, 1);

};

//////////////////////////////////////////////////////////////

// class Pessoa {
//     constructor(nome, sobrenome, peso, altura, idade) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//         this.peso = peso;
//         this.altura = altura;
//         this.idade = idade;
//         // this.nomeCompleto = `${nome} ${sobrenome}`;
//         // this.anoNascimento = 2018 - idade;
//         // this.imc = peso/(altura*altura);
//     }

//     mostraNomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`;
//     }

//     mostraAnoNascimento() {
//         let dataHoje = new Date();
//         let anoAtual = dataHoje.getFullYear();
//         return anoAtual - this.idade;
//     }

//     calcIMC(peso, altura) {
//         let alturaQuadrado = Math.pow(this.altura, 2);
//         return this.peso / alturaQuadrado;
//     }
// };

// let bruna = new Pessoa("Bruna", "Vieira", 40, 1.57, 24);

// class Medico extends Pessoa {
//     constructor(nome, sobrenome, peso, altura, idade, crm) {
//         super(nome, sobrenome, peso, altura, idade);
//         this._crm = crm;
//     }

//     get crm() {
//         return this._crm;
//     }

//     set crm(crmAlterado) {
//         this._crm = crmAlterado;
//     }
// }

// let brunaMedica = new Medico("Bruna", "Vieira", 50, 1.57, 30, "492084923489");

///////////////////////////////////////////////////////////////

// class Casa {
//     constructor(qtdComodos, valor, alugada, vendedor) {
//         this._qtdComodos = qtdComodos;
//         this._valor = valor;
//         this._alugada = alugada;
//         this._vendedor = vendedor;
//     }

//     get qtdComodos() {
//         return this._qtdComodos;
//     }

//     get valor() {
//         return this._valor;
//     }

//     get alugada() {
//         return this._alugada;
//     }

//     get vendedor() {
//         return this._vendedor;
//     }

//     set qtdComodos(qtdComodosAlterado) {
//         this._qtdComodos = qtdComodosAlterado;
//     }

//     set valor(valorAlterado) {
//         this._valor = valorAlterado;
//     }

//     set alugada(alugadaAlterado) {
//         this._alugada = alugadaAlterado;
//     }

//     set vendedor(vendedorAlterado) {
//         this._vendedor = vendedorAlterado;
//     }
// }

// class Apartamento extends Casa {
//     constructor(qtdComodos, valor, alugada, vendedor, bloco, andar) {
//         super(qtdComodos, valor, alugada, vendedor);
//         this._bloco = bloco;
//         this._andar = andar;
//     }
    
//     get bloco() {
//         return this._bloco;
//     }

//     get andar() {
//         return this._andar;
//     }

//     set bloco(blocoAlterado) {
//         this._bloco = blocoAlterado;
//     }

//     set andar(andarAlterado) {
//         this._andar = andarAlterado;
//     }
// }



