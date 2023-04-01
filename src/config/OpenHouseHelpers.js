/* OpenHouseHelpers.js - helping library for the FOOTFALLZ */


/* Copyright (c) 2019-2021, Localytee, LLC */

/*
modification history
--------------------
01a,28feb23,pwn  created.
*/

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */
import gql from "graphql-tag";
import { APP_CONTANTS } from "../config/constants/Constants";
import GraphqlAPI from "./GraphqlAPI";

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */

const OpenHouseHelpers = {



    /*******************************************************************************
    *
    * listingFeedGet - helps to get listing feed.
    *
    * This function helps to get listing feed.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    openHouseFeedGet: async function (userId, houseId, skipCountr, owner, ended) {
        const OPN_HOUSE_FEED_GET = gql`
        query($userId: ID!, $houseId: ID!, $first: Int, $skip: Int,
            $owner: Boolean!, 
            $ended: Boolean!)
            {
            openHouseFeed(userId: $userId, houseId: $houseId,
                 first: $first, skip: $skip,
                 owner: $owner,
                 ended: $ended)
                {
                userId
                    {
                    id
                    }
                openHouseId
                startDatetime
                endDatetime
                feedbackSet
                    {
                    price   
                    }
                houseId
                    {
                    houseId
                    city
                    addressLine1
                    }
                title
                note

                
                openhousehostSet(membership:"ACCEPTED")
                    {
                    edges
                        {
                        node
                            {
                            acceptedAt
                            userId
                                {
                                id 
                                username
                                profile
                                    {
                                    license
                                    name
                                    }
                                }
                            }
                        }
                    }


                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            houseId: houseId,
            first: APP_CONTANTS.OPN_HOUSE_FEED_COUNTR,
            skip: skipCountr,
            owner: owner,
            ended: ended
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_FEED_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_FEED_GET data query: ", error);
                return false;
            });
    },





    /*******************************************************************************
    *
    * openHouseDtGet - helps to get open house data.
    *
    * This function helps to get  open house data.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    openHouseDtGet: async function (userId, openHouseId) {
        const OPN_HOUSE_DT_GET = gql`
        query($userId: ID!, $openHouseId: ID!)
            {
            openHouseData(userId: $userId, openHouseId: $openHouseId)
                {
                userId
                    {
                    id
                    profile
                        {
                        license
                        name
                        userPic
                        realtor
                        brokerageName
                        teamName
                        admin

                        phoneNumber 
                        email 
                        website 
                        officeAddress 
                        aboutMe
                        }
                    }
                title
                note
                startDatetime
                endDatetime
                publicContact
                houseId
                    {
                    zipCode
                    addressLine1
                    }
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            openHouseId: openHouseId
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_DT_GET data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * opnHousFeedBackCountDtGet - helps to get open house feedback count data.
    *
    * This function helps to get  open house feedback count data.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    opnHousFeedBackCountDtGet: async function (userId, openHouseId) {
        const OPN_HOUSE_DT_GET = gql`
        query($userId: ID!, $openHouseId: ID!)
            {
            feedbackUserCount(userId: $userId, openHouseId: $openHouseId)
                {
                total
                feedbackCount
                    {
                    userType
                    count
                    }
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            openHouseId: openHouseId
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_DT_GET data query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * openHouseHostFeed - helps to get open house host list.
    *
    * This function helps to get open house host list.
    *
    * RETURNS: Array on success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    openHouseHostFeed: async function (userId, openHouseId, skipCountr) {
        const HOST_FEED = gql`
        query($userId: ID!, $openHouseId: ID!, $first: Int, $skip: Int)
            {
            openHouseHostFeed(userId: $userId, openHouseId: $openHouseId, 
                first: $first, skip: $skip)
                {
                membership
                userId 
                    {
                    id
                    username
                    profile
                        {
                        name
                        userPic
                        teamName
                        }

                    }
                }
            }`;

        let variables = {
            userId: userId === null ? "" : userId,
            openHouseId: openHouseId,
            first: APP_CONTANTS.OPN_HOUSE_HOST_FEED_COUNTR,
            skip: skipCountr,
        }

        return await GraphqlAPI.queryCall(
            HOST_FEED,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in HOST_FEED data query: ", error);
                return false;
            });
    },




    /*******************************************************************************
    *
    * openHouseInvitesGet - helps to get open houses innvitations list.
    *
    * This function helps to get open houses innvitations list.
    *
    * RETURNS: Array on success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    openHouseInvitesGet: async function (userId, openHouseId, skipCountr) {
        const OPN_HOUSE_INVITES = gql`
        query($userId: ID!, $first: Int, $skip: Int)
            {
            openHouseInvites(userId: $userId, first: $first, skip: $skip)
                {
                id
                openHouseId
                    {
                    title
                    openHouseId
                    }
                    
                createdAt
                membership

                  
                acceptedBy
                    {
                    id
                    username
                    profile
                        {
                        name
                        userPic
                        }
                        }


                userId 
                    {
                    id
                    username
                    profile
                        {
                        name
                        userPic
                        }

                    }
                }
            }`;

        let variables = {
            userId: userId,
            first: APP_CONTANTS.OPN_HOUSE_INVITES_FEED_COUNTR,
            skip: skipCountr,
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_INVITES,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_INVITES data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * opnHousFeedBackCountDtGet - helps to get open house feedback count data.
    *
    * This function helps to get  open house feedback count data.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    opnHousRptDtGet: async function (openHouseId) {
        const OPN_HOUSE_RPT_DT_GET = gql`
        query($openHouseId: ID!)
            {
            openHouseFeedbackData(openHouseId: $openHouseId)
                {
                openHouseTitle
                listingAddress
                price
                experience
                feedbackCount

                openHouseObj
                    {
                    userId
                        {
                        id
                        }
                    sellermessageSet
                        {
                        edges
                            {
                            node
                                {
                                message
                                }
                              }
                        }
                    
                    }


                zipCode
                zipCodeAvgVisitorsCount
                listingPic
                teamName
                openHouseStartDate
                openHouseEndDate

                
                notes
                    {
                    note
                    feedbackId
                    }
                
                neighbour
                passingBy
                onlyAgent
                buyerNoAgent
                buyerAgent
                peopleCount

                lYard
                lNoise
                lLayout
                lGarage
                lKitchen
                lUpgrades
                lBathroom
                lCommunity
                lBrightness
                lFengshui
                lParking
                lPrivacy

                dYard
                dNoise
                dLayout
                dGarage
                dKitchen
                dUpgrades
                dBathroom
                dCommunity
                dBrightness
                dFengshui
                dParking
                dPrivacy
                }
            }`;

        let variables = {
            openHouseId: openHouseId
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_RPT_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_RPT_DT_GET data query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * opnHouseRptDashboardDtGet - helps to get open house report chart data.
    *
    * This function helps to get open house report chart data.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    opnHouseRptDashboardDtGet: async function (openHouseId, date) {
        const OPN_HOUSE_RPT_DASHBOARD_DT_GET = gql`
        query($openHouseId: ID!)
            {
            openHouseReportDashboard(openHouseId: $openHouseId)
                {
                dashboard
                }
            }`;

        let variables = {
            openHouseId: openHouseId,
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_RPT_DASHBOARD_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_RPT_DASHBOARD_DT_GET data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * opnHousFeedByListingIds - helps to get open house list based on listing ids array.
    *
    * This function helps to get open house list based on listing ids array
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    opnHousFeedByListingIds: async function (userId, houseIds, skipCountr, first = APP_CONTANTS.OPN_HOUSE_FEED_COUNTR) {
        const OPN_HOUSE_LIST_BY_LISTINGS = gql`
        query($userId: ID!, $houseIds: [ID!], $first: Int, $skip: Int)
            {
            opnHouseLstByHouseIds(userId: $userId, houseIds: $houseIds, first: $first, skip: $skip)
                {
                userId
                    {
                    id
                    }
                openHouseId
                startDatetime
                endDatetime
                feedbackSet
                    {
                    price   
                    }
                houseId
                    {
                    houseId
                    city
                    addressLine1
                    }
                title
                note
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            houseIds: houseIds,
            first: first,
            skip: skipCountr,
        }


        return await GraphqlAPI.queryCall(
            OPN_HOUSE_LIST_BY_LISTINGS,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_LIST_BY_LISTINGS data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * openHouseMemberShipGet - helps to get open house membership data.
    *
    * This function helps to get  open house membership data by user id.
    *
    * RETURNS: membership if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    openHouseMemberShipGet: async function (userId, openHouseId) {
        const OPN_HOUSE_MEMBERSHIP_GET = gql`
        query($userId: ID!, $openHouseId: ID!)
            {
            openHouseData(userId: $userId, openHouseId: $openHouseId)
                {
                openhousehostSet(userId_Id: $userId)
                    {
                    edges
                        {
                        node
                            {
                            membership
                            }
                        }
                    }
               
                
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            openHouseId: openHouseId
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_MEMBERSHIP_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_MEMBERSHIP_GET data query: ", error);
                return false;
            });
    },




    /*******************************************************************************
    *
    * openHouseSettingSet - helps to set open house settings.
    *
    * This function helps to set open house settings.
    *
    * RETURNS: result
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    openHouseSettingSet: async function (userId, openHouseId, publicContact) {
        const OPN_HOUSE_SETTINGS_SET = gql`
        query($userId: ID!, $openHouseId: ID!, $publicContact: Boolean!)
            {
            openHouseSetting(userId: $userId,
                 openHouseId: $openHouseId,
                 publicContact: $publicContact)
                {
                result
                error
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            openHouseId: openHouseId,
            publicContact: publicContact
        }

        return await GraphqlAPI.queryCall(
            OPN_HOUSE_SETTINGS_SET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in OPN_HOUSE_SETTINGS_SET data query: ", error);
                return false;
            });
    },

}

export default OpenHouseHelpers;