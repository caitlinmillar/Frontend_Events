import './App.css';
import EventContainer from './containers/EventContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChosenEventContainer from './containers/ChosenEventContainer';
import Footer from './components/Footer';
import Featured from './components/Featured';
import NavBar from './components/NavBar';
import ExpandingList from './components/ExpandingList';
import UserContainer from './containers/UserContainer';

function App() {


  return (
    <BrowserRouter className="App">
    <NavBar className="navbar"/>
    {/* <ExpandingList /> */}
    
    <Routes>
            <Route path="" element={<><Featured className="Featured"/><EventContainer/></>} />
            
            <Route path="/events/:id" element={<ChosenEventContainer/>} />
            <Route path="/users" element={<UserContainer/>}/>
    </Routes>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
