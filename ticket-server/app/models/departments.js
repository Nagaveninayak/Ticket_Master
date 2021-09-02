const mongoose = require('mongoose')
const Schema = mongoose.Schema
const departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        refPath: 'User',
        required: true
    }
})


const Department = mongoose.model("Department", departmentSchema)

module.exports = {Department}