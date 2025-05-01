import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './skills.css';
// นำเข้าภาพธง
import ukFlag from '../assets/icon/en.png';
import thFlag from '../assets/icon/th.png';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); // ใช้ t() เพื่อแปลข้อความ
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <header>
      <div className="nav">
        <div className="portfolio-logo">
          <strong>Portfolio</strong>
        </div>

        <ul className="nav-menu">
          <li><a href="#home">{t('Home')}</a></li>
          <li><a href="#about">{t('About')}</a></li>
          <li><a href="#projects">{t('Projects')}</a></li>
          <li><a href="#contact">{t('Contact')}</a></li>
        </ul>

        {/* language switcher */}
        <div className="language-switcher">
          <button className="bookmarkBtn" onClick={handleLanguageChange}>
            <span className="IconContainer">
              <img
                src={language === 'en' ? thFlag : ukFlag}
                alt={language === 'en' ? 'Thai Flag' : 'UK Flag'}
              />
            </span>
            <p className="text">{language === 'en' ? 'TH' : 'EN'}</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
