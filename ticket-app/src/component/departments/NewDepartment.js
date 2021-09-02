import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import DepartmentForm from '../departments/FormDepartment'
import {startAddDepartment} from '../../action/departmentsAction'

function DepartmentNew(props){
    const handleSubmit = (formData)=>{
        return props.dispatch(startAddDepartment(formData))
    }
    return(
        <div>
            <h2>Add new department here</h2>
            <DepartmentForm handleSubmit = {handleSubmit}/>
            <Link to = "/departments">back</Link>
        </div>
    )
}

export default connect()(DepartmentNew)