/* awsHelper.js - helping library for AWS the TRON */

/* Copyright (c) 2019-2021, Localytee, LLC */

/*
modification history
--------------------
01n,22jul22,pwn  added orgGrpsSrch(), orgPagsSrch().
01m,21jul22,pwn  added orgGrpsPagsSrch().
01l,21Mar22,Sk   Modified qrCodeFvrSearch search query.
01k,21mar22,pwn  modified search() to exclude blackbox quession.
01j,10mar22,pwn  added businessSrch(), groupSrch().
01i,14Feb22,Sk   Added qrCodeFvrSearch()
01h,03feb22,pwn  modified search().
01g,02feb22,pwn  added grpDuplicatsGet().
01f,31jan22,pwn  added operator: "AND"
01e,28jan22,pwn  added fvrsByTypGet().
01d,28jan22,pwn  modified search()
01c,14Jul21,Sk   Changed search type
01b,01Jul21,SK   Added condition for username
01a,26jun21,pwn  created
*/

/*
DESCRIPTION
This file has functions which will be used throughot the app.
*/

/* required for global variables  */
import {
    AWSClient
} from "../AWS/awsClient"


const awsHelper = {

    /*******************************************************************************
    *
    * search - helps to search string as per index given.
    *
    * This function helps to search string as per index given.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    search: async function (indexName, string, suggstonCount, startCursor = 0) {
        var body
        try {
            if (indexName === "newuser")
                body = await AWSClient.search({
                    from: startCursor,
                    index: indexName,
                    size: suggstonCount,
                    body: {

                        query: {

                            bool: {
                                should: [
                                    {
                                        match: {
                                            username: {
                                                query: string
                                            }
                                        }
                                    },
                                    {
                                        prefix: {
                                            username:
                                            {
                                                value: string,
                                                case_insensitive: true
                                            }

                                        }
                                    }
                                ]
                            }
                        }
                    }
                })

            else if (indexName === "quession")
                body = await AWSClient.search({
                    from: startCursor,
                    index: indexName,
                    size: suggstonCount,
                    body: {
                        query: {

                            bool: {
                                should: [
                                    {
                                        match: {
                                            title: {
                                                query: string
                                            }
                                        }
                                    },
                                    {
                                        prefix: {
                                            title: {
                                                value: string,
                                                case_insensitive: true
                                            }
                                        }
                                    }
                                ],
                                must_not: {
                                    match: {
                                        fiver_type: "BLACKBOX_SURVEY"
                                    }
                                }
                            }
                        }
                    }
                })
            else
                body = await AWSClient.search({
                    from: startCursor,
                    index: indexName,
                    size: suggstonCount,
                    body: {
                        query: {

                            bool: {
                                should: [
                                    {
                                        match: {
                                            title: {
                                                query: string
                                            }
                                        }
                                    },
                                    {
                                        prefix: {
                                            title: {
                                                value: string,
                                                case_insensitive: true
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                })

            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },


    /*******************************************************************************
    *
    * fvrsByTypGet - helps to search string as per index given with fiver type.
    *
    * This function helps to search string as per index given with fiver type.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrsByTypGet: async function (indexName, string, suggstonCount, fiverType, startCursor = 0) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {
                        bool: {
                            must: [

                                {
                                    match: {
                                        title: {
                                            query: string,
                                            fuzziness: "AUTO",
                                            operator: "AND"
                                        }
                                    }
                                },
                                {
                                    match_phrase: {
                                        fiver_type: fiverType
                                    }
                                }
                            ]
                        }
                    }
                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },



    /*******************************************************************************
    *
    * grpDuplicatsGet - helps to search string as per index given.
    *
    * This function helps to search string as per index given.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpDuplicatsGet: async function (indexName, string, suggstonCount, startCursor = 0) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {
                        match: {
                            title: {
                                query: string,
                                fuzziness: 'AUTO',
                                operator: "AND"
                            }
                        }
                    }
                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * qrCodeFvrSearch - helps to search group fvrs in qr Code modal.
    *
    * This function helps to search group fvrs in qr Code modal.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    qrCodeFvrSearch: async function (indexName, string, suggstonCount, groupId, startCursor = 0) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {
                        bool: {
                            must: [

                                {
                                    match_bool_prefix: {
                                        title: {
                                            query: string,
                                        }
                                    }
                                }
                            ],
                            filter: {
                                match: {
                                    group_id: groupId
                                }
                            }
                        }
                    }
                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * businessSrch - helps to search business.
    *
    * This function helps to search business.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    businessSrch: async function (indexName, string, suggstonCount, startCursor = 0,) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match_bool_prefix: {
                                        title: {
                                            query: string
                                        }
                                    }
                                }
                            ],
                            filter: {
                                match: {
                                    group_type: {
                                        query: "Business"
                                    }
                                }
                            }
                        }
                    }
                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * groupSrch - helps to search group.
    *
    * This function helps to search group, excluding business.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    groupSrch: async function (indexName, string, suggstonCount, startCursor = 0,) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {

                        bool: {
                            should: [
                                {
                                    match: {
                                        title: {
                                            query: string
                                        }
                                    }
                                },
                                {
                                    prefix: {
                                        title: {
                                            value: string,
                                            case_insensitive: true
                                        }
                                    }
                                }
                            ],

                            must_not: {
                                match: {
                                    group_type: "business"
                                }
                            }

                        }
                    }
                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * orgGrpsPagsSrch - helps to search organisation's groups and pages.
    *
    * This function helps to search organisation's groups and pages..
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgGrpsPagsSrch: async function (indexName, string, suggstonCount, orgId, startCursor = 0) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match_bool_prefix: {
                                        title: {
                                            query: string
                                        }
                                    }
                                }
                            ],
                            filter: {
                                match: {
                                    organisation_id: {
                                        query: orgId
                                    }
                                }
                            }
                        }
                    }
                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * orgGrpsSrch - helps to search organisation's groups.
    *
    * This function helps to search organisation's groups.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgGrpsSrch: async function (indexName, string, suggstonCount, orgId, startCursor = 0) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match_bool_prefix: {
                                        title: {
                                            query: string
                                        }
                                    }
                                }
                            ],
                            must_not: {
                                match: {
                                    group_type: "business"
                                }
                            },
                            filter: {
                                match: {
                                    organisation_id: {
                                        query: orgId
                                    }
                                }
                            }
                        }
                    }
                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },


    /*******************************************************************************
    *
    * orgGrpsSrch - helps to search organisation's groups.
    *
    * This function helps to search organisation's groups.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    orgPagsSrch: async function (indexName, string, suggstonCount, orgId, startCursor = 0) {
        var body
        try {
            body = await AWSClient.search({
                from: startCursor,
                index: indexName,
                size: suggstonCount,
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match_bool_prefix: {
                                        title: {
                                            query: string
                                        }
                                    }
                                },
                                {
                                    match: {
                                        group_type: "Business"
                                    }
                                }
                            ],
                            filter: {
                                match: {
                                    organisation_id: {
                                        query: orgId
                                    }
                                }
                            }
                        }
                    }

                }
            })
            return body
        } catch (error) {
            console.warn(error)
            return false
        }
    },
}

export default awsHelper;
