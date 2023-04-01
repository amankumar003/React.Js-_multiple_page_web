/* Helpers.js - helping library for the TRON */

/* Copyright (c) 2019-2021, Localytee, LLC */

/*
modification history
--------------------
01b,10aug22,pwn  fixed duplicate feed issue.
01a,11jul22,pwn  created
*/

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */
import GLOBAL from './Global';
import RestAPI from './RestApi';
import validUrl from 'valid-url';

// graphql 
import gql from "graphql-tag";
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { graphql } from 'graphql';
import Global from './Global';
import helpers from './Helpers';
import imageCompression from 'browser-image-compression';
import uniquid from 'uniqid'
import notify from 'components/toasts/toast';
import GraphqlAPI from './GraphqlAPI';
import GlobalLimits from "config/GlobalLimits";
import {
    DEFAULT_ICON
} from "config/GlobalIcons";
import StringHelper from './StringHelper';
import awsHelper from './AWS/awsHelper';
import Moment from 'moment';

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

const OrganisationHelpers = {


    /*******************************************************************************
    *
    * organisationListGet - helps to get organisation list.
    *
    * This function helps to get organisation list.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    organisationListGet: async function (userId, page, skip, role) {

        const ORGNISTN_LIST_GET = gql`
        query(
            $userId: String!,
            $page:   String!, 
            $first:  Int, 
            $skip:   Int,
            $role:   String!)
                {
                organisationList(
                userId:$userId, 
                page:  $page, 
                first: $first, 
                skip:  $skip,
                role:  $role)
                    {
                    organisationList
                        {
                        organisationId
                            {
                            id
                            organisationId
                            title
                            memberCount
                            description
                            organisationType
                            groupCount
                            pageCount
                            
                            organisationimageSet
                                {
                                edges
                                    {
                                    node
                                        {
                                        id
                                        url
                                        }
                                    }
                                }
                            }

                        userId
                            {
                            username
                            }
                        role
                        membership
                        }
                    }
                }`



        let variables = {
            userId: userId,
            page: page,
            first: Global.ALL_ORGNISTN_LIST_COUNTER,
            skip: skip,
            role: role,
        }

        return await GraphqlAPI.queryCall(ORGNISTN_LIST_GET,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },

    /*******************************************************************************
    *
    * organisationFeedGet - helps to get organisation feed data.
    *
    * This function helps to get organisation feed data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    organisationFeedGet: async function (organisationId, first,
        skip, group, page, userId,
        dateTimeStamp) {
        const ORGNISTN_FEED_GET = gql`
        query(
            $organisationId: String!, 
            $first: Int, 
            $skip: Int, 
            $group: Boolean!,
            $page: Boolean!,
            $userId: String!,
            $datetimestamp:String!)
                {
                organisationFeed(
                    organisationId: $organisationId, 
                    first: $first, 
                    skip: $skip,
                    group: $group,
                    page: $page,
                    userId: $userId,
                    datetimestamp: $datetimestamp
                    )
                    {
                      
                    id
                    groupId
                    title
                    memberCount
                    fiverCount
                    description
                    groupType
                      
                    pagedetailsSet{
                                edges{
                                node{
                                    pageHandle
                                    logoUrl
                                    verifiedHandle
                                }
                                }
                            }
                      
                      
                       groupimageSet
                            {
                            edges
                                {
                                node
                                    {
                                    id
                                    url
                                    }
                                }
                            }
                     
                      }
                
            }`



        let variables = {
            "organisationId": organisationId,
            "first": first,
            "skip": skip,
            "group": group,
            "page": page,
            "userId": userId,
            "datetimestamp": dateTimeStamp
        }

        return await GraphqlAPI.queryCall(ORGNISTN_FEED_GET,
            variables,
            'no-cache').then(result => {
                return result
            });

    },

    /*******************************************************************************
    *
    * orgMenuDtGet - helps to get organisation menu data.
    *
    * This function helps to get organisation menu data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgMenuDtGet: async function (organisationId, userId) {

        const ORG_MENU_DATA = gql`
            query($organisationId: Int!, $operationBy: ID!)
                { 
                organisationSearch(organisationId: $organisationId)
                    {
                    organisationSearchList
                        {
                        id
                        organisationId
                        title
                        description
                        organisationType
                        memberCount
                        
                        

                        organisationusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
                        edges{
                            node{
                            userId{
                                id
                                username
                            }
                            membership
                            role
                            }
                        }
                        }


                    
                    }
                }
            }`

        let variables = {
            organisationId: organisationId,
            operationBy: userId === null ? "" : userId
        }

        return await GraphqlAPI.queryCall(
            ORG_MENU_DATA,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in option data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * orgDtGet - helps to get organisation data.
    *
    * This function helps to get organisation data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgDtGet: async function (organisationId, operationBy) {

        const ORG_DT_GET = gql`
        query($organisationId: Int!, $operationBy: ID!)
            { 
            organisationSearch(organisationId: $organisationId)
                {
                organisationSearchList
                    {
                    id
                    organisationId
                    
                    title
                    description
                    organisationType
                    memberCount
                    allowIndexing
                    
                    organisationimageSet{
                        edges{
                          node{
                            id
                            url
                          }
                        }
                      }

                 

                    organisationusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
                    edges{
                        node{
                        userId{
                            id
                            username
                        }
                        membership
                        role
                        }
                    }
                    }


                   
                }
            }
        }`


        let variables = {
            organisationId: organisationId,
            operationBy: operationBy
        }

        return await GraphqlAPI.queryCall(
            ORG_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.organisationSearch;
            })
            .catch(error => {
                console.log("Error ORG_DT_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * orgAdminChk - helps to check whether user is admin of the group.
    *
    * This function helps to check whether user is admin of the group or not.
    *
    * RETURNS: true if admin, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgAdminChk: async function (organisationId, userId) {
        const ORG_ADMIN_CHCK = gql`
        query($organisationId: Int!, $userId: ID!)
            { 
            organisationSearch(organisationId: $organisationId)
                {
                organisationSearchList
                    {
                    memberCount  
                    organisationusersSet(
                        userId_Id:$userId, 
                        membership:"ACCEPTED"){
                        edges{
                            node{
                            membership
                            role
                            }
                        }
                    }   
                    }
                }
            }`
        let variables = {
            organisationId: organisationId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            ORG_ADMIN_CHCK,
            variables,
            "no-cache")
            .then((data) => {
                let admin = false;
                if (Global.USER_ID !== null) {
                    let grpSrchDt = data.data.organisationSearch;
                    if (grpSrchDt.organisationSearchList.length > 0) {
                        if (grpSrchDt.organisationSearchList[0].organisationusersSet.edges.length > 0)
                            if (grpSrchDt.organisationSearchList[0].organisationusersSet.edges[0].node.role === "ADMINISTRATOR")
                                admin = true;
                    }
                }
                return admin;
            })
            .catch(error => {
                console.log("Error in ORG_ADMIN_CHCK  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * orgInvitdUsrsListGet - helps to get organisation's invited users list.
    *
    * This function  helps to get organisation's invited users list.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgInvitdUsrsListGet: async function (organisationId, userId, skip) {
        const ORG_INVITD_USRS = gql`
        query($organisationId: ID!, $userId: String!, 
            $first: Int, $skip: Int)
            {
            organisationIdInvites(organisationId: $organisationId, 
                userId:$userId, 
                first: $first, 
                skip: $skip)
                {
                organisationList
                    {
                    userId
                        {
                        id
                        username
                        profile 
                            {
                            userPic
                            }
                        }
                    }
                }
            }`

        let variables = {
            organisationId: organisationId,
            userId: userId,
            first: Global.GRP_INVTD_USR_LIST_COUNTR,
            skip: skip,
        }
        return await GraphqlAPI.queryCall(
            ORG_INVITD_USRS,
            variables,
            "no-cache")
            .then((data) => {
                return data.data["organisationIdInvites"]["organisationList"]
            })
            .catch(error => {
                console.log("Error ORG_INVITD_USRS  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * orgRequstsGet - helps to gets users request to join the organisation.
    *
    * This function helps to gets users request to join the organisation.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgRequstsGet: async function (userId, organisationId) {
        const ORG_REQUSTS_GET = gql`
        query($organisationId: ID!, $userId: String!){
            organisationIdRequests(userId:$userId, organisationId: $organisationId)
                {
                organisationList{
                    userId{
                    id
                    username
                    profile {
                    userPic
                    }
                    }
                }
                }
            }`


        let variables = {
            userId: userId,
            organisationId: organisationId,
        }
        return await GraphqlAPI.queryCall(
            ORG_REQUSTS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error ORG_REQUSTS_GET  query: ", error);
                return null;
            });
    },


    /*******************************************************************************
    *
    * orgInviteGet - helps to get the invited users of organisation.
    *
    * This function helps to get the invited users of organisation.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgInviteGet: async function (organisationId, userId) {

        const ORG_INVITE_DATA = gql`
            query($organisationId: Int!, $operationBy: ID!)
                { 
                organisationSearch(organisationId: $organisationId)
                    {
                    organisationSearchList
                        {
                        organisationusersSet(userId_Id: $operationBy)
                            {
                            edges
                                {
                                node
                                    {
                                    acceptedBy
                                        {
                                        id
                                        username
                                        profile{
                                        firstName
                                        userPic
                                        verifiedHandle
                                        }
                                    }
                                membership
                                role
                                }
                            }
                        }
                    }
                }
            }`

        let variables = {
            organisationId: organisationId,
            operationBy: userId === null ? "0" : userId
        }

        return await GraphqlAPI.queryCall(
            ORG_INVITE_DATA,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in organisation invites query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * orgLeave - helps to leave a organisation.
    *
    * This function  helps to leave a organisation.
    *
    * RETURNS: true on success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgLeave: async function (organisationId, userId) {
        // query for leaving organisation 
        const ORG_LEAVE = gql`
            query ($userId:String!, $organisationId:ID!){
                leaveOrganisation(
                    userId:$userId, 
                    organisationId:$organisationId){
                isDeleted
                isLeaved
                error
                }
            }`;

        let variables = {
            organisationId: organisationId,
            userId: userId
        }

        return await GraphqlAPI.queryCall(
            ORG_LEAVE,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.leaveOrganisation;
            })
            .catch(error => {
                console.log("Error ORG_LEAVE  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * orgLastAdminChk - helps to check whether user is last admin of the organisation.
    *
    * This function helps to check whether user is last admin of the organisation or not.
    *
    * RETURNS: true if last admin, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgLastAdminChk: async function (organisationId, userId) {
        const ORG_LAST_ADMIN_CHK = gql`
            query($organisationId: Int!, $userId: ID!)
                { 
                organisationSearch(organisationId: $organisationId)
                    {
                    organisationSearchList
                        {
                        memberCount  
                        organisationusersSet(
                            userId_Id:$userId, 
                            membership:"ACCEPTED"){
                            edges{
                                node{
                                membership
                                role
                                }
                            }
                        }   
                        }
                    }
                }`
        let variables = {
            organisationId: organisationId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            ORG_LAST_ADMIN_CHK,
            variables,
            "no-cache")
            .then((data) => {
                let admin = false;
                let grpSrchDt = data.data.organisationSearch;
                if (grpSrchDt.organisationSearchList.length > 0) {
                    let memberCount = grpSrchDt.organisationSearchList[0].memberCount;
                    if (memberCount === 1)
                        if (grpSrchDt.organisationSearchList[0].organisationusersSet.edges.length > 0)
                            if (grpSrchDt.organisationSearchList[0].organisationusersSet.edges[0].node.role === "ADMINISTRATOR")
                                admin = true;
                }
                return admin;
            })
            .catch(error => {
                console.log("Error in ORG_LAST_ADMIN_CHK  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * orgMembrCountGet - helps to get organisation members count data.
    *
    * This function helps to get organisation members count data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgMembrCountGet: async function (organisationId) {
        const ORG_MMBR_COUNT_GET = gql`
            query($organisationId: Int!)
                { 
                organisationSearch(organisationId: $organisationId)
                    {
                    organisationSearchList
                        {
                        memberCount     
                        }
                    }
                }`
        let variables = {
            organisationId: organisationId,
        }

        return await GraphqlAPI.queryCall(
            ORG_MMBR_COUNT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in ORG_MMBR_COUNT_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * orgPagGrpCountGet - helps to get group fivers count.
    *
    * This function helps to get group fivers count.
    *
    * RETURNS: Count on success, False otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgPagGrpCountGet: async function (organisationId) {

        const ORG_PAG_GRP_COUNT_GET = gql`
    query($organisationId: Int!)
        { 
        organisationSearch(organisationId: $organisationId)
            {
            organisationSearchList
                {
                groupCount
                pageCount
                }
            }
        }`

        let variables = {
            organisationId: organisationId
        }

        return await GraphqlAPI.queryCall(
            ORG_PAG_GRP_COUNT_GET,
            variables,
            "no-cache")
            .then((data) => {
                let grpDt = data.data.organisationSearch.organisationSearchList;
                if (grpDt.length > 0)
                    return {
                        groupCount: grpDt[0].groupCount,
                        pageCount: grpDt[0].pageCount
                    };
                else
                    return false;
            })
            .catch(error => {
                console.log("Error in ORG_PAG_GRP_COUNT_GET query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * usrsNotJoindOrgFetch - helps to gets users list which are not member of the 
    * organisation.
    *
    * This function helps to gets users list which are not member of the organisation.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrsNotJoindOrgFetch: async function (userName, organisationId, skip) {
        const ORG_USERS_NOT_JOIND_GET = gql`
        query($userName:String!, $organisationId: ID!, 
            $skip: Int, $first: Int)
            {
            addOrganisationUsers(
                username: $userName, 
                organisationId: $organisationId, 
                first: $first, 
                skip: $skip)
                {
                userData
                    {
                    user
                        {
                        id
                        username
                        profile {
                            userPic
                            verifiedHandle
                          }
                        }
                    }
                }
            }`

        let variables = {
            userName: userName,
            organisationId: organisationId,
            skip: skip,
            first: Global.GRP_INVITE_USRS_COUNTR,
        }
        return await GraphqlAPI.queryCall(
            ORG_USERS_NOT_JOIND_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error ORG_USERS_NOT_JOIND_GET query: ", error);
                return null;
            });
    },

}

export default OrganisationHelpers;
