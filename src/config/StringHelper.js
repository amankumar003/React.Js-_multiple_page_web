/* StringHelper.js - helping library for string for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01e,11Mar22,SK   Added null check on strTruncate
01d,12Aug21,Sk   Added numberConvtr()
01c,16apr21,pwn  added strTruncate()
01b,09apr21,pwn  added strCapitalize()
01a,11sep20,pwn  created
*/

/*
DESCRIPTION
This file has string functions which will be used throughot the app.
*/

/* required for global variables  */

const StringHelper = {


    /*******************************************************************************
    *
    * strWhiteSpaceRemvr - helps to remove all white spaces from string.
    *
    * This function returns string with all removed white spaces from string.
    *
    * RETURNS: string without spaces, false otherwise
    *
    * ERRNO: false
    *
    * SEE_ALSO: N/A
    */
    strWhiteSpaceRemvr(str, limit) {
        try {
            return str.replace(/\s+/g, '');
        } catch (error) {
            return false;
        }

    },

    /*******************************************************************************
    *
    * strCapitalize - helps to make first letter capital from string.
    *
    * This function helps to return first letter capital from string. false otherwise
    *
    * ERRNO: false
    *
    * SEE_ALSO: N/A
    */
    strCapitalize(str) {
        try {
            if (typeof str !== 'string')
                return false
            return str.charAt(0).toUpperCase() + str.slice(1)
        } catch (error) {
            return false;
        }

    },

    /*******************************************************************************
    *
    * strTruncate - helps to truncate string.
    *
    * This function  helps to handle  string., if string length is greater than limit then
    * it will trim the string and takes only first limit characters with ".." and returns 
    * normal string if smaller length string.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    strTruncate(str, limit) {
        if (str !== null)
            if (str.length > limit)
                return str.substring(0, limit) + "..";
            else
                return str
    },

    /*******************************************************************************
    *
    * numberConvtr - helps to convert numbers.
    *
    * This function  helps to handle numbers by convering them to 1k, 1m, 1b system.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    numberConvtr(number, dPlaces) {
        let decPlaces = Math.pow(10, dPlaces);

        let abbrev = ["k", "m", "b", "t"];

        var result = number;

        for (var i = abbrev.length - 1; i >= 0; i--) {

            var size = Math.pow(10, (i + 1) * 3);

            if (size <= result) {
                result = Math.round(result * decPlaces / size) / decPlaces;

                if ((result == 1000) && (i < abbrev.length - 1)) {
                    result = 1;
                    i++;
                }

                result += abbrev[i];

                break;
            }
        }

        return result;
    },

    /*******************************************************************************
    *
    * underscoreWithSpace - helps to replace underscore with space.
    *
    * This function helps to replace underscore with space.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    underscoreWithSpace(str) {
        if (str !== null)
            return str.replace(/_/g, ' ');;

    },

    /*******************************************************************************
    *
    * spaceWithUnderscore - helps to replace space with underscore.
    *
    * This function helps to replace space with underscore.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    spaceWithUnderscore(str) {
        if (str !== null)
            return str.replace(/ /g, "_");

    },
}

export default StringHelper;