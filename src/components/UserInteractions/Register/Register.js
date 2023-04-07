import { useState, useContext } from 'react';
import { RegisteredProvider } from '../contexts/RegisteredContext';
import styles from './Register.module.css';

export default function Register ({onRegisterSubmit}) {
    const [localRegister, setLocalRegister] = useState({
        username: '',
        password: '',
        confirmPass: ''
    });

    const onRegisterChange = (e) => {
       
        setLocalRegister(state => ({ ...state, [e.target.name] : e.target.value}));console.log(localRegister);
    }

    return (
        <div className={styles['register']}>
            <form onSubmit={onRegisterSubmit}>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    id='username' 
                    name='username'
                    value={localRegister.username} 
                    onChange={onRegisterChange}
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    id='password' 
                    name='password'
                    value={localRegister.password} 
                    onChange={onRegisterChange}
                />
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input 
                    type='password' 
                    id='confirmPass'
                    name='confirmPass' 
                    value={localRegister.confirmPass} 
                    onChange={onRegisterChange} 
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}