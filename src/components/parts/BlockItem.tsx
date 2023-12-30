import "../../style/components/parts/BlockItem.scss";

interface BlockItemProps {
  imageUrl: string;
  color: string;
  subtitle: string;
  title: string;
  text: string;
}

const BlockItem = (props: BlockItemProps) => {
  return (
      <div className="container">
        <div className="content">
          <div className="imgBlock">
            <img src={props.imageUrl} className="imgStyle" alt="Block Item" />
          </div>
          <div className="textBlock">
            <p className="subTitle">{props.subtitle}</p>
            <h3 className={`title ${props.color}`}>{props.title}</h3>
            <p className="text">{props.text}</p>
            <div className={`btn ${props.color}-btn`}>more</div>
          </div>
        </div>
      </div>
  );
};

export default BlockItem;
