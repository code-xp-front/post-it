import React from 'react'
import withRedux from "next-redux-wrapper";
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import Form from '../components/form'
import FormInput from '../components/form/formInput'
import FormButton from '../components/form/formButton'
import { logaUsuario } from '../actions'
import makeStore from '../store'
import './login.css'


const Login = ({ usuario, router, logaUsuario }) => {
    if (usuario) {
        router.push('/')
     }
     
     return ( 
        <Layout className="login">
            <h1>Login</h1>
            <p>
                Seja Bem vindo(a),<br />Entre para ver os seus post-it.
            </p>
            <Form onSubmit={event => logaUsuario(event)}>
                <FormInput className="login__form-input" type="email" placeholder="E-mail" autoComplete="email" aria-label="email" />
                <FormInput className="login__form-input" type="password" placeholder="Senha" autoComplete="current-password" aria-label="senha" />
                <FormButton className="login__form-button" >Entrar</FormButton>
            </Form>
        </Layout>
    )
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


export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withRouter(Login))