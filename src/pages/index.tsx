// import { initializeApollo } from 'utils/apollo'
// import { SAMPLE_QUERY } from 'graphql/queries/sample'

import Main from 'components/Main'

export default function Home() {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Main />
}

export async function getServerSideProps() {
  // const apolloClient = initializeApollo()

  // const { data } = await apolloClient.query({ query: SAMPLE_QUERY })

  // retorno dos dados
  return {
    props: {
      // data: data,
      // Se existir algo no cache, ele pega
      // initialApolloState: apolloClient.cache.extract(),
    },
  }
}
