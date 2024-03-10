import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Text from './Text';
import NavBar from "./common/components/Navbar/NavBar.jsx"
import Home from './common/components/Home/Home.jsx';
import Login from './common/components/Login/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<Text />}  ></Route>
          <Route path='/contact' element={<Text />}  ></Route>
          <Route path='/login' element={<Login/>}  ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
