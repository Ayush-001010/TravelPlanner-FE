import React, { useEffect } from 'react'
import type IApp from './IApp'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './component/Dashboard/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import type IUserInterface from './services/Interfaces/UserInterface';
import SideNavBar from './component/SideNavBar/SideNavBar';
import Trip from './component/Trip/Trip';
import { setUserDetailsData } from './redux/Slices/UserDetails/UserDetails';
import Learning from './component/Learning/Learning';


const App: React.FC<IApp> = () => {
  const { isLoggedIn, userName } = useSelector((state: any) => state.userDetails as IUserInterface);
  const dispatch = useDispatch();

  console.log("User Name:", userName);

  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      const userDetails = JSON.parse(localStorage.getItem("userDetails") || '{}');
      dispatch(setUserDetailsData(userDetails));
    }

  }, []);


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
              <Route path="/trip/:id" element={<Trip />} />
              <Route path="/learning" element={<Learning />} />
            </Routes>
          </div>
        )}
      </HashRouter>
    </div >
  )
};

export default App