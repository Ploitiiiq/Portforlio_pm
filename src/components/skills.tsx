import { motion } from 'framer-motion'; // ✅ import framer-motion
import { useTranslation } from 'react-i18next';

import BootstrapLogo from "../assets/icon/Bootstrap.png";
/*import Cshap from "../assets/icon/Cshap.png";*/
import cssLogo from "../assets/icon/css.png";
import dartLogo from "../assets/icon/dart.png";
import flutterLogo from "../assets/icon/flutter.png";
import githubLogo from "../assets/icon/GitHub.png";
import htmlLogo from "../assets/icon/HTML.png";
/*import javalogo from "../assets/icon/javalogo.png";*/
import JavaScriptLogo from "../assets/icon/JavaScript.png";
import mysqlLogo from "../assets/icon/mysql.png";
import photoshopLogo from "../assets/icon/photoshop.png";
import phpLogo from "../assets/icon/php.png";
import figmaLogo from "../assets/icon/png-transparent-figma-app-logo-tech-companies.png";
import postmanLogo from "../assets/icon/postman.png";
import pythoned from "../assets/icon/pythoned.png";
import reactLogo from "../assets/icon/react.png";
import SQLLogo from "../assets/icon/SQL-Database.png";
import swaggerLogo from "../assets/icon/swagger.png";
import TailwindLogo from "../assets/icon/Tailwind_CSS.png";
import TypescriptLogo from "../assets/icon/Typescript.svg.png";
import vscodeLogo from "../assets/icon/Visual_Studio_Code.png";
import vueLogo from "../assets/icon/vue-js.png";



import "./skills.css";

// 🔁 สร้าง reusable motion item
interface SkillItemProps {
  src: string;
  alt: string;
  name: string;
  index: number;
}

const MotionSkillItem: React.FC<SkillItemProps> = ({ src, alt, name, index }) => (
  <motion.div
    className="skill-item"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.09 }}
    whileHover={{ scale: 1.1 }}
    viewport={{ once: false  }}
  >
    <img src={src} alt={alt} className="icon" />
    <p>{name}</p>
  </motion.div>
);

const Skills = () => {
  const { t } = useTranslation();

  const languages = [
    { src: htmlLogo, alt: 'HTML', name: 'HTML' },
    { src: cssLogo, alt: 'CSS', name: 'CSS' },
    { src: JavaScriptLogo, alt: 'JavaScript', name: 'JavaScript' },
    { src: TypescriptLogo, alt: 'TypeScript', name: 'TypeScript' },
    { src: phpLogo, alt: 'PHP', name: 'PHP' },
    { src: SQLLogo, alt: 'SQL', name: 'SQL' },
    { src: dartLogo, alt: 'Dart', name: 'Dart' },
    { src: pythoned, alt: 'pythoned', name: 'pythoned'},
    /*{ src: Cshap, alt: 'Cshap', name: 'C#'},*/
    /*{ src: javalogo, alt: 'javalogo', name: 'java'}*/
  ];

  const frameworks = [
    { src: BootstrapLogo, alt: 'Bootstrap', name: 'Bootstrap' },
    { src: TailwindLogo, alt: 'Tailwind CSS', name: 'Tailwind' },
    { src: flutterLogo, alt: 'Flutter', name: 'Flutter' },
    { src: reactLogo, alt: 'React', name: 'React' },
    { src: vueLogo, alt: 'Vue.js', name: 'Vue.js' }
  ];

  const tools = [
    { src: vscodeLogo, alt: 'VS Code', name: 'VS Code' },
    { src: githubLogo, alt: 'GitHub', name: 'GitHub' },
    { src: postmanLogo, alt: 'Postman', name: 'Postman' },
    { src: mysqlLogo, alt: 'MySQL', name: 'MySQL' },
    { src: swaggerLogo, alt: 'Swagger', name: 'Swagger' },
    { src: figmaLogo, alt: 'Figma', name: 'Figma' },
    { src: photoshopLogo, alt: 'Photoshop', name: 'Photoshop' }
  ];

  return (
    <section id="skills" className="skills">
      <h2>{t('Skills')}</h2>
      <div className="skills-container">

        <div className="languages">
          <h2>{t('Languages')}</h2>
          <div className="skill-grid">
            {languages.map((item, i) => (
              <MotionSkillItem key={item.name} {...item} index={i} />
            ))}
          </div>
        </div>

        <div className="frameworks">
          <h2>{t('Frameworks')}</h2>
          <div className="skill-grid">
            {frameworks.map((item, i) => (
              <MotionSkillItem key={item.name} {...item} index={i} />
            ))}
          </div>
        </div>

        <div className="tools">
          <h2>{t('Tools')}</h2>
          <div className="skill-grid">
            {tools.map((item, i) => (
              <MotionSkillItem key={item.name} {...item} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
