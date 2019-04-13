import AuthReducer from './authReducer'
import PrescriptionReducer from './PrescriptionReducer'
import DrugReducer from './drugReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth:AuthReducer,
    prescription:PrescriptionReducer,
    drugs:DrugReducer
})

export default rootReducer