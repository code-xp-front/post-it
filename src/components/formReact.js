import React from 'react'

// export default (props, children ) => {

//     for (var index = 0; index < props.children.length; index++) {
        
//         formularioNotas.appendChild(props.children[index]);
//     }

//     return React.createElement('form', props, children = []);

// }


export default (props, children ) => React.createElement('form', props, children)