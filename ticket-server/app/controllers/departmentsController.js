const {Department} = require('../models/departments')

module.exports.addDepartment = ((req, res)=>{
    const {user} = req
    const body = req.body
    const department = new Department(body)
    department.user = user._id
    department.save()
        .then((dept)=>{
            res.send(dept)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showAllDepartment = ((req, res)=>{
    const {user} = req
    Department.find({user: user._id})
        .then((dept)=>{
            res.send(dept)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showDepartment = ((req, res)=>{
    const id = req.params.id
    const {user} = req
    Department.findOne({_id: id, user: user._id})
        .then((dept)=>{
            if(!dept){
                res.send({})
            }
            res.send(dept)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.editDepartment = ((req, res)=>{
    const id = req.params.id
    const body = req.body
    const {user} = req
    Department.findOneAndUpdate({_id:id, user: user._id}, {$set: body}, {runValidators: true, new: true})
        .then((dept)=>{
            if(!dept){
                res.send({})
            }
            res.send(dept)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.deleteDepartment = ((req, res)=>{
    const id = req.params.id
    const {user} = req
    Department.findOneAndDelete({_id: id, user: user._id})
        .then((dept)=>{
            if(!dept){
                res.send({})
            }
            res.send(dept)
        })
        .catch((err)=>{
            res.send(err)
        })
})

