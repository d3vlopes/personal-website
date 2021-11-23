import { gql } from 'graphql-request'

import {
  ContactLinksFragment,
  ProjectsFragment,
  ProjectFragment,
  MenuFragment,
  FooterFragment,
} from 'graphql/fragments'

export const GET_HOME_PAGE = gql`
  ${ContactLinksFragment}
  ${MenuFragment}
  ${FooterFragment}

  query getHome($menuSlug: String!, $footerSlug: String!) {
    menu(where: { slug: $menuSlug }) {
      ...MenuFragment
    }
    footer(where: { slug: $footerSlug }) {
      ...FooterFragment
    }
    heroes {
      photo {
        url
      }
      helloMessage
      name
      description
      buttonText
    }
    skills {
      icon {
        url
      }
      title
      description
    }
    tools {
      type
      src {
        url
      }
      name
    }
  }
`

export const GET_RECENTS_PROJECTS = gql`
  ${ProjectsFragment}

  query getRecentsProjects($first: Int) {
    projects(first: $first, orderBy: createdAt_DESC) {
      ...ProjectsFragment
    }
  }
`

export const GET_ABOUT_PAGE = gql`
  ${ContactLinksFragment}
  ${MenuFragment}
  ${FooterFragment}

  query getAbout($menuSlug: String!, $pageSlug: String!, $footerSlug: String!) {
    menu(where: { slug: $menuSlug }) {
      ...MenuFragment
    }
    page(where: { slug: $pageSlug }) {
      title
      subtitle
      blocks {
        __typename
        ... on ProfileInformation {
          image {
            url
          }
          name
          age
          city
          liking
          dream
        }
        ... on Timeline {
          title
          content {
            html
          }
        }
      }
    }
    footer(where: { slug: $footerSlug }) {
      ...FooterFragment
    }
  }
`

export const GET_PROJECTS_PAGE = gql`
  ${ContactLinksFragment}
  ${MenuFragment}
  ${ProjectsFragment}
  ${FooterFragment}

  query getProjects(
    $menuSlug: String!
    $first: Int
    $pageSlug: String
    $footerSlug: String!
  ) {
    menu(where: { slug: $menuSlug }) {
      ...MenuFragment
    }
    page(where: { slug: $pageSlug }) {
      title
      subtitle
    }

    projects(first: $first, orderBy: createdAt_DESC) {
      ...ProjectsFragment
    }
    footer(where: { slug: $footerSlug }) {
      ...FooterFragment
    }
  }
`

export const GET_PROJECT_PAGE = gql`
  ${ContactLinksFragment}
  ${MenuFragment}
  ${ProjectFragment}
  ${FooterFragment}

  query getProject(
    $menuSlug: String!
    $projectSlug: String!
    $footerSlug: String!
  ) {
    menu(where: { slug: $menuSlug }) {
      ...MenuFragment
    }

    projects(where: { slug: $projectSlug }) {
      ...ProjectFragment
    }
    footer(where: { slug: $footerSlug }) {
      ...FooterFragment
    }
  }
`

export const GET_MORE_PROJECTS = gql`
  ${ProjectsFragment}

  query getMoreProjects($slug: String, $first: Int) {
    projects(where: { slug_not_contains: $slug }, first: $first) {
      ...ProjectsFragment
    }
  }
`
