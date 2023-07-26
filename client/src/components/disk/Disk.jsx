import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file';
import FileList from './fileList/FileList.jsx';
import Popup from './Popup.jsx';
//import Popup from './Popup.jsx';
import './disk.less'
import { setCurrentDir, setFileView, setPopupDisplay } from '../../reducers/fileReducer';
import Uploader from './uploader/Uploader.jsx';


const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const loader = useSelector(state => state.app.loader)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

    function showPopupHandler() {
        //dispatch(createDir(currentDir, 'asdasdad'))
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        //dispatch(createDir(currentDir, 'asdasdad'))
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)

    }

    if(loader) {
        return (
            <div className="loader">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }

    return ( !dragEnter ?
            <div className='disk' onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                <div className="disk_btns">
                    <button className="disk_back" onClick={() => backClickHandler()}>Назад</button>
                    <button className="disk_create" onClick={() => showPopupHandler()}>Создать папку</button>
                    <div className="disk_upload">
                        <label htmlFor="disk_upload-input" className="disk_upload-label">Загрузить файл</label>
                        <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk_upload-input" className="disk_upload-input" />
                    </div>
                    <select value={sort} 
                            onChange={(e) => setSort(e.target.value)} 
                            className='disk_select'>
                        <option value="name">По имени</option>
                        <option value="type">По типу</option>
                        <option value="date">По дате</option>
                    </select>
                    <button className="disk_plate" onClick={() => dispatch(setFileView('plate'))}/>
                    <button className="disk_list" onClick={() => dispatch(setFileView('list'))}/>
                </div>
                <FileList/>
                <Popup/>
                <Uploader/>
            </div>
            :
            <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                Перетащите файлы сюда
            </div>

    );
};

export default Disk;