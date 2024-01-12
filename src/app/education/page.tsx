import React from 'react'
import './style.css'
const Education = () => {
    return (
        <>
            <div className="container-fluid my-5 glow-text">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-white text-center" style={{ fontSize: "50px", wordBreak: "break-all" }}>EDUCATION</h1>
                        <ul className="timeline-3 text-white">
                            <li>
                                <h4> B.Tech in Computer Science Engineering</h4>
                                <h4 className="text-white">Pranveer Singh Institute of Technology, Kanpur</h4>
                                <h5 className="float-start text-primary">12/2020 - Present</h5>
                                <h5 className="float-end text-primary">CGPA : 8.56/10.0</h5>
                            </li>
                            <hr />
                            <li>
                                <h4> Intermediate - CBSE</h4>
                                <h4 className="text-white">N.S. Children Academy</h4>
                                <h5 className="float-start text-primary">03/2018 - 05/2019</h5>
                                <h5 className="float-end text-primary">Aggregate : 94.6%</h5>
                            </li>
                            <hr />
                            <li>
                                <h4> High School - CBSE</h4>
                                <h4 className="text-white">N.S. Children Academy</h4>
                                <h5 className="float-start text-primary">04/2016 - 06/2017</h5>
                                <h5 className="float-end text-primary">CGPA : 10.0/10.0</h5>
                            </li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
        <div className='text-center'><img src={'/signature.png'} className="signature" alt="signature" />
        </div>
        </>
    )
}

export default Education;