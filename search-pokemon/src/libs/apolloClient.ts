
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
});
