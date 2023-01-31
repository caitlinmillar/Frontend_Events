import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <header className="header">
        
        <input className="search" type="search" placeholder="search..." />
        <Link to="">Home</Link>
        <button type="submit"> My profile</button>
        </header>
     );
}
 
export default NavBar;
    <Link to="">Home</Link>
