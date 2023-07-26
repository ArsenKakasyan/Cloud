import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPopupDisplay } from '../../reducers/fileReducer.js';
import { createDir } from '../../actions/file';

import Input from '../../utils/input/Input.jsx'
import './disk.less'

const Popup = () => {

    const[dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
    }

    return (
        <div className='popup' onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup_content" onClick={((event) => event.stopPropagation())}>
                <div className="popup_header">
                    <div className="popup_title">Создать новую папку</div>
                    <button className="popup_close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <Input type="text" placeholder="Введите название папки..." value={dirName} setValue={setDirName}/>
                <button className="popup_create" onClick={() => createHandler()}>Создать</button>
            </div>
        </div>

    );
};

export default Popup;