import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChosenUser from "../components/ChosenUser";

// Want this to be the User's profile
// A successful login will lead to this page

const ChosenUserContainer = () => {

    const [user, setUser] = useState("");
    let {id} = useParams();

    useEffect (() => {
        fetch(`http://localhost:8080/users/` + id,{
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => (setUser(response)))
    }, [])

    return ( 
        <>

                <h2 className="username">Welcome Back, {user.name}</h2>
                <p className="user-email-address">{user.emailAddress}</p>
                <p className="upcoming-events">Here are your upcoming events:</p>
                {user ?<ul>{user.events.map((event) => { return <li key={user.name}>{event.eventName}</li>})}</ul> :""}
        </>
     );
    }
    // Having an issue rendering the user info 
    
    export default ChosenUserContainer;
    // Want to display the User's upcoming events
    {/* <ul>
        {user.events.map((event, index) => {
            return(
                <li key={index}>{event}</li>
            )
        })}
    </ul> */}