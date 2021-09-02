import axios from '../config/axios'

export const setEmployees = (employees)=>{
    return {type: 'SET_EMPLOYEES', payload: employees}
}

export const startSetEmployees = ()=>{
    return(dispatch)=>{
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employees = response.data
            // console.log(employees)
            dispatch(setEmployees(employees))
        })
    }
}

export const addEmployees = (employee)=>{
    return {type: 'ADD_EMPLOYEES', payload: employee}
}

export const startAddEmployees = (formData)=>{
    return(dispatch)=>{
        axios.post('/employees', formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employee = response.data
            // console.log('add', employee)
            dispatch(addEmployees(employee))
            window.location.href = "/employees"
        })
    }
}


export const editEmployees = (employee)=>{
    return {type: 'EDIT_EMPLOYEES', payload: employee}
}

export const startEditEmployees = (formData, id)=>{
    return(dispatch)=>{
        axios.put(`/employees/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employee = response.data
            // console.log(employee)
            dispatch(editEmployees(employee))
            window.location.href = "/employees"
        })
    }
}


export const removeEmployees = (employee)=>{
    return {type: 'REMOVE_EMPLOYEES', payload: employee}
}

export const startRemoveEmployees = (id)=>{
    return(dispatch)=>{
        axios.delete(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employee = response.data
            // console.log(employee)
            dispatch(removeEmployees(employee))
            window.location.href = "/employees"
        })
    }
}