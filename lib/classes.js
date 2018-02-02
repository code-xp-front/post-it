"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nota = function () {
    function Nota(novoTitulo, novoTexto) {
        _classCallCheck(this, Nota);

        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = false;
    }

    _createClass(Nota, [{
        key: "titulo",
        get: function get() {
            return this._titulo;
        },
        set: function set(tituloAlterado) {
            this._titulo = tituloAlterado;
        }
    }, {
        key: "texto",
        get: function get() {
            return this._texto;
        },
        set: function set(textoAlterado) {
            this._texto = textoAlterado;
        }
    }, {
        key: "editando",
        get: function get() {
            return this._editando;
        },
        set: function set(editandoAlterado) {
            this._editando = editandoAlterado;
        }
    }]);

    return Nota;
}();

;

var ClasseNovaLista = function (_Array) {
    _inherits(ClasseNovaLista, _Array);

    function ClasseNovaLista() {
        _classCallCheck(this, ClasseNovaLista);

        var _this = _possibleConstructorReturn(this, (ClasseNovaLista.__proto__ || Object.getPrototypeOf(ClasseNovaLista)).call(this));
        // this._listaNotas = [];


        _this._secao = document.getElementsByClassName("notes")[0];
        return _this;
    }

    _createClass(ClasseNovaLista, [{
        key: "push",
        value: function push(novoTitulo, novoTexto) {

            // let nota = {
            //     titulo: novoTitulo,
            //     texto: novoTexto,
            //     editando: false
            // };

            var novaNota = new Nota(novoTitulo, novoTexto);

            _get(ClasseNovaLista.prototype.__proto__ || Object.getPrototypeOf(ClasseNovaLista.prototype), "push", this).call(this, novaNota);
            atualizarSecao(this._secao);
        }
    }, {
        key: "editar",
        value: function editar(index) {

            this[index].editando = true;
            atualizarSecao(this._secao);
        }
    }, {
        key: "splice",
        value: function splice(index) {

            _get(ClasseNovaLista.prototype.__proto__ || Object.getPrototypeOf(ClasseNovaLista.prototype), "splice", this).call(this, index, 1);
            atualizarSecao(this._secao);
        }
    }, {
        key: "salvar",
        value: function salvar(index, novoTitulo, novoTexto) {

            this[index].titulo = novoTitulo;
            this[index].texto = novoTexto;
            this[index].editando = false;

            atualizarSecao(this._secao);
        }
    }, {
        key: "pegar",
        value: function pegar(index) {
            return this[index];
        }
    }, {
        key: "contaTotal",
        value: function contaTotal() {
            return this.length;
        }
    }]);

    return ClasseNovaLista;
}(Array);

;

var novaLista = new ClasseNovaLista();

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

        novaLista.push(inputTitulo.value, inputTexto.value);
        formulario.reset();
    }
};

var excluirNota = function excluirNota(evento, index) {

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