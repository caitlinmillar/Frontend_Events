import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import UserRegistration from "../components/UserRegistration";

const UserContainer = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/users")
            const data = await response.json();
            setUsers(data)
        }
        fetchData()
    }, [])

    // Registering a new user
    // Apart of the pop-up registration form
    // Requires a handleRegistrationOfNewUser (what a mouthful)

    const postUser = async (newUser) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        const registeredUser = await response.json()
        setUsers([...users, registeredUser])
    }


    // Might want to create an update user information - that will have to go in the ChosenUserContainer


    return ( 
        <>
        <h1>Hello from User Container</h1>
        <UserList users={users}/>
        <UserRegistration users={users} postUser={postUser}/>
        </> 
    );
}
 
export default UserContainer;