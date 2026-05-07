import { errorLink } from './links/apollo-error.link'
import { httpLink } from './links/apollo-http.link'
import { IS_CLIENT } from '@/shared/constants/app.constants'
import { ApolloLink } from '@apollo/client'
import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

const clientApolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  devtools: { enabled: true }
})

export const simpleApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  devtools: { enabled: true }
})

const serverApolloClient = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
  devtools: { enabled: true },
  ssrMode: true,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    }
  }
})

export function getApolloClient() {
  return IS_CLIENT ? clientApolloClient : serverApolloClient
}
