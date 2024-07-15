import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePoints } from './pointsContext';
import { useAuth } from './AuthContext';
import './Login.css';

const Login = () => {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const { email, password } = inputs;
    const { addPoints } = usePoints();
    const { login } = useAuth();
    const navigate = useNavigate();

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        login();
        addPoints(10);
        alert('You have been awarded 10 points for logging in!');
        navigate('/');
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="container">
                <div className="row justify-content-md-center">
                    <h1 className="text-center" style={{ fontWeight: 'bolder' }}>Login</h1>
                    <div className="col-md-6 b1 body">
                        <h3 className="my-3" style={{ color: 'black', fontWeight: 'bolder' }}>Enter your credentials</h3>
                        <form onSubmit={onSubmitForm}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control my-3"
                                value={email}
                                onChange={onChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control my-3"
                                value={password}
                                onChange={onChange}
                                required
                            />
                            <div className="text-center">
                                <button className="btn btn-primary btn-block" style={{ fontWeight: 'bolder' }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
