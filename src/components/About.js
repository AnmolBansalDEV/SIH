import React from "react";
import topCube from '../assets/top-cube.png'
import bottomCube from '../assets/bottom-cube.png'

export default function About(){
    return(
        <div className="about-container">
            <img src={topCube} className='topCube' alt='cube object' />
            <h1>A<span className="lightAboutTxt">bout</span></h1>
            <div className="team-grid">
                <div>
                <div className="team-img"></div>
                <h1 className="team-name">Aryaman Raj</h1>
                </div>
                <div>
                    <div className="team-img"></div>
                <h1 className="team-name">Anmol Bansal</h1>
                </div>
                <div>
                <div className="team-img"></div>
                <h1 className="team-name">Ashwinee Kumar<br />Samdarshi</h1>
                </div>
                <div>
                <div className="team-img"></div>
                <h1 className="team-name">Ishita Srivastava</h1>
                </div>
                <div>
                <div className="team-img"></div>
                <h1 className="team-name">Activa Dwivedi</h1>
                </div>
                <div>
                <div className="team-img"></div>
                <h1 className="team-name">Sarthak Saxena</h1>
                </div>
            </div>
<img src={bottomCube} className='bottomCube' alt='bottom cube' />
        </div>    
)
}