import React from 'react';
import './TitleSection.css';
import img1 from '../images/linkedin_pic_cropped.jpeg'; // Adjusted path
import { scrollToSection } from './pages/Home'; // Keeping import even if unused

const TitleSection: React.FC = () => {
  return (
    <div className="title-section" id="titleSection">
      <div className='title-section-text'>
        <p>Brent Van De Vyver</p>
        <p> <br /> </p>
        <h1>ANewPower</h1>
      </div>
      <div className="title-image-container">
        <img src={img1} alt="Profile picture" className="title-image"/>
      </div>
    </div>
  );
};

export default TitleSection;
