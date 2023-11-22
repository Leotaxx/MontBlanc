import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post('mongodb+srv://lyleride:lyleride@cluster0.al8raba.mongodb.net/?retryWrites=true&w=majority'
            ,{email,password});
            console.log(response.data);
            navigate('/profile');
        }catch(error){
            console.error(error);
        }
    };


    return(
        
        <form onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button type='submit'>Login</button>


        </form>
    );
}
export default LoginPage;