import logo from './logo.svg';
import './App.css';
import './index.css'
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import Error from './component/Error';
import Menu from './component/Menu';
import Carosal from './component/Carosal';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Services from './component/Services';
import Services2 from './component/Services2';

function App() {
  return (
   <>
   <Menu/>
   <Routes>

   <Route exact path='/' element={<Home/>}/>
    <Route exact path='/contactus' element={<ContactUs/>}/>
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/services2' element={<Services2/>}/>
    <Route exact path='/profile' element={<Profile/>}/>

    <Route path='*' element={<Error/>}/>

   </Routes>
  <Footer/>


   </>
  );
}

export default App;
