"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClasseNovaLista = function () {
    function ClasseNovaLista(elementoLaDoHTML) {
        _classCallCheck(this, ClasseNovaLista);

        this.listaNotas = [];
        this.secao = elementoLaDoHTML;
    }

    _createClass(ClasseNovaLista, [{
        key: "adicionar",
        value: function adicionar(novoTitulo, novoTexto, secao) {

            var nota = {
                titulo: novoTitulo,
                texto: novoTexto,
                editando: false
            };

            this.listaNotas.push(nota);
            atualizarSecao(this.secao);
        }
    }, {
        key: "editar",
        value: function editar(index) {

            this.listaNotas[index].editando = true;
            atualizarSecao(this.secao);
        }
    }, {
        key: "remover",
        value: function remover(index) {

            this.listaNotas.splice(index, 1);
            atualizarSecao(this.secao);
        }
    }, {
        key: "salvar",
        value: function salvar(index, novoTitulo, novoTexto) {

            this.listaNotas[index].titulo = novoTitulo;
            this.listaNotas[index].texto = novoTexto;
            this.listaNotas[index].editando = false;

            atualizarSecao(this.secao);
        }
    }, {
        key: "pegar",
        value: function pegar(index) {
            return this.listaNotas[index];
        }
    }, {
        key: "contaTotal",
        value: function contaTotal() {
            return this.listaNotas.length;
        }
    }]);

    return ClasseNovaLista;
}();

;

var novaLista = new ClasseNovaLista(document.getElementsByClassName("notes")[0]);

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

//////////////////////////////////////////////////////////////

var Pessoa = function () {
    function Pessoa(nome, sobrenome, peso, altura, idade) {
        _classCallCheck(this, Pessoa);

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
        // this.nomeCompleto = `${nome} ${sobrenome}`;
        // this.anoNascimento = 2018 - idade;
        // this.imc = peso/(altura*altura);
    }

    _createClass(Pessoa, [{
        key: "mostraNomeCompleto",
        value: function mostraNomeCompleto() {
            return this.nome + " " + this.sobrenome;
        }
    }, {
        key: "mostraAnoNascimento",
        value: function mostraAnoNascimento() {
            var dataHoje = new Date();
            var anoAtual = dataHoje.getFullYear();
            return anoAtual - this.idade;
        }
    }, {
        key: "calcIMC",
        value: function calcIMC(peso, altura) {
            var alturaQuadrado = Math.pow(this.altura, 2);
            return this.peso / alturaQuadrado;
        }
    }]);

    return Pessoa;
}();

;

var bruna = new Pessoa("Bruna", "Vieira", 40, 1.57, 24);