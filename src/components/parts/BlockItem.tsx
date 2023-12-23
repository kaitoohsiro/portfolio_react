import { Grid } from "@mui/material";
import kaihatu from "../../assets/kaihatu.png";
import deep from "../../assets/deep.png";

const BlockItem = () => {
    const block: { [key: string]: string } = {
        textAlign: "center"
    }
    const blockItemStyle: { [key: string]: string } = {
        // backgroundColor: "#000000",
        height: "400px",

        padding: "60px 0px 0px 0px"
    }
    const imgStyle: { [key: string]: string } = {
        width: "70%", // Adjust the size as needed
        height: "auto",
        borderRadius: "10px",
      };
    return (
        <div style={block}>
            <Grid container spacing={3} >
                <Grid item xs={12} md={6} style={blockItemStyle}>
                    <img
                        src={deep}
                        style={imgStyle}
                    />
                </Grid>
                <Grid item xs={12} md={6} style={blockItemStyle}>
                    <img
                        src={kaihatu}
                        style={imgStyle}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default BlockItem;