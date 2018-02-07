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


var _listaNotas = __webpack_require__(1);

var _listaNotas2 = _interopRequireDefault(_listaNotas);

var _formInput = __webpack_require__(3);

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secao = document.getElementsByClassName('notes')[0];
var observaMudancasNaLista = function observaMudancasNaLista() {
    atualizarSecao(secao);
};

var listaNotas = new _listaNotas2.default(observaMudancasNaLista);

var atualizarSecao = function atualizarSecao(secao) {
    var conteudoSecao = "";

    var _loop = function _loop(posicao) {
        var notaAtual = listaNotas.pega(posicao);
        if (notaAtual.editando) {
            var formularioNotas = document.createElement('form');
            formularioNotas.setAttribute('class', 'note');

            var inputTitulo = new _formInput2.default();

            var textareaTexto = document.createElement('textarea');
            textareaTexto.setAttribute('class', 'note__body');
            textareaTexto.setAttribute('name', 'texto');
            textareaTexto.setAttribute('placeholder', 'Criar uma nota..');
            textareaTexto.innerHTML = notaAtual.texto;

            var buttonConcluido = document.createElement('button');
            buttonConcluido.setAttribute('class', 'note__control');
            buttonConcluido.setAttribute('type', 'button');
            buttonConcluido.setAttribute('value', 'Concluído');
            buttonConcluido.addEventListener('click', function () {
                adicionarNota(formularioNotas, inputTitulo, textareaTexto, posicao);
            });

            conteudoSecao += '<form class="note">\n                                <input class="note__title" type="text" name="titulo" value="' + notaAtual.titulo + '" placeholder="T\xEDtulo">\n                                <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">\n                                    ' + notaAtual.texto + '\n                                </textarea>\n                                <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ' + posicao + ')">\n                                    Conclu\xEDdo\n                                </button>\n                              </form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ')">\n                                <button class="note__control" type="button" onclick="removerNota(event, ' + posicao + ')">\n                                    <i class="fa fa-times" aria-hidden="true"></i>\n                                </button>\n                                <h1 class="note__title">' + notaAtual.titulo + '</h1>\n                                <p class="note__body">' + notaAtual.texto + '</p>\n                              </form>';
        }
    };

    for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        _loop(posicao);
    }

    secao.innerHTML = conteudoSecao;
};

window.editaFormulario = function (posicao) {
    return listaNotas.edita(posicao);
};

window.adicionarNota = function (inputTitulo, textareaTexto, formulario, posicao) {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
};

window.removerNota = function (evento, posicao) {
    evento.stopPropagation();
    listaNotas.remove(posicao);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nota = __webpack_require__(2);

var _nota2 = _interopRequireDefault(_nota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaNotas = function () {
    function ListaNotas(observador) {
        _classCallCheck(this, ListaNotas);

        this._listaInterna = [];
        this._observador = observador;
    }

    _createClass(ListaNotas, [{
        key: 'adiciona',
        value: function adiciona(novoTitulo, novoTexto) {
            var nota = new _nota2.default(novoTitulo, novoTexto);
            this._listaInterna.push(nota);
            this._observador();
        }
    }, {
        key: 'remove',
        value: function remove(posicao, quantidade) {
            this._listaInterna.splice(posicao, 1);
            this._observador();
        }
    }, {
        key: 'edita',
        value: function edita(posicao) {
            this._listaInterna[posicao].editando = true;
            this._observador();
        }
    }, {
        key: 'salva',
        value: function salva(posicao, novoTitulo, novoTexto) {
            this._listaInterna[posicao].titulo = novoTitulo;
            this._listaInterna[posicao].texto = novoTexto;
            this._listaInterna[posicao].editando = false;
            this._observador();
        }
    }, {
        key: 'pega',
        value: function pega(posicao) {
            return this._listaInterna[posicao];
        }
    }, {
        key: 'contaTotal',
        value: function contaTotal() {
            return this._listaInterna.length;
        }
    }]);

    return ListaNotas;
}();

;

exports.default = ListaNotas;

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

    // modificadores visibilidade
    this.titulo = novoTitulo;
    this.texto = novoTexto;
    this.editando = false;
};

exports.default = Nota;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormInput() {
    var inputTitulo = document.createElement('input');

    inputTitulo.setAttribute('class', 'note__title');
    inputTitulo.setAttribute('type', 'text');
    inputTitulo.setAttribute('name', 'titulo');
    inputTitulo.setAttribute('value', notaAtual.titulo);
    inputTitulo.setAttribute('placeholder', 'Título');

    return inputTitulo;
}

exports.default = FormInput;

/***/ })
/******/ ]);