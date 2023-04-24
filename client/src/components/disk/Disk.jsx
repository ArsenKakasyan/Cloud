import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file';
import FileList from './fileList/FileList.jsx';
import './disk.less'

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    return (
        <div className='disk'>
            <div className="disk_btns">
                <button className="disk_back">Назад</button>
                <button className="disk_create">Создать папку</button>
            </div>
            <FileList/>
        </div>

    );
};

export default Disk;