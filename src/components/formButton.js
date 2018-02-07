// props param
function FormButton(props) {
    let formButton = document.createElement('button');
    
    // destructuring
    formButton.setAttribute('class', props.className);
    formButton.setAttribute('type', props.type);
    
    formButton.addEventListener('click', props.click);

    formButton.innerHTML = props.children;

    return formButton;
}

export default FormButton;