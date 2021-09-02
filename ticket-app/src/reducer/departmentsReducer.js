const initialState = []

const departmentsReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'SET_DEPARTMENT': {
            return [...action.payload]
        }
        case 'ADD_DEPARTMENT': {
            return [...state, action.payload]
        }
        case 'EDIT_DEPARTMENT': {
            return state.map((dept)=>{
                if(dept._id == action.payload.id){
                    return {...dept, ...action.payload}
                }else{
                    return {...dept}
                }
            })
        }
        case 'REMOVE_DEPARTMENT': {
            return state.filter((dept)=>{
                return dept._id != action.payload._id
            })
        }
        default: {
            return [...state]
        }
    }
}

export default departmentsReducer