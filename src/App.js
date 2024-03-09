import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Text from './Text';
import NavBar from "./common/components/Navbar/NavBar.jsx"
import Home from "./common/components/Home.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/aboutus' element={<Text />}  ></Route>
          <Route path='/contactus' element={<Text />}  ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
