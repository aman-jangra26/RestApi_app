 const { message } = require('statuses');
const userModel = require('../model/user'); 
const userDetailsModel = require('../model/userDetails')

exports.getUsers = async (req,res)=>{ 
    try{
        const users = await  userModel.find()
        if( !users){
            return res.status(404).json({message:'user not found'})
        } 
        res.status(201).json({users});
    }
    catch(error){
        res.status(500).json({message:error.message+"hji"})
    }
}
exports.updateUser = async (req,res)=>{ 
    const {id}  = req.params
    try{
        const updateduser = await  userModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true } // Return the updated document
        )
        if( !updateduser){
            return res.status(404).json({message:'user not updated'})
        } 
        res.status(201).json({updateduser});
    }
    catch(error){
        res.status(500).json({message:error.message+"hji"})
    }
}


exports.getUser = async (req,res)=>{ 
   const {id} = req.params
    try{
        const user = await  userModel.findById(id)
        if( !user){
            return res.status(404).json({message:'user not found'})
        } 
        res.status(201).json({user});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.registerUser = async (req,res)=>{
    const { username ,email, password}=req.body;
    try{
        const user = await  userModel.create(({username,email,password}));
        res.status(201).json({user});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.deleteUser = async (req,res)=>{
    const { id }=req.params;
    try{
        const user = await  userModel.findByIdAndDelete(id);
        if( !user){
            return res.status(404).json({message:'user not found'})
        }
        res.status(200).json({message:'user delete succesfully',user});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.addUserDetails = async(req,res)=>{
    const userId=req.params.id;
    const { firstName, lastName, contactNumber, bio, interests } = req.body;
    try{

        const UserDetails = await  userDetailsModel.create(
          ({  userId,
            firstName,
            lastName,
            contactNumber,
            bio,
            interests})
        )
        res.status(201).json({ UserDetails });
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}