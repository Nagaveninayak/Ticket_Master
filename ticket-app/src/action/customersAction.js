import axios from '../config/axios'

export const setCustomer = (customers)=>{
    return{type: 'SET_CUSTOMER', payload: customers}
}

export const startSetCustomer = ()=>{
    return(dispatch)=>{
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customers = response.data
            dispatch(setCustomer(customers))
        })
    }
}


export const addCustomer = (customer)=>{
    return{type: 'ADD_CUSTOMER', payload: customer}
}

export const startAddCustomer = (formData, redirect)=>{
    return(dispatch)=>{
        axios.post('/customers',formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer = response.data
            if(!response.data.errors){
                dispatch(addCustomer(customer))
                redirect()
            }else{
                alert('Enter a valid properties')
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const editCustomer = (customer)=>{
    return{type: 'EDIT_CUSTOMER', payload: customer}
}

export const startEditCustomer = (formData, id)=>{
    return(dispatch)=>{
        axios.put(`/customers/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            // console.log(response.data)
            const customer = response.data
            dispatch(editCustomer(customer))
            window.location.href = "/customers"
        })
    }
}

export const removeCustomer = (customer)=>{
    return{type: 'REMOVE_CUSTOMER', payload:customer}
}

export const startRemoveCustomer = (id)=>{
    return(dispatch)=>{
        axios.delete(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer = response.data
            dispatch(removeCustomer(customer))
        })
    }
}