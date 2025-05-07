import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './skills.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.section
    id="about"
    className="about text-center py-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.7 }} 
    viewport={{ once: false }} 
  >
    <h2 className="text-3xl font-bold mb-4">{t('about_Me')}</h2>
    <p className="text-gray-700 text-lg">{t('graduate')}</p>
  </motion.section>
  );
};

export default About;
