import logo from './logo.svg';
import './App.css';
import Expensive from './components/Expensive';
import { Route, Routes } from "react-router-dom";
import './components/Expensive.css'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Expensive/>}/>
      </Routes>
    </div>
  );
}

export default App;
