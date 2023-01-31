import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';

const NavBar = () => {
    return ( 
        <header className="header">
        <input className="search" type="search" placeholder="search..." />
        <Link to="">Home</Link>
        <img src={logo} className="logo" alt="Logo"/>
        <button type="submit"> My profile</button>
        </header>
     );
}
 
export default NavBar;

