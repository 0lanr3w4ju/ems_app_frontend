import axios from "axios";
import React, { useContext, useState } from "react";

import loginimg from '../../assets/login/imgs/login.png';
import { UserContext } from "../../context/UserContext";
import Button from "../reusables/button";

const LoginForm = ({}) => {

    const [, setToken] = useContext(UserContext);
    // const api = 'https://agile-ravine-89696.herokuapp.com/create_token'
    const api = 'http://localhost:8000/create_token'

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handle_change = (e) => {
        const value = e.target.value;
        setData({...data, [e.target.name]: value});
    };

    const login_handler = (e) => {
        e.preventDefault(); 

        const res = axios({
            url: api,
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            method: 'post',
            data: JSON.stringify(`grant_type=&username=${data.email}&password=${data.password}&scope=&client_id=&client_secret=`),
        });
        
        res.then((response) => {
            if (response.status === 200) {
                setToken(response.data.access_token)
            }
        }).catch((error) => {
            if (error.response || error.response.status === 401 || error.response.status === 400) {
                setToken(null);
            }
        })
    }

    return (
        <div className="base-container">
            <header>
                <h4>Login</h4>
                <p>Don't have an account? <a href = '/signup'>Sign up</a></p>
            </header>

            <div className="content">
                <div className="image">
                    <img src={loginimg} alt="loginimg" />
                </div>

                <div className="form">
                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email address" onChange={handle_change} required/>
                    </div>

                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" onChange={handle_change} required/>
                    </div>

                    <Button 
                    color="rgb(131 136 246)"
                    hcolor="#69cdf4"
                    text="Login"
                    onClick={login_handler}
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginForm;