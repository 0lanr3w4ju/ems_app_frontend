import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../reusables/navbar";

const Homepage = ({}) => {

    const [visitors, setVisitors] = useState('')

    const get_Visitors = () => {

        const api = 'https://agile-ravine-89696.herokuapp.com/users'
        
        axios.get(api)
        .then((response) => {
            setVisitors(response.data)
        })
        .catch((error) => {
            console.error();
        })
    }

    const display_data = () => {
        if (visitors.length > 0) {
            return(
                visitors.map((visitor) => {
                    return(
                        <tr key={visitor.id}>
                            {/* <th scope="row">1</th> */}
                            <td>{visitor.firstname}</td>
                            {/* <td>{visitor.lastname}</td> */}
                            <td>{visitor.phone}</td>
                        </tr>
                    )
                })
            )
        } else {
            return (<p>You are not expecting any visitor currently.</p>)
        }
    }
    
    useEffect(() => {
        get_Visitors();
    })

    return (
        <>
            <Navbar/>
            <div className="base-container">
                <header>
                    <h5>Expected Visitors</h5>
                </header>
                
                <table class="table table-sm table-hover ">
                    <tbody>
                        {display_data()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Homepage;