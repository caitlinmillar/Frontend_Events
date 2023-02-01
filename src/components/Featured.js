import { Link } from "react-router-dom";
import featured from "./assets/ivan-torres-MQUqbmszGGM-unsplash.jpg";

const Featured = () => {
    return (  
        <div className="Featured">
            <Link to={`/events/2`}>
                <img src={featured} alt="featured event"/>
            </Link>
        </div>
    );
}
 
export default Featured;