const initialCustomerState = []

const customersReducer = (state = initialCustomerState, action)=>{
    switch(action.type){
        case 'SET_CUSTOMER': {
            return [...action.payload]
        }
        case 'ADD_CUSTOMER': {
            // console.log('reduccers' , action.payload)
            return [...state, action.payload]
        }
        case 'EDIT_CUSTOMER': {
            return state.map((cust)=>{
                if(cust._id == action.payload._id){
                    return {...cust, ...action.payload}
                }else{
                    return {...cust}
                }
            })
        }
        case 'REMOVE_CUSTOMER': {
            return state.filter((cust)=>{
                return cust._id != action.payload
            })
        }
        default: {
            return [...state]
        }
    }
}

export default customersReducer