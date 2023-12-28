import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Verify = () => {
    const history = useHistory();
    const verifyHandler = (event) => {
        event.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0',{
            method: 'POST',
            body: JSON.stringify({
                requestType: 'VERIFY_EMAIL',
                idToken: localStorage.getItem('token'),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                let errorMessage = 'Authentication failed';
                throw new Error(errorMessage);
                });
            }
            }).then(data => {
                history.replace('/');
            }).catch((err) => {
            alert(err.message);
            })
    }
  return (
    <div className='text-center mt-5'><button onClick={verifyHandler} className='btn btn-primary'>Verify Eamil</button></div>
  )
}

export default Verify