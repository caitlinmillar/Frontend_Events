import EventList from "./EventList"
import Event from "./Event"
import { Collapse } from 'antd';
const { Panel } = Collapse;


const ExpandingList = ({ events }) => {

    const initialList = events.slice(0, 5).map((event, id) => {
        return <Event event = {event} key={id} name = {event.eventName}/>
    })

    const expandedList = events.slice(5, 100).map((event, id) => {
        return <Event event = {event} key={id} name = {event.eventName}/>
    })


    const onDropdownChange = (key) => {
        console.log(key);} 

    return (
    <>
    <div className="expandingList">
        <Collapse ghost="true"bordered="false" collapsible= "header" onChange={onDropdownChange}>
            {initialList}
            <Panel  header="show all" key="1">
                <p>{expandedList}</p>
            </Panel>
        </Collapse>   
    </div>

    </>

    )
}

export default ExpandingList;