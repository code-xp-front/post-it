import FormNotas from './components/FormNotas.js';

function Form(props) {
    let formularioNotas = document.createElement('form');
    // formularioNotas.setAttribute('class', 'note note--editing');
    formularioNotas.setAttribute('class', className);

    // let props = {
    //     children: [FormInput, FormTextArea, FormButton]
    // };

    for (var index = 0; index < children.length; index++) {
        form.appendChild(props.children[index]);
    }

    form.addEventListener();

    return formularioNotas;
}