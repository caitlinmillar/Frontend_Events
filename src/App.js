import './App.css';
import EventContainer from './containers/EventContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  

  return (
    <BrowserRouter>

    <Link to="">Home</Link>
    {/* <Link to="/user">Profile</Link> */}
    
    <Routes>
        <EventContainer>
            <Route path=""/>
        </EventContainer>
{/* 
        <UserContainer>
            <Route path="/user" component={users}/>
        </UserContainer> */}
    </Routes>
</BrowserRouter>
  );
}

export default App;
