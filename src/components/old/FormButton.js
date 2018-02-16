function FormButton(props) {

    console.log(props);

    let botaoSalvar = document.createElement('button');

    //<button></button>

    botaoSalvar.setAttribute('class', props.className);
    //<button class="note__control"></button>
    botaoSalvar.setAttribute('type', props.type);
    // botaoSalvar.setAttribute('value', props.value);

    botaoSalvar.addEventListener('click', props.onclick);

    botaoSalvar.innerHTML = props.children;


    return botaoSalvar;
};

export default FormButton;