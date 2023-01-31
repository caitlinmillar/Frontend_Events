import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';

const NavBar = () => {
    return ( 
        <div className="navbar">
            <input className="search" type="search" placeholder="search..." />
            <input className="submit" type="submit"/>
            <Link to=""> 
                <img src={logo} className="logo" alt="Logo"/>
            </Link>
            <button className="My-profile" type="submit"> My profile</button>
        </div>
     );
}
 
export default NavBar;

