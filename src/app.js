import React from 'react';
import Nota from './nota';
import FormNotas from './components/formNotas';
import SectionNotas from './components/sectionNotas';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notas: []};
        this.editarFormulario = this.editarFormulario.bind(this);
        this.adicionarNota = this.adicionarNota.bind(this);
        this.removerNota = this.removerNota.bind(this);
    }

    editarFormulario(posicao) {
        this.setState(prevState => {
            return {
                notas: prevState.notas.map((nota, index) => {
                    if (index === posicao) {
                        return {...nota, editando: true};
                    } else {
                        return nota;
                    }
                })
            };
        });
    }

    adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
        console.log("inputTitulo", inputTitulo.value);
        console.log("textareaTexto", textareaTexto);
        console.log("formulario", formulario);
        console.log("posicao", posicao);

        this.setState(prevState => {
            if (prevState.notas[posicao]) {
                return {
                    notas: prevState.notas.map((nota, index) => {
                        if (index === posicao) {
                            return {...nota, titulo: inputTitulo.value, texto: textareaTexto.value};
                        } else {
                            return nota;
                        }
                    })
                };
            } else {
                formulario.reset();
                const novaNota = new Nota(inputTitulo.value, textareaTexto.value);
                return [novaNota].concat(prevState.notas);
            }
            const notas = prevState.notas.filter((nota, index) => index !== posicao);

            return {notas: notas};
        });
        
    }

    removerNota(evento, posicao) {
        evento.stopPropagation();
        this.setState(prevState => {
            return {
                notas: prevState.notas.filter((nota, index) => index !== posicao)
            };
        });
    }

    render() {
        const props = {
            className: "container",
            children: [
                React.createElement(
                    FormNotas,
                    {
                        notaAtual:  new Nota('', ''),
                        adicionarNota: this.adicionarNota
                    }
                ),
                React.createElement(
                    SectionNotas,
                    {
                        className: "notes",
                        notas: this.state.notas,
                        editarFormulario: this.editarFormulario,
                        adicionaNota: this.adicionarNota,
                        removerNota: this.removerNota
                    }
                )
            ]
        };

        return React.createElement("main", props);
    }
}

export default App;