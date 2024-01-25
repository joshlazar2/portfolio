import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
