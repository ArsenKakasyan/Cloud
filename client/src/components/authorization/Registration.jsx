import React, { useState } from 'react';
import './authorization.less'
import Input from '../../utils/input/Input.jsx'
import { registration } from '../../actions/user';

const Registration = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="authorization">
            <div className="authorization_header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization_btn" onClick={()=> registration(email, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;
 