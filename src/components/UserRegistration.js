import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistration = ({users, postUser}) => {

    const navigate = useNavigate();

    // Need a way to store passwords

    // Create the pop-up functionality here?

    // Have a button that linked to the Login pop-up => "Already a member? Login here"

    const [stateUser, setStateUser] = useState(
        {
            name: "",
            emailAddress: "",
            events: null
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser);
    }
    const handleSubmitForm = (event) => {
        event.preventDefault();
        postUser(stateUser);
        navigate("/register")
        
        // Registration pop-up should have an URL
        // Where should the Pop-up code go?
    }

    return ( 
    <>
    <h3>Hello from User Registration</h3>
    <form onSubmit={handleSubmitForm}>
        <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={stateUser.name}/>

        <input 
            type="text"
            placeholder="Email Address"
            name="emailAddress"
            onChange={handleChange}
            value={stateUser.emailAddress}/>

            {/* Need to do Password and Confirm Password */}

        <button type="submit">Register</button>
    </form>
    </> 
    );
}
 
export default UserRegistration;