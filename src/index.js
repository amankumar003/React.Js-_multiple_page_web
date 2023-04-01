
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

import './index.css';
import "../src/assets/css/nucleo-icons.css";
// import "../src/assets/scss/argon-design-system.scss?v1.0.0";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'tachyons';

import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

import { BrowserRouter } from "react-router-dom"
import { createBrowserHistory } from "history"
import App from './App'

import JavascriptTimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
import * as serviceWorker from './serviceWorker';

import { setContext } from '@apollo/client/link/context';
import { CookiesProvider } from "react-cookie";
import Global from './config/Global';

JavascriptTimeAgo.addLocale(en)
JavascriptTimeAgo.addLocale(ru)



const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: Global.BASE_URL })),
  cache: new InMemoryCache(),
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
});

const history = createBrowserHistory()


ReactDOM.render(
  <CookiesProvider>
      <ApolloProvider client={client}>
        <BrowserRouter history={history}>
            <div className="app">
              <App />
            </div>
        </BrowserRouter>
      </ApolloProvider>
  </CookiesProvider>
  ,
  document.getElementById('root')
);
serviceWorker.unregister();

