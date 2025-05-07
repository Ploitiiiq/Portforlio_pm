import { useTranslation } from 'react-i18next';
import "./skills.css";
// src/components/Contact.jsx

const Contact = () => {
  const { t } = useTranslation(); 
  return (
    <section id="contact" className="contact">
      <p>{t('Contact')}</p> 
      <p>Email: 📧 ploitii6@gmail.com</p>
      <p>GitHub: 🐙 <a href="https://github.com/Ploitiiiq">https://github.com/Ploitiiiq</a></p>
    </section>
  );
}

export default Contact;
