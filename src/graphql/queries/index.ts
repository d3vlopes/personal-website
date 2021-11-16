import { gql } from 'graphql-request'

import { ContactLinksFragment } from 'graphql/fragments'

export const GET_HOME = gql`
  ${ContactLinksFragment}

  query getHome {
    menus {
      links: pages {
        id
        path
        menuLabel
      }
      contactsLinks {
        ...ContactLinksFragment
      }
    }
    footers {
      contactsLinks {
        ...ContactLinksFragment
      }
    }
  }
`
