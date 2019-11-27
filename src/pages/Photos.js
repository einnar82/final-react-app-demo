import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import useAppState from "../store";
import PhotoCard from "../components/PhotoCard";
import { LinearProgress, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Photos() {
  const classes = useStyles();
  const { state, actions } = useAppState();
  const { getAllPhotos } = actions;
  useEffect(() => {
    getAllPhotos();
  }, []);

  return state.photos.length > 0 ? (
    <Grid container spacing={3}>
      {state.photos.map((photo, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <PhotoCard item={photo} />
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <LinearProgress />
  );
}

export default withRouter(Photos);
