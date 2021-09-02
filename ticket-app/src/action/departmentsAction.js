import axios from '../config/axios'

export const setDepartment = (dept)=>{
    return {type: 'SET_DEPARTMENT', payload: dept}
}

export const startSetDepartment = ()=>{
    return(dispatch)=>{
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const dept = response.data
            // console.log('reducer',dept)
            dispatch(setDepartment(dept))
        })
    }
}

export const addDepartment = (department)=>{
    return {type: 'ADD_DEPARTMENT', payload: department}
}

export const startAddDepartment = (formData)=>{
    return(dispatch)=>{
        axios.post('/departments',formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            // console.log('data', response.data)
            const department = response.data
            dispatch(addDepartment(department))
            window.location.href = "/departments"
        })
    }
}

export const editDepartment = (department)=>{
    return {type: 'EDIT_DEPARTMENT', payload: department}
}

export const startEditDepartment = (formData, id)=>{
    return(dispatch)=>{
        axios.put(`/departments/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department = response.data
            // console.log(response.data)
            dispatch(editDepartment(department))
            window.location.href = "/departments"
        })
    }
}

export const removeDepartment = (department)=>{
    return {type: 'REMOVE_DEPARTMENT', payload: department}
}

export const startRemoveDepartment = (id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department = response.data
            dispatch(removeDepartment(department))
        })
    }
}