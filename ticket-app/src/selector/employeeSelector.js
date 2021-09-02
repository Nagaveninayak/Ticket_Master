export const findEmployee = (employees, id)=>{
    return employees.find((empl)=> empl._id==id)
}
