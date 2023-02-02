import './App.css';
import EventContainer from './containers/EventContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChosenEventContainer from './containers/ChosenEventContainer';
import Footer from './components/Footer';
import Featured from './components/Featured';
import NavBar from './components/NavBar';
import UserContainer from './containers/UserContainer';
import ChosenUserContainer from './containers/ChosenUserContainer';
import CarouselList from './components/CarouselList';
import UserRegistration from './components/UserRegistration';
import {useState} from 'react';
import UserLogin from './components/UserLogin';
import Merch from './components/Merch';
import MyProfileUserDemo from './components/MyProfileUserDemo';

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
    
    <Routes>
            <Route path="" element={<><Featured className="Featured"/><EventContainer/><CarouselList/></>} />
            <Route path="/events/:id" element={<ChosenEventContainer/>} />
            <Route path="/users" element={<UserContainer users={users} setUsers={setUsers} postUser={postUser}/>}/>
            <Route path="/users/:id" element={<ChosenUserContainer/>} />
            <Route path="/register" element={<UserRegistration postUser={postUser}/>}/>
            <Route path="login" element={<UserLogin/>}/>            
            <Route path='/merch' element={<Merch/>}/>
            <Route path="/users" element={<UserContainer/>}/>
            <Route path='/users/1' element={<MyProfileUserDemo users={users}/>}/>

    </Routes>
    <Footer/>
    </>
</BrowserRouter>
  );
}

export default App;
