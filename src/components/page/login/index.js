import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Container from '../../container'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import { logaUsuario } from '../../../actions'
import './login.css'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isInvalid: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        console.log('enviar dados para API', {
            email: this.email,
            senha: this.senha
        })

        this.props.logaUsuario(event)
    }

    handleChange(name, value, isInvalid) {
        this[name] = value
        this.setState({ isInvalid })
    }

    render() {
        const { usuario, logaUsuario } = this.props

        return (
            usuario ? (
                <Redirect to="/" /> 
            ) : ( 
                <Container className="login">
                    <h1>Login</h1>
                    <p>
                        Seja Bem vindo(a),<br />Entre para ver os seus post-it.
                    </p>
                    <Form onSubmit={this.handleSubmit}>
                        <FormInput 
                            className="login__form-input" 
                            type="email" 
                            name="email"
                            placeholder="E-mail" 
                            autoComplete="email" 
                            aria-label="email" 
                            onChange={this.handleChange}
                            required />
                        
                        <FormInput 
                            className="login__form-input" 
                            type="password" 
                            name="senha"
                            placeholder="Senha" 
                            autoComplete="current-password" 
                            aria-label="senha"
                            onChange={this.handleChange}
                            required />
                        
                        <FormButton className="login__form-button" disabled={this.state.isInvalid}>
                            Entrar
                        </FormButton>
                    </Form>
                </Container>
            )
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.usuario
})

const mapDispatchToProps = dispatch => ({
    logaUsuario: (event) => {
        event.preventDefault()
        dispatch(logaUsuario())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)