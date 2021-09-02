const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 128
    },
    priority: {
        type: String,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    },
    customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    employee: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = {Ticket}