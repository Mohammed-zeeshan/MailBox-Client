import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { authActions } from '../store/auth-reducer';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    history.replace('/');
    dispatch(authActions.logout());
  }
  return (
    <header>
        <div className='h-25 bg-success'>
            <label className='p-3 fs-3'>MailBox</label>
            <button className='btn btn-danger position-absolute end-0' onClick={logoutHandler}>Logout</button>
        </div>
    </header>
  )
}

export default Header