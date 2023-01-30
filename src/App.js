import logo from './logo.svg';
import './App.css';
import EventContainer from './containers/EventContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EventList from './components/EventList';

function App() {
  return (
    <>
    <EventContainer/>
    </>
  );
}

export default App;
