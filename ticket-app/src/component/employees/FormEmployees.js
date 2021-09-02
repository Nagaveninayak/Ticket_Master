import React from 'react'
import {connect} from 'react-redux'
import { findEmployee } from '../../selector/employeeSelector'
import DepartmentLists from '../departments/ListDepartment'

class EmployeesForm extends React.Component{
    constructor(props){
        super(props)
        // console.log('props', props)
        this.state = {
            name: props.employees?props.employees.name:'',
            email: props.employees?props.employees.email:'',
            mobile: props.employees?props.employees.mobile:'',
            department: props.employees?props.employees.department:''
        }
    }


    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }
        // console.log('formdata',formData)
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <h3>Displaying the form</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "name">name : </label>
                    <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange}/><br/><br/>
                    <label htmlFor = "email">email : </label>
                    <input type = "text" name = "email" value = {this.state.email} onChange = {this.handleChange}/><br/><br/>
                    <label htmlFor = "mobile">mobile : </label>
                    <input type = "text" name = "mobile" value = {this.state.mobile} onChange = {this.handleChange}/><br/><br/>
                    <label htmlFor = "department">department : </label>
                    <select name = "department" value = {this.state.department} onChange = {this.handleChange}>
                        <option key = "one">select</option>
                            {
                                this.props.departments?this.props.departments.map((dept)=>{
                                    return (<option name = {dept.name} value = {dept._id} key = {dept._id}>{dept.name}</option>)
                                }):'loading'
                            }
                    </select><br/><br/>
                    <input type = "submit" value = "submit"/>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        departments: state.departments
    }
}

export default connect(mapStateToProps)(EmployeesForm)