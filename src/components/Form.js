// import FormNotas from './FormNotas.js';

function Form(props) {
    console.log(props.onclick);
    let formularioNotas = document.createElement('form');

    formularioNotas.setAttribute('class', props.className);

    // for (let index = 0; index < novaLista.contaTotal(); index++) {

    for (var index = 0; index < props.children.length; index++) {
        formularioNotas.appendChild(props.children[index]);
    }

    formularioNotas.addEventListener('click', props.onclick);

    return formularioNotas;
}

export default Form;