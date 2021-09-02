const {Employee} = require('../models/employees')

module.exports.addEmployee = ((req, res)=>{
    const {user} = req
    const body = req.body
    const employee = new Employee(body)
    employee.user = user._id
    employee.save()
        .then((empl)=>{
            res.send(empl)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showAllEmployee = ((req, res)=>{
    const {user} = req
    Employee.find({user: user._id})
        .then((empl)=>{
            res.send(empl)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showEmployee = ((req, res)=>{
    const {user} = req
    const id = req.params.id
    Employee.findOne({_id: id, user: user._id})
        .then((empl)=>{
            res.send(empl)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.editEmployee = ((req, res)=>{
    const {user} = req
    const id = req.params.id
    const body = req.body
    Employee.findOneAndUpdate({_id: id, user: user._id}, {$set: body}, {runValidators: true, new: true})
        .then((empl)=>{
            if(!empl){
                res.send({})
            }
            res.send(empl)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.deleteEmployee = ((req, res)=>{
    const {user} = req
    const id = req.params.id
    Employee.findOneAndDelete({_id: id, user: user._id})
        .then((empl)=>{
            if(!empl){
                res.send({})
            }
            res.send(empl)
        })
        .catch((err)=>{
            res.send(err)
        })
})

