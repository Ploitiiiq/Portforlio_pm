// src/components/Hero.jsx
import { useTranslation } from 'react-i18next'; // นำเข้า useTranslation
import profileImage from '../assets/img/Profile.jpg'; // นำเข้ารูปภาพ Profile.jpg

const Hero = () => {
  const { t } = useTranslation(); // เรียกใช้ t() จาก useTranslation ที่นี่

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t('Junior')}</h1> 
        <p>{t('experiences')}</p> 

        {/* ลิงก์ดาวน์โหลด PDF โดยไม่เปิดแท็บใหม่ */}
        <a
          href="/file/l CV Resume sutatta.pdf"
          download="l CV Resume sutatta.pdf"
          className="uiverse"
        >
          <div className="wrapper">
            <span>{t('Resume')}</span>
            <div className="circle circle-12"></div>
            <div className="circle circle-11"></div>
          </div>
        </a>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile Image" />
      </div>
    </section>
  );
};

export default Hero;
