import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1800,
    backgroundColor: "light grey",
  },
  backgroundColor: {
    backgroundColor: "black",
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} justify="center">
      <Grid container justify="center">
        <AppBar position="static" color="secondary">
          <Grid variant="dense">
            <h3 align="center">SignUp Form</h3>
          </Grid>
        </AppBar>
      </Grid>
    </Grid>
  );
}
