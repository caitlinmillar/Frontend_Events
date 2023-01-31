import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';

const NavBar = () => {
    return ( 
        <header className="header">
            <input className="search" type="search" placeholder="search..." />
            <Link to=""> <img src={logo} className="logo" alt="Logo"/></Link>
            <button type="submit"> My profile</button>
        </header>
     );
}
 
export default NavBar;

