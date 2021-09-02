import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetCustomer, startRemoveCustomer} from '../action/customersAction'

function Customerlist(props){
    //console.log('customerslist', props.customers)
    if(props.customers.length == 0){
        props.dispatch(startSetCustomer())
    }

    const handleRemove = (cust)=>{
        const confirmRemove = window.confirm(`Are you sure to remove ${cust.name} ?`)
        if(confirmRemove){
            props.dispatch(startRemoveCustomer(cust._id))
        }
    }

    return(
        <div>
            <h3>Total customers = {props.customers.length}</h3>
            <ul>
                {
                    props.customers.map((cust)=>{
                        return <li key= {cust._id}><Link to = {`/customers/${cust._id}`}>{cust.name}</Link>
                                <Link to = {`/customers/edit/${cust._id}`}>Edit</Link>
                                <button onClick = {()=>{handleRemove(cust)}}>Delete</button>
                               </li>
                    })
                }
            </ul>
            <Link to = "/customers/new">Add customer</Link><br/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        customers: state.customers
    }
}

export default connect(mapStateToProps)(Customerlist)