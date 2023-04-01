/* RaffleHelpers.js - helping library for the FOOTFALLZ */


/* Copyright (c) 2019-2021, Localytee, LLC */

/*
modification history
--------------------
01c,21dec22,pwn  added raffleWinnerGet().
01b,21dec22,pwn  added raffleDtGet().
01a,15dec22,pwn  created.
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

const RaffleHelpers = {



    /*******************************************************************************
    *
    * raffleFeedGet - helps to get raffle feed.
    *
    * This function helps to get raffle feed.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    raffleFeedGet: async function (userId, openHouseId, skipCountr) {

        const RAFFLE_FEED_GET = gql`
        query($userId: ID!, $openHouseId: ID!, $first: Int, $skip: Int)
            {
            raffleFeed(userId: $userId, openHouseId: $openHouseId, first: $first, skip: $skip)
                {
                userId
                    {
                    id
                    }
                raffleId
                raffleName
                drawTime

                rafflecardSet
                    {
                    cardBrandName
                    cardGiftValue
                    cardWinnerCount
                    raffleId
                        {
                        rafflecardimageSet
                            {
                            url
                            }
                        }
                    }

                raffleitemSet
                    {
                    itemBrandName
                    itemGiftValue
                    itemWinnerCount
                    raffleId
                        {
                        raffleitemimageSet
                            {
                            url
                            }
                        }
                    }

               
                
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            openHouseId: openHouseId,
            first: APP_CONTANTS.RAFFLE_FEED_COUNTR,
            skip: skipCountr,
        }

        return await GraphqlAPI.queryCall(
            RAFFLE_FEED_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in RAFFLE_FEED_GET data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * raffleDtGet - helps to get raffle data.
    *
    * This function helps to get raffle data.
    *
    * RETURNS: data if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    raffleDtGet: async function (userId, raffleId) {

        const RAFFLE_DT_GET = gql`
        query($userId: ID!, $raffleId: ID!)
            {
            raffleData(userId: $userId, raffleId: $raffleId)
                {
                userId
                    {
                    id
                    }
                raffleId
                raffleName
                drawTime

                openHouseId
                    {
                    openHouseId
                    title
                    }

                rafflecardSet
                    {
                    cardBrandName
                    cardGiftValue
                    cardWinnerCount
                    raffleId
                        {
                        rafflecardimageSet
                            {
                            url
                            }
                        }
                    }

                raffleitemSet
                    {
                    itemBrandName
                    itemGiftValue
                    itemWinnerCount
                    raffleId
                        {
                        raffleitemimageSet
                            {
                            url
                            }
                        }
                    }

               
                
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            raffleId: raffleId
        }

        return await GraphqlAPI.queryCall(
            RAFFLE_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in RAFFLE_DT_GET data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * raffleWinnerGet - helps to get raffle winner data.
    *
    * This function helps to get raffle winner data.
    *
    * RETURNS: data if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    raffleWinnerGet: async function (userId, raffleId) {

        const RAFFLE_WINNER_DT_GET = gql`
        query($userId: ID!, $raffleId: ID!)
            {
            raffleWinnerGet(userId: $userId, raffleId: $raffleId)
                {
                feedbackId
                userId
                    {
                    id
                    profile
                        {
                        license
                        name
                        }
                    }   
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            raffleId: raffleId
        }

        return await GraphqlAPI.queryCall(
            RAFFLE_WINNER_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in RAFFLE_WINNER_DT_GET data query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * lastRaffle - helps to get raffle winner data.
    *
    * This function helps to get raffle winner data.
    *
    * RETURNS: data if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    lastRaffleGet: async function (userId, openHouseId) {

        const LAST_RAFFLE_DT_GET = gql`
        query($userId: ID!, $openHouseId: ID!)
            {
            lastRaffle(userId: $userId, openHouseId: $openHouseId)
                {
                error
                raffle
                    {
                    raffleName
                    rafflecardSet
                        {
                        cardBrandName
                        cardGiftValue
                        cardWinnerCount
                        }

                    openHouseId
                        {
                        ended
                        openHouseId
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
                        }

                    
                    }
                }
            }`;

        let variables = {
            userId: userId == null ? "" : userId,
            openHouseId: openHouseId
        }


        console.log(variables)
        return await GraphqlAPI.queryCall(
            LAST_RAFFLE_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in LAST_RAFFLE_DT_GET data query: ", error);
                return false;
            });
    },


}

export default RaffleHelpers;