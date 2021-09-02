const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema
const userSchema = new Schema({
    "username": {
        type: String,
        required: true,
        unique: true
    },
    "email":{
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
    "password": {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 128
    },
    "tokens": [
        {
            token: {
                type: String
            }, 
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})


//password hash
userSchema.pre('save',function(next){
    const user = this
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then((salt)=>{
            bcryptjs.hash(user.password, salt)
                .then((hashedPassword)=>{
                    user.password = hashedPassword
                    next()
                })
        })
    }else{
        next()
    }
})

userSchema.statics.findByCredentials = function (body) {
    const User = this
    return User.findOne({ email: body.email })
        .then(function (user) {
            // console.log('users', user)
            if (!user) {
                return Promise.reject({ error: 'invalid email or password'})
            }
            // console.log('here')
            return bcryptjs.compare(body.password, user.password)
                .then(function (result) {
                    // console.log('pass', body.password)
                    // console.log('user pass', user.password)
                    // console.log(result)
                    if (result) {
                        return Promise.resolve(user)
                    } else {
                        return Promise.reject({ error: 'invalid password'})
                    }
                })
        })
        .catch(function (err) {
            return Promise.reject(err)
        })
}


userSchema.statics.findByToken = function(token){
    // console.log('u', token)
    const User = this
    let tokenData
    try{
        tokenData = jwt.verify(token, 'suga@123')
        // console.log('u', tokenData)
    }catch(err){
        return Promise.reject(err)
    }
    // console.log('1', tokenData._id, token)
    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
    
}

userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date())
    }
    // console.log('tokendata', tokenData)
    const token = jwt.sign(tokenData, 'suga@123')
    // console.log(token)
    user.tokens.push({token})
    // console.log('toke', user.tokens)
    return user.save()
            .then((user)=>{
                // console.log("user", user)
                return Promise.resolve(token)
            })
            .catch((err)=>{
                return Promise.reject(err)
            })
}



const User = mongoose.model('User', userSchema)

module.exports = {User}

