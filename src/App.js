import './App.css';
import './Profile.css';
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
import {useEffect, useState} from 'react';
import UserLogin from './components/UserLogin';
import Merch from './components/Merch';
import { Switch } from 'antd';


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

  const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );

  const toggleTheme = () => {
      if (theme === 'light') {
      setTheme('dark');
      } else {
      setTheme('light');
      }
    };

  useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
  }, [theme]);
  
// Colour Blind Functionality

const [colourBlindTheme, setColourBlindTheme] = useState(
  localStorage.getItem('CBTheme') || 'CBOff'
);

const switchTheme = () => {
  if (colourBlindTheme === 'CBOff') {
  setColourBlindTheme('CBOn');
  console.log(colourBlindTheme);
  } else {
  setColourBlindTheme('CBOff');
  console.log(colourBlindTheme);
  }
};

useEffect(() => {
  localStorage.setItem('CBTheme', colourBlindTheme);
  document.body.className = colourBlindTheme;
}, [colourBlindTheme]);

  return (
    <div className={`App${colourBlindTheme}`}>
    <BrowserRouter>
    <>
    <NavBar theme={theme} element={
      <Switch defaultChecked onChange={toggleTheme} />
    }/>
    
    <Routes>
            <Route path="" element={<><Featured theme={theme} className="Featured"/><EventContainer theme={theme} /><CarouselList/></>} />
            <Route path="/events/:id" element={<ChosenEventContainer/>} />
            <Route path="/users" element={<UserContainer users={users} setUsers={setUsers} postUser={postUser}/>}/>
            <Route path="/users/:id" element={<ChosenUserContainer/>} />
            <Route path="/register" element={<UserRegistration postUser={postUser}/>}/>
            <Route path="login" element={<UserLogin/>}/>            
            <Route path='/merch' element={<Merch/>}/>
            <Route path="/users" element={<UserContainer/>}/>

    </Routes>
    <Footer theme={theme} element={
      <Switch onChange={switchTheme}/>}/>
    </>
</BrowserRouter>
    </div>
  );
}

export default App;
