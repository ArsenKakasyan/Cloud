import React from 'react';
import UploadFile from './UploadFile.jsx';
import './uploader.less'
import { useDispatch, useSelector } from 'react-redux';
import { hideUploader } from '../../../reducers/uploadReducer.js';

const Uploader = () => {

    const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()

    return ( isVisible && 
        <div className='uploader'>
            <div className="uploader_header">
                <div className="uploader_title">Загрузки</div>
                <button className="uploader_close" onClick={() => dispatch(hideUploader())}>X</button>
            </div>
            {files.map(file =>
                <UploadFile key={file.id} file={file}/>
                ).reverse()}
        </div>
    );
};

export default Uploader;