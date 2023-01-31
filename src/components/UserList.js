import User from "./User";

const UserList = ({users}) => {

    const userComponents = users.map(user => {
        return <User
                key={user.id}
                user={user}/>
    })

    return (
        <>
        <h2>Hello from User List</h2>
        {userComponents}
        </>
     );
}
 
export default UserList;