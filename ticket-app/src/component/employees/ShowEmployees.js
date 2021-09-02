import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { findEmployee } from '../../selector/employeeSelector'

function EmployeesShow(props){
    // console.log('props', props)
    const {_id, name, email, mobile, department} = props.employees||{}
    return(
        <div>
            <h3>Displaying the employee</h3>
            <p>{_id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{mobile}</p>
            <p>{department}</p>
            <Link to = {`/employees/edit/${_id}`}>edit</Link><br/>
            <Link to = "/employees">back</Link>
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return{
        employees: findEmployee(state.employees, id)
    }
}

export default connect(mapStateToProps)(EmployeesShow)