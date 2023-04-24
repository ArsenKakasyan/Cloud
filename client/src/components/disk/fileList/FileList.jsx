import React from 'react'
import { useSelector } from 'react-redux';
import File from './file/File.jsx';
import './fileList.less'

const FileList = () => {

    const files = useSelector(state => state.files.files).map(file => <File key={file.id} file={file}/>)
    

    return (
        <div className='filelist'>
            <div className="filelist_header">
                <div className="filelist_name">Название</div>
                <div className="filelist_date">Дата</div>
                <div className="filelist_size">Размер</div>
            </div>
            {files}
        </div>

    );
};

export default FileList;