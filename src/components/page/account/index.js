import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Container from '../../container'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import { logaUsuario } from '../../../actions'
import './account.css'


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isInvalid: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        console.log('enviar dados para API', {
            email: this.email,
            telefone: this.telefone,
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
                    <h1>Conta</h1>
                    <p>
                        Cadastre-se e adicione muitos post-its!
                    </p>
                    <Form onSubmit={this.handleSubmit}>
                        <FormInput 
                            className="account__form-input" 
                            type="email" 
                            name="email"
                            placeholder="E-mail" 
                            autoComplete="email" 
                            aria-label="Email" 
                            onChange={this.handleChange}
                            required />

                        <FormInput 
                            mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            className="account__form-input" 
                            type="tel" 
                            name="telefone"
                            placeholder="Telefone"
                            autoComplete="tel" 
                            aria-label="Telefone" 
                            onChange={this.handleChange}
                            required />
                        
                        <FormInput 
                            className="account__form-input" 
                            type="password" 
                            name="senha"
                            placeholder="Senha" 
                            autoComplete="current-password" 
                            aria-label="Senha"
                            onChange={this.handleChange}
                            equals={{
                                value: this.senhaConfirmada,
                                error: 'Senhas não conferem'
                            }}
                            required />
                        
                        <FormInput 
                            className="account__form-input" 
                            type="password" 
                            name="senhaConfirmada"
                            placeholder="Confirme a senha" 
                            aria-label="Confirme a senha"
                            onChange={this.handleChange}
                            equals={{
                                value: this.senha,
                                error: 'Senhas não conferem'
                            }}
                            required />
                        
                        <FormButton className="account__form-button" disabled={this.state.isInvalid}>
                            Cadastrar
                        </FormButton>
                    </Form>

                    <Link className="account__link" to="/login">Fazer login</Link>
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


export default connect(mapStateToProps, mapDispatchToProps)(Account)