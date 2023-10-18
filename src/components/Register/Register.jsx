import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config';

const auth=getAuth(app);

const Register = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        setSuccess('');
        setError('')
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);

        // validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('please at least one uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('please at least two numbers');
            return;
        }
        else if(password.length<6){
            setError('please add at least 6 character in your password')
            return;
        }


        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            const user=userCredential.user;
            console.log(user);
            setError('');
            event.target.reset();
            setSuccess('user has created successfully')
        })
        
        .catch(error=>{
            console.error(error);
            setError(error.message);
            
        })
    }
    const handleEmailChange=(event)=>{
        // console.log(event.target.value);
    }
    const handlePasswordBlur=(event)=>{
        // console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>Register page</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required/><br/>
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your password' required/><br/>
                <input className='rounded btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;