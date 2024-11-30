const express = require('express');
const {registerUser ,deleteUser ,getUsers,getUser,updateUser,addUserDetails} = require('../controller/userController');
const router = express.Router()

router.get('/',getUsers)
router.get('/:id',getUser) 
router.put('/:id/update',updateUser) 
router.post('/register',registerUser)
router.delete('/delete/:id',deleteUser)

router.post('/:id/add_details',addUserDetails)

module.exports= router;