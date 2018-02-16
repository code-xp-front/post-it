function TextoNaoEditavel(props) {

    let pTexto = document.createElement('p');

    pTexto.innerHTML = props.children;

    return pTexto;
}

export default TextoNaoEditavel;