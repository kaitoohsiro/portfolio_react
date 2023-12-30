import {Header, Footer} from '../components/default/';
import { Description, MenuTitle } from '../components/parts';
import AboutBlok from '../components/parts/AboutBlock';
import '../style/pages/AboutPage.scss'; // Sassファイルをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinux, faUbuntu, faAws, faPhp, faGithub, faPython, faGolang, faReact, faVuejs, faNode, faFigma, faDocker, faWindows,  } from "@fortawesome/free-brands-svg-icons";
import { faN, faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";




function AboutPage() {
  const skillData = [
    { name: 'Linux', icon: faLinux },
    { name: 'Ubuntu', icon: faUbuntu },
    { name: 'AWS', icon: faAws },
    { name: 'PHP', icon: faPhp },
    { name: 'GitHub', icon: faGithub },
    { name: 'Python', icon: faPython },
    { name: 'Golang', icon: faGolang },
    { name: 'React', icon: faReact },
    { name: 'Vue.js', icon: faVuejs },
    { name: 'Node', icon: faNode },
    { name: 'Figma', icon: faFigma },
    { name: 'Docker', icon: faDocker },
    { name: 'Windows', icon: faWindows },
    { name: 'nginx', icon: faN },
    { name: 'AI', icon: faBrain },
    { name: 'IOT', icon: faRobot }
  ];

  const chunkedSkillData = Array.from({ length: Math.ceil(skillData.length / 4) }, (_, index) =>
    skillData.slice(index * 4, index * 4 + 4)
  );
  return (
    <div>
        <Header scrolled={true} />
        <div className="AboutPage">
          <div className="aboutTitle">
            <h2>About</h2>
          </div>
          <AboutBlok />
          <div className='skillBlock'>
            <MenuTitle menuTitle={"Skils"} />
            <Description description={"私のスキルについて"} />

            <div className="skill-grid">
            {chunkedSkillData.map((row, rowIndex) => (
              <div className="skill-row" key={rowIndex}>
                {row.map((item, colIndex) => (
                  <div className="skill-item" key={colIndex}>
                    <FontAwesomeIcon className="skill-icon" icon={item.icon} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default AboutPage;
