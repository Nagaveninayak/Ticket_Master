import React from 'react'
import {connect} from 'react-redux'
import CustomerForm from './FormCustomer'
import {startAddCustomer} from '../action/customersAction'

function CustomerNew(props){
    // console.log('newCustomers')
    const handleSubmit = (formData)=>{
        const redirect = ()=>{
            props.history.push('/customers')
        }
        props.dispatch(startAddCustomer(formData, redirect))
    }
    return(
        <div>
            <h3>Add customers here</h3>
            <CustomerForm handleSubmit = {handleSubmit}/>
        </div>
    )
}



export default connect()(CustomerNew)