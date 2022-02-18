import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
    color:${(props) => props.theme.white.darker};
    background-color:black;
  }
  ul{
    list-style: none;
    padding-left: 0px;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  input:focus{
    outline:none;
  }
`;

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
