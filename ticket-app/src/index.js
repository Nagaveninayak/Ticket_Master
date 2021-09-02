import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {startAccount} from '../src/action/userAction'
import {startSetDepartment} from '../src/action/departmentsAction'

import App from './app'
import configureStore from '../src/store/configureStore'
import { startSetCustomer } from './action/customersAction'
import { startSetEmployees } from './action/employeesAction'

const store = configureStore()

if(localStorage.getItem('authToken')){
    store.dispatch(startAccount())
    store.dispatch(startSetDepartment())
    store.dispatch(startSetCustomer())
    store.dispatch(startSetEmployees())
}

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))

