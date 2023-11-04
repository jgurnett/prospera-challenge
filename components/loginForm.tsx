"use client"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import '@/app/globals.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    // TODO - add actual auth
    setIsAuthenticated(true);
    router.push('/');
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
    
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };



  return (
    <div>
      <form onSubmit={handleLogin} className="child-padding">
        <div>
           <TextField
            placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
           <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={handleLogin} >Login</Button>
      </form>
      {isAuthenticated && <p>You are logged in!</p>}
    </div>
  );
};

export default LoginForm;


