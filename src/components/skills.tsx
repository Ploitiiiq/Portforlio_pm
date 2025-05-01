// src/components/Skills.jsx
import BootstrapLogo from "../assets/icon/Bootstrap.png";
import cssLogo from "../assets/icon/css.png";
import dartLogo from "../assets/icon/dart.png";
import flutterLogo from "../assets/icon/flutter.png";
import githubLogo from "../assets/icon/GitHub.png";
import htmlLogo from "../assets/icon/HTML.png";
import JavaScriptLogo from "../assets/icon/JavaScript.png";
import mysqlLogo from "../assets/icon/mysql.png";
import photoshopLogo from "../assets/icon/photoshop.png";
import phpLogo from "../assets/icon/php.png";
import figmaLogo from "../assets/icon/png-transparent-figma-app-logo-tech-companies.png";
import postmanLogo from "../assets/icon/postman.png";
import SQLLogo from "../assets/icon/SQL-Database.png";

import { useTranslation } from 'react-i18next'; // นำเข้า useTranslation
import reactLogo from "../assets/icon/react.png";
import swaggerLogo from "../assets/icon/swagger.png";
import TailwindLogo from "../assets/icon/Tailwind_CSS.png";
import TypescriptLogo from "../assets/icon/Typescript.svg.png";
import vscodeLogo from "../assets/icon/Visual_Studio_Code.png";
import vueLogo from "../assets/icon/vue-js.png";


import "./skills.css";

const Skills = () => {
  const { t } = useTranslation(); // เรียกใช้ t() จาก useTranslation

  return (
    <section id="skills" className="skills">
      <h2>{t('Skills')}</h2>
      <div className="skills-container">

        <div className="languages">
        <h2>{t('Languages')}</h2>
          <div className="skill-grid">
            <div className="skill-item"><img src={htmlLogo} alt="HTML" className="icon" /><p>HTML</p></div>
            <div className="skill-item"><img src={cssLogo} alt="CSS" className="icon" /><p>CSS</p></div>
            <div className="skill-item"><img src={JavaScriptLogo} alt="JavaScript" className="icon" /><p>JavaScript</p></div>
            <div className="skill-item"><img src={TypescriptLogo} alt="TypeScript" className="icon" /><p>TypeScript</p></div>
            <div className="skill-item"><img src={phpLogo} alt="PHP" className="icon" /><p>PHP</p></div>
            <div className="skill-item"><img src={SQLLogo} alt="SQL" className="icon" /><p>SQL</p></div>
            <div className="skill-item"><img src={dartLogo} alt="Dart" className="icon" /><p>Dart</p></div>
          </div>
        </div>

        <div className="frameworks">
        <h2>{t('Frameworks')}</h2>
          <div className="skill-grid">
            <div className="skill-item"><img src={BootstrapLogo} alt="Bootstrap" className="icon" /><p>Bootstrap</p></div>
            <div className="skill-item"><img src={TailwindLogo} alt="Tailwind CSS" className="icon" /><p>Tailwind</p></div>
            <div className="skill-item"><img src={flutterLogo} alt="Flutter" className="icon" /><p>Flutter</p></div>
            <div className="skill-item"><img src={reactLogo} alt="React" className="icon" /><p>React</p></div>
            <div className="skill-item"><img src={vueLogo} alt="Vue.js" className="icon" /><p>Vue.js</p></div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="tools">
        <h2>{t('Tools')}</h2>
          <div className="skill-grid">
            <div className="skill-item"><img src={vscodeLogo} alt="VS Code" className="icon" /><p>VS Code</p></div>
            <div className="skill-item"><img src={githubLogo} alt="GitHub" className="icon" /><p>GitHub</p></div>
            <div className="skill-item"><img src={postmanLogo} alt="Postman" className="icon" /><p>Postman</p></div>
            <div className="skill-item"><img src={mysqlLogo} alt="MySQL" className="icon" /><p>MySQL</p></div>
            <div className="skill-item"><img src={swaggerLogo} alt="Swagger" className="icon" /><p>Swagger</p></div>
            <div className="skill-item"><img src={figmaLogo} alt="Figma" className="icon" /><p>Figma</p></div>
            <div className="skill-item"><img src={photoshopLogo} alt="Photoshop" className="icon" /><p>Photoshop</p></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
