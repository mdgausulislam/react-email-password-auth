import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';


const auth=getAuth(app);

const Login = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const emailRef=useRef();

    const handleLogin=event=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        //validation
        setError('');
        setSuccess('');
        if(!/(?=.*[A-z].*[A-Z])/.test(password)){
            setError('please at least two UpperCase letter');
            return;
        }else if(!/(?=.*[!@#$&*])/.test(password)){
            setError('Please special character written')
            return;
        }else if(password.length < 6){
            setError("please at least 6 character written")
            return;
        }

        signInWithEmailAndPassword(auth,email,password)
            .then(result=>{
                const loggedUser=result.user;
                console.log(loggedUser);
                setSuccess('login successfully');
                setError('')
            })
            .catch(error=>{
                setError(error.message)
            })
    }

    const handleResetPassword=event=>{
        const email=(emailRef.current.value);
        if(!email){
            alert('please provide your email address to reset your password')
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('please check your email')
        })
        .catch(error=>{
            console.log(error);
            setError()
        })
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Please Login
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Username</label>
                                    <input type="email" ref={emailRef} name='email' className="form-control" id="username" placeholder="Enter your username" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                {/* <input type="checkbox" name="checkbox" id="" value="Remember Me" /> */}
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <p><small>Forget Password ? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
                            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
                            <p className='text-danger'>{error}</p>
                            <p className='text-success'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;