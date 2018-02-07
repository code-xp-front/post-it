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

var _formNotas = __webpack_require__(3);

var _formNotas2 = _interopRequireDefault(_formNotas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secao = document.getElementsByClassName('notes')[0];
// import FormInput from './components/formInput.js';
// import FormTextarea from './components/formTextarea.js';
// import FormButton from './components/formButton.js';

var observaMudancasNaLista = function observaMudancasNaLista() {
    atualizarSecao(secao);
};

var listaNotas = new _listaNotas2.default(observaMudancasNaLista);

var atualizarSecao = function atualizarSecao(secao) {
    // let conteudoSecao = "";

    while (secao.firstChild) {
        secao.removeChild(secao.firstChild);
    }

    for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        var notaAtual = listaNotas.pega(posicao);

        // let formNotas = document.createElement('form');
        // formNotas.setAttribute('class', 'note');

        // let inputTitulo = new FormInput({
        //     className: 'note__title',
        //     type: 'text',
        //     name: 'titulo',
        //     placeholder: 'Título',
        //     value: notaAtual.titulo
        // });

        // let textareaTexto = new FormTextarea({
        //     className: 'note__body', 
        //     name: 'texto', 
        //     placeholder: 'Criar uma nota...', 
        //     children: notaAtual.texto
        // });

        // let buttonConcluido = new FormButton({
        //     className: 'note__control', 
        //     type: 'button', 
        //     value: 'Concluído',
        //     click: () => {
        //         adicionarNota(formNotas, inputTitulo, textareaTexto, posicao);
        //     }
        // });

        // formNotas.appendChild(inputTitulo);
        // formNotas.appendChild(textareaTexto);
        // formNotas.appendChild(buttonConcluido);

        // if (notaAtual.editando) {
        //     conteudoSecao += `<form class="note">
        //                         <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
        //                         <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">
        //                             ${notaAtual.texto}
        //                         </textarea>
        //                         <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${posicao})">
        //                             Concluído
        //                         </button>
        //                       </form>`;
        // } else {
        //     conteudoSecao += `<form class="note" onclick="editarFormulario(${posicao})">
        //                         <button class="note__control" type="button" onclick="removerNota(event, ${posicao})">
        //                             <i class="fa fa-times" aria-hidden="true"></i>
        //                         </button>
        //                         <h1 class="note__title">${notaAtual.titulo}</h1>
        //                         <p class="note__body">${notaAtual.texto}</p>
        //                       </form>`;
        // }

        // property shorthand
        var props = { posicao: posicao, notaAtual: notaAtual, editarFormulario: editarFormulario, adicionarNota: adicionarNota, removerNota: removerNota };
        secao.appendChild(new _formNotas2.default(props));
    }

    // secao.innerHTML = conteudoSecao;
};

window.editarFormulario = function (posicao) {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        set: function set(novoTitulo) {
            this._titulo = novoTitulo;
        }
    }, {
        key: "texto",
        get: function get() {
            return this._texto;
        },
        set: function set(novoTexto) {
            this._texto = novoTexto;
        }
    }, {
        key: "editando",
        get: function get() {
            return this._editando;
        },
        set: function set(novoEditando) {
            this._editando = novoEditando;
        }
    }]);

    return Nota;
}();

exports.default = Nota;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(4);

var _form2 = _interopRequireDefault(_form);

var _formInput = __webpack_require__(5);

var _formInput2 = _interopRequireDefault(_formInput);

var _formTextarea = __webpack_require__(6);

var _formTextarea2 = _interopRequireDefault(_formTextarea);

var _formButton = __webpack_require__(7);

var _formButton2 = _interopRequireDefault(_formButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var criaInputTitulo = function criaInputTitulo(_ref) {
    var notaAtual = _ref.notaAtual;

    // immutable
    var props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readonly: notaAtual.editando ? false : true,
        value: notaAtual.titulo
    };

    return new _formInput2.default(props);
};

var criaTextareaTexto = function criaTextareaTexto(_ref2) {
    var notaAtual = _ref2.notaAtual;

    // immutable
    var props = {
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readonly: notaAtual.editando ? false : true,
        children: notaAtual.texto
    };

    return new _formTextarea2.default(props);
};

var criaButtonConcluir = function criaButtonConcluir(_ref3, inputTitulo, textareaTexto, formNotas) {
    var posicao = _ref3.posicao,
        nota = _ref3.nota,
        adicionarNota = _ref3.adicionarNota,
        salvarNota = _ref3.salvarNota;

    // immutable
    var props = {
        className: 'note__control',
        type: 'button',
        children: 'Concluído',
        click: function click() {
            return adicionarNota(inputTitulo, textareaTexto, formNotas, posicao);
        }
    };

    return new _formButton2.default(props);
};

var criaButtonRemover = function criaButtonRemover(_ref4) {
    var posicao = _ref4.posicao,
        removerNota = _ref4.removerNota;

    // immutable
    var props = {
        className: 'note__control',
        type: 'button',
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        click: function click(event) {
            return removerNota(event, posicao);
        }
    };

    return new _formButton2.default(props);
};

function FormNotas(propriedades) {
    // destructuring
    var posicao = propriedades.posicao,
        notaAtual = propriedades.notaAtual,
        editarFormulario = propriedades.editarFormulario;


    var inputTitulo = criaInputTitulo(propriedades),
        textareaTexto = criaTextareaTexto(propriedades),
        buttonConcluido = criaButtonConcluir(propriedades, inputTitulo, textareaTexto, formNotas);

    var props = {
        className: 'note',
        click: notaAtual.editando ? function () {} : function () {
            return editarFormulario(posicao);
        },
        children: [inputTitulo, textareaTexto, buttonConcluido]
    };

    if (notaAtual.editando) {
        var buttonRemover = criaButtonRemover(propriedades);
        props.children = [buttonRemover].concat(props.children);
    }

    var formNotas = new _form2.default(props);

    return formNotas;
}

exports.default = FormNotas;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// props param
function Form(props) {
    var form = document.createElement('form');

    // destructuring
    form.setAttribute('class', props.className);

    // forEach
    for (var i = 0; i < props.children.length; i++) {
        form.appendChild(props.children[i]);
    }

    form.addEventListener("click", props.click);

    return form;
}

exports.default = Form;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// props param
function FormInput(props) {
    var formInput = document.createElement('input');

    // destructuring
    formInput.setAttribute('class', props.className);
    formInput.setAttribute('type', props.type);
    formInput.setAttribute('name', props.name);
    formInput.setAttribute('value', props.value);
    formInput.setAttribute('placeholder', props.placeholder);

    // qualquer valor é true
    if (props.readonly) {
        formInput.setAttribute('readonly', true);
    }

    return formInput;
}

exports.default = FormInput;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// props param
function FormTextarea(props) {
    var formTextarea = document.createElement('textarea');

    // destructuring
    formTextarea.setAttribute('class', props.className);
    formTextarea.setAttribute('name', props.name);
    formTextarea.setAttribute('rows', props.rows);
    formTextarea.setAttribute('placeholder', props.placeholder);

    // qualquer valor é true
    if (props.readonly) {
        formTextarea.setAttribute('readonly', true);
    }

    formTextarea.innerHTML = props.children;

    return formTextarea;
}

exports.default = FormTextarea;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// props param
function FormButton(propriedades) {
    var formButton = document.createElement('button');

    // destructuring
    formButton.setAttribute('class', propriedades.className);
    formButton.setAttribute('type', propriedades.type);

    formButton.addEventListener('click', propriedades.click);

    formButton.innerHTML = propriedades.children;

    return formButton;
}

exports.default = FormButton;

/***/ })
/******/ ]);