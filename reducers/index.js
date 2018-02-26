import { combineReducers  } from 'redux'
import { usuario } from './usuario'
import { notas } from './notas'


const reducer = combineReducers({
    usuario,
    notas
})
   
export default reducer