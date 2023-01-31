import './App.css';
import EventContainer from './containers/EventContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChosenEventContainer from './containers/ChosenEventContainer';
import Footer from './components/Footer';
import Featured from './components/Featured';

function App() {

  

  return (
    <BrowserRouter>

    <Link to="">Home</Link>
    <Featured/>
    
    <Routes>
            <Route path="" element={<EventContainer/>} />
            <Route path="/events/:id" element={<ChosenEventContainer/>} />

    </Routes>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
