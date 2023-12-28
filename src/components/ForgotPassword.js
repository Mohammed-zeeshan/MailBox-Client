import React, { useRef } from 'react'

const ForgotPassword = () => {
    const emailInputRef = useRef();
    const submitHandler = (event) => {
        const email = emailInputRef.current.value;
        event.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0',{
            method: 'POST',
            body: JSON.stringify({
                requestType: 'PASSWORD_RESET',
                email: email,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err.message)
        })
    }
  return (
    <section>
        <form onClick={submitHandler}>
            <div className='p-4'>
                <input type='email' className='form-control w-25' ref={emailInputRef} placeholder='Enter Email' required />
            </div>
            <div className='p-4'>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default ForgotPassword