const ChosenUser = ({user}) => {

    return (  
        <>
        <h2>Welcome back, {user.name}</h2>
        <p>{user.emailAddress}</p>
        </>
    );
}
 
export default ChosenUser;