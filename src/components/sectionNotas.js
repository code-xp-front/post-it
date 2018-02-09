import React, { createElement as e } from 'react';
import FormNotas from '../components/formNotas';


export default ({ notas, ...rest }) => {
    const props = { className: 'notes' };
    const children = notas.map(notaAtual => e(FormNotas, { notaAtual, ...rest }));

    return e('section', props, ...children);
};