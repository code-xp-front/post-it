import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../navbar'
import Home from '../page/home'
import AboutUs from '../page/aboutUs'
import Contact from '../page/contact'
import Login from '../page/login'
import Account from '../page/account'
import NotFound from '../page/notFound'


const App = () => (
    <React.Fragment>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quem-somos" render={AboutUs} />
            <Route path="/contato" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/conta" component={Account} />
            <Route component={NotFound} />
        </Switch>
    </React.Fragment>
)

export default App