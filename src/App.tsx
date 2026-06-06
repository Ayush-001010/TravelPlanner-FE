import React from 'react'
import type IApp from './IApp'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App: React.FC<IApp> = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  )
};

export default App