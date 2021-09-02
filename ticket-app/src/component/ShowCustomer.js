import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCustomer} from '../selector/customerSelector'

function ShowCustomer(props){
    const {_id, name, email, mobile} = props.customers||{}
    return(
        <div>
            {
                //initially store is empty when you reboot
                props.customers ? (
                    <div>
                    <h3>Displaying the customers</h3>
                    <p>{_id}, {name}, {email}, {mobile}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
            <Link to = "/customers">back</Link>
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return{
        customers: findCustomer(state.customers, id)
    }
}

export default connect(mapStateToProps)(ShowCustomer)