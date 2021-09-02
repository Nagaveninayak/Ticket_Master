const {User} = require('../models/users')

const authentication = (req, res, next)=>{
    const token = req.header('x-auth')
    // console.log('token-auth', token)
    User.findByToken(token)
        .then((user)=>{
            // console.log('auth-user', user)
            if(user){
                req.user = user
                req.token = token
                next()
            }else{
                res.send({notice: 'not avilable'})
            }
            
        })
        .catch((err)=>{
            res.send(err)
        })
}

module.exports = {authentication}