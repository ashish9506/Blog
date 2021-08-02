/* eslint-disable react/prop-types */

import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import history from 'utils/history';
import { MainAppBar } from './appbar';

function Dashboard(props) {
  useEffect(() => {
    history.replace('/');
  }, []);
  return (
    <>
      <div>
        <Helmet>
          <title>TechBlog - Home</title>
        </Helmet>
        <Box>
          <MainAppBar {...props} />
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
