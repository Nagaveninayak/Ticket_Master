import React from 'react'
import { connect } from 'react-redux'
import {findCustomer} from '../../selector/customerSelector'

class TicketForm extends React.Component{
    constructor(props){
        console.log('ticket', props)
        super(props)
        this.state = {
            name: props.tickets?props.tickets.name:"",
            code: props.tickets?props.tickets.code:"",
            customer: props.tickets?props.tickets.customer:"",
            department: props.tickets?props.tickets.department:"",
            employee: props.tickets?props.tickets.employee:"",
            message: props.tickets?props.tickets.message:"",
            priority: props.tickets?props.tickets.priority:""
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
            code: this.state.code,
            customer: this.state.customer,
            department: this.state.department,
            employee: this.state.employee,
            message: this.state.message,
            priority: this.state.priority
        }
        // console.log(formData)
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
            	    <label htmlFor = "name">name : </label>
                    <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange}/><br/><br/>
                    <label htmlFor = "code">code : </label>
                    <input type = "text" name = "code" value = {this.state.code} onChange = {this.handleChange}/><br/><br/>
                    <label htmlFor = "customer">customer : </label>
                    <select name = "customer" value = {this.state.customer} onChange = {this.handleChange}>
                        <option key = "one">select</option>
                        {
                            this.props.customers?this.props.customers.map((cust)=>{
                                return <option key = {cust._id} value = {cust._id}>{cust.name}</option>
                            }):'loading'
                        }
                    </select><br/><br/>
                    <label htmlFor = "department">department : </label>
                    <select name = "department" value = {this.state.department} onChange = {this.handleChange}>
                        <option key = "one">select</option>
                        {
                            this.props.departments?this.props.departments.map((dept)=>{
                                return <option key = {dept._id} value = {dept._id}>{dept.name}</option>
                            }):'loading'
                        }
                    </select><br/><br/>
                    <label htmlFor = "employee">employee : </label>
                    <select name = "employee" value = {this.state.employee} onChange = {this.handleChange}>
                        <option key = "one">select</option>
                        {
                            this.props.employees?this.props.employees.map((empl)=>{
                                return <option key = {empl._id} value = {empl._id}>{empl.name}</option>
                            }):'loading'
                        }
                    </select><br/><br/>
                    <label htmlFor = "message">message : </label>
                    <input type = "text" name = "message" value = {this.state.message} onChange = {this.handleChange}/><br/><br/>
                    <h3>priority</h3>
                    <input type = "radio" name = "priority" value = "high" onChange = {this.handleChange}/>
                    <label htmlFor = "priority">high</label><br/>
                    <input type = "radio" name = "priority" value = "medium" onChange = {this.handleChange}/>
                    <label htmlFor = "priority">medium</label><br/>
                    <input type = "radio" name = "priority" value = "low" onChange = {this.handleChange}/>
                    <label htmlFor = "priority">low</label><br/>
                    <input type = "submit" value = "submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        customers: state.customers,
        departments: state.departments,
        employees: state.employees 
    }
}

export default connect(mapStateToProps)(TicketForm)