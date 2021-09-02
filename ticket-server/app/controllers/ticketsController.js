const {Ticket} = require('../models/tickets')

module.exports.addTicket = ((req, res)=>{
    const {user} = req
    const body = req.body
    const ticket = new Ticket(body)
    ticket.user = user._id
    ticket.save()
        .then((ticket)=>{
            res.send(ticket)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showAllTicket = ((req, res)=>{
    const {user} = req
    Ticket.find({user: user._id})
        .then((ticket)=>{
            res.send(ticket)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.showTicket = ((req, res)=>{
    const {user} = req
    const id = req.params.id
    Ticket.findOne({_id: id, user: user._id})
        .then((ticket)=>{
            res.send(ticket)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.editTicket = ((req, res)=>{
    const {user} = req
    const id = req.params.id
    const body = req.body
    Ticket.findOneAndUpdate({_id: id, user: user._id}, {$set: body}, {runValidators: true, new: true})
        .then((ticket)=>{
            if(!ticket){
                res.send({})
            }
            res.send(ticket)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.deleteTicket = ((req, res)=>{
    const {user} = req
    const id = req.params.id
    Ticket.findOneAndDelete({_id: id, user: user._id})
        .then((ticket)=>{
            if(!ticket){
                res.send({})
            }
            res.send({ticket})
        })
        .catch((err)=>{
            res.send(err)
        })
})