import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Container from '../../container'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import { logaUsuario } from '../../../actions'
import './login.css'


const Login = ({ usuario, logaUsuario }) => (
    usuario ? (
        <Redirect to="/" /> 
    ) : ( 
        <Container className="login">
            <h1>Login</h1>
            <p>
                Seja Bem vindo(a),<br />Entre para ver os seus post-it.
            </p>
            <Form onSubmit={event => logaUsuario(event)}>
                <FormInput className="login__form-input" type="email" placeholder="E-mail" autoComplete="email" aria-label="email" />
                <FormInput className="login__form-input" type="password" placeholder="Senha" autoComplete="current-password" aria-label="senha" />
                <FormButton className="login__form-button" >Entrar</FormButton>
            </Form>
        </Container>
    )
)

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