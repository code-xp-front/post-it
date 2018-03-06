import React from 'react'
import classnames from 'classnames'
import './formInput.css'


class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: '' }
        this.validate = this.validate.bind(this)
    }

    validate(event) {
        const value = event.target.value
        const name = event.target.name

        if (this.props.required && value.trim() === '') {
            this.setState({ error: 'Campo obrigatório' })
            this.props.onChange(name, value, true);
            return
        }

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (this.props.type === 'email' && !regex.test(value)) {
            this.setState({ error: 'Email inválido' })
            this.props.onChange(name, value, true);
            return
        }

        if (this.props.type === 'password' && value.length < 6) {
            this.setState({ error: 'Menor 6 caracteres' })
            this.props.onChange(name, value, true);
            return
        }

        this.props.onChange(name, value, false)
        this.setState({ error: '' })
    }

    render() {
        const { error } = this.state
        const { className, ...props } = this.props

        return (
            <React.Fragment>
                <input 
                    {...props} 
                    className={classnames(className, {'form-input--error': error})} 
                    onChange={this.validate} />
                
                {error && <p className="form-input__helper">{error}</p>}
            </React.Fragment>
        )
    }
}

export default FormInput