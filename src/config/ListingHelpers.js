/* ListingHelpers.js - helping library for the FOOTFALLZ */


/* Copyright (c) 2019-2021, Localytee, LLC */

/*
modification history
--------------------
01e,10nov22,pwn  modified zipcodeTimeRangeDtGet().
01d,09nov22,pwn  modified listingFeedGet().
01c,26oct22,pwn  added zipCodeMonthRangeDtGet(), zipcodeTimeRangeDtGet().
01b,13oct22,pwn  modified listingFeedGet().
01a,12oct22,pwn  created.
*/

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */
import gql from "graphql-tag";
import GraphqlAPI from "./GraphqlAPI";

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */

const ListingHelpers = {

    /*******************************************************************************
    *
    * listingQrDtGet - helps to get listing qr code data.
    *
    * This function helps to get listing qr code data.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    listingQrDtGet: async function (listingId) {
        const LISTING_QR_DT_GET = gql`
            query($houseId: ID!, $userId: ID!)
                {
                listingQrDtGet(houseId: $houseId, userId: $userId)
                    {
                    openHouseId
                    }
                }`;

        let variables = {
            houseId: listingId,
            userId: ""
        }

        return await GraphqlAPI.queryCall(
            LISTING_QR_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in LISTING_QR_DT_GET data query: ", error);
                return false;
            });
    },


}

export default ListingHelpers;