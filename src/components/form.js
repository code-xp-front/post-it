// props param
function Form(props) {
    let form = document.createElement('form');

    // destructuring
    form.setAttribute('class', props.className);
    
    // forEach
    for (var i = 0; i < props.children.length; i++) {
        form.appendChild(props.children[i]);
    }

    form.addEventListener("click", props.click);
    
    return form;
}

export default Form;