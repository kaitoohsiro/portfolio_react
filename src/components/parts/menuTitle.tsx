import "../../style/components/parts/MenuTitle.scss";

const MenuTitle = (props: { menuTitle: string }) => {
    return (
        <div id={props.menuTitle} className="menuStyle">
            <div className="barStyle"></div>
            <div className="titleStyle">{props.menuTitle}</div>
        </div>
    )
}

export default MenuTitle;