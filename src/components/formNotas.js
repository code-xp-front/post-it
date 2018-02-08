import Form from './form.js';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';

// destructuring / immutable
// extract function
// variable shorthand declaration
function FormNotas(props) {
    let formNotas;
    
    let inputTitulo = new FormInput({
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readonly: !props.notaAtual.editando,
        value: props.notaAtual.titulo
    });
    
    let textareaTexto = new FormTextarea({
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        readonly: !props.notaAtual.editando,
        children: props.notaAtual.texto
    });
    
    let children;
    let click;

    if (props.notaAtual.editando) {
        let buttonRemover = new FormButton({
            className: 'note__control', 
            type: 'button', 
            children: '<i class="fa fa-times" aria-hidden="true"></i>',
            click: event => {
                props.removerNota(event, props.posicao);
            }
        });

        let buttonConcluido = new FormButton({
            className: 'note__control', 
            type: 'button', 
            children: 'Concluído',
            click: () => {
                props.adicionarNota(inputTitulo, textareaTexto, formNotas, props.posicao);
            }
        });

        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
    } else {
        children = [inputTitulo, textareaTexto];

        click = () => {
            props.editarFormulario(props.posicao);
        }
    }

    formNotas = new Form({
        className: 'note',
        children: children,
        click: click
    });

    return formNotas;
}

export default FormNotas;