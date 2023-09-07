import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_SUPABASE_GRAPH_URL,
  cache: new InMemoryCache(),
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_ANON_APIKEY
  }
});

export default client;
