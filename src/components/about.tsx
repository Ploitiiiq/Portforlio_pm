import { useTranslation } from 'react-i18next'; // นำเข้า useTranslation
import "./skills.css"; // เปลี่ยนเป็นตัวพิมพ์เล็ก

const About = () => {
  const { t } = useTranslation(); // เรียกใช้ t() จาก useTranslation

  return (
    <section id="about" className="about">
      <h2>{t('about_Me')}</h2>  
      <p>{t('graduate')}</p> 
    </section>
  );
}

export default About;
