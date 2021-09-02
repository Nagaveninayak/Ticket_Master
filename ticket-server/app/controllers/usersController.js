const {User} = require('../models/users')

//post - user first register
module.exports.addUser = ((req, res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user)=>{
            res.send(user)
        })
        .catch((err)=>{
            res.send(err)
        })
})

//show the user
module.exports.showAllUser = ((req, res)=>{
    User.find()
        .then((users)=>{
            res.send(users)
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.loginUser = ((req, res)=>{
    const body = req.body
    // console.log('body', body)
    User.findByCredentials(body)
        // console.log('body', body)
        .then((user)=>{
            // console.log(user)
            return user.generateToken()
        })
        .then((token)=>{
            res.send({token})
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports.account = ((req, res)=>{
    const {user} = req
    res.send(user)
})

module.exports.deleteUser = ((req, res)=>{
    const {user, token} = req
    User.findByIdAndUpdate(user._id, {$pull: {tokens: {token: token}}})
        .then(()=>{
            res.send({notice: 'successfully logged out'})
        })
        .catch((err)=>{
            res.send(err)
        })
})


