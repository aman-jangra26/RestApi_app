const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username:{ type:String ,required:true,min:4},
    email :{type:String,require:true,unique:true},
    password :{type:String ,required:true}
})
module.exports = mongoose.model('User', userSchema);