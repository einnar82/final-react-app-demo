import React from "react";
import { Route } from "react-router-dom";

export default function PublicRoutes({ children, ...rest }) {
  return <Route {...rest} render={children} />;
}
