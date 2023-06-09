import React from 'react';
import './navbar.less'
import Logo from '../../assets/img/navbar_logo.svg'
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';

const Navbar = () =>{
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <div className="navbar">
        <div className='container'>
            <img src={Logo} alt="" className="navbar_logo"/>
            <div className="navbar_header">MERN CLOUD</div>
            {!isAuth && <div className="navbar_login"><NavLink to="/login">Войти</NavLink></div> }
            {!isAuth && <div className="navbar_registration"><NavLink to="/registration">Регистрация</NavLink></div> }
            {isAuth && <div className="navbar_login" onClick={()=> dispatch(logout())}>Выход</div> }
        </div>
    </div>
  );
};

export default Navbar;
