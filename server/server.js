require('dotenv').config();
const express=require('express');
const app=express();
const mongoose= require('mongoose');
const cors=require('cors');

const PORT=process.env.PORT ||5001;
const authRoutes =require('./routes/auth');
const carRoutes=require('./routes/car');

app.use(express.json());
app.use(cors());

app.use('./routes/auth',authRoutes);
app.use('./routes/car',carRoutes);


const mongoose_URI=process.env.mongoose_URI;
mongoose.connect(mongoose_URI)
    .then(()=>console.log('MongoDB connection established'))
    .catch(err=>console.log('MongoDB connection error',err));


app.get('/',(req,res)=>{
    res.send("hello,world");
});

app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}');
});

