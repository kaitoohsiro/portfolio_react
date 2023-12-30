import { SetStateAction } from 'react';
import "../../style/components/default/Content.scss";
import "../../style/components/parts/Blog.scss";
import { MenuTitle, Description } from '../parts';

interface ContentProps {
  menuTitle: any;
  description: any;
  linkText: SetStateAction<string>;
}

const BlogContent = (props: ContentProps) => {
  return (
    <div className="content-style">
      <MenuTitle menuTitle={props.menuTitle} />
      <Description description={props.description} />

      <div className="blog-content">
        comming soon...
      </div>
    </div>
  );
};

export default BlogContent;
