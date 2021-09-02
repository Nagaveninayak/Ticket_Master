const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'Invalid email format'
            }
        }

    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function(num){
                return validator.isMobilePhone(num)
            },
            message: function(){
                return 'Invalid phone format0'
            }
        },
        minlength: 10,
        maxlength: 12
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = {Employee}