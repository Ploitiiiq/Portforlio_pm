// src/components/Projects.jsx
import { useTranslation } from 'react-i18next';
import Slider from "react-slick"; // <== เพิ่มตรงนี้
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import projectImage1 from '../assets/img/1-Photoroom.png';
import projectImage01 from '../assets/img/1.png';
import projectImage10 from '../assets/img/10.png';
import projectImage11 from '../assets/img/11.png';
import projectImage2 from '../assets/img/2-Photoroom.png';
import projectImage02 from '../assets/img/2.png';
import projectImage3 from '../assets/img/3-Photoroom.png';
import projectImage03 from '../assets/img/3.png';
import projectImage4 from '../assets/img/4.png';
import projectImage5 from '../assets/img/5.png';
import projectImage6 from '../assets/img/6.png';
import projectImage8 from '../assets/img/8.png';
import projectImage9 from '../assets/img/9.png';
import "./skills.css";

const Projects = () => {
  const { t } = useTranslation();

  // การตั้งค่าของสไลด์
  const settings = {
    dots: true,              // แสดงจุด navigation ด้านล่าง
    infinite: true,          // เลื่อนไม่รู้จบ
    speed: 500,              // ความเร็วในการสไลด์ (0.5 วินาที)
    slidesToShow: 1,         // แสดงทีละ 1 รูป
    slidesToScroll: 1,       // เลื่อนทีละ 1 รูป
    autoplay: true,          // เริ่มเล่นอัตโนมัติ
    autoplaySpeed: 3000,     // เวลาพักระหว่างภาพ (3 วินาที)
  };
  

  return (
    <section id="projects" className="projects">
      <h2>{t('Projects')}</h2>

      <div className="project-section">
        <h3>{t('Final_Project')}</h3>
        <div className="project-item">
          <h4>{t('leave')}</h4>
          {/* เริ่ม Slider */}
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
      src={projectImage10}
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
  {/* เพิ่มได้เรื่อย ๆ ตามจำนวนรูป */}
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
  {/* เพิ่มได้เรื่อย ๆ ตามจำนวนรูป */}
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
