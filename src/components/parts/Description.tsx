import "../../style/components/parts/Description.scss";

const Description = (props: { description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
        <p className="descriptionStyle">{props.description}</p>
    );
};

export default Description;
