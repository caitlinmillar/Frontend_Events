import User from "./User";

const MyProfileUserDemo = ({user}) => {

    // I think it's easier to hardcode a user url to the my profile for the demo then explain it in the presentation

    return ( 
        <>
        <User user={user}/>
        </>
     );
}
 
export default MyProfileUserDemo;