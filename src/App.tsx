import { FC } from "react";
import { Grid } from "@mui/material";

const App:FC = () => {
  return (
    <Grid
      container
      height="100vh"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>First step</Grid>
    </Grid>
  );
}

export default App;
