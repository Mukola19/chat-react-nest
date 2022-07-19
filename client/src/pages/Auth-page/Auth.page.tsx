import React from 'react'
import { Outlet } from 'react-router-dom'
import './Auth.page.scss'

export const AuthPage = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Outlet />
      </div>
    </section>
  )
}
