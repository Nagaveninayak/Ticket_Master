import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import DepartmentForm from './FormDepartment'
import {startEditDepartment} from '../../action/departmentsAction'

function DepartmentEdit(props){
    const handleSubmit = (formData)=>{
        const id = props.match.params.id
        props.dispatch(startEditDepartment(formData, id))
    }
    return(
        <div>
            <h3>Edit department here.</h3>
            <DepartmentForm handleSubmit = {handleSubmit}/>
            <Link to = "/departments">back</Link>
        </div>
    )
}

export default connect()(DepartmentEdit)