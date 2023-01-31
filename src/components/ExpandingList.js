import EventList from "./EventList"
import Event from "./Event"
import { Collapse } from 'antd';
const { Panel } = Collapse;

const ExpandingList = ({ events }) => {

    const initialList = events.map((event, id) => {
        return <Event event = {event} key={id} name = {event.eventName}/>
    })

    const onChange = (key) => {
        console.log(key);
    }

    return (
     <>
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <p>{initialList}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{initialList}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{initialList}</p>
      </Panel>
    </Collapse>

     </>


    )
}

export default ExpandingList;