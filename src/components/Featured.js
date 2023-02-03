import { Link } from "react-router-dom";
import featured from "./assets/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
const Featured = ({theme}) => {
    return (  
    <>
        <div className="Featured">
            <Link to={`/events/2`}>
            <div className="overlay">
                    <h1>Take a look at our featured event!</h1>
                    <img src={featured}  alt="featured event"/>
            </div>
            </Link>
            
            </div>
        
      </>
        
    );
}
 
export default Featured;