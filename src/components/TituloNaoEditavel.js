function TituloNaoEditavel(props) {

    let h1Titulo = document.createElement('h1');

    h1Titulo.innerHTML = props.children;

    return h1Titulo;
}

export default TituloNaoEditavel;