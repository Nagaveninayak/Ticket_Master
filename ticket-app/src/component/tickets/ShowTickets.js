import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findTicket} from '../../selector/ticketSelector'

function TicketShow(props){
    const {_id, name, code, message, priority} = props.tickets||{}
    return(
        <div>
            <h3>Displaying the tickets</h3>
            <p>{_id}</p>
            <p>{name}</p>
            <p>{code}</p>
            <p>{message}</p>
            <p>{priority}</p>
            <Link to = {`/tickets/edit/${_id}`}>edit</Link><br/>
            <Link to = "/tickets">back</Link>
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return {
        tickets: findTicket(state.tickets, id)
    }
}

export default connect(mapStateToProps)(TicketShow)