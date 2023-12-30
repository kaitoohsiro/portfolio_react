import { SetStateAction } from 'react';
import "../../style/components/default/Content.scss";
import { MenuTitle, Description } from '../parts';
import AboutBlok from '../parts/AboutBlock';

interface ContentProps {
  menuTitle: any;
  description: any;
  linkText: SetStateAction<string>;
}

const AboutContent = (props: ContentProps) => {
  return (
    <div className="content-style">
      <MenuTitle menuTitle={props.menuTitle} />
      <Description description={props.description} />
      <AboutBlok />
    </div>
  );
};

export default AboutContent;
