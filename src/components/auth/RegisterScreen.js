import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';


export const RegisterScreen = () => { 


    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
        confirm:''
    });

    const {name, email, password, confirm} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirm);
    };
    return (
        <div>
            <h3 className='auth__title'>Register</h3>

            <form onSubmit={handleRegister}>
                <input 
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    className='auth__input'
                    autoComplete='off' />
                <input 
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    className='auth__input' />
                <input 
                    type="text"
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                    className='auth__input' />
                <input 
                    type="text"
                    placeholder='Confirm Password'
                    name='confirm'
                    value={confirm}
                    onChange={handleInputChange}
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
