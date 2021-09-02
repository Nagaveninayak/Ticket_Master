import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { findDepartment } from '../../selector/departmentSelector'

class DepartmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.departments?props.departments.name:''
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        // console.log('form', formData)
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <h3>The form</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "name">name : </label>
                    <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange}/><br/><br/>
                    <input type = "submit" value = "submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return {
        departments: findDepartment(state.departments, id)
    }
}

export default withRouter(connect(mapStateToProps)(DepartmentForm))