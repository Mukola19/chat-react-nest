import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { RouterComponets } from './components/RouterComponets'
import { AUTH_ME } from './api/auth/auth.query'
import savingToken from './utils/helpers/savingToken'

type InitType = {
  refresh: {
    accessToken: string
    _id: string
    email: string
  }
}

export const App = () => {
  const { data, loading } = useQuery<InitType>(AUTH_ME)

  useEffect(() => {
    savingToken(data?.refresh.accessToken)
  }, [data])

  if (loading) return <>Loading...</>

  return (
    <div className="wrapper">
      <RouterComponets isAuth={!!data} />
    </div>
  )
}

