import { gql } from '@apollo/client'

const getProfileQuery = gql`
  query GetProfile {
    profile {
      id
      email
      name
    }
  }
`
