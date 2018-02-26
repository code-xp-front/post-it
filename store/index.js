import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import redutor from '../reducers'


const makeStore = (initialState, options) => {
    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
    return createStore(redutor, initialState, composeEnhancers(applyMiddleware(thunk)))
}

export default makeStore