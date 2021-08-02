import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';
import history from 'utils/history';
import React, { useState } from 'react';
import { Route, Router } from 'react-router-dom';
import HomePage from '../Home/Loadable';
import CustomDialog from '../../components/Dialogs/dialog';
import Login from '../Login/Loadable';
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

export const MainAppBar = () => {
  const classes = useStyles();
  const [loginDialog, setLoginDialog] = useState(false);
  return (
    <div>
      <Router history={history}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Tech Blogs
            </Typography>
            <Button color="inherit" onClick={() => setLoginDialog(true)}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <CustomDialog
          open={loginDialog}
          close={() => setLoginDialog(false)}
          title="Login"
          content={<Login />}
          action="Login"
        />
        <div>
          <Route path="/home" component={HomePage} />
        </div>
      </Router>
    </div>
  );
};
