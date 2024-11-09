import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/><LandingPage/><Footer/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
