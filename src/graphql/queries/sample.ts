import { gql } from '@apollo/client'

export const SAMPLE_QUERY = gql`
  query getGames {
    games {
      name
    }
  }
`
