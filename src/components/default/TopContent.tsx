// TopContent.jsx
import { Grid, Typography } from "@mui/material";
import TopSVG from "../../assets/top.svg";
import "../../style/components/default/TopContent.scss"; // Import the Sass file

const TopContent = () => {
  return (
    <div className="top-container">
      <Grid container spacing={3} className="grid-container">
        <Grid item xs={12} md={6} className="svg-container">
          <img src={TopSVG} alt="Top SVG" />
        </Grid>
        <Grid item xs={12} md={6} className="text-container">
          <Typography variant="h4" className="title">
            Kai.
          </Typography>
          <Typography variant="subtitle1" className="subtitle">
            Your Catchy Slogan or Description
          </Typography>
          {/* Add other content as needed */}
        </Grid>
      </Grid>
    </div>
  );
};

export default TopContent;
