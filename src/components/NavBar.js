import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';
import { Button, Popover } from "antd";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";


const NavBar = () => {

    const registerContent = (
        <div>
            <UserRegistration/>
        </div>
    )

    const loginContent = (
        <div>
            <UserLogin/>
        </div>
    )

    return ( 
        <div className="navbar">
            <input className="search" type="search" placeholder="search..." />

            <Link to=""> <img src={logo} className="logo" alt="Logo"/></Link>
            <button type="submit"> My profile</button>

            <Popover content={registerContent} title="User Registration">
                <Button type="primary" className="open-register">
                    <Link to={"/register"}>Register</Link>
                </Button>
            </Popover> 
            
            <Popover content={loginContent} title="User Login">
                <button type="primary" className="open-login">
                    <Link to={"/login"}>Login</Link>
                </button>
            </Popover>

            <input className="submit" type="submit"/>
            <Link to=""> 
                <img src={logo} className="logo" alt="Logo"/>
            </Link>
            <button className="My-profile" type="submit"> My profile</button>
        </div>

     );
}

// Create a toggle for "Register"/"Login" to "My Profile"
 
export default NavBar;

