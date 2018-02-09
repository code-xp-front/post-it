import NovaLista from './ClasseNovaLista.js';
// import FormInput from './components/FormInput.js';
// import FormTextArea from './components/FormTextArea.js';
// import FormButton from './components/FormButton.js';
import Form from './components/Form.js';
import FormNotas from './components/FormNotas.js';


let secao = document.getElementsByClassName('notes')[0];

const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};


const novaLista = new NovaLista(observaMudancasNaLista);


const atualizarSecao = secao => {

    let inserirHTML = "";

    for (let index = 0; index < novaLista.contaTotal(); index++) {

        let notaAtual = novaLista.pegar(index);

        if (notaAtual.editando == true) {

            let formularioNotas = document.createElement('form');
            formularioNotas.setAttribute('class', 'note note--editing');

            // let formularioNotas = new formularioNotas();

            let inputTitulo = new FormInput({
                className: 'note__title note--editing',
                type: 'text',
                name: 'title',
                placeholder: 'Título',
                value: notaAtual.titulo
            });

            let inputTexto = new FormTextArea({
                className: 'note__body note__body--editing',
                name: 'body',
                rows: '5',
                placeholder: 'Criar uma nota...',
                valueTextArea: notaAtual.texto
            });

            let botaoSalvar = new FormButton({
                className: 'note__control',
                type: 'button',
                value: 'Salvar',
                onclick: () => {
                    adicionarNota(inputTitulo, inputTexto, formularioNotas, index);
                }
            });

            // inserirHTML += `<form class="note note--editing">
            //         <input class="note__title note__title--editing" type="text" name="title" placeholder="Título" value="${notaAtual.titulo}" autofocus /> 
            //         <textarea class="note__body note__body--editing" name="body" rows="5" placeholder="Criar uma nota..."> ${notaAtual.texto} </textarea>
            //         <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.body, this.form, ${index} )"> Salvar </button> 
            //         </form>`;

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


window.editarNota = index => novaLista.editar(index);


window.adicionarNota = (inputTitulo, inputTexto, formulario, index) => {

    // console.log("testeeeeee");

    if (novaLista.pegar(index)) {

        novaLista.salvar(index, inputTitulo.value, inputTexto.value);

    } else {

        novaLista.adicionar(inputTitulo.value, inputTexto.value);
        formulario.reset();

    }
};


window.excluirNota = (evento, index) => {

    evento.stopPropagation();

    novaLista.remover(index);

};