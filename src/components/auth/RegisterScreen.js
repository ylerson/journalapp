import React from 'react';
import { Link } from 'react-router-dom';


export const RegisterScreen = () => { 
    return (
        <div>
            <h3 className='auth__title'>Register</h3>

            <form>
                <input 
                    type="text"
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off' />
                <input 
                    type="text"
                    placeholder='Email'
                    name='email'
                    className='auth__input' />
                <input 
                    type="text"
                    placeholder='Password'
                    name='password'
                    className='auth__input' />
                <input 
                    type="text"
                    placeholder='Confirm Password'
                    name='confirm'
                    className='auth__input' />
                <button 
                    className='btn btn-primary btn-block'
                    type='submit'>Register
                </button>
     
                <div className='auth__more'>

                    <Link className='auth__link' to="/auth/login">Sign in</Link>

                </div>
            </form>
       
        </div>
    );
};
