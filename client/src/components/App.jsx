import React from 'react';
import './app.less'
import Navbar from './navbar/Navbar.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./registration/Registration.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
          <div className="wrap">
            <Routes>
              <Route path="/registration" element={<Registration />}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
 