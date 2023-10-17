import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config';

const auth=getAuth(app);

const Register = () => {
    const [email,setEmail]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            const user=userCredential.user;
            console.log(user);
        })
        
        .catch(error=>{
            console.error(error);
        })
    }
    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=(event)=>{
        console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>Register page</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email'/><br/>
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your password'/><br/>
                <input className='rounded btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;