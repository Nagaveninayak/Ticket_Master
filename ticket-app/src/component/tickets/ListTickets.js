import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startSetTicket, startRemoveTicket} from '../../action/ticketsAction'

class TicketList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pending: true,
            completed: false,
            searchTicket: false,
            search: ''
        }
    }

    

    render(){
        if(this.props.tickets.length == 0){
            this.props.dispatch(startSetTicket())
        }
    
        const handleRemove = (ticket)=>{
            const confirmRemove = window.confirm(`Are you sure to delete ${ticket.name} ?`)
            if(confirmRemove){
                this.props.dispatch(startRemoveTicket(ticket._id))
            }
        }

        return(
            <div>
                <h3>Displaying ..</h3>
                <h3>Total number of tickets - {this.props.tickets.length}</h3>
                <ul>
                    {
                        this.props.tickets.map((tick)=>{
                            return <li key = {tick._id}><Link to = {`/tickets/${tick._id}`}>{tick.name}</Link>
                                    <button onClick = {()=>{handleRemove(tick)}}>delete</button>
                            </li>
                        })
                    }
                </ul>
                <Link to = "/tickets/new">new</Link>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        tickets: state.tickets
    }
}
export default connect(mapStateToProps)(TicketList)