import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import redutor from './reducers.js'
import PageContainer from './components/page/pageContainer'
import './index.css'


let store = createStore(redutor)

ReactDOM.render(
    <Provider store={store}>
        <PageContainer />
    </Provider>, 
    document.getElementById('root')
)