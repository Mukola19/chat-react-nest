import { gql } from '@apollo/client'

export const REFRESH = gql`
  query refresh {
    refresh {
      _id
      accessToken
    }
  }
`

export const AUTH_ME = gql`
  query AuthMe {
    refresh {
      accessToken
      _id
      email
    }
  }
`

export const GET_USER = gql`
  query {
    getAuthUser {
      email
    }
  }
`
