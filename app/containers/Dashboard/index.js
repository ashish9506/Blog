/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Tech Blogs
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
