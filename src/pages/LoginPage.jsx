import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { login } from '../api';
import Input from '../components/form/Input';
import Navbar from '../components/Navbar'
import { useUserContext } from '../context';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const { setUser } = useUserContext();
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2>Login</h2>
                <form onSubmit={async e => {
                    e.preventDefault();
                    const u = await login(email, password);
                    setUser(u);
                    navigate('/')
                }} >
                    <Input label='Email' required value={email} onChange={setEmail} type='email' />
                    <Input label='Password' required value={password} onChange={setpassword} type='password' />
                    <button className='btn btn-primary form-control mt-2'>Login</button>
                </form>
            </div>
        </div>
    )
}
