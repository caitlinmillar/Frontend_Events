import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';
import { MDBBtn, MDBInput, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavBar = () => {

    // Add function for pop-up - one for open and one for close
    // const openPop() => {
        // document.getElementById("").style.display = "block"
    // }
    // const closePop() => {
        // document.getElementById("").style.display = "none" 
    // }

    return (
        <>
        <div className="navbar">
            <section className=''>

          <form action=''>
            <MDBRow className='d-flex justify-content-center'>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Search...' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-'>
                  Go
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
            <Link to=""> 
                <img src={logo} className="logo" alt="Logo"/>
            </Link>
            <button className="My-profile" type="submit"> My profile</button>
        </div>
        </>
     );
}

// Create a toggle for "Register"/"Login" to "My Profile"
 
export default NavBar;

