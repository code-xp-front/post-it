// import FormNotas from './FormNotas.js';

function Form(props) {
    
    let formularioNotas = document.createElement('form');

    formularioNotas.setAttribute('class', props.className);

    for (var index = 0; index < props.children.length; index++) {
        
        formularioNotas.appendChild(props.children[index]);
    }

    formularioNotas.addEventListener('click', props.onclick);

    return formularioNotas;
}

export default Form;