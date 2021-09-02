import axios from '../config/axios'

//register the user 
export const startRegister = (formData, redirect)=>{
    return(dispatch)=>{
        axios.post('/users/register', formData)
            .then((response)=>{
                console.log('register', response.data)
                if(response.data.hasOwnProperty('error')){
                    alert(response.data.message)
                }else{
                    console.log(response.data)
                    redirect()
                }
            })
    }
}

//login the user and get the token in localhost
export const startLogin = (formData, redirect)=>{
    return(dispatch)=>{
        axios.post('/users/login', formData)
            .then((response)=>{
                console.log('login', response)
                if(response.data.error){
                    alert(response.data.error)
                }else{
                    console.log(response.data)
                    localStorage.setItem('authToken', response.data.token)
                    // redirect()
                }
            })
    }
}

export const setUser = (user)=>{
    return {type: 'SET_USER', payload: user}
}

export const startAccount = ()=>{
    return(dispatch)=>{
        axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user = response.data
            dispatch(setUser(user))
        })
    }
}

export const removeUser = ()=>{
    return {type: 'REMOVE_USER'}
}

export const startLogout = ()=>{
    return(dispatch)=>{
        axios.delete('/users/logout', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.notice){
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                window.location.href = "/users/register"
            }
        })
    }
}