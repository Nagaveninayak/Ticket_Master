export const findTicket = (state, id)=>{
    return state.find((ticket)=> ticket._id == id)
}