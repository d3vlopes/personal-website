import { gql } from 'graphql-request'

export const ContactLinksFragment = gql`
  fragment ContactLinksFragment on ContactLinks {
    name
    icon {
      url
    }
    link
  }
`
