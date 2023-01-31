import { useState } from "react";
import { useParams } from "react-router-dom";

const ChosenUserContainer = () => {

    const [user, setUser] = useState("");
    let {id} = useParams();

    

    return ( 
        <>
        </>
     );
}
 
export default ChosenUserContainer;