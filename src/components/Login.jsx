import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import signimg from '../images/sign-img.jpeg';
import './sign.css';
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate();
    const { allUsers, setCurrentUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [user, setUser] = useState({
        id: uuidv4(),
        emailOrPhone: '',
        password: '',
    });

    const changeInputs = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };


    const validateForm = () => {
        let formError = {};
        let isValid = true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{11}$/;
        
        if (!emailPattern.test(user.emailOrPhone.trim()) && !phonePattern.test(user.emailOrPhone.trim())) {
            formError.emailOrPhone = "Must be a valid email or 10-digit phone number *";
            isValid = false;
        }


        if (user.password.trim().length < 6) {
            formError.password = "Password must be at least 6 characters *";
            isValid = false;
        }

        setError(formError);
        return isValid;
    };

    const submitLoginForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let currentUser = allUsers.find(u => 
                (u.emailOrPhone === user.emailOrPhone && u.password === user.password)
            );

            if (currentUser) {
                setCurrentUser(currentUser);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    setUser({
                        emailOrPhone: '',
                        password: '',
                    });
                    navigate('/home');
                }, 1000);
            } else {
                toast.error("Email or phone number and password are incorrect");
                setUser({
                    emailOrPhone: "",
                    password: "",
                });
            }
        }
    };

    return (
        <div className="container-fluid spaces">
            <div className="row gap-5 align-items-center">
                <div className="col-lg-7">
                    <div>
                        <img src={signimg} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='form-controller mx-auto'>
                        <h2>Log in to Exclusive</h2>
                        <p className='mb-4'>Enter your details below</p>
                        <form onSubmit={submitLoginForm} className='sign-up'>
                            <div className='input-controller'>
                                <input
                                    type="text"
                                    placeholder="Email or Phone Number"
                                    name="emailOrPhone"
                                    onChange={changeInputs}
                                    value={user.emailOrPhone}
                                />
                                {error.emailOrPhone && <span className="text-danger">{error.emailOrPhone}</span>}
                            </div>
                            <div className='input-controller'>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={changeInputs}
                                    value={user.password}
                                />
                                {error.password && <span className="text-danger">{error.password}</span>}
                            </div>
                            <div className="login-button">
                                <button type="submit" className='login'>
                                    {loading ? <i className='fas fa-spinner fa-spin'></i> : "Login"}
                                </button>
                                <a href="#">Forget Password ?</a>
                            </div>
                        </form>
                        <div className="go-to-login">
                            <span>Create new account ?</span>
                            <Link to='/register'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
