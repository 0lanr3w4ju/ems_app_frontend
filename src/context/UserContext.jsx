import axios from "axios";
import React, {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [token, setToken] = useState(localStorage.getItem('2f6bfe24d861dbf69bfae423482c054713cdd0888'));

    useEffect(() => {
        const fetchUser = () => {
            const api = 'http://localhost:8000/current_user'
            const config = {
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` 
                },
            };
            
            const res = axios.get(api, config)

            res.then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('2f6bfe24d861dbf69bfae423482c054713cdd0888', token);
                }
            }).catch((error) => {
                if (error.response || error.response.status === 401 || error.response.status === 400) {
                    localStorage.setItem('2f6bfe24d861dbf69bfae423482c054713cdd0888', null);
                }
            })
        };
        fetchUser();
    }, [token]);

    return (
        <UserContext.Provider value={[token, setToken]}>
            {props.children}
        </UserContext.Provider>
    );
};