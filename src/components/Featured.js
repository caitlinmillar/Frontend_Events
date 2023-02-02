import { Link } from "react-router-dom";
import featured from "./assets/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./assets/logo-no-background.png";
const Featured = ({theme}) => {
    return (  
    <>
        <div className="Featured">
            <Link to={`/events/2`}>
                <img src={featured}  alt="featured event"/>
                {/* <img className={`logo${theme}`} src={logo}/> */}
            </Link>

            </div>
        
      </>
        
    );
}
 
export default Featured;