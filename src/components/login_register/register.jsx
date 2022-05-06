import axios from "axios";
import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import loginimg from '../../assets/login/imgs/login.png';
import Button from "../reusables/button";


const RegisterForm = ({}) => {
    
    // const api = 'https://agile-ravine-89696.herokuapp.com/user'
    const api = 'http://localhost:8000/user'
    
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        house_add: '',
        email: '',
        phone: '',
        password: '',
        password_1: '',
    });

    const notify_success = () => toast.info('Success');
    const notify_fail = () => toast.error('Denied');

    const handle_reset = () => {
        Array.from(document.querySelectorAll('input'))
        .forEach(input => (input.value = ''));
        setData({data})
    };

    const handle_change = (e) => {
        const value = e.target.value;
        setData({...data, [e.target.name]: value});
    };

    const create_user_handler = (e) => {
        e.preventDefault(); 

        const userData = {
            firstname: data.firstname,
            lastname: data.lastname,
            house_add: data.house_add,
            email: data.email,
            phone: data.phone,
            password: data.password,
            password_1: data.password_1
        };

        axios.post(api, userData)
        .then((response) => {
            if (response.status === 201) {
                setTimeout(() => {notify_success()}, 200);
                handle_reset();
            }
        })
        .catch((error) => {
            if (error.response || error.response.status === 401 || error.response.status === 400) {
                console.log(error.response);
                setTimeout(() => {notify_fail()}, 200);
            } 
            else if (error.request) {
                console.log('network error');
            } else {
                console.log(error);
            }
        });
    };

    return (
        <div className="base-container">
            <header>
                <h4>Sign Up</h4>
                <p>Have an account? <a href = '/'>Login</a></p>
            </header>

            <section>
                <div className="content">
                    <div className="image">
                        <img src={loginimg} alt="loginimg" />
                    </div>

                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="firstname" placeholder="First name" onChange={handle_change} required/>
                        </div>

                        <div className="form-group">
                            <input type="text" name="lastname" placeholder="Last name" onChange={handle_change} required/>
                        </div>

                        <div className="form-group">
                            <input type="text" name="email" placeholder="Email address" onChange={handle_change} required/>
                        </div>

                        <div className="form-group">
                            <input type="text" name="house_add" placeholder="Home address" onChange={handle_change}/>
                        </div>

                        <div className="form-group">
                            <input type="tel" name="phone" placeholder="Phone number" onChange={handle_change} required/>
                        </div>

                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" onChange={handle_change} required/>
                        </div>

                        <div className="form-group">
                            <input type="password" name="password_1" placeholder="Confirm password" onChange={handle_change} required/>
                        </div>

                        <Button 
                        color="rgb(131 136 246)"
                        hcolor="#69cdf4"
                        text="Signup"
                        onClick={create_user_handler}
                        />
                        <ToastContainer />
                    </div>                
                </div>
            </section>
        </div>
    )
}

export default RegisterForm;