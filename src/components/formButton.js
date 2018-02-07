// props param
function FormButton(propriedades) {
    let formButton = document.createElement('button');
    
    // destructuring
    formButton.setAttribute('class', propriedades.className);
    formButton.setAttribute('type', propriedades.type);
    
    formButton.addEventListener('click', propriedades.click);

    formButton.innerHTML = propriedades.children;

    return formButton;
}

export default FormButton;