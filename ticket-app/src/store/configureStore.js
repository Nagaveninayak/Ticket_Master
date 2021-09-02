import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducer/userReducer'
import customersReducer from '../reducer/customersReducer'
import departmentsReducer from '../reducer/departmentsReducer'
import employeesReducer from '../reducer/employeesReducer'
import ticketsReducer from '../reducer/ticketsReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user: userReducer,
        customers: customersReducer,
        departments: departmentsReducer,
        employees: employeesReducer,
        tickets: ticketsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore