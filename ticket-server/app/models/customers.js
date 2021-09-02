const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const customerSchema = new Schema({
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
                return 'Invalid phone number'
            }
        },
        minlength: 10,
        maxlength: 12
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Customer = mongoose.model('Cusotmer', customerSchema)

module.exports = {Customer}
