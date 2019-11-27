import React from "react";
import Posts from "../pages/Posts";

const menu = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Posts",
    to: "/posts",
    component: () => <Posts />
  },
  {
    name: "Photos",
    to: "/photos"
  }
];

export default menu;
