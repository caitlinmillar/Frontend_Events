import { Link } from "react-router-dom";
import logo from './assets/logo-no-background.png';
import { Button, Popover } from "antd";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";


import { MDBBtn, MDBInputGroup, MDBRow, MDBCol, MDBIcon, MDBContainer,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
 } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Switch } from 'antd';
import MyProfileUserDemo from "./MyProfileUserDemo";

const NavBar = ({element, theme}) => {

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


    const myProfile = (
      <>
        <MyProfileUserDemo/>
      </>
    )

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };



    return ( 
        <>
        <div className={`navbar${theme}`}>
            <section className='search'>
                <MDBDropdown>
                <MDBDropdownToggle tag='a' className='btn btn-primary'>
                    Find an event!
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <ul>
                    <li><Link to={"/events/1"}><MDBDropdownItem tag="span">Paint N Sip</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/2"}><MDBDropdownItem tag="span">Pizza Making</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/3"}><MDBDropdownItem tag="span">LND Motor Show</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/4"}><MDBDropdownItem tag="span">Pottery Class</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/5"}><MDBDropdownItem tag="span">Rollerblading Disco</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/6"}><MDBDropdownItem tag="span">Crochet</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/7"}><MDBDropdownItem tag="span">Diving</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/8"}><MDBDropdownItem tag="span">Head to Head</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/9"}><MDBDropdownItem tag="span">Castle Ghost House</MDBDropdownItem></Link></li>
                    <li><Link to={"/events/10"}><MDBDropdownItem tag="span">The Best of the 1975</MDBDropdownItem></Link></li>
                </ul>
                </MDBDropdownMenu>
                </MDBDropdown>
            </section>
            
            <section>
              <MDBCol>
                <Link to=""> 
                    <img className={`logo${theme}`} src={logo} width="100"  alt="Logo"/>
                </Link>
              </MDBCol>

            </section>


            <section className="toggle">
                {element}
            </section>
            
            <section className="userButtons">

            <MDBRow size="auto">
                <MDBBtn outline color={`${theme}`} type='submit' className='mb-2'
                content={myProfile}>
                  <Link to={"/users/1"}>My Profile</Link>
                  </MDBBtn>
            </MDBRow>

            <section className="toggle">
                {element}
            </section>
            
            <section className="userButtons">


            <Popover content={registerContent} title="User Registration">
                <Button type="primary" className="open-register">
                    <Link to={"/register"}>Register</Link>
                </Button>
            </Popover> 
            
            <Popover content={loginContent} title="User Login">
                <Button type="primary" className="open-login">
                    <Link to={"/login"}>Login</Link>
                </Button>
            </Popover>
              </section>
            
        </section>

        </div>
        </>
     );
}

// Create a toggle for "Register"/"Login" to "My Profile"
 
export default NavBar;

