import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./componants/header";
import reportWebVitals from "./reportWebVitals";
import MyApp from "./componants/myApp";
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql,} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Header />
     <MyApp />
  </ApolloProvider>,
  // <React.StrictMode>
  //   <Header />
  //   <MyApp/>
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
