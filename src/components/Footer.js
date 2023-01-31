import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    
    return ( 

        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Find us on social networks:</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='facebook-f' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='twitter' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='google' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='instagram' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='linkedin' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='github' />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='me-3' />
                  © 2023 Whale of a Time
                </h6>
                <p>
                    Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit.
                </p>
              </MDBCol>
  
              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Contact
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Terms and Conditions
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                  L80 Middlesex St, London E1 7EZ

                </p>
                <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  info@WOAT.com
                </p>
                <p>
                  <MDBIcon color='secondary' icon='phone' className='me-3' />020 7197 9902
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        </div>
      </MDBFooter>
     );
}
 
export default Footer;