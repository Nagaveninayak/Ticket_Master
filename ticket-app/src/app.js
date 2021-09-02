import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Register from './component/Register'
import Login from './component/Login'
import Account from './component/Account'
import Quicklinks from './component/navigation/Quicklinks'
import {startLogout} from './action/userAction'

import ShowCustomer from './component/ShowCustomer'
import Customerlist from './component/Customer'
import CustomerNew from './component/NewCustomer'
import CustomerEdit from './component/EditCustomer'

import DepartmentLists from './component/departments/ListDepartment'
import DepartmentShow from './component/departments/ShowDepartment'
import DepartmentNew from './component/departments/NewDepartment'
import DepartmentEdit from './component/departments/EditDepartment'

import EmployeesList from './component/employees/ListEmployees'
import EmployeesShow from './component/employees/ShowEmployees'
import EmployeesNew from './component/employees/NewEmployees'
import EmployeesEdit from './component/employees/EditEmployees'

import TicketList from './component/tickets/ListTickets'
import TicketShow from './component/tickets/ShowTickets'
import TicketNew from './component/tickets/NewTickets'
import TicketEdit from './component/tickets/EditTickets'

function App(props){
    // console.log('App', props) //access to dispatch
    const handleRemove = ()=>{
        const confirmRemove = window.confirm(`Are you sure to logout?`)
        if(confirmRemove){
            props.dispatch(startLogout())
        }
    }
    return(
        <BrowserRouter>
            <Link to = "/">Home</Link><br/>
            {
                Object.keys(props.user).length == 0?(
                    <div>
                    <Link to = "/users/register">Register</Link><br/>
                    <Link to = "/users/login">Login</Link>
                    </div>
                ):(
                    <div>
                    <Link to = "/users/account">Account</Link><br/>
                    <Link to = "#" onClick = {()=>{handleRemove()}}>Logout</Link><br/>
                    <Link to = "/customers">Customers</Link><br/>
                    <Link to = "/departments">Department</Link><br/>
                    <Link to = "/employees">Employees</Link><br/>
                    <Link to = "/tickets">Ticket</Link>
                    </div>
                )
            }    
        
                <Switch>
                    <Route path = "/users/register" component = {Register}/>
                    <Route path = "/users/login" component = {Login}/>
                    <Route path = "/users/account" component = {Account}/>

                    <Route path = "/customers" component = {Customerlist} exact = {true}/>
                    <Route path = "/customers/new" component = {CustomerNew}/>
                    <Route path = "/customers/edit/:id" component = {CustomerEdit}/>
                    <Route path = "/customers/:id" component = {ShowCustomer}/>

                    <Route path = "/departments" component = {DepartmentLists} exact = {true}/>
                    <Route path = "/departments/new" component = {DepartmentNew}/>
                    <Route path = "/departments/edit/:id" component = {DepartmentEdit}/>
                    <Route path = "/departments/:id" component = {DepartmentShow} exact = {true}/>

                    <Route path = "/employees" component = {EmployeesList} exact = {true}/>
                    <Route path = "/employees/new" component = {EmployeesNew} />
                    <Route path = "/employees/edit/:id" component = {EmployeesEdit}/>
                    <Route path = "/employees/:id" component = {EmployeesShow}/>

                    <Route path = "/tickets" component = {TicketList} exact = {true}/>
                    <Route path = "/tickets/new" component = {TicketNew}/>
                    <Route path = "/tickets/edit/:id" component = {TicketEdit}/>
                    <Route path = "/tickets/:id" component = {TicketShow}/>

                </Switch>

            <Quicklinks/>
        </BrowserRouter>
    )
}

const mapStateToProps = (state)=>{
    return {
        user:  state.user
    }
}

export default connect(mapStateToProps)(App)