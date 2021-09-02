import React from 'react'
import TicketForm from './FormTickets'
import {startEditTicket} from '../../action/ticketsAction'
import {findTicket} from '../../selector/ticketSelector'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

function TicketEdit(props){
    const handleSubmit = (formData)=>{
        const id = props.match.params.id
        props.dispatch(startEditTicket(formData, id))
    }
    return(
        <div>
            <h3>Edit form here...</h3>
            <TicketForm handleSubmit = {handleSubmit} tickets = {props.tickets}/>
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return {
        tickets: findTicket(state.tickets, id)
    }
}

export default withRouter(connect(mapStateToProps)(TicketEdit))