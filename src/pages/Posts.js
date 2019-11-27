import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import useAppState from "../store";
import { withRouter } from "react-router-dom";

function Posts() {
  //setting up state
  const { state, actions } = useAppState();
  //get the function `getAllPost`  from actions
  const { getAllPost } = actions;

  useEffect(() => {
    getAllPost();
  }, []);

  return state.posts.map((post, index) => {
    return (
      <div key={index}>
        <h2>{post.title}</h2>
        <Typography paragraph>{post.body}</Typography>
      </div>
    );
  });
}

export default withRouter(Posts);
