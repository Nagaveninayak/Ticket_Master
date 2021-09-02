import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {findEmployee} from '../../selector/employeeSelector'
import EmployeesForm from './FormEmployees'
import {startEditEmployees} from '../../action/employeesAction'

function EmployeesEdit(props){
    // console.log('emplo', props)
    const handleSubmit = (formData)=>{
        const id = props.match.params.id
        props.dispatch(startEditEmployees(formData, id))
    }
    return(
        <div>
            <h3>Edit employees here</h3>
            <EmployeesForm handleSubmit = {handleSubmit} employees = {props.employees}/>
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return {
        employees: findEmployee(state.employees, id)
    }
}

export default withRouter(connect(mapStateToProps)(EmployeesEdit))