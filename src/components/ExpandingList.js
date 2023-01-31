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

    const onChange = (key) => {
        console.log(key);
    }

    return (
    <>
        {initialList}
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="show all" key="1">
                <p>{expandedList}</p>
            </Panel>
        </Collapse>
    </>
    
    )
}

export default ExpandingList;