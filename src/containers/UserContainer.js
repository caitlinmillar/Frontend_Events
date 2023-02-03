import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import UserRegistration from "../components/UserRegistration";

const UserContainer = ({users , setUsers, postUser}) => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/users")
            const data = await response.json();
            setUsers(data)
        }
        fetchData()
    }, [])

    return ( 
        <>
        <h1>Hello from User Container</h1>
        <UserList users={users}/>
        <UserRegistration users={users} postUser={postUser}/>
        </> 
    );
}
 
export default UserContainer;