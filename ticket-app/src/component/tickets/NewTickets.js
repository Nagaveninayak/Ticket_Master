import React from 'react'
import {connect} from 'react-redux'
import TicketForm from './FormTickets'
import {startAddTicket} from '../../action/ticketsAction'

function TicketNew(props){
    const handleSubmit = (formData)=>{
        props.dispatch(startAddTicket(formData))
    }
    return(
        <div>
            <h3>Add new ticket here</h3>
            <TicketForm handleSubmit = {handleSubmit}/>
        </div>
    )
}

export default connect()(TicketNew)