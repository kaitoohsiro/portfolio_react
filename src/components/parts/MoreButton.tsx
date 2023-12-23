import Button from "@mui/material/Button";

const MoreButton = () => {
    // const handleLinkClick = () => {
    //     setLinkText(props.linkText);
    //     console.log(linkText);
    // }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a>
                <Button
                    variant="contained"
                    style={{ borderRadius: '30px', background: '#0000cd' }}
                    // onClick={handleLinkClick}
                >
                    more
                </Button>
            </a>
        </div>
    );
}

export default MoreButton;
