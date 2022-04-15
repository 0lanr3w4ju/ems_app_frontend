import React from "react";

import loginimg from '../../assets/login/imgs/login.png';
import Button from "../reusables/button";


const LoginForm = ({}) => {

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
                        <input type="text" name="email" placeholder="Email address"/>
                    </div>

                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password"/>
                    </div>

                    <Button 
                    color="rgb(131 136 246)"
                    hcolor="#69cdf4"
                    text="Login"
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginForm;