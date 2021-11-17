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

export const ProjectsRecentsFragment = gql`
  fragment ProjectsRecentsFragment on Project {
    thumbnail {
      url
    }
    name
    description
    slug
  }
`
