import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { AuthPage } from '../pages/Auth-page/Auth.page'
import { HomePage } from '../pages/Home-page/Home.page'
import { LoginForm } from './Auth/LoginForm'
import { RegisterForm } from './Auth/RegisterForm'

type TypeProps = {
  isAuth: boolean
}

export const RouterComponets: React.FC<TypeProps> = ({ isAuth }) => {
  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<AuthPage />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to={'/home'} />} />
    </Routes>
  )
}
