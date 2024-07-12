import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputs;
    const navigate = useNavigate();

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    // on submit form for normal login
    const onSubmitForm = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1 className="text-center" style={{ fontWeight: "bolder" }}>Login</h1>
                        <div className="col-md-6 b1 body">
                            <h3 className="my-3" style={{ color: 'black', fontWeight: 'bolder' }}>Enter your credentials</h3>
                            <form onSubmit={onSubmitForm}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control my-3"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control my-3"
                                    value={password}
                                    onChange={e => onChange(e)}
                                    required
                                />
                                <div className="text-center">
                                    <button className="btn btn-primary btn-block" style={{ fontWeight: "bolder" }}>Submit</button>
                                </div>
                            </form>
                        </div>
                        <Link to="/register">New User then register here...</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
