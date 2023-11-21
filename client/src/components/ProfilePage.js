import React, {useState,useEffect} from 'react';
import axios from 'axios';


const ProfilePage=()=>{
    const [profile,setProfile]=useState(null);

    useEffect(()=>{
        const fetchProfile = async()=>{
            try{
                const response = await axios.get('http://localhost:5000/api/profile');
                setProfile(response.data);
            }catch(error){
                console.log('Error fecthing profile', error);
            }
    };

    fetchProfile();
},[]);


if(!profile){
    return <div>Loading profile</div>;
}
return(
    <div>
        <h1>Profile</h1>
        <p>Name:{profile.name}</p>
        <p>Email:{profile.email}</p>
    </div>
);
};
export default ProfilePage;