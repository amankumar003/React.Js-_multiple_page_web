/* RestApi.js - restApi calling service for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,23Oct21,Sk   Added responseFormat.
01a,11sep20,pwn  created
*/

/*
DESCRIPTION
This file is the restApi calling service for TRON.
*/
const RestApi = {
    apiCall: async function (url, reqMethd, headers, body, responseFormat) {
        // console.log("API CALLING")
        return fetch(url,
            {
                method: reqMethd,
                body: body,
            })
            .then((response) => responseFormat !== undefined ? response.text() : response.json())
            .then((responseData) => {
                //   console.log(responseData);
                return responseData;
            })
            .catch(error => {
                console.warn(error);
                return false
            });

    }

}

export default RestApi;

