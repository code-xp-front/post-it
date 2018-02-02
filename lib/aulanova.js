"use strict";

// var pessoa = {
//     nome: "Camila",
//     idade: 18,
//     descobrirAnoNascimento: function() {

//     }
// }

// pessoa.descobrirAnoNascimento()

var novaLista = {
    listaNotas: [],
    secao: document.getElementsByClassName("notes")[0],

    adicionar: function adicionar(novoTitulo, novoTexto, secao) {

        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        this.listaNotas.push(nota);
        atualizarSecao(this.secao);
    },
    editar: function editar(index) {

        this.listaNotas[index].editando = true;
        atualizarSecao(this.secao);
    },
    remover: function remover(index) {

        this.listaNotas.splice(index, 1);
        atualizarSecao(this.secao);
    },
    salvar: function salvar(index, novoTitulo, novoTexto) {

        this.listaNotas[index].titulo = novoTitulo;
        this.listaNotas[index].texto = novoTexto;
        this.listaNotas[index].editando = false;

        atualizarSecao(this.secao);
    },
    pegar: function pegar(index) {
        return this.listaNotas[index];
    },
    contaTotal: function contaTotal() {
        return this.listaNotas.length;
    }
};

var atualizarSecao = function atualizarSecao(secao) {

    var inserirHTML = "";

    for (var index = 0; index < novaLista.contaTotal(); index++) {

        var notaAtual = novaLista.pegar(index);

        if (notaAtual.editando == true) {

            inserirHTML += "<form class=\"note note--editing\">\n                    <input class=\"note__title note__title--editing\" type=\"text\" name=\"title\" placeholder=\"T\xEDtulo\" value=\"" + notaAtual.titulo + "\" autofocus /> \n                    <textarea class=\"note__body note__body--editing\" name=\"body\" rows=\"5\" placeholder=\"Criar uma nota...\"> " + notaAtual.texto + " </textarea>\n                    <button class=\"note__control\" type=\"button\" onclick=\"adicionarNota(this.form.title, this.form.body, this.form, " + index + " )\"> Salvar </button> \n                    </form>";
        } else {

            inserirHTML += "<form class=\"note\" onclick=\"editarNota(" + index + ")\">\n                    <button class=\"note__excluir\" onclick=\"excluirNota(event, " + index + " )\">\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                    <h1 class=\"note__title\"> " + notaAtual.titulo + " </h1>\n                    <p class=\"note__body\"> " + notaAtual.texto + " </p>\n                    </form>";
        }
    }

    secao.innerHTML = inserirHTML;
};

var editarNota = function editarNota(index) {
    return novaLista.editar(index);
};

var adicionarNota = function adicionarNota(inputTitulo, inputTexto, formulario, index) {

    console.log(inputTexto);

    if (novaLista.pegar(index)) {

        novaLista.salvar(index, inputTitulo.value, inputTexto.value);
    } else {

        novaLista.adicionar(inputTitulo.value, inputTexto.value);
        formulario.reset();
    }
};

var excluirNota = function excluirNota(evento, index) {

    evento.stopPropagation();

    novaLista.listaNotas.splice(index, 1);
};