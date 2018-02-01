// import ListaObservavel from './listaObservavel.js'
import listaNotas from './listaObservavel.js'

// const secaoNotas = document.getElementsByClassName("notes")[0];

// function observaListaNotas() {
//     atualizarSecao(secaoNotas);
// }


// const listaNotas = {
//     listaInterna: [],
//     // Refatoração: desacoplamento da lista com a tela
//     observador: observaListaNotas,
//     adiciona(item) {
//         this.listaInterna.push(item);
//         this.observador();
//     },
//     remove(posicao) {
//         this.listaInterna.splice(posicao, 1);
//         this.observador();
//     },
//     edita(posicao, item) {
//         // Refatoração: usar internamente nossa função pega
//         let itemAtual = this.pega(posicao);
//         itemAtual = item; 
//         this.observador();
//     },
//     temItem(posicao) {
//         return posicao in this.listaInterna;
//     },
//     pega(posicao) {
//         return this.listaInterna[posicao];
//     },
//     contaTotal() {
//         return this.listaInterna.length;
//     }
// };
// const listaNotas = new ListaObservavel(observaListaNotas);

const atualizarSecao = (secao) => {
    let conteudoSecao = "";

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        // Refatoração: guardar numa variável a nota pega
        let notaAtual = listaNotas.pega(posicao);

        if (notaAtual.editando) {
            conteudoSecao += `<form class="note">
                                <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
                                <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
                                <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${posicao})">
                                    Concluído
                                </button>
                             </form>`;
        } else {
            conteudoSecao += `<form class="note" onclick="editaFormulario(${posicao})">
                                <button class="note__control" type="button" onclick="removerNota(event, ${posicao})">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                                <h1 class="note__title">${notaAtual.titulo}</h1>
                                <p class="note__body">${notaAtual.texto}</p>
                             </form>`;
        }
    }

    secao.innerHTML = conteudoSecao;
}

window.editaFormulario = (posicao) => {
    let nota = listaNotas.pega(posicao);
    nota.editando = true;
    listaNotas.edita(posicao, nota);
}

window.adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    // Refatoração: guardar os valores em uma variavel
    const titulo = inputTitulo.value,
          texto = textareaTexto.value;

    if (listaNotas.temItem(posicao)) {
        let notaExistente = listaNotas.pega(posicao);
        notaExistente.titulo = titulo;
        notaExistente.texto = texto;
        notaExistente.editando = false;
        listaNotas.edita(posicao, notaExistente);
    } else {
        // Refatoração: property shorthand
        let novaNota = { titulo, texto};
        listaNotas.adiciona(novaNota);
        formulario.reset();
    }
}

window.removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}