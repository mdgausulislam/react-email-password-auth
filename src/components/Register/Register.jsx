import React, { useState } from 'react';

const Register = () => {
    const [email,setEmail]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event.target.email.value);
    }


    const handleEmailChange=(event)=>{
        console.log(event.target.value);
    }
    const handlePasswordBlur=(event)=>{
        console.log(event.target.value);
    }
    return (
        <div>
            <h4>Register page</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email'/><br/>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your password'/><br/>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;