import React from 'react';
import Image from 'next/image';
import './style.css'
import IMAGES from '../../../public/skills_images/img';

const Skills = () => (
  <div className="inner glow-text">
    <div className="header">
      <h1>LANGUAGES AND TOOLS</h1>
    </div>
    <div className="skillcontainer">
      {Object.entries(IMAGES).map(([imageName, imagePath], index) => (
        <div key={index} className="img">
          <Image
            src={imagePath}
            alt={imageName}
            width={70}
            height={70}
            className='skill-icon'
          />
        </div>
      ))}
    </div>
    <div className='text-center'><Image src={'/signature.png'} className="signature" alt="signature" />
        </div>
  </div>
);

export default Skills;
