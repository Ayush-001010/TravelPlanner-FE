import React from 'react'
import type IApp from './IApp'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './component/Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import type IUserInterface from './services/Interfaces/UserInterface';
import SideNavBar from './component/SideNavBar/SideNavBar';


const App: React.FC<IApp> = () => {
  const { isLoggedIn } = useSelector((state: any) => state.userDetails as IUserInterface);

  console.log("User is logged in:", isLoggedIn);

  return (
    <div className="App">
      <HashRouter>
        {!isLoggedIn && (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}
        {isLoggedIn && (
          <div className="flex">
            <SideNavBar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/trip/:id" element={<Dashboard />} />
            </Routes>
          </div>
        )}
      </HashRouter>
    </div >
  )
};

export default App