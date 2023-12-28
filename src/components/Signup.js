import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { authActions } from '../store/auth-reducer';

const Signup = (props) => {
    
    const [isLogin, setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        let url;
        if (!isLogin){
          const enteredConfirmPassword = confirmPasswordInputRef.current.value;
          if (!isLogin && enteredPassword === enteredConfirmPassword){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0'
          }
          else {
            alert('Password does not match')
          }
        }
        if (isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0'
        }
        fetch(
        url,{
            method: 'POST',
            body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        }
        ).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            throw new Error(errorMessage);
            });
        }
        }).then(data => {
        props.email(data.email)
        dispatch(authActions.login(data.idToken));
        history.replace(isLogin ?'/Home' : '/Verify');
        }).catch((err) => {
        alert(err.message);
        })
        
    }
  return (
    <section className='container container-fluid  bg-body-secondary text-center w-25 mt-5' style={{borderRadius: 10}}>
        <form>
            <div className='p-3'>
                <h3>{isLogin? 'Login' : 'Sign Up'}</h3>
            </div>
            <div className='p-3'>
                <input type='email' className='form-control' ref={emailInputRef} placeholder='Enter your email' required />
            </div>
            <div className='p-3'>
                <input type='password' className='form-control' ref={passwordInputRef} placeholder='Enter your password' required />
            </div>
            {!isLogin && <div className='p-3'>
                <input type='password' className='form-control' ref={confirmPasswordInputRef} placeholder='Enter confirm password' required />
            </div>}
            <div>
                {isLogin && <Link to='/ForgotPassword'>Forgot password?</Link>}
            </div>
            <div className='p-3'>
                <button className='btn btn-primary'  onClick={submitHandler}>Sign Up</button>
            </div>
            <div>
                <button className='btn' onClick={switchAuthModeHandler}>
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>
        </form>
    </section>
  )
}

export default Signup