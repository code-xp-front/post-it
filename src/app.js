import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import Home from './components/home'
import Login from './components/login'
import NoMatch from './components/notMatch'


const App = () => (
    <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/no-match" component={NoMatch} />
    </React.Fragment>
)

export default App