'use client'
import { DashboardRoutes } from '@/enums/routes'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'
import Loading from './loading'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const router = useRouter()

  function handleLogin() {
    // TODO - add actual auth
    setIsLoading(true)
    if (!isValid || password.length < 1) {
      setIsLoading(false)
      alert('Some info is incorrect')
      return
    }

    setTimeout(() => {
      setIsLoading(false)
      router.push(`/${DashboardRoutes.DASHBOARD}`)
    }, 1000)
  }

  function handleClickShowPassword() {
    setShowPassword((show) => !show)
  }

  function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value
    setEmail(newEmail)

    // Regular expression for basic email validation
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isValidEmail = emailPattern.test(newEmail)
    setIsValid(isValidEmail)
  }

  return (
    <div>
      <Loading isLoading={isLoading} />
      <form onSubmit={handleLogin} className="flex flex-col w-full">
        <div className="py-4 flex flex-col">
          <TextField
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            error={!isValid}
            helperText={!isValid ? 'Invalid email format' : ''}
          />
        </div>
        <div className="pb-4 flex flex-col">
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: '#1A76D2' }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </div>
  )
}
