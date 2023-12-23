import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const MenuTitle = (props: { menuTitle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    return (
        <div style={menuStyle}>
            <div style={barStyle}></div>
            <div style={titleStyle}>{props.menuTitle}</div>
        </div>
    )
}

const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '40px'
};

const barStyle = {
    backgroundColor: 'red',
    width: '3px',
    height: '54px',
    marginRight: '10px',
};

const titleStyle = {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '40px',
    marginLeft: '10px'
};


export default MenuTitle;