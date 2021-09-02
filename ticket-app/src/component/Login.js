import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../action/userAction'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e)=>{
        // console.log('here')
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        const redirect = ()=>{
            this.props.history.push('/')
        }
        this.props.dispatch(startLogin(formData, redirect))
    }

    render(){
        return(
            <div>
                <h2>Login here</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "email">email : </label>
                    <input type = "text" id = "email" name = "email" value = {this.state.email} onChange = {this.handleChange}/><br/><br/>
                    <label htmlFor = "password">password : </label>
                    <input type = "password" id = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/><br/><br/>
                    <input type = "submit" value = "login"/>
                </form>
            </div>
        )
    }
}

export default connect()(Login)