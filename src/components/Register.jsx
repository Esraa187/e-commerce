import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import signimg from '../images/sign-img.jpeg';
import './sign.css';
import googleLogo from '../images/google-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Register() {
    let navigate = useNavigate();
    const { allUsers, setAllUsers } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [user, setUser] = useState({
        id: uuidv4(),
        username: '',
        emailOrPhone: '',
        password: '',
        cart: [],
        wishlist: []
    });

    const changeInputs = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const isEmailDuplicated = (emailOrPhone) => {
        return allUsers.some(u => u.emailOrPhone === emailOrPhone);
    };

    const validateForm = () => {
        let formError = {};
        let isValid = true;

        if (!user.username.trim()) {
            formError.username = "Username is required *";
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{11}$/;

        if (!emailPattern.test(user.emailOrPhone.trim()) && !phonePattern.test(user.emailOrPhone.trim())) {
            formError.emailOrPhone = "Must be a valid email or 10-digit phone number *";
            isValid = false;
        } else if (isEmailDuplicated(user.emailOrPhone.trim())) {
            formError.emailOrPhone = "This email or phone is already registered *";
            isValid = false;
        }

        if (user.password.trim().length < 6) {
            formError.password = "Password must be at least 6 characters *";
            isValid = false;
        }

        setError(formError);
        return isValid;
    };

    const submitRegisterForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setAllUsers([...allUsers, user]);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setUser({
                    id: uuidv4(),
                    username: '',
                    emailOrPhone: '',
                    password: '',
                    cart: [],
                    wishlist: []
                });
                navigate('/login');
            }, 1000);
        }
    };

    return (
        <div className="container-fluid spaces">
            <div className="row gap-5 align-items-center">
                <div className="col-lg-7">
                    <img src={signimg} className='img-fluid' alt="" />
                </div>
                <div className="col-lg-4">
                    <div className='form-controller mx-auto'>
                        <h2>Create an account</h2>
                        <p className='mb-4'>Enter your details below</p>
                        <form onSubmit={submitRegisterForm} className='sign-up'>
                            <div className='input-controller'>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="username"
                                    onChange={changeInputs}
                                    value={user.username}
                                />
                                {error.username && <span className="text-danger">{error.username}</span>}
                            </div>
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
                            <button type="submit" className='create-account'>
                                {loading ? <i className='fas fa-spinner fa-spin'></i> : "Create Account"}
                            </button>
                            <button type="button" className='use-google'>
                                <img src={googleLogo} className='img-fluid' alt="Google logo" />
                                Sign up with Google
                            </button>
                        </form>
                        <div className="go-to-login">
                            <span>Already have account?</span>
                            <Link to='/login'>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
