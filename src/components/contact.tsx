import { useTranslation } from 'react-i18next'; // นำเข้า useTranslation
import "./skills.css"; // เปลี่ยนเป็นตัวพิมพ์เล็ก
// src/components/Contact.jsx

const Contact = () => {
  const { t } = useTranslation();  // เรียกใช้ t() จาก useTranslation

  return (
    <section id="contact" className="contact">
      <p>{t('Contact')}</p> 
      <p>Email: 📧 ploitii6@gmail.com</p>
      <p>GitHub: 🐙 <a href="https://github.com/Ploitiiq">https://github.com/Ploitiiq</a></p>
    </section>
  );
}

export default Contact;
