import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {findCustomer} from '../selector/customerSelector'

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        // console.log('1', props, props.customers)
        this.state = {
            name: props.customers?props.customers.name:'',
            email: props.customers?props.customers.email:'',
            mobile: props.customers?props.customers.mobile:''
        }
    }

    handleClick = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <h2>customer form here..</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "name">name : </label>
                    <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleClick}/><br/><br/>
                    <label htmlFor = "email">email : </label>
                    <input type = "text" name = "email" value = {this.state.email} onChange = {this.handleClick}/><br/><br/>
                    <label htmlFor = "mobile">mobile : </label>
                    <input type = "text" name = "mobile" value = {this.state.mobile} onChange = {this.handleClick}/><br/><br/>
                    <input type = "submit" value = "add"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return{
        customers: findCustomer(state.customers, id)
    }
}

export default withRouter(connect(mapStateToProps)(CustomerForm))