import NovaLista from './ClasseNovaLista.js';
import FormInput from './components/FormInput.js';
import FormTextArea from './components/FormTextArea.js';
import FormButton from './components/FormButton.js';
import FormNotas from './components/FormNotas.js';


let secao = document.getElementsByClassName('notes')[0];

const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};


const novaLista = new NovaLista(observaMudancasNaLista);


const atualizarSecao = secao => {

    secao.innerHTML = "" ;

    for (let index = 0; index < novaLista.contaTotal(); index++) {

        let notaAtual = novaLista.pegar(index);

        const props = {
            index: index, 
            notaAtual: notaAtual, 
            editarNota: editarNota, 
            adicionarNota: adicionarNota, 
            excluirNota: excluirNota
        };

        secao.appendChild(new FormNotas(props));
        
    }

};


window.editarNota = index => novaLista.editar(index);


window.adicionarNota = (inputTitulo, inputTexto, formulario, index) => {

    if (novaLista.pegar(index)) {

        novaLista.salvar(index, inputTitulo.value, inputTexto.value);

    } else {

        novaLista.adicionar(inputTitulo.value, inputTexto.value);
        formulario.reset();

    }
};


window.excluirNota = (evento, index) => {

    evento.stopPropagation();

    novaLista.remover(index);

};