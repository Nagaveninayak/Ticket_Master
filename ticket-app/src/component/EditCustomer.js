import React from 'react'
import {connect} from 'react-redux'
import CustomerForm from './FormCustomer'
import {startEditCustomer} from '../action/customersAction'

function CustomerEdit(props){
    const handleSubmit = (formData)=>{
        const id = props.match.params.id
        props.dispatch(startEditCustomer(formData, id))
    }
    return(
        <CustomerForm handleSubmit = {handleSubmit}/>
    )
}



export default connect()(CustomerEdit)