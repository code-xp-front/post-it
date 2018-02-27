import React from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import FaPowerOff from 'react-icons/lib/fa/power-off'
import { connect } from 'react-redux'
import Link from 'next/link'
import { deslogaUsuario } from '../../actions'
import './navbar.css'


const Navbar = ({ usuario, deslogaUsuario }) => (
    <nav className="navbar">
        <h1 className="navbar-logos">
            <Link href="/">
                <a className="navbar-logo__link">Post-It</a>
            </Link>
        </h1>
        <input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
        <label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars /></label>
        <ul className="navbar-pages">
            <li>
                <Link prefetch href="/quem-somos">
                    <a className="navbar-pages__link">Quem somos</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/contato">
                    <a className="navbar-pages__link">Contato</a>
                </Link>
            </li>
            {!usuario && (
            <li>
                <Link href="/login">
                    <a className="navbar-pages__link">Login</a>
                </Link>
            </li>
            )}
            {usuario && (
            <li>
                <a className="navbar-pages__link navbar-pages__link--sair" onClick={deslogaUsuario}>
                    <FaPowerOff className="navbar-pages-link-icon"/> Sair
                </a>
            </li>
            )}
        </ul>
    </nav>
)

const mapStateToProps = state => (
    {
        usuario: state.usuario
    }
)

const mapDispatchToProps = dispatch => (
    {
        deslogaUsuario: () => {
            dispatch(deslogaUsuario())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)