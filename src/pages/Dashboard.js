import React, { useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useDashboardStyles from "../styles/dashboard.style";
import menu from "../utils/menu";
import useAppState from "../store";
import ListItemLink from "../components/ListItemLink";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import Photos from "./Photos";
import Homepage from "./Homepage";

export default function Dashboard() {
  const classes = useDashboardStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  //setting up state
  const { state, actions } = useAppState();
  //get the function `getAllPost`  from actions
  const { getAllPost } = actions;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {menu.map((item, index) => (
              <ListItemLink
                index={index}
                to={item.to}
                item={item}
                key={index}
              />
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />

          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/posts" component={Posts} />
            <Route path="/photos" component={Photos} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
