import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';
import { MDBBtn, MDBInput, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Switch } from 'antd';

const NavBar = () => {

    // Add function for pop-up - one for open and one for close
    // const openPop() => {
        // document.getElementById("").style.display = "block"
    // }
    // const closePop() => {
        // document.getElementById("").style.display = "none" 
    // }

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };


    return (
        <>
        <div className="navbar">
            <section className=''>

        <Switch defaultChecked onChange={onChange} />
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>

              <MDBCol md='5' start>
                <MDBInput contrast type='search' label='Search...' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-'>Go
                </MDBBtn>
              </MDBCol>

              <MDBCol>
                <Link to=""> 
                <img className="logo" src={logo} width="100" height="75"  alt="Logo"/>
                </Link>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
            <MDBRow size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-'>My Profile
                </MDBBtn>
              </MDBRow>
        </div>
        </>
     );
}

// Create a toggle for "Register"/"Login" to "My Profile"
 
export default NavBar;

