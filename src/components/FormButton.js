function FormButton(props) {

    let botaoSalvar = document.createElement('button');

    botaoSalvar.setAttribute('class', props.className);
    botaoSalvar.setAttribute('type', props.type);
    // botaoSalvar.setAttribute('value', props.value);

    botaoSalvar.addEventListener('click', props.onclick);

    botaoSalvar.innerHTML = props.children;


    return botaoSalvar;
};

export default FormButton;