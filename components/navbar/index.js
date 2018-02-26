import React from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import FaPowerOff from 'react-icons/lib/fa/power-off'
import { connect } from 'react-redux'
import { Link } from 'next/link'
import { deslogaUsuario } from '../../actions'
import './navbar.css'


const Navbar = ({ usuario, deslogaUsuario }) => (
    <nav className="navbar">
        <h1 className="navbar-logo">
            <Link className="navbar-logo__link" to="/">Post-It</Link>
        </h1>
        <input id="menu-hamburguer" className="navbar-menu-input" type="checkbox" hidden />
        <label className="navbar-menu-label" htmlFor="menu-hamburguer"><FaBars /></label>
        <ul className="navbar-pages">
            <li>
                <Link className="navbar-pages__link" href="/quem-somos">
                    Quem somos
                </Link>
            </li>
            <li>
                <Link className="navbar-pages__link" href="/contato">
                    Contato
                </Link>
            </li>
            {!usuario && (
            <li>
                <Link className="navbar-pages__link" href="/login">
                    Login
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