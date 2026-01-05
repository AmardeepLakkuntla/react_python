import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Posts from "./pages/Posts"
import Users from './pages/Users';
import Todos from './pages/Todos';

function App() {
 
return(
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Posts" element={<Posts/>}></Route>
    <Route path="/Users" element={<Users/>}></Route>
    <Route path="/Todos" element={<Todos/>}></Route>

  </Routes>

)
  
}
 
export default App
