import './App.css';
import EventContainer from './containers/EventContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChosenEventContainer from './containers/ChosenEventContainer';

function App() {

  

  return (
    <BrowserRouter>

    <Link to="">Home</Link>
    
    <Routes>
            <Route path="" element={<EventContainer/>} />
            <Route path="/events/:id" element={<ChosenEventContainer/>} />

    </Routes>
</BrowserRouter>
  );
}

export default App;
