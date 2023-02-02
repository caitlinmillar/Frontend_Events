import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChosenUser from "../components/ChosenUser";
import MyProfileUserDemo from "../components/MyProfileUserDemo";

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
        <div className="userDiv">

                <h2 className="username">Welcome Back, {user.name}</h2>
                <p className="user-email-address">{user.emailAddress}</p>
                <p className="upcoming-events">Here are your upcoming events:</p>
                {user ?<ul>{user.events.map((event) => { return <p className="event-name" key={user.name}>{event.eventName}</p>})}</ul> :""}
                <p className="text">
                Do more of what you love! We have so many amazing events for you to choose from!
                Explore new hobbies and skills, engage with your local community, and have the night out you deserve.

                </p>
        </div>
     );
    }
  
    
    export default ChosenUserContainer;
  