import Event from "./Event";

const Spotlight = ({events}) => {

    const spotlightComponents = events.slice(0, 3).map((event, id) => {
        return <span>
            <Event event={event} key={id}/>
        </span>
    })

    return ( 

        <>
        {spotlightComponents}
        {/* {events(events.slice(0, 3))} */}
        {/* {[events[1]}
        {events[2]} */}
        </>
     );
}
 
export default Spotlight;