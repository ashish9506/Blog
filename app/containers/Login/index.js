import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <TextField
        className="mb-4 mt-3"
        fullWidth
        color="primary"
        label="Email-ID"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        className="mb-5"
        color="primary"
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="text-center">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};
export default Login;
