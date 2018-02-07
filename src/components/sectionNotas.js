import React from 'react';
import FormNotas from '../components/formNotas';


function SectionNotas(props) {
    return React.createElement(
        "section", 
        {
            className: "notes",
            children: props.notas.map((notaAtual, posicao) => (
                React.createElement(
                    FormNotas, 
                    {
                        posicao: posicao, 
                        notaAtual: notaAtual, 
                        editarFormulario: props.editarFormulario, 
                        adicionarNota: props.adicionarNota, 
                        removerNota: props.removerNota
                    }
                )
            ))
        }
    );
}

export default SectionNotas;