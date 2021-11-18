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

export const ProjectFragment = gql`
  fragment ProjectFragment on Project {
    thumbnail {
      url
    }
    name
    description
    slug
  }
`
