import React from 'react'
import { connect } from 'react-redux'
import EmployeesForm from './FormEmployees'
import {startAddEmployees} from '../../action/employeesAction'

function EmployeesNew(props){
    const handleSubmit = (formData)=>{
        props.dispatch(startAddEmployees(formData))
    }
    return(
        <div>
            <EmployeesForm handleSubmit = {handleSubmit}/>
        </div>
    )
}

export default connect()(EmployeesNew)