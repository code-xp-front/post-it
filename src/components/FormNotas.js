import FormInput from './components/FormInput.js';
import FormTextArea from './components/FormTextArea.js';
import FormButton from './components/FormButton.js';

import Form from './components/Form.js';

const createInputTitulo = (notaAtual) => {
    const props = {
        className: 'note__title note--editing',
        type: 'text',
        name: 'title',
        placeholder: 'Título',
        value: props.notaAtual.titulo,
        readonly: !props.notaAtual.editando
    };

    return new FormInput(props);
};

const createInputTexto = (notaAtual) => {
    const props = {
        className: 'note__body note__body--editing',
        name: 'body',
        rows: '5',
        placeholder: 'Criar uma nota...'
    };

    return new FormTextArea(props);
};

const createBotaoSalvar = (inputTitulo, inputTexto, formularioNotas, index) => {
    const props = {
         className: 'note__control',
        type: 'button',
        value: 'Salvar',
        onclick: () => {
            adicionarNota(inputTitulo, inputTexto, formularioNotas, index);
        }
    };

    return new FormButton(inputTitulo, inputTexto, formularioNotas, index);

};

const createButtonRemover = (evento, index) => {
    /*<button class="note__excluir" onclick="excluirNota(event, ${index} )">
                    <i class="fa fa-times" aria-hidden="true"></i>
                    </button>*/
    
    const props = {
        className: 'note__excluir',
        onclick: () => {
            excluirNota(evento, index);
        }
    };

    return 
};

function FormNotas(props) {

    let inputTitulo = createInputTitulo(props.notaAtual);
    let inputTexto = createInputTexto(props.notaAtual);
    let botaoSalvar = createBotaoSalvar(props);

    let funcaoClick;
    
    if (props.notaAtual.editando === true){
        // funcaoClick = function() {};
        funcaoClick = () => {};
    } else {
        funcaoClick = () => {
            props.editarNota(props.index);
        };
    };

    let propsForm = {
        className: 'note note--editing',
        children: [FormInput, FormTextArea, FormButton],
        onclick: funcaoClick
    };


    if (props.notaAtual.editando === true){
        let buttonRemover = createButtonRemover(props);
        propsForm.children = [buttonRemover].concat(props.children);
    };

    let formNotas = new Form(propsForm);

    return formNotas;
}

export default FormNotas;

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