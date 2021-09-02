import axios from '../config/axios'

export const setTicket = (ticket)=>{
    return {type: 'SET_TICKET', payload: ticket}
} 

export const startSetTicket = ()=>{
    return(dispatch)=>{
        axios.get('/tickets',{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket = response.data
            // console.log(ticket)
            dispatch(setTicket(ticket))
        })
    }
}


export const addTicket = (ticket)=>{
    return {type: 'ADD_TICKET', payload: ticket}
}

export const startAddTicket = (formData)=>{
    return(dispatch)=>{
        axios.post('/tickets', formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket = response.data
            // console.log(ticket)
            dispatch(addTicket(ticket))
            window.location.href = "/tickets"
        })
    }
}

export const editTicket = (ticket)=>{
    return {type: 'EDIT_TICKET', payload: ticket}
}

export const startEditTicket = (formData, id)=>{
    return(dispatch)=>{
        axios.put(`/tickets/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket = response.data
            // console.log(ticket)
            dispatch(editTicket(ticket))
            window.location.href = "/tickets"
        })
    }
}


export const removeTicket = (ticket)=>{
    return {type: 'REMOVE_TICKET', payload: ticket}
}

export const startRemoveTicket = (id)=>{
    return(dispatch)=>{
        axios.delete(`/tickets/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket = response.data
            dispatch(removeTicket(ticket))
            window.location.href = "/tickets"
        })
    }
}