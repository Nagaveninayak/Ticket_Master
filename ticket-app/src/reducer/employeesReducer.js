const initialState = []

const employeesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'SET_EMPLOYEES':{
            return [...action.payload]
        }
        case 'ADD_EMPLOYEES': {
            return [...state, action.payload]
        }
        case 'EDIT_EMPLOYEES': {
            return state.map((empl)=>{
                if(empl._id == action.payload._id){
                    return {...empl, ...action.payload}
                }else{
                    return [...empl]
                }
            })
        }
        case 'REMOVE_EMPLOYEES': {
            return state.filter((empl)=>
            empl._id != action.payload._id)
        }
        default: {
            return [...state]
        }
    }
}

export default employeesReducer