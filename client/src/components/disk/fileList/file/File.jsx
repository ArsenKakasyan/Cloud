import React from 'react'
import './file.less'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import { deleteFile, downloadFile } from '../../../../actions/file';
import sizeFormat from '../../../../utils/sizeFormat';

const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)


    function openDirHandler(file) {
        if(file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
        
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(file))
    }

    if(fileView === 'list') {
        return (
            <div className='file' onClick={() => openDirHandler(file)}>
                <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file_img" />
                <div className="file_name">{file.name}</div>
                <div className="file_date">{file.date.slice(0,10)}</div>
                <div className="file_size">{sizeFormat(file.size)}</div>
                {file.type !== 'dir' && 
                <button onClick={(e) => downloadClickHandler(e)} className='file_btn_file_download'>download</button>}
                <button onClick={(e) => deleteClickHandler(e)} className='file_btn_file_delete'>delete</button>
            </div>
    
        );
    }

    if(fileView === 'plate') {
        return (
            <div className='file-plate' onClick={() => openDirHandler(file)}>
                <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file-plate_img" />
                <div className="file-plate_name">{file.name}</div>

                <div className="file-plate_btns">
                    {file.type !== 'dir' && 
                    <button onClick={(e) => downloadClickHandler(e)} className='file-plate_btn_file-plate_download'>download</button>}
                    <button onClick={(e) => deleteClickHandler(e)} className='file-plate_btn_file-plate_delete'>delete</button>
                </div>
            </div>
        );
    }
};

export default File;