import { useState } from "react";

const Search = ({filterEvents}) => {

    const[searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        filterEvents(searchTerm);

    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-field">Search for an Event:</label>
            <input type="text" id="search-field" 
            onChange={(event)=> setSearchTerm(event.target.value)}
            value={searchTerm}/>

            <input type="submit" />
        </form>
    )

}

export default Search;