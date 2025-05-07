// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/img/Profile.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero flex flex-col md:flex-row items-center justify-between p-8">
      <motion.div
        className="hero-content text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl font-bold mb-2">{t('Junior')}</h1>
        <p className="text-lg mb-4">{t('experiences')}</p>

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
      </motion.div>

      <motion.div
        className="hero-image mt-6 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={profileImage} alt="Profile" className="rounded-full w-48 h-48 object-cover shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;
