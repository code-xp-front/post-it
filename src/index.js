import ListaNotas from './listaNotas.js';
// import FormInput from './components/formInput.js';
// import FormTextarea from './components/formTextarea.js';
// import FormButton from './components/formButton.js';
import FormNotas from './components/formNotas.js';

let secao = document.getElementsByClassName('notes')[0];
const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

const listaNotas = new ListaNotas(observaMudancasNaLista);

const atualizarSecao = secao => {
    // let conteudoSecao = "";

    while (secao.firstChild) {
        secao.removeChild(secao.firstChild);
    }

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);

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
        const props = { posicao, notaAtual, editarFormulario, adicionarNota, removerNota };
        secao.appendChild(new FormNotas(props));
    }

    // secao.innerHTML = conteudoSecao;
}

window.editarFormulario = posicao => listaNotas.edita(posicao);

window.adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

window.removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}