import React, { useState } from 'react';
import './navbar.less'
import Logo from '../../assets/img/navbar_logo.svg'
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { getFiles, searchFiles } from '../../actions/file';
import { showLoader } from '../../reducers/appReducer';

const Navbar = () =>{
  const isAuth = useSelector(state => state.user.isAuth)
  const currentDir = useSelector(state => state.files.currentDir)
  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(false)


  function searchChangeHandler(e) {
    setSearchName(e.target.value)
    if(searchTimeout != false) {
      clearTimeout(searchTimeout)
    }
    dispatch(showLoader())
    if(e.target.value !== '') {
        setSearchTimeout(setTimeout((value) => {
        dispatch(searchFiles(value));
      }, 500, e.target.value))
    } else {
      dispatch(getFiles(currentDir))
    }
  }


  return (
    <div className="navbar">
        <div className='container'>
            <img src={Logo} alt="" className="navbar_logo"/>
            <div className="navbar_header">MERN CLOUD</div>
            {isAuth && <input 
              value={searchName}
              onChange={e => searchChangeHandler(e)}
              className='navbar_search' 
              type="text" 
              placeholder='Название файла...'/>}
            {!isAuth && <div className="navbar_login"><NavLink to="/login">Войти</NavLink></div> }
            {!isAuth && <div className="navbar_registration"><NavLink to="/registration">Регистрация</NavLink></div> }
            {isAuth && <div className="navbar_login" onClick={()=> dispatch(logout())}>Выход</div> }
        </div>
    </div>
  );
};

export default Navbar;
