
/* Auth_tron.js - helper lib for user authentication for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01c,06oct21,pwn  modified tokenVerify().
01b,14sep21,pwn  added refreshTokn & revokRefrshTokn, 
01a,02sep21,pwn  created.
*/

/*
DESCRIPTION
This file is the helper lib for user authentication for TRON.
*/

/* Imports */
import GraphqlAPI from 'config/GraphqlAPI';
import GLOBAL from 'config/Global';
// graphql 
import gql from "graphql-tag";

const Auth_tron = {

    /*******************************************************************************
    *
    * tokenVerify - helps to verify user access token.
    *
    * This function helps to verify user access token.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    tokenVerify: async function (token) {
        const TOKEN_VERIFY = gql`
        mutation verifyToken($token:String!)
            {
            verifyToken(token:$token)
                {
                errors
                success
                payload
                }
            }`;

        let variables = {
            token: token
        }

        return await GraphqlAPI.queryCall(
            TOKEN_VERIFY,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.verifyToken;
            })
            .catch(error => {
                console.log("Error in TOKEN_VERIFY data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * refreshTokn - helps to get new refresh token.
    *
    * This function helps to get new refresh token.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    refreshTokn: async function (refreshToken) {
        const REFRSH_TOKEN_UPDT = gql`
        mutation refreshToken($refreshToken:String!)
            {
            refreshToken(refreshToken:$refreshToken)
                {
                refreshToken
                token
                errors
                success
                payload 
                }
            }`;

        let variables = {
            refreshToken: refreshToken
        }

        return await GraphqlAPI.queryCall(
            REFRSH_TOKEN_UPDT,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.refreshToken;
            })
            .catch(error => {
                console.log("Error in REFRSH_TOKEN_UPDT data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * revokRefrshTokn - helps to revoke refresh token.
    *
    * This function helps to get revoke refresh token.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    revokRefrshTokn: async function (refreshToken) {
        const REVOK_REFRSH_TOKEN = gql`
        mutation revokeToken($refreshToken:String!)
            {
            revokeToken(refreshToken:$refreshToken)
                {
                revoked 
                }
            }`;

        let variables = {
            refreshToken: refreshToken
        }

        return await GraphqlAPI.queryCall(
            REVOK_REFRSH_TOKEN,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.revokeToken.revoked;
            })
            .catch(error => {
                console.log("Error in REVOK_REFRSH_TOKEN data query: ", error);
                return false;
            });
    },

}

export default Auth_tron;