import React from 'react'
import ReactDOM from 'react-dom'

import Page from './components/Page'


ReactDOM.render( 
    React.createElement(Page, null), 
    // React.createElement('h1', { className: 'heading'}, 'Ooooooi Brunaaaa'), 
    document.getElementById('root')
)