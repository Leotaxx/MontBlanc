const express=require('express');
const router=express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('..authMiddleware');

router.get('/proctected',auth,(req,res)=>{
    res.json({msg:'Welcom user ${req.user.id}'});
});
router.post('/register',async(req,res)=>{
    try{
        const {username,email,password}=req.body;   
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'User already exits'});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        user=new User({
            username,
            email,
            password:hashedPassword
        });
        await user.save();
        res.status(201).json({msg:'User registered successfully'});
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
});

router.post('/login',async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        let user = await User.findOne({email});
        if (!user){
            return res.status(400).json({msg:'Invalid credentials'});
        }
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Invalid credentials'});
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:3600});
        res.json({token});
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }

});

module.exports=router;
