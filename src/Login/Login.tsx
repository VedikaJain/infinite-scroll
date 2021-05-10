import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

export const Login = ({ setIsAuthenticated }: any) => {
  const history = useHistory();

  const authenticateUser = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();
    if (username === 'foo' && password === 'bar') {
      setIsAuthenticated(true);
      history.push('/home');
    }
  }

  return (
    <form onSubmit={authenticateUser}>
      <div className='login'>
        <div className='login--form-element'>
          <label htmlFor='username'>Username: </label>
          <input name='username' data-testid='username' />
        </div>
        <div className='login--form-element'>
          <label htmlFor='password'>Password: </label>
          <input name='password' type='password' data-testid='password' />
        </div>
        <div className='login__submit'>
          <input type='submit' data-testid='submit' />
        </div>
      </div>
    </form>
  )

}