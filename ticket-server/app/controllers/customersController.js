const {Customer} = require('../models/customers')


module.exports.addCustomer = ((req, res)=>{
    const {user} = req
    // console.log(user)
    const body = req.body
    const customer = new Customer(body)
    customer.user = user._id
    customer.save()
        .then((cust)=>{
            res.send(cust)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showAllCustomer = ((req, res)=>{
    const {user} = req
    Customer.find({user: user._id})
        .then((cust)=>{
            // console.log(cust)
            res.send(cust)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showOneCustomer = ((req, res)=>{
    const {user} = req
    const id = req.params.id
    // console.log(id)
    Customer.findOne({_id: id, user: user._id}).populate({path: "user", model: "User"})
        .then((cust)=>{
            res.send(cust)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.editCustomer = ((req, res)=>{
    const body = req.body
    const id = req.params.id
    Customer.findByIdAndUpdate(id, body, {runValidators: true, new: true})
        .then((cust)=>{
            if(cust){
                res.send(cust)
            }else{
                res.send({notice: 'customer not found'})
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    
})

module.exports.deleteCustomer = ((req, res)=>{
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then((cust)=>{
            if(cust){
                res.send(cust)
            }else{
                res.send({notice: 'customer not found'})
            }
        })
        .catch((err)=>{
            res.send(err)
        })
})