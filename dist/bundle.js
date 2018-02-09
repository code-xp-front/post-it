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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormInput(props) {

    var inputTitulo = document.createElement('input');

    inputTitulo.setAttribute('class', props.className);
    inputTitulo.setAttribute('type', props.type);
    inputTitulo.setAttribute('name', props.name);
    inputTitulo.setAttribute('placeholder', props.placeholder);
    inputTitulo.setAttribute('value', props.value);

    if (props.readonly) {
        inputTitulo.setAttribute('readonly', true);
    }

    return inputTitulo;
};

exports.default = FormInput;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormTextArea(props) {

    var inputTexto = document.createElement('textarea');

    inputTexto.setAttribute('class', props.className);
    inputTexto.setAttribute('name', props.name);
    inputTexto.setAttribute('rows', props.rows);
    inputTexto.setAttribute('placeholder', props.placeholder);
    // inputTexto.innerHTML = notaAtual.texto;
    inputTexto.innerHTML = props.children;

    if (props.readonly) {
        inputTexto.setAttribute('readonly', true);
    }

    return inputTexto;
};

exports.default = FormTextArea;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormButton(props) {

    var botaoSalvar = document.createElement('button');

    //<button></button>

    botaoSalvar.setAttribute('class', props.className);
    //<button class="note__control"></button>
    botaoSalvar.setAttribute('type', props.type);
    // botaoSalvar.setAttribute('value', props.value);

    botaoSalvar.addEventListener('click', props.onclick);

    botaoSalvar.innerHTML = props.children;

    return botaoSalvar;
};

exports.default = FormButton;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ClasseNovaLista = __webpack_require__(4);

var _ClasseNovaLista2 = _interopRequireDefault(_ClasseNovaLista);

var _FormInput = __webpack_require__(0);

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormTextArea = __webpack_require__(1);

var _FormTextArea2 = _interopRequireDefault(_FormTextArea);

var _FormButton = __webpack_require__(2);

var _FormButton2 = _interopRequireDefault(_FormButton);

var _FormNotas = __webpack_require__(6);

var _FormNotas2 = _interopRequireDefault(_FormNotas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Form from './components/Form.js';


var secao = document.getElementsByClassName('notes')[0];

var observaMudancasNaLista = function observaMudancasNaLista() {
    atualizarSecao(secao);
};

var novaLista = new _ClasseNovaLista2.default(observaMudancasNaLista);

var atualizarSecao = function atualizarSecao(secao) {

    // let formNovo = new FormNotas();
    console.log(secao);
    secao.innerHTML = "";

    for (var index = 0; index < novaLista.contaTotal(); index++) {
        console.log(index);

        var notaAtual = novaLista.pegar(index);

        var props = {
            index: index,
            notaAtual: notaAtual,
            editarNota: editarNota,
            adicionarNota: adicionarNota,
            excluirNota: excluirNota
        };

        secao.appendChild(new _FormNotas2.default(props));
    }
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Nota = __webpack_require__(5);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FormInput = __webpack_require__(0);

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormTextArea = __webpack_require__(1);

var _FormTextArea2 = _interopRequireDefault(_FormTextArea);

var _FormButton = __webpack_require__(2);

var _FormButton2 = _interopRequireDefault(_FormButton);

var _TituloNaoEditavel = __webpack_require__(8);

var _TituloNaoEditavel2 = _interopRequireDefault(_TituloNaoEditavel);

var _TextoNaoEditavel = __webpack_require__(9);

var _TextoNaoEditavel2 = _interopRequireDefault(_TextoNaoEditavel);

var _Form = __webpack_require__(7);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createInputTitulo = function createInputTitulo(notaAtual) {
    var props = {
        className: 'note__title note--editing',
        type: 'text',
        name: 'title',
        placeholder: 'Título',
        value: notaAtual.titulo,
        readonly: !notaAtual.editando
    };

    return new _FormInput2.default(props);
};

var createInputTexto = function createInputTexto(notaAtual) {
    var props = {
        className: 'note__body note__body--editing',
        name: 'body',
        rows: '5',
        placeholder: 'Criar uma nota...',
        children: notaAtual.texto,
        readonly: !notaAtual.editando
    };

    return new _FormTextArea2.default(props);
};

var createTituloNaoEditavel = function createTituloNaoEditavel(notaAtual) {
    var props = {
        className: 'note__title',
        children: notaAtual.titulo
    };

    return new _TituloNaoEditavel2.default(props);
};

var createTextoNaoEditavel = function createTextoNaoEditavel(notaAtual) {
    var props = {
        className: 'note__body',
        children: notaAtual.texto
    };

    return new _TextoNaoEditavel2.default(props);
};

var createBotaoSalvar = function createBotaoSalvar(inputTitulo, inputTexto, formularioNotas, index) {
    var props = {
        className: 'note__control',
        type: 'button',
        value: 'Salvar',
        onclick: function onclick() {
            adicionarNota(inputTitulo, inputTexto, formularioNotas, index);
        }
    };

    return new _FormButton2.default(props);
};

var createButtonRemover = function createButtonRemover(evento, index) {

    var props = {
        className: 'note__excluir',
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        onclick: function onclick() {
            excluirNota(evento, index);
        }
    };

    return new _FormButton2.default();
};

function FormNotas(props) {

    var inputTitulo = createInputTitulo(props.notaAtual);
    var inputTexto = createInputTexto(props.notaAtual);

    var h1Titulo = createTituloNaoEditavel(props.notaAtual);
    var pTexto = createTextoNaoEditavel(props.notaAtual);

    var botaoSalvar = createBotaoSalvar(inputTitulo, inputTexto, formularioNotas, index);
    var botaoExcluir = createButtonRemover(evento, index);

    var funcaoClick = void 0;
    var children = void 0;

    if (props.notaAtual.editando === true) {
        funcaoClick = function funcaoClick() {};
        children: [inputTitulo, inputTexto, botaoSalvar];
    } else {
        funcaoClick = function funcaoClick() {
            props.editarNota(props.index);
        };
        children: [h1Titulo, pTexto, botaoExcluir];
    };

    var propsForm = {
        className: 'note note--editing',
        children: children,
        onclick: funcaoClick
    };

    // if (props.notaAtual.editando === true){
    //     let buttonRemover = createButtonRemover(props);
    //     propsForm.children = [buttonRemover].concat(props.children);
    // } else {
    //     funcaoClick = () => {
    //         props.editarNota(props.index);
    //     };
    // };

    var formNotas = new _Form2.default(propsForm);

    return formNotas;
}

exports.default = FormNotas;

// let inputTitulo = new FormInput({
//     className: 'note__title note--editing',
//     type: 'text',
//     name: 'title',
//     placeholder: 'Título',
//     value: props.notaAtual.titulo,
//     readonly: !props.notaAtual.editando
// });

// let inputTexto = new FormTextArea({
//     className: 'note__body note__body--editing',
//     name: 'body',
//     rows: '5',
//     placeholder: 'Criar uma nota...'
// });

// let botaoSalvar = new FormButton({
//     className: 'note__control',
//     type: 'button',
//     value: 'Salvar',
//     onclick: () => {
//         adicionarNota(inputTitulo, inputTexto, formularioNotas, index);
//     }
// });

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import FormNotas from './FormNotas.js';

function Form(props) {
    console.log(props.onclick);
    var formularioNotas = document.createElement('form');

    formularioNotas.setAttribute('class', props.className);

    for (var index = 0; index < props.children.length; index++) {
        formularioNotas.appendChild(props.children[index]);
    }

    formularioNotas.addEventListener('click', props.onclick);

    return formularioNotas;
}

exports.default = Form;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function TituloNaoEditavel(props) {

    var h1Titulo = document.createElement('h1');

    h1Titulo.innerHTML = props.children;

    return h1Titulo;
}

exports.default = TituloNaoEditavel;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function TextoNaoEditavel(props) {

    var pTexto = document.createElement('p');

    pTexto.innerHTML = props.children;

    return pTexto;
}

exports.default = TextoNaoEditavel;

/***/ })
/******/ ]);