import React, { useEffect } from 'react';
import './app.less'
import Navbar from './navbar/Navbar.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./authorization/Registration.jsx";
import Login from './authorization/Login.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect( () => {
    if(localStorage.getItem('token')){
      dispatch(auth())
    }
  }, []) 

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
          <div className="wrap">
            {!isAuth &&
              <Routes>
                <Route path="/registration" element={<Registration />}/>
                <Route path="/login" element={<Login />}/>
              </Routes>
            }
            
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
 