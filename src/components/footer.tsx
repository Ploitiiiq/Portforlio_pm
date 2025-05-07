import { useTranslation } from 'react-i18next'; // นำเข้า useTranslation
import "./skills.css"; // เปลี่ยนเป็นตัวพิมพ์เล็ก

const Footer = () => {
  const { t } = useTranslation(); 

  return (
    <footer>
      <p>{t('reserved')}</p>
    </footer>
  );
}

export default Footer;
