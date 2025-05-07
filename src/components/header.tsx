import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ukFlag from '../assets/icon/en.png';
import thFlag from '../assets/icon/th.png';
import './skills.css';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav">
        <div className="portfolio-logo">
          <strong>Portfolio</strong>
        </div>

        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}  
            >
              <a href={`#${item.toLowerCase()}`}>{t(item)}</a>
            </motion.li>
          ))}
        </ul>

        <div className="language-switcher">
          <motion.button
            className="bookmarkBtn"
            onClick={handleLanguageChange}
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.9 }}  
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="IconContainer">
              <img
                src={language === 'en' ? thFlag : ukFlag}
                alt={language === 'en' ? 'Thai Flag' : 'UK Flag'}
                className="flag-icon"
              />
            </span>
            <p className="text">{language === 'en' ? 'TH' : 'EN'}</p>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
