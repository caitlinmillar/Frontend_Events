import './App.css';
import EventContainer from './containers/EventContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChosenEventContainer from './containers/ChosenEventContainer';
import Footer from './components/Footer';
import Featured from './components/Featured';
import NavBar from './components/NavBar';
import ExpandingList from './components/ExpandingList';
import UserContainer from './containers/UserContainer';
import ChosenUserContainer from './containers/ChosenUserContainer';
import { Carousel } from 'antd';
import CarouselList from './components/CarouselList';
import UserRegistration from './components/UserRegistration';
import {useState} from 'react';

function App() {

  const [users, setUsers] = useState([])

  const postUser = async (newUser) => {
    const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    const registeredUser = await response.json()
    setUsers([...users, registeredUser])
}

  return (
    <BrowserRouter>
    <>
    <NavBar/>
    <Featured className="Featured"/>
    
    <Routes>
            <Route path="" element={<><EventContainer/><CarouselList/></>} />
            <Route path="/events/:id" element={<ChosenEventContainer/>} />
            <Route path="/users" element={<UserContainer users={users} setUsers={setUsers} postUser={postUser}/>}/>
            <Route path="/users/:id" element={<ChosenUserContainer/>} />
            <Route path="/register" element={<UserRegistration postUser={postUser}/>}/>


            <Route path="/users" element={<UserContainer/>}/>

    </Routes>
    <Footer/>
    </>
</BrowserRouter>
  );
}

export default App;
