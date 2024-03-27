import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css';
import Login from './components/Home/Login';
import Register from './components/Home/Register';

function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
