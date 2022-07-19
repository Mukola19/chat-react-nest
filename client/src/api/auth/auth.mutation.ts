import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($input: LoginUserDto!) {
    login(input: $input) {
      _id
      accessToken
    }
  }
`

export const REGISTER = gql`
  mutation registration($input: RegisterUserDto!) {
    registration(input: $input) {
      _id
      accessToken
    }
  }
`
