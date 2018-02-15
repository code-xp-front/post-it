import React from 'react'

// let props = {
//     className: 'note__control',
//     type: 'button',
//     onClick: () => {

//     }
// };

// function FormButton(props, children) {

//     return React.createElement('button', props, props.children);
// }

// export default FormButton;

export default (props, children) => React.createElement('button', props, children)