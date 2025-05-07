import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './skills.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="contact"
      className="contact text-center py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <p className="text-xl font-semibold mb-2">{t('Contact')}</p>
      <p className="mb-1">📧 Email: ploitii6@gmail.com</p>
      <p>
        🐙 GitHub:{' '}
        <a
          href="https://github.com/Ploitiiiq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          github.com/Ploitiiiq
        </a>
      </p>
    </motion.section>
  );
};

export default Contact;
