import { SetStateAction } from 'react';
import "../../style/components/default/Content.scss";
import {MenuTitle, Description, MoreButton, BlockItem} from '../parts';

const Content = (props: { menuTitle: any; description: any; linkText: SetStateAction<string>; }) => {
    return (
        <div className="content-style">
            <MenuTitle menuTitle={props.menuTitle} />
            <Description description={props.description} />
            <BlockItem />
            <BlockItem />
            <MoreButton />
        </div>
    )
}

export default Content;