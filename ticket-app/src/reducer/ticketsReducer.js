const initialValue = []

const ticketsReducer = (state = initialValue, action)=>{
    switch(action.type){
        case 'SET_TICKET': {
            return [...action.payload]
        }
        case 'ADD_TICKET': {
            return [...state, action.payload]
        }
        case 'EDIT_TICKET': {
            return state.map((tick)=>{
                if(tick._id == action.payload._id){
                    return {...tick, ...action.payload}
                }else{
                    return {...tick}
                }
            })
        }
        case 'REMOVE_TICKET': {
            return state.filter((tick)=>tick._id != action.payload._id)
        }
        default: {
            return [...state]
        }
    }
}

export default ticketsReducer