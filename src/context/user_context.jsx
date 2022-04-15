// import axios from "axios";
// import {createContext, useEffect, useState} from "react";

// export const UserContext = createContext();

// export const UserProvider = (props) => {
//     const [token, setToken] = useState(localStorage.getItem('EMSystemPrivatizedToken'));

//     useEffect(() => {
//         const fetchUser = () => {
//             const api = 'http://localhost:8000/current_user'
//             const config = {
//                 headers: { 
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${token}` 
//                 },
//             };
//             const res = axios.get(api, config)
            
//             if (!res.ok) {
//                 setToken(null);
//             }

//           localStorage.setItem('EMSystemPrivatizedToken', JSON.stringify(token));
//         };
//         fetchUser();
//     }, [token]);

//     return (
//         <UserContext.Provider value={[token, setToken]}>
//             {props.children}
//         </UserContext.Provider>
//     )
// };
