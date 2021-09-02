import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetEmployees, startRemoveEmployees} from '../../action/employeesAction'

function EmployeesList(props){
    if(props.employees.length == 0){
        props.dispatch(startSetEmployees())
    }

    const handleClick = (empl)=>{
        const confirmDelete = window.confirm(`Are you sure to delete ${empl.name} ?`)
        if(confirmDelete){
            props.dispatch(startRemoveEmployees(empl._id))
        }
    }
    return(
        <div>
            <h2>Displaying the total number of employees - {props.employees.length}</h2>
            <ul>
                {
                    props.employees.map((empl)=>{
                        return <li key = {empl._id}><Link to = {`/employees/${empl._id}`}>{empl.name}</Link>
                                <button onClick = {()=>{handleClick(empl)}}>delete</button>
                                </li>
                    })
                }
            </ul>
            <Link to = "/employees/new">New employee</Link><br/><br/>
            <Link to = "/employees">back</Link>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        employees: state.employees
    }
}

export default connect(mapStateToProps)(EmployeesList)