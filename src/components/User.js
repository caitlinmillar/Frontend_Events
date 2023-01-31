const User = ({user}) => {
    return (
        <>
        <h3>hello from user</h3>
        <h3>Welcome back, {user.name}</h3>
        <p>{user.emailAddress}</p>
        <p>Here are your upcoming events:</p>
        {/* <ul>
            {user.events.map((event, index) => {
                return(
                    <li key={index}>{event}</li>
                )
            })}
        </ul> */}
        </>
     );
}

// Also want to display events that users has signed up for

 
export default User;