/* ReduxHelpers.js - helping library for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,11sep20,pwn  created
*/

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

const ReduxHelpers = {

    /*******************************************************************************
    *
    * keywordsDataGet - helps to get keyword's data in foramted object array form.
    *
    * This function helps to get keyword's data in foramted object array form.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    homeFeedDtHndlr: function (array, fiverId) {
        try {
            let indexDt = null;
            array.forEach((childArr, outerIndex) => {
                childArr.forEach((fiverElemnt, innrIndex) => {
                    let fiverDt = fiverElemnt.bunchId.fiverSet[0];
                   
                    if (fiverDt.fiverId === fiverId.toString()) {
                        indexDt =
                        {
                            "innrIndex": innrIndex,
                            "outrIndex": outerIndex,
                            "fiverId": fiverDt.fiverId
                        };
                        return indexDt;
                    }

                });
            });
            return indexDt;
        } catch (error) {
            console.log(error)
            return false
        }
    },


}

export default (ReduxHelpers);

