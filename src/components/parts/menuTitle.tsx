const MenuTitle = (props: { menuTitle: string }) => {
    return (
        <div id={props.menuTitle} style={menuStyle}>
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