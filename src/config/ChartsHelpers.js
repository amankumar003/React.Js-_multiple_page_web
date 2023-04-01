/* Helpers.js - helping library for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,25sep20,pwn  added optnsVoteStatsGet, optnsTagVoteStatsGet
01a,25sep20,pwn  created
*/

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */
import GLOBAL from './Global';

const ChartsHelpers = {

    /*******************************************************************************
    *
    * optnsVoteStatsGet - helps to data of option.
    *
    * This function helps to data of option based on query passed to it.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnsVoteStatsGet: async function (query, client, fiverId, fetchPolicy) {
        return await client.query({
            query: query,
            variables: { fiverId: fiverId },
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


    /*******************************************************************************
    *
    * optnsTagVoteStatsGet - helps to data of option's tag.
    *
    * This function helps to data of option based on query passed to it.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnsTagVoteStatsGet: async function (query, client, fiverId, optionId, fetchPolicy) {
        return await client.query({
            query: query,
            variables: { fiverId: fiverId, optionId: optionId },
            fetchPolicy: fetchPolicy
        })
            .then((data) => {
                // console.log(JSON.stringify(data))
                return data;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * tagStatsPerOptionGet - helps to data of tags for each option.
    *
    * This function helps to data of tags for each option. accepts fiver id and tag id
    * as parameters.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    tagStatsPerOptionGet: async function (query, client, fiverId, tagId, fetchPolicy) {
        return await client.query({
            query: query,
            variables: { fiverId: fiverId, tagId: tagId },
            fetchPolicy: fetchPolicy
        })
            .then((data) => {
                // console.log(JSON.stringify(data))
                return data;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

}

export default ChartsHelpers;
