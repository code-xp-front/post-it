/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ClasseNovaLista = __webpack_require__(1);

var _ClasseNovaLista2 = _interopRequireDefault(_ClasseNovaLista);

var _formInput = __webpack_require__(3);

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secao = document.getElementsByClassName('notes')[0];

var observaMudancasNaLista = function observaMudancasNaLista() {
    atualizarSecao(secao);
};

var novaLista = new _ClasseNovaLista2.default(observaMudancasNaLista);

var atualizarSecao = function atualizarSecao(secao) {

    var inserirHTML = "";

    var _loop = function _loop(index) {

        var notaAtual = novaLista.pegar(index);

        if (notaAtual.editando == true) {

            // let formularioNotas = document.createElement('form');
            // formularioNotas.setAttribute('class', 'note note--editing');

            var _formularioNotas = new _formularioNotas();

            var inputTitulo = document.createElement('input');
            inputTitulo.setAttribute('class', 'note__title note--editing');
            inputTitulo.setAttribute('type', 'text');
            inputTitulo.setAttribute('name', 'title');
            inputTitulo.setAttribute('placeholder', 'Título');
            inputTitulo.setAttribute('value', notaAtual.titulo);

            var inputTexto = document.createElement('textarea');
            inputTexto.setAttribute('class', 'note__body note__body--editing');
            inputTexto.setAttribute('name', 'body');
            inputTexto.setAttribute('rows', '5');
            inputTexto.setAttribute('placeholder', 'Criar uma nota...');
            // inputTexto.value = notaAtual.texto;
            inputTexto.innerHTML = notaAtual.texto;

            var botaoSalvar = document.createElement('button');
            botaoSalvar.setAttribute('class', 'note__control');
            botaoSalvar.setAttribute('type', 'button');
            botaoSalvar.addEventListener('click', function () {
                // event.target.form
                adicionarNota(inputTitulo, inputTexto, _formularioNotas, index);
            });
            botaoSalvar.setAttribute('value', 'Salvar');

            // inserirHTML += `<form class="note note--editing">
            //         <input class="note__title note__title--editing" type="text" name="title" placeholder="Título" value="${notaAtual.titulo}" autofocus /> 
            //         <textarea class="note__body note__body--editing" name="body" rows="5" placeholder="Criar uma nota..."> ${notaAtual.texto} </textarea>
            //         <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.body, this.form, ${index} )"> Salvar </button> 
            //         </form>`;
        } else {

            inserirHTML += '<form class="note" onclick="editarNota(' + index + ')">\n                    <button class="note__excluir" onclick="excluirNota(event, ' + index + ' )">\n                    <i class="fa fa-times" aria-hidden="true"></i>\n                    </button>\n                    <h1 class="note__title"> ' + notaAtual.titulo + ' </h1>\n                    <p class="note__body"> ' + notaAtual.texto + ' </p>\n                    </form>';
        }
    };

    for (var index = 0; index < novaLista.contaTotal(); index++) {
        _loop(index);
    }

    secao.innerHTML = inserirHTML;
};

window.editarNota = function (index) {
    return novaLista.editar(index);
};

window.adicionarNota = function (inputTitulo, inputTexto, formulario, index) {

    // console.log("testeeeeee");

    if (novaLista.pegar(index)) {

        novaLista.salvar(index, inputTitulo.value, inputTexto.value);
    } else {

        novaLista.adicionar(inputTitulo.value, inputTexto.value);
        formulario.reset();
    }
};

window.excluirNota = function (evento, index) {

    evento.stopPropagation();

    novaLista.remover(index);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Nota = __webpack_require__(2);

var _Nota2 = _interopRequireDefault(_Nota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClasseNovaLista = function () {
    function ClasseNovaLista(observador) {
        _classCallCheck(this, ClasseNovaLista);

        this._listaNotas = [];
        this._observador = observador;
    }

    _createClass(ClasseNovaLista, [{
        key: 'adicionar',
        value: function adicionar(novoTitulo, novoTexto) {

            var novaNota = new _Nota2.default(novoTitulo, novoTexto);

            this._listaNotas.push(novaNota);
            this._observador();
        }
    }, {
        key: 'editar',
        value: function editar(index) {

            this._listaNotas[index].editando = true;
            this._observador();
        }
    }, {
        key: 'remover',
        value: function remover(index) {

            this._listaNotas.splice(index, 1);
            this._observador();
        }
    }, {
        key: 'salvar',
        value: function salvar(index, novoTitulo, novoTexto) {

            this._listaNotas[index].titulo = novoTitulo;
            this._listaNotas[index].texto = novoTexto;
            this._listaNotas[index].editando = false;

            this._observador();
        }
    }, {
        key: 'pegar',
        value: function pegar(index) {
            return this._listaNotas[index];
        }
    }, {
        key: 'contaTotal',
        value: function contaTotal() {
            return this._listaNotas.length;
        }
    }]);

    return ClasseNovaLista;
}();

;

exports.default = ClasseNovaLista;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nota = function Nota(novoTitulo, novoTexto) {
    _classCallCheck(this, Nota);

    this.titulo = novoTitulo;
    this.texto = novoTexto;
    this.editando = false;
};

;

exports.default = Nota;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormInput() {

    var formularioNotas = document.createElement('form');

    formularioNotas.setAttribute('class', 'note note--editing');

    return FormInput;
};

exports.default = formularioNotas;

/***/ })
/******/ ]);