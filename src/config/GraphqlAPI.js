/* GraphqlAPI.js - helping graphql library for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,15mar20,pwn  created
*/

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */
import RestAPI from './RestApi';
// graphql 
import gql from "graphql-tag";
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { graphql } from 'graphql';
import Global from './Global';
import helpers from './Helpers';


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

const GraphqlAPI = {

    /*******************************************************************************
    *
    * queryCall - helps to get user's data.
    *
    * This function helps to get user's data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    queryCall: async function (query, variables, fetchPolicy) {
        return await client.query({
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy
        })
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },
}



export default GraphqlAPI;