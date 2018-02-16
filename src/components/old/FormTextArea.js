function FormTextArea(props) {

    let inputTexto = document.createElement('textarea');

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

export default FormTextArea;