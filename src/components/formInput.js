function FormInput() {
    let inputTitulo = document.createElement('input');
    
    inputTitulo.setAttribute('class', 'note__title');
    inputTitulo.setAttribute('type', 'text');
    inputTitulo.setAttribute('name', 'titulo');
    inputTitulo.setAttribute('value', notaAtual.titulo);
    inputTitulo.setAttribute('placeholder', 'Título')
    
    return inputTitulo;
}

export default FormInput;