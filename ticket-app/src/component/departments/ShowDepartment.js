import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { findDepartment } from '../../selector/departmentSelector'

function DepartmentShow(props){
    // console.log('show', props)
    const {_id, name} = props.departments||{}
    return(
        <div>
            <h3>Displaying the departments</h3>
            <p>{_id}</p>
            <p>{name}</p>
            <Link to = {`/departments/edit/${_id}`}>edit</Link><br/>
            <Link to = "/departments">back</Link>
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return{
        departments: findDepartment(state.departments, id)
    }
}

export default connect(mapStateToProps)(DepartmentShow)