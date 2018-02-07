import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.alteraValor = this.alteraValor.bind(this);
    }

    get value() {
        return this.state.value;
    }

    alteraValor(event) {
        this.setState({ value: event.target.value });
    }

    render() {
       return React.createElement('input', this.props);  
    }
}

export default FormInput;