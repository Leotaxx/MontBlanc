const express=require('express');
const router=express.Router();
const Car = require('../models/Car.js');

router.post('/add',async(req,res)=>{
    try{
        const {make,model,year,owner}=req.body;
        let car = new Car({
            make,
            model,
            year,
            owner
        });
        await car.save();
        res.status(201).json({msg:'Car added successfully'});
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const car =await Car.findById(req.params.id);
        if(!car){
            return res.status(404).json({msg:'Car not found'});
        }
        res.json(car);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports=router;
