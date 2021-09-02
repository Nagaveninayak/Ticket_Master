import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetDepartment, startRemoveDepartment} from '../../action/departmentsAction'

function DepartmentLists(props){
    // console.log(props.departments)
    if(props.departments.length == 0){
        props.dispatch(startSetDepartment())
    }

    const handleRemove = (dept)=>{
        const confirmWindow = window.confirm(`Are you sure to remove ${dept.name} ?`)
        if(confirmWindow){
            props.dispatch(startRemoveDepartment(dept._id))
        }
    }
    return(
        <div>
            <h3>Total number of departments - {props.departments.length}</h3>
            <ul>
                {
                   props.departments.map((dept)=>{
                       return <li key = {dept._id}><Link to ={ `/departments/${dept._id}`}>{dept.name}</Link>
                                <button onClick = {()=>{handleRemove(dept)}}>delete</button>
                                </li>
                   })
                }
            </ul>
            <Link to =  "/departments/new">new</Link>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        departments: state.departments
    }
}

export default connect(mapStateToProps)(DepartmentLists)