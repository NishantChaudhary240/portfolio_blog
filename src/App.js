import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import BasicLayout from './component/BasicLayout';
// import NavBar from './component/NavBar';
import Home from './pages/Home';
import Blogs from './pages/Bolgs';
import Login from './pages/LogIn';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/"
          element={
            <BasicLayout>
              <Outlet />
            </BasicLayout>
          }
        >
        <Route index= {true} element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
