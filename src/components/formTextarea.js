// props param
function FormTextarea(props) {
    let formTextarea = document.createElement('textarea');

    // destructuring
    formTextarea.setAttribute('class', props.className);
    formTextarea.setAttribute('name', props.name);
    formTextarea.setAttribute('rows', props.rows);
    formTextarea.setAttribute('placeholder', props.placeholder);

    // qualquer valor é true
    if (props.readonly) {
        formTextarea.setAttribute('readonly', true);
    }
    
    formTextarea.innerHTML = props.children;

    return formTextarea;
}

export default FormTextarea;