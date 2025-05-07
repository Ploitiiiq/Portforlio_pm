// src/components/Projects.jsx
import { useTranslation } from 'react-i18next';
import Slider from "react-slick"; // <== เพิ่มตรงนี้
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import projectImage1 from '../assets/img/1-Photoroom.png';
import projectImage01 from '../assets/img/1.png';
import projectImage10 from '../assets/img/10.png';
import projectImage11 from '../assets/img/11.png';
import projectImage12 from '../assets/img/12.png';
import projectImage13 from '../assets/img/13.png';
import projectImage2 from '../assets/img/2-Photoroom.png';
import projectImage02 from '../assets/img/2.png';
import projectImage3 from '../assets/img/3-Photoroom.png';
import projectImage03 from '../assets/img/3.png';
import projectImage4 from '../assets/img/4.png';
import projectImage5 from '../assets/img/5.png';
import projectImage6 from '../assets/img/6.png';
import projectImage7 from '../assets/img/7.png';
import projectImage8 from '../assets/img/8.png';
import projectImage9 from '../assets/img/9.png';

import "./skills.css";

const Projects = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,            
    infinite: true,          
    speed: 500,            
    slidesToShow: 1,        
    slidesToScroll: 1,      
    autoplay: true,       
    autoplaySpeed: 3000,    
  };
  

  return (
    <section id="projects" className="projects">
      <h2>{t('Projects')}</h2>

      <div className="project-section">
        <h3>{t('Final_Project')}</h3>
        <div className="project-item">
          <h4>{t('leave')}</h4>
          <Slider {...settings}>
  <div>
    <img
      src={projectImage01}
      alt="Internship Project Screenshot 1"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage02}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage03}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage4}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage5}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage6}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage7}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage8}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage9}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage10}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage11}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage12}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage13}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
</Slider>
          <p className="project-description">
            {t('jecti')}
          </p>
        </div>
      </div>

      <div className="project-section">
        <h3>{t('Internship_Project')}</h3>
        <div className="project-item">
          <h4>{t('Flutter')}</h4>
          <Slider {...settings}>
  <div>
    <img
      src={projectImage3}
      alt="Internship Project Screenshot 1"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage2}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
  <div>
    <img
      src={projectImage1}
      alt="Internship Project Screenshot 2"
      className="project-image"
    />
  </div>
</Slider>

          <p className="project-description">
            {t('jectii')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
