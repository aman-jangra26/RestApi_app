 const userModel = require('../model/user');
const { json } = require('body-parser');

exports.registerUser = async (req,res)=>{
    const { username ,email, password}=req.body;
    try{
        const user = await  userModel.create(({username,email,password}));
        res.status(201),json({user});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
