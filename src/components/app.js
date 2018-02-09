import React, { createElement as e } from 'react';
import FormNotas from './formNotas';
import SectionNotas from './sectionNotas';
import ListaNotas from '../listaNotas';


const criaFormNotas = ({ adicionarNota }) => {
    const props = { notaAtual: {}, adicionarNota };

    return e(FormNotas, props);
};

const criaSectionNotas = ({ state, editarFormulario, adicionarNota, removerNota }) => {
    const props = {
        className: "notes",
        notas: state.listaNotas.pegaTodas(),
        editarFormulario,
        adicionarNota,
        removerNota
    };

    return e(SectionNotas, props);
};

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.atualizaLista = this.atualizaLista.bind(this);
        this.editarFormulario = this.editarFormulario.bind(this);
        this.adicionarNota = this.adicionarNota.bind(this);
        this.removerNota = this.removerNota.bind(this);
        
        this.state = { listaNotas: new ListaNotas(this.atualizaLista) };
    }

    atualizaLista(listaNotas) {
        this.setState({ listaNotas });
    }

    editarFormulario(posicao) {
        this.state.listaNotas.edita(posicao);
    }

    adicionarNota(posicao, titulo, texto) {
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, titulo, texto);
        } else {
            this.state.listaNotas.adiciona(titulo, texto);
        }
    }

    removerNota(posicao) {
        this.state.listaNotas.remove(posicao);
    }

    render() {
        const props = { className: "container" };
        const children = [criaFormNotas(this), criaSectionNotas(this)];

        return e('main', props, ...children);
    }
}

export default App;