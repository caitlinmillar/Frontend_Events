import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';
import { Button, Popover } from "antd";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";

import { MDBBtn, MDBInput, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Switch } from 'antd';

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

                    </MDBRow>
                </form>

            </section>
            <section>

              <MDBCol>
            <Link to=""> 
                <img className="logo" src={logo} width="100"  alt="Logo"/>
            </Link>
              </MDBCol>
            </section>

            <section>

            <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-'>My Profile
                </MDBBtn>
              </MDBCol>
              
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
            
            </section>

        </div>
        </>
     );
}

// Create a toggle for "Register"/"Login" to "My Profile"
 
export default NavBar;

