import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { asyncMap } from "@apollo/client/utilities";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from } from "@apollo/client";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_SUPABASE_GRAPH_URL
})

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {}}) => ({
    headers: {
      ...headers,
      apikey: import.meta.env.VITE_SUPABASE_ANON_APIKEY,
      Authorization: "Bearer " + Cookies.get("token")
    }
  }))
  return forward(operation)
})

const handleResponse = new ApolloLink((operation, forward) => {
  return asyncMap(forward(operation), async (response) => {
    const resKeys = Object.keys(response.data ?? {})
    if (response.data) {
      if (response?.data[resKeys[0]].edges.length  === 0) {
        toast.error("Session expired")
        window.location.replace("/auth/login")
      }
    }
    return response
  })
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: handleResponse.concat(from([authMiddleware, httpLink]))
});

export default client;
