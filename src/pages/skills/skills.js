import React from 'react'
import './skills.css'
import IMAGES from '../../images/img'

export default function Skills() {
    return (
        <>
            <div className="inner glow-text">
                <div className="header">
                    <h1>LANGUAGES AND TOOLS</h1>
                </div>
                <div className="skillcontainer">
                    <div className="img">
                        <img src={IMAGES.cpp} className="skill-icon" alt='' />
                    </div>
                    <div className="img">
                        <img src={IMAGES.python} className="skill-icon" alt='' />
                    </div>
                    <div className="img">
                        <img src={IMAGES.angular} className="skill-icon" alt='' style={{width:"90px"}}/>
                    </div>
                    <div className="img">
                        <img src={IMAGES.react} className="skill-icon" alt='' />
                    </div>
                    <div className="img">
                        <img src={IMAGES.nodejs} className="skill-icon" alt='' style={{width:"100px"}} />
                    </div>
                    <div className="img">
                        <img src={IMAGES.monogodb} className="skill-icon" alt='' style={{width:"100px"}}/>
                    </div>
                    <div className="img">
                        <img src={IMAGES.html} className="skill-icon" alt='' style={{width:"100px"}}/>
                    </div>
                    <div className="img">
                        <img src={IMAGES.css} className="skill-icon" alt='' />
                    </div>
                    <div className="img">
                        <img src={IMAGES.js} alt='' className="skill-icon" />
                    </div>
                    <div className="img">
                        <img src={IMAGES.git} className="skill-icon" alt='' style={{width:"100px"}} />
                    </div>
                    <div className="img">
                        <img src={IMAGES.canvas} className="skill-icon" alt='' />
                    </div>
                    <div className="img">
                        <img src={IMAGES.tailwind} className="skill-icon" alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}