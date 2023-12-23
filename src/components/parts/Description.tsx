import React from 'react';

const Description = (props: { description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    const descriptionStyle = {
        margin: '0 0 0 60px',
        color: 'gray',
    };

    return (
        <p style={descriptionStyle}>{props.description}</p>
    );
};

export default Description;
