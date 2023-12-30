import { SetStateAction } from 'react';
import "../../style/components/default/Content.scss";
import { MenuTitle, Description, BlockItem } from '../parts';

interface ContentProps {
  menuTitle: any;
  description: any;
  linkText: SetStateAction<string>;
  imageData: {
    url: string;
    color: string;
    description: {
      subtitle: string;
      title: string;
      text: string;
    } }[];
}

const WorkContent = (props: ContentProps) => {
  return (
    <div className="content-style">
      <MenuTitle menuTitle={props.menuTitle} />
      <Description description={props.description} />

      <div className="image-grid">
        {props.imageData.map((item, index) => (
          <BlockItem key={index} imageUrl={item.url} color={item.color} subtitle={item.description.subtitle} title={item.description.title} text={item.description.text} />
        ))}
      </div>
    </div>
  );
};

export default WorkContent;
