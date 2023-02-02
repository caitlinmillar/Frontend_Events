import Event from "./Event"
import { Collapse } from 'antd';
const { Panel } = Collapse;


const ExpandingList = ({ events, theme }) => {

    const initialList = events.slice(0, 5).map((event, id) => {
        return <Event event = {event} key={id} name = {event.eventName}/>
    })

    const expandedList = events.slice(5, 10).map((event, id) => {
        return <Event event = {event} key={id} name = {event.eventName}/>
    })

    const onDropdownChange = ({key}) => {
        console.log(key);} 

    return (
    <>
    <div className={`list${theme}`} >
        <Collapse ghost="true" bordered="true" collapsible= "header" onChange={onDropdownChange}>
            <div className="initialList">{initialList}</div>
            <Panel header="show all" key={1}>
                <div className="expandedList">{expandedList}</div>
            </Panel>
        </Collapse>   
    </div>

    </>

    )
}

export default ExpandingList;