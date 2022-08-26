import React,{useState} from "react";
import uploadImg from '../assets/upload-img.png'

export default function Upload(){
    const [file, setFile] = useState(null);
    return(
        <div className="upload-page">
            <div className="upload-file column">
                <h1>Upload Files</h1>
                <div className="file-uploader">
                    <img className='upload-img' src={uploadImg} alt="cloud illustration" />
                    <p></p>
                </div>
            </div>
            <div className="column"></div>
        </div>
    )
}