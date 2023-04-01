/* Helpers.js - helping library for the TRON */

/* Copyright (c) 2019-2021, Localytee, LLC */

/*
modification history
--------------------
12i,01sep22,pwn  modified permissionsCheck().
12h,31aug22,pwn  added optionsListGet().
12g,30aug22,pwn  modified fvrMenuDtGet().
12f,30aug22,pwn  added fiverKeywordsGet().
12e,29aug22,pwn  modified pinnedFiverGet().
12d,26aug22,pwn  added usrsNotJoindGrpFetch2().
12c,22aug22,pwn  modified optnsFeedGet().
12b,22aug22,pwn  modified fiverGrpDtGet().
12a,18aug22,pwn  added fiverGrpDtGet().
11z,17aug22,pwn  modified for realTime.
11y,16aug22,pwn  modified fvrSrchDtGet to add realTime.
11x,10aug22,pwn  fixed duplicate feed issue.
11w,19aug22,pwn  modified optnsSortedGet().
11v,08ayg22,pwn  fixed trendingFeedGet().
11u,05aug22,srs  modidfied usedId in questionListGet and pageQustnDtGet
11t,02aug22,srs  added mobileLayoutRespnse in optnCrtFvrSummryDtGet
11s,02aug22,pwn  modified pageDtGet().
11r,01auh22,pwn  modified bunchDtGet(), fvrMenuDtGet().
11q,26jul22,pwn  modified templatesGet().
11p,25jul22,pwn  modified pinnedFiverGet().
11o,22jul22,pwn  modified copyLink().
11n,22jul22,pwn  modified pageDtGet().
11m,12Jul22,Sk   Added blockedFrndsGet() & deleteChat()
11l,28Jun22,SK   Added chatFriendsGet() & chatContactDetail() for chat.
11k,16Jun22,SK   Added fvrTypeGet()
11j,12Jun22,SK   Added sharedFiverId in feed querie and fvr Data query
11i,28May22,Sk   Added emailUpdateSet and fiverFilter set in fvrMenuDtGet()
11h,20May22,Sk   Added emailupdatesSet in fiverSettingsGet & added secong args to pageFvrCrtsListGet() for all users.
11g,17May22,Sk   Added qrCodeSrcFvrGet() & added more variables in qrCodeFvrSuggestions()
11f,16may22,pwn  modified explorFeedGet().
11e,13may22,pwn  modified trendingFeedGet().
11d,13may22,pwn  modified pubicFeedGet().
11c,13may22,pwn  added ipAddresGet().
11b,11may22,pwn  modified optnLayoutGet().
11a,06may22,pwn  added usrVerifiedChk().
10z,06may22,pwn  added pageFvrCrtsListGet().
10y,04may22,pwn  added templatesGet().
10x,02may22,pwn  modified fiverSettingsGet().
10w,02may22,pwn  modified fiverSettingsGet().
10v,29Apr22,SK   Added setEmailDigest & emailDigest in pageInfo query.
10u,27Apr22,SK   Added resultCount as an argument in trendingFeedGet query.
10t,26apr22,pwn  modified fvrDuplicatesGet() for suggestion as per page.
10s,26apr22,pwn  modified fiverSummryDtGet().
10r,26apr22,pwn  modified fiverSettingsGet().
10q,21apr22,pwn  modified layoutKeywordsGet().
10p,20apr22,pwn  modified optionIdsFiltrdGet().
10o,19apr22,pwn  modified filtrdDashDtGet(). 
10n,21apr22,pwn  handled verifiedAccount for page.
10m,21Mar22,SK   Added qrCodeFvrSuggestions() & mobileOptnCrtFvrInfoGet()
10l,15Apr22,SK   Fixed blackbox sharing.
10k,14apr22,pwn  modified homeFeedGet(), grpFeedGet(), 
                 explorFeedGet(), bunchFeedGet() , 
                 fvrSrchDtGet().
10j,11apr22,pwn  modified fiverSettingsGet().
10i,11apr22,pwn  modified copyLink().
10h,07apr22,pwn  modified fvrTypeNameGet().
10g,06apr22,pwn  modified timeLeftGet().
10f,05Apr22,SK   Added blackbox sharing.
10e,01apr22,pwn  modified isPageOpn().
10d,01apr22,pwn  added pageAnsDtGet().
10c,30mar22,pwn  added pageQustnDtGet().
10b,29mar22,pwn  modified isPageOpn().
10a,29mar22,pwn  added questionListGet().
09z,29Mar22,SK   Added checkDashUserInfo()
09y,28mar22,pwn  added imgbase64Get().
09x,26mar22,pwn  added quizLayoutScoreGet().
09w,23mar22,pwn  added fiverOptnsVotesDtGet().
09v,22mar22,pwn  modified fiverResponseDtGet().
09u,26Mar22,SK   Added pageShare in copyLink()
09t,17mar22,pwn  added showCaseFileTitleSet(), showCaseImageTitleSet(), 
                 showCaseItemDtGet().
09s,17mar22,pwn  added showCaseItemDtGet().
09r,16mar22,pwn  added grpRequstsGet().
09q,16mar22,pwn  modified groupInviteGet().
09p,16mar22,pwn  modified usrsNotJoindGrpFetch().
09o,15mar22,pwn  added usrsNotJoindGrpFetch().
09n,16Mar22,SK   Added title to qrCodeData query
09m,12mar22,pwn  modified optnsSortedGet(), fvrSrchDtGet().
09l,12Mar22,SK   Added pagePicGet()
09k,12mar22,pwn  modified itemActiveStatusGet() for pages.
09j,11mar22,pwn  fixed grpAdminChk().
09i,11mar22,pwn  modified pageDtGet().
09h,11Mar22,Sk   Added grpAdminChk().
09g,10mar22,pwn  fixed pinnedFiverGet().
09f,09mar22,pwn  modified bunchFeedGet().
09e,04mar22,pwn  added isPageOpn().
09d,04mar22,pwn  added copyToClipBoard().
09c,02mar22,pwn  added qrCodeTemplateGet().
09b,02Mar22,SK   Added deletePdf option in PagesFetrdImgRemove
09a,28feb22,pwn  modified homeFeedGet(),optnSrchDtGet() and feed queries and fiver qeury.
08z,28feb22,pwn  added pinnedFiverGet(), pinnedFiverSet().
08y,28feb22,pwn  modified fvrMenuDtGet().
08x,25Feb22,SK   Added grpMembrTypeGet query & added userId in getGroupQrCodes
08w,25feb22,pwn  added fvrTypeNameGet().
08v,25feb22,pwn  modified groupsListGet().
08u,25Feb22,SK   Added PagesFetrdImgRemove() & added userId in grpFeedGet query
08t,16feb22,pwn  modified optnsFeedGet().
08s,16feb22,pwn  modified optionIdsFiltrdGet().
08r,16feb22,pwn  modified businessAliasFetch().
08q,15feb22,pwn  added code for option alias.
08p,15feb22,pwn  added businessAliasFetch().
08o,15feb22,pwn  modified usrNameGet().
08n,14feb22,pwn  modified optnSrchDtGet().
08m,14feb22,pwn  added page alias support for feed queries and handled username.
08l,10Feb22,Sk   Added qrCodeId in fvrMenuDtGet() & responseTitleDescription variables
08k,10feb22,pwn  added pageDtGet().
08j,10feb22,pwn  added userNameExistsCheck().
08i,06feb22,pwn  added usrNameGet().
08h,04feb22,pwn  modified fiverSummryDtGet().
08g,02feb22,pwn  added grpBlockdUsrsGet().
08f,02feb22,pwn  modified grpsSimlrGet().
08e,02feb22,pwn  added fvrDuplicatesGet().
08d,02feb22,pwn  added usrDtByUsrNameGet().
08c,31Jan22,Sk   Updated notifSettingGet query
08b,28Jan22,Sk   Added userId check for groupSrchDtGet query
08a,28jan22,pwn  modified fiverSimlrsGet().
07z,27jan22,pwn  modified pubicFeedGet() to add sortBy.
07y,27Jan22,Sk   Added groupFiverCreate variable in notifications setting
07x,25jan22,pwn  modified bunchFeedGet().
07w,25jan22,pwn  modified explorFeedGet().
07v,25jan22,pwn  modified grpFeedGet().
07u,25jan22,pwn  modified fiverSummryDtGet().
07t,24jan22,pwn  added fiverSimlrsGet().
07s,24Jan22,Sk   Added notifSettingUpdate & notifSettingGet
07r,24jan22,pwn  modified homeFeedGet(), usrProfileByEmailSet().
07q,24jan22,pwn  added feedSettingUpdate(), feedSettingGet().
07p,22Jan22,Sk   Added spaceIds in public feed query.
070,22jan22,pwn  modified grpsSimlrGet().
07n,21Jan22,Sk   Added 0 for spacesGet when userid is null.
07m,21jan22,pwn  modified grpDtGet().
07l,20jan22,pwn  added grpsSimlrGet().
07k,19jan22,pwn  modified usrProfileByEmailSet().
07j,17jan22,pwn  modified copyLink().
07i,14jan22,pwn  added componentWarningDisplyHndlr().
07h,14jan22,pwn  added trendingFeedGet().
07g,14jan22,pwn  modified inValidTokenHndlr().
07f,10jan22,pwn  added optnVoteCountPermsnChk().
07e,11Jan22,Sk   Added InvitsCountGet()
07d,10jan22,pwn  added hdrNavActivItmStatusGet().
07c,10jan22,pwn  added currntUrlDtGet(), itemActiveStatusGet().
07b,08Jan22,SK   Added verifiedHandle
07a,08jan22,pwn  modified optnCrtFvrSummryDtGet().
06z,06jan22,pwn  added sortOrder in queries.
06y,23dec21,pwn  modified spacesGet().
06x,06Dec21,Sk   Added optionsForApprovalGet.
06w,02Dec21,SK   Added optionsCount in optnSrchDtGet
06v,24Nov21,Sk   Added userIdGet()
06u,22nov21,pwn  added fiverSettingsGet().
06t,16nov21,pwn  modified copyLink() for option share.
06s,15nov21,pwn  modified optnCrtFvrSummryDtGet().
06r,15nov21,pwn  modified fiverSummryDtGet().
06q,12nov21,Sk   Added userSpacesGet()
06p,12nov21,pwn  added quizResponsScoreGet().
06o,11nov21,pwn  modified optnSrchDtGet().
06n,08nov21,pwn  modified optnsFeedGet().
06m,05Nov21,Sk   Added spaceIds in explore feed query.
06l,11oct21,pwn  added optnsFeedGet().
06k,02nov21,pwn  modified optnSrchDtGet().
06j,26oct21,pwn  modified optnSrchDtGet().
06i,26oct21,pwn  modified fvrSrchDtGet().
06h,22oct21,pwn  modified optnLayoutGet(), optionCrtDtGet(), 
                 optionEditDtGet().
06g,22Sep21,Sk   Added url and metaData.
06f,21oct21,pwn  added optnCrtFvrSummryDtGet().
06e,20oct21,pwn  modified fiverSummryDtGet().
06d,20oct21,pwn  added optnCrtdByUsrStatus().
06c,19oct21,pwn  added optionCrtDtGet().
06b,12oct21,pwn  added optionEditDtGet().
06a,14oct21,pwn  modified groupTypeDtGet().
05z,13oct21,pwn  modified grpFeedGet(), bunchFeedGet(), grpMenuDtGet(),
05y,08Oct21,Sk   Changed inValidTokenHndlr link from login to public.
05x,30Sep21,Sk   Added pubicFeedGet() & added exception of public page for tokenValidation 
05w,29sep21,pwn  added grpInvitdUsrsListGet().
05v,29sep21,pwn  modified inValidTokenHndlr().
05u,26sep21,pwn  modified entityImgsGet().
05t,26sep21,pwn  added usrNameExstsChck().
05s,25sep21,pwn  modified optnSrchDtGet().
05r,24sep21,pwn  modified optnSrchDtGet().
05q,23Sep21,Sk   Added mobileIntroStatusGet()
05p,21sep21,pwn  modified optnLayoutMdiaGet().
05o,20sep21,pwn  modified optnSrchDtGet().
05n,20sep21,pwn  added grpDtGet().
05m,15sep21,pwn  modified usrProfileByEmailSet().
05l,08sep21,pwn  modified usrProfileByEmailSet().
05k,06sep21,pwn  modified fiverSummryDtGet() to add showVoterlistToOther.
05j,03sep21,pwn  added inValidTokenHndlr().
05i,27aug21,pwn  modified optionIdsFiltrdGet().
05h,26Aug21,Sk   Added groupTypeDtGet()
05g,25aug21,pwn  modified fiverSummryDtGet().
05f,24aug21,pwn  modified fvrSrchDtGet().
05e,17aug21,pwn  modified pollChoicesDtGet().
05d,14aug21,pwn  modified survyDatePickrDtGet().
05c,13aug21,pwn  added survyDatePickrDtGet().
05b,11aug21,pwn  ADMINSTRATOR to ADMINISTRATOR.
05a,10aug21,pwn  added fvrIntroReadSet().
04z,07aug21,pwn  added optnSentimentsGet().
04y,07aug21,pwn  modified optnEmotionsGet().
04x,07aug21,pwn  modified optionIdsFiltrdGet().
04w,06aug21,pwn  modified fvrEmotionsGet().
04v,06aug21,pwn  added fvrSentimentsGet().
04u,05aug21,pwn  modified formBuildrValidator().
04t,03aug21,pwn  added responsesVotsDtGet().
04s,03aug21,pwn  added statesGet(), countriesGet().
04t,02aug21,pwn  added grpFvrCountGet().
04s,02aug21,pwn  added arrysEqulChk().
04r,30jul21,pwn  added spacesGet().
04q,28jul21,pwn  added groupsListGet().
04p,27jul21,pwn  modified fiverSummryDtGet().
04o,24jul21,pwn  added grpLastAdminChk().
04n,22jul21,pwn  modified groupSrchDtGet().
04m,22jul21,pwn  modified optnSrchDtGet().
04l,22jul21,pwn  modified bunchFeedGet().
04k,22jul21,pwn  modified groupSrchDtGet().
04j,21jul21,pwn  added bunchDtGet().
04i,20jul21,pwn  modified fvrMenuDtGet().
04h,19jul21,pwn  added grpMenuDtGet().
04g,19jul21,pwn  modified permissionsCheck().
04f,19jul21,pwn  added optnMenuDtGet().
04e,19jul21,pwn  added fvrMenuDtGet().
04d,11jul21,pwn  added groupLeave().
04c,11jul21,pwn  modified usrProfileByEmailSet().
04b,08jul21,pwn  modified fiverChartsDtGet()
04a,05jul21,pwn  modified copyLink() for group share.
03z,05jul21,pwn  set jpeg as default type in compressImage()
03y,01Jul21,SK   Added page to usrSrchDataGet()
03x,30jun21,pwn  added fileExtensionGet().
03w,30jun21,pwn  modified fileUpload().
03v,29jun21,pwn  added groupSrchDtGet(), usrSrchDataGet().
03u,28jun21,pwn  modified compressImage().
03t,25jun21,pwn  added usrProfileByEmailSet().
03s,23jun21,pwn  modified fiverChartsDtGet().
03r,21jun21,pwn  modified usrImgHnldr().
03q,17jun21,pwn  added usrProfilePicGet()
03p,12jun21,pwn  added optionIdsFiltrdGet().
03o,10jun21,pwn  added layoutKeywordsGet().
03n,04jun21,pwn  added fiverVotesDtGet().
03m,04jun21,pwn  fixed copyLink for fiver page options.
03l,03jun21,pwn  added fvrEmotionsGet().
03k,02jun21,pwn  added fvrVotesWithDateRngDtGet().
03j,01jun21,pwn  added optnFltrdCommntsGet().
03i,01jun21,pwn  modified optnEmotionsGet().
03h,24may21,pwn  modified copyLink() to fix group link issue.
03g,24may21,pwn  modified copyLink() to fix link issue.
03f,21may21,pwn  modified filtrdDashDtGet().
03e,19may21,pwn  added optionVoterListByOptionIdGet()
03d,18may21,pwn  added optionVoterListByFiverIdGet()
03c,18may21,pwn  modified fvrSrchDtGet(), homefeedget, grpfeedget bunchFeedGet,
                 optnSrchDtGet and explorefeedget. to add optionVoteCount
03b,17may21,pwn  modified bunchFeedGet() to add title.
03a,11may21,pwn  added filtrdDashDtGet().
02z,08may21,pwn  modifief optnLayoutGet() for others
02y,08may21,pwn  modified optnSrchDtGet() to add otherchoiceSet.
02x,06may21,pwn  modified formBuildrValidator() for showing error borders.
02w,05may21,shb  added fiverTraitRemove. fiverTraitAdd, traitsCall.
02v,03may21,pwn  added optnByLayoutValIdGet().
02u,30apr21,pwn  added optnEmotionsGet()
02t,27apr21,shb  added traitSearch()
02s,24apr21,pwn  added optnVsblStatusGet() modified fvrSrchDtGet().
02r,24apr21,pwn  modified fvrSimlrGet().
02q,22apr21,pwn  modified fvrSrchDtGet() homefeedget(), grpfeedget() & explorefeedget()
02p,19apr21,pwn  modified urlValidate()
02o,14apr21,pwn  modified optnsTopVotedGet().
02n,14apr21,pwn  modified for fetching user response data in first api call.
03n,14Apr21,SK   Added new Url link.
03m,13apr21,pwn  pollChoicesDtGet().
03l,12apr21,pwn  re-coded for renaming tags to traits.
03k,10apr21,pwn  modified homefeedget(), grpfeedget() & explorefeedget()
                 fvrSrchDtGet(), optnSrchDtGet()
03l,09apr20,pwn  modified optnSrchDtGet().
03k,08apr20,pwn  added fvrSrchDtGet(), optnSrchDtGet().
03j,07apr21,shb  modified homefeedget, grpfeedget and explorefeedget.
03i,06apr21,sk   added groupInviteGet().
03h,06apr21,pwn  added bunchFeedGet().
03g,06apr21,pwn  modified fiverSummryDtGet() for new back-end logic.
03f,05apr21,pwn  modified explorFeedGet() as per new back-end logic.
03e,05apr21,pwn  modified grpFeedGet() as per new back-end logic.
03d,05apr21,pwn  modified homeFeedGet() as per new back-end logic.
03c,01apr21,pwn  modified formBuildrValidator().
03b,25mar21,pwn  added explorFeedGet().
03a,25mar21,pwn  added grpFeedGet()
02z,24mar21,pwn  added homeFeedGet().
02y,23mar21,shb  edit copyLink()
02x,23mar21,pwn  added strWordCountGet().
02w,19mar21,shb  added progressBar() and crtPrmsnCheck
02v,18mar21,pwn  added optnLayoutGet().
02u,18mar21,pwn  modified entityDel().
02t,17mar21,pwn  added fvrSimlrGet().
02s,16mar21,shb  added fileSizeCheck().
02r,15mar21,pwn  added optnsSortedGet().
02q,15mar21,pwn  added introReadSet(), introStatusGet().
02p,13mar21,pwn  added optnKeywordsDtGet().
02o,13mar21,pwn  added readTime in various functions.
02n,09mar21,pwn  added optnStatsDtGet(), fiverChartsDtGet()
02m,08mar21,pwn  modified optnsTopVotedGet().
02l,04mar21,pwn  added optnsTopVotedGet(), fiverSummryDtGet().
02k,02mar21,pwn  modified layoutDtGet().
02j,01mar21,pwn  modified mimicISOString().
02i,27feb21,pwn  added optnLayoutsDataGet().
02i,27feb21,pwn  added layoutDtGet()
02h,29jan21,pwn  added pollChoicesDtGet().
02g,29jan21,shb  modified copyLink()
02f,29jan21,shb  added copyLink()
02e,23jan21,pwn  modified compressImage()
02d,22jan21,shb  disabling submit button when image is compressing
02c,20jan21,pwn  modified fileUpload() for pollChoiceFilesUpload.
02b,15jan21,pwn  added mimicISOString().
02a,11jan21,pwn  added utcDateFormatGet()
01z,05jan21,pwn  fvrVoteTypeGet(), fvrTypeGet(), optnVotesCountDtGet().
01y,04jan21,pwn  modified optnResponseDtGet() for adding 
                 optionreadstatusSet in query.
01y,04jan21,pwn  added optnVotesDtGet(), optnNameGet()
01x,28dec20,pwn  modified optnLayoutQustnMediaGet().
01w,28dec20,pwn  added fvrCrtnGrpDtSet().
01v,24dec20,jtn  added uniqueNameGenerate(), compressImage().
01u,18dec20,pwn  added optnLayoutQustnMediaGet().
01t,15dec20,pwn  added fiverResponseDtGet().
01s,14dec20,pwn  added optnResponseDtGet().
01r,14dec20,pwn  modified optionDataGet() for variables.
01q,12dec20,pwn  added optnCommntsCountGet().
01p,12dec20,pwn  added fiverCommntsCountGet().
01o,12dec20,pwn  added optionsCountGet().
01n,11dec20,pwn  added delPrmsnCheck().
01m,07dec20,pwn  added entityDel().
01l,04nov20,pwn  added fvrVotesTotlGet().
01k,04nov20,pwn  added arrEmptyElmntsRmv().
01j,18nov20,pwn  added arrDuplicatsRmv(), keywrdsUniqueFrqncyDtGet().
01i,17nov20,pwn  added keywordsDataGet().
01h,06nov20,pwn  fivrOptnChoicsDtGet() renamed to fiverDataGet().
01g,05nov20,pwn  added fivrOptnChoicsDtGet()
01f,26oct20,pwn  added urlValidate().
01e,21sep20,pwn  added optionVoteAdd().
01d,21sep20,pwn  added optionRatingAdd()
01c,21sep20,pwn  added optionDataGet().
01b,18sep20,pwn  added optnLayoutMdiaGet()
01a,11sep20,pwn  created
*/

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
import notify from '../components/toasts/toast';
import GraphqlAPI from './GraphqlAPI';
import GlobalLimits from "../config/GlobalLimits";
import {
    DEFAULT_ICON
} from "../config/GlobalIcons";
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

const Helpers = {

    /*******************************************************************************
    *
    * fileUpload - helps to upload file/files.
    *
    * This function helps to upload file/files, it takes two parameters file and files
    * for file it upload single file and for  files it uploads multiple files.It calls resAPI 
    * service for api calling.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fileUpload: async function (files, uploadPath = "filesUpload/") {

        try {
            /* rest file upload url*/
            let url = GLOBAL.REST_URL + uploadPath;
            let formData = new FormData();
            files.forEach(element => {
                //console.warn(element)
                for (let key of Object.keys(element)) {

                    if (uploadPath === 'optFilesUpload/' ||
                        uploadPath === 'questionFilesUpload/' ||
                        uploadPath === 'pollChoiceFilesUpload/') {
                        if (key !== 'length') {
                            formData.append('file',
                                new File([element[key].file],
                                    element[key].name + "." + this.fileExtensionGet(element[key].file.name), {
                                    type: element[key].file.type,
                                    lastModified: Date.now(),
                                }),
                            );
                        }

                    }


                    else
                        if (key !== 'length')
                            formData.append('file',
                                new File([element[key].file],
                                    element[key].file.name, {
                                    type: element[key].file.type,
                                    lastModified: Date.now(),
                                }),
                            );

                }
            });




            // headers for api request 
            let headers = null;
            // calling API service 
            return RestAPI.apiCall(url, "POST",
                headers, formData).then(response => {
                    // console.log(response)
                    return response;
                }).catch(err => {
                    console.log(err);
                    return false;
                }
                );

        } catch (error) {
            console.log(error)
        }
    },


    /*******************************************************************************
    *
    * fileExtensionGet - helps to get file extension.
    *
    * This function helps to get file extension.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fileExtensionGet(filename) {
        // get file extension
        const extension = filename.split('.').pop();
        return extension;
    },

    /*******************************************************************************
    *
    * optnLayoutMdiaGet - helps to get option media.
    *
    * This function helps to get option media.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnLayoutMdiaGet: async function (optionId, layoutId, client, query, platform) {
        try {

            return await client.query({
                query: query,
                fetchPolicy: 'network-only',
                variables: {
                    optionId: optionId,
                    optionLayoutId: layoutId,
                    platform: platform
                }
            })
                .then((data) => {
                    // console.error(data);
                    let mediaDt = data.data["optionLayoutMedia"]
                    return mediaDt;
                }).catch(error => {
                    console.log(error);
                    return false
                });
        } catch (error) {
            console.log(error);
            return false
        }

    },

    /*******************************************************************************
     *
     * optionDataGet - helps to data of option.
     *
     * This function helps to data of option based on query passed to it.
     *
     * RETURNS: N/A
     *
     * ERRNO: N/A
     *
     * SEE_ALSO: N/A
     */
    optionDataGet: async function (query, variables, fetchPolicy, client) {
        return await client.query({
            query: query,
            variables: variables,
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
    * optionRatingAdd - helps to submit star rating vote on option.
    *
    * This function helps to submit star rating vote on option, takes fiverId, optionId ,
    *  voteType, userId and mutation.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionRatingAdd: async function (mutation, fiverId, optionId, ratings, createdBy, anonymous) {
        return mutation({
            variables: {
                optionId: optionId,
                fiverId: fiverId,
                ratings: ratings,
                createdBy: createdBy,
                anonymous: anonymous
            }
        }).then(res => {
            return res;
        })
            .catch(err => {
                console.log(err);
                return false;
            }
            );
    },


    /*******************************************************************************
    *
    * optionVoteAdd - helps to submit up/down vote on option.
    *
    * This function helps to submit up/down vote on option, takes fiverId, optionId ,
    *  voteType, userId and mutation.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionVoteAdd: async function (mutation, fiverId, optionId, voteType, createdBy, anonymous) {
        return mutation({
            variables: {
                optionId: optionId,
                fiverId: fiverId,
                vote: voteType,
                createdBy: createdBy,
                anonymous: anonymous
            }
        }).then(res => {
            return res;
        })
            .catch(err => {
                console.log(err);
                return false;
            }
            );

    },


    /*******************************************************************************
    *
    * entityImgsGet - helps to get entity images.
    *
    * This function helps to entity images, it takes entity, client, 
    * query, entityId, imageType as parameter.s
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    async entityImgsGet(entity, client, query, entityId, platform, fetchPolicy = null) {
        try {
            let imgs = []
            let videos = []
            let mediaArr = []
            return await client.query({
                query: query,
                variables: { entityId: entityId, platform: platform },
                fetchPolicy: fetchPolicy,
            })
                .then((data) => {
                    let gqlQryObj = ""

                    if (entity == "fiver")
                        gqlQryObj = "fiverMedia"
                    else if (entity == "group")
                        gqlQryObj = "groupMedia"
                    else if (entity == "option")
                        gqlQryObj = "optionMedia"
                    else
                        return false

                    let mediaDt = data.data[gqlQryObj]


                    return mediaDt;
                }).catch(error => {
                    console.error(error);
                    return false
                });
        } catch (error) {
            return false
        }

    },

    /*******************************************************************************
    *
    * urlValidate - helps to check whethrrer string is valid url.
    *
    * This function helps to check whethrrer string is valid url.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    urlValidate(urlStr) {
        try {
            /*  var res = urlStr.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
             if (res == null)
                 return false;
             else
                 return true; */
            if (validUrl.isUri(urlStr)) {
                // console.log('Looks like an URI');
                return true;
            } else {
                // console.log('Not a URI');
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },


    /*******************************************************************************
    *
    * fiverDataGet - helps to get fiver's data.
    *
    * This function helps to get fiver's data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverDataGet: async function (query, variables, fetchPolicy, client) {
        return await client.query({
            query: query,
            variables: variables,
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
    * strHndlr - helps to handle string.
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
        if (str.length > limit)
            return str.substring(0, limit) + "..";
        else
            return str
    },

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
    keywordsDataGet: function (keywordsArr) {
        try {
            let keywordsDataArr = [];
            keywordsArr.forEach(element => {

                let keyword = element.node.keyword;
                let frequency = element.node.keywordFrequency;
                let score = element.node.keywordScore;
                let elementValId = element.node.elementId.optionElementId

                // get index of keyword in array 
                // let index = keywordsDataArr.map(function (o) { return o.Keyword; }).indexOf(keyword);

                // if keyword already exists then remove previous array Element  
                // and add its data to new similar keyword
                /*  if (index != -1) {
                     frequency = frequency + keywordsDataArr[index].Frequency;
                     score = score + keywordsDataArr[index].Score;
                     keywordsDataArr.splice(index, 1);
                 } */
                // push data to new formated array 
                keywordsDataArr.push({
                    "Keyword": keyword,
                    "Frequency": frequency,
                    "Score": score,
                    "OptionId": element.node.optionId.optionId,
                    "FiverId": element.node.fiverId.fiverId,
                    "LayoutId": element.node.layoutId.optionLayoutId,
                    "ElementValId": elementValId
                })
            });
            return keywordsDataArr;
        } catch (error) {
            console.log(error)
            return false
        }
    },


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
    keywrdsUniqueFrqncyDtGet: function (keywordsArr, optionFilter, layoutFilter) {
        try {
            let keywordsDataArr = [];

            keywordsArr.forEach((element, keywordsArrIndx) => {
                let elementValIdArr = [];
                let keyword = element.Keyword;
                let frequency = element.Frequency;
                let score = element.Score;
                let elementValId = element.ElementValId;
                let uniqueFrequency = element.UniqueFrequency;
                let sortOrder = element.SortOrder;

                elementValIdArr.push(elementValId);

                if (uniqueFrequency == undefined)
                    uniqueFrequency = 1

                if (sortOrder == undefined)
                    sortOrder = 1


                /* 
                                let basketballPlayers = keywordsDataArr.filter(function (object) {
                                    return object.Keyword === keyword && object.LayoutId === element.LayoutId;
                                }).map(function (object) {
                                    return object;
                                })
                                if (basketballPlayers.length > 0) { console.log(basketballPlayers) }
                
                 */

                if (optionFilter == true)
                    var index = keywordsDataArr.map(function (o) { return o.OptionId; }).indexOf(element.OptionId);

                if (layoutFilter == true)
                    var index = keywordsDataArr.map(function (o) { return o.LayoutId; }).indexOf(element.LayoutId);
                // console.log(JSON.stringify(compValObj))
                // if exists remove previous array Element 
                if (index != -1) {
                    let index = keywordsDataArr.map(function (o) { return o.Keyword; }).indexOf(keyword);
                    if (index != -1) {
                        frequency = frequency + keywordsDataArr[index].Frequency;
                        score = score + keywordsDataArr[index].Score;

                        keywordsDataArr[index].ElementValIdArr.forEach(elementValIdPrvs => {
                            elementValIdArr.push(elementValIdPrvs);

                        });



                        var indexIntrnl = keywordsDataArr.map(function (o) { return o.ElementValId; }).indexOf(elementValId);
                        // if exists remove previous array Element 
                        if (indexIntrnl != -1) {
                            let indexIntrnl = keywordsDataArr.map(function (o) { return o.Keyword; }).indexOf(keyword);
                            if (indexIntrnl != -1) {
                                uniqueFrequency = uniqueFrequency + keywordsDataArr[index].UniqueFrequency;


                            }
                        }

                        keywordsDataArr.splice(index, 1);
                    }
                }

                sortOrder = uniqueFrequency * score;

                // push data to new formated array 
                keywordsDataArr.push({
                    "Keyword": keyword,
                    "Frequency": frequency,
                    "UniqueFrequency": uniqueFrequency,
                    "Score": score,
                    "OptionId": element.OptionId,
                    "FiverId": element.FiverId,
                    "LayoutId": element.LayoutId,
                    "SortOrder": sortOrder,
                    "ElementValId": elementValId,
                    "ElementValIdArr": elementValIdArr
                })
            });
            return keywordsDataArr;
        } catch (error) {
            console.log(error)
            return false
        }
    },



    /*******************************************************************************
    *
    * arrDuplicatsRmv - helps to removes duplicates elements from array.
    *
    * This function helps to removes duplicates elements from array.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    arrDuplicatsRmv: function (array) {
        try {
            let arrUnique = array.filter((c, index) => {
                return array.indexOf(c) === index;
            });

            return arrUnique;
        } catch (error) {
            console.log(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * arrysEqulChk - helps to checks two arrays are equal or not.
    *
    * This function helps to checks two arrays are equal or not by checking their 
    * elements.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    arrysEqulChk: function (arr1, arr2) {
        try {
            let n = arr1.length;
            let m = arr2.length;

            // If lengths of array are not equal means
            // array are not equal
            if (n !== m)
                return false;

            // Sort both arrays
            arr1.sort();
            arr2.sort();

            // Linearly compare elements
            for (let i = 0; i < n; i++)
                if (arr1[i] != arr2[i])
                    return false;

            // If all elements were same.
            return true;
        } catch (error) {
            console.log(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * optionByKeywordDtGet - helps to data of option.
    *
    * This function helps to data of option based on query passed to it.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionByKeywordDtGet: async function (query, fiverId, keyword, fetchPolicy, client) {
        return await client.query({
            query: query,
            variables: {
                fiverId: fiverId,

                keyword: keyword
            },
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
    * permissionsCheck - helps to get fiver's data.
    *
    * This function helps to get fiver's data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    permissionsCheck: async function (page, fiverId,
        optionId, groupId, client, organisationId = 0) {
        const PRMSNS_DATA = gql`
        query($userId: String!, 
            $page: String!, 
            $fiverId: Int, 
            $optionId: Int, 
            $groupId: Int,
            $organisationId: Int)
            { 
            permissions(
                userId: $userId, 
                page: $page, 
                fiverId: $fiverId, 
                optionId:$optionId,
                groupId:$groupId,
                organisationId: $organisationId)
                {
                hasPermission
                } 
            }`;

        let variables = {
            userId: GLOBAL.USER_ID,
            page: page,
            fiverId: fiverId,
            optionId: optionId,
            groupId: groupId,
            organisationId: organisationId
        }

        return await GraphqlAPI.queryCall(
            PRMSNS_DATA,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.permissions.hasPermission;
            })
            .catch(error => {
                console.log("Error in PRMSNS_DATA data query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * fvrIdLstCrtdGet - helps to get fiver's id which is created last.
    *
    * This function helps to get fiver's id which is created last.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrIdLstCrtdGet: async function (client) {
        const FIVER_ID_GET = gql`
        query($userId: String!)
        { 
        feedPage(userId: $userId, first: 1, skip:0)
            {
            fiverList{
                     bunchId
                        {
                        bunchId
                        fiverSet(published: true)
                            {
                            edges{
                            node{
                            fiverId
                            }
                        }    
                        }
                        }
                    }
            }
        }`;

        return await client.query({
            query: FIVER_ID_GET,
            variables: {
                userId: GLOBAL.USER_ID,
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                return data.data.feedPage.fiverList[0].bunchId.fiverSet.edges[0].node.fiverId;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * arrEmptyElmntsRmv - helps to removes empty elements from array.
    *
    * This function helps to removes empty elements from array.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    arrEmptyElmntsRmv: function (array) {
        try {
            var filtered = array.filter(function (element) {
                return element != "";
            });
            return filtered;
        } catch (error) {
            console.log(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * fvrVotesTotlGet - helps to get fiver's total votes count.
    *
    * This function helps to get fiver's total votes count.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrVotesTotlGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const FIVER_VOTES_COUNT_GET = gql`
        query($fiverId: Float!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges
                    {
                    node
                        {
                        totalVotes
                        }
                    }
                }
            }`;

        return await client.query({
            query: FIVER_VOTES_COUNT_GET,
            variables: {
                fiverId: fiverId,
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                return data.data.fiverSearch["edges"][0].node.totalVotes;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * entityDel - helps to delete an entity.
    *
    * This function  helps to delete an entity.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    entityDel: async function (entity, entityId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const ENTITY_DEL = gql`
        query($userId: String!, 
              $entity: String!, 
              $entityId: Int!)
            { 
            deleteEntity(userId: $userId, 
                         entity: $entity,
                         entityId:$entityId)
                {
                isDeleted
                error   
                }
            }`;

        return await client.query({
            query: ENTITY_DEL,
            variables: {
                userId: Global.USER_ID,
                entity: entity,
                entityId: entityId
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                //console.log(data)
                if (data.data.deleteEntity.isDeleted !== true)
                    if (data.data.deleteEntity.error !== ("No error").toLowerCase())
                        notify(data.data.deleteEntity.error)
                return data.data.deleteEntity.isDeleted;
            })
            .catch(error => {
                console.log(error);

                return false;
            });
    },

    /*******************************************************************************
    *
    * delPrmsnCheck - helps to check permission for delete operation.
    *
    * This function helps to check permission for delete operation for an entity
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    delPrmsnCheck: async function (entity, entityId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const ENTITY_DEL_PERMSN_CHCK = gql`
            query($userId: String!, 
                  $entity: String!, 
                  $entityId: Int!)
                { 
                deletePermission(userId: $userId, 
                             entity: $entity,
                             entityId:$entityId)
                    {
                    hasPermission   
                    }
                }`;

        return await client.query({
            query: ENTITY_DEL_PERMSN_CHCK,
            variables: {
                userId: Global.USER_ID,
                entity: entity,
                entityId: entityId
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                return data.data.deletePermission.hasPermission;
                ;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optionsCountGet - helps to get fiver's option count.
    *
    * This function helps to get fiver's option count.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionsCountGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const FIVER_OPTIONS_COUNT_GET = gql`
        query($fiverId: Float!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges
                    {
                    node
                        {
                        optionsCount
                        }
                    }
                   
                }
            }`;

        return await client.query({
            query: FIVER_OPTIONS_COUNT_GET,
            variables: {
                fiverId: fiverId
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                //console.warn(data)
                return data.data.fiverSearch["edges"][0].node.optionsCount;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fiverCommntsCountGet - helps to get fiver's comment count.
    *
    * This function helps to get fiver's comment count.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverCommntsCountGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const FIVER_COMMNTS_COUNT_GET = gql`
        query($fiverId: Float!, $operationBy: ID!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges
                    {
                    node
                        {
                        commentCount
                        fivercommentsSet(createdBy_Id: $operationBy, first:1){
                            edges{
                            node{
                               id
                            }
                            }
                        }
                        }
                    }
                
                }
            }`;

        return await client.query({
            query: FIVER_COMMNTS_COUNT_GET,
            variables: {
                fiverId: fiverId,
                operationBy: Global.USER_ID
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                //console.warn(data)
                let fiverDt = data.data.fiverSearch["edges"][0].node;
                let commented = false;
                if (fiverDt.fivercommentsSet.edges.length > 0)
                    commented = true;

                let responsDt = {
                    commented: commented,
                    commentCount: fiverDt.commentCount
                }
                return responsDt;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optnCommntsCountGet - helps to get option's comment count.
    *
    * This function helps to get option's comment count.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnCommntsCountGet: async function (optionId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const OPTION_COMMNTS_COUNT_GET = gql`
        query($optionId: Float!, $operationBy: ID!)
            { 
            optionSearch(optionId :$optionId)
                {
                edges
                    {
                    node
                        {
                        commentCount
                        optioncommentsSet(createdBy_Id:$operationBy, first:1){
                            edges{
                              node{
                                createdBy{
                                  id
                                  username
                                }
                              }
                            }
                          } 
                        }
                    }
                
                }
            }`;

        return await client.query({
            query: OPTION_COMMNTS_COUNT_GET,
            variables: {
                optionId: optionId,
                operationBy: Global.USER_ID
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                //console.warn(data)
                let optnDt = data.data.optionSearch["edges"][0].node;
                let commented = false;
                if (optnDt.optioncommentsSet.edges.length > 0)
                    commented = true;

                let responsDt = {
                    commented: commented,
                    commentCount: optnDt.commentCount
                }

                return responsDt;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optnResponseDtGet - helps to get option's response data.
    *
    * This function helps to get option's response data, such as comments, likes
    * votes data. 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnResponseDtGet: async function (optionId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for option response data /
        const OPTION_RESPONSE_GET = gql`
        query($optionId: Float!, $operationBy: ID!){
        optionSearch(optionId :$optionId)
            {
            edges
                {
                node
                    {
                    readTime
                    likeCount
                    commentCount
                    upVoteCount 
                    downVoteCount
                    rating
                    

                    optionreadstatusSet(readBy_Id:$operationBy)
                        {
                        edges
                            {
                            node
                                {
                                id
                                }
                            }
                        }


                    fiverId 
                        {
                        fiverId
                        voteType
                        }

                    optioncommentsSet(createdBy_Id:$operationBy, first:1){
                            edges{
                            node{
                                createdBy{
                                id
                                username
                                }
                            }
                            }
                        }  
                        
                        
                    optionlikeSet(createdBy_Id:$operationBy){
                            edges{
                            node{
                                createdBy{
                                id
                                username
                                }
                            }
                            }
                        }

                    optionpertaginfoSet
                        {
                        traitId
                            {
                            traitId
                            
                            optiontraitvoteSet(createdBy_Id:$operationBy, optionId_OptionId: $optionId)
                                {
                                edges
                                    {
                                    node
                                        {
                                        traitId
                                            {
                                            trait
                                            }
                                        }
                                    }                 
                                }
                            }
        
                        traitsName
                        traitUpVoteCount
                        traitDownVoteCount
                        }

                        optionratingSet(createdBy_Id:$operationBy)
                            {
                            edges
                                {
                                node
                                    {
                                    voteType
                                    upVote
                                    downVote
                                    rangeVote
                                    createdBy
                                        {
                                        id
                                        username
                                        }
                                    }
                                }
                            }
                
                    createdAt
                    createdBy
                        {
                        id
                        username
                        profile
                            {
                            userPic
                            verifiedHandle
                            }
                        }
                }
            }
            }
        }`;

        let variables = {
            "optionId": optionId,
            "operationBy": Global.USER_ID,
        }

        return await this.optionDataGet(OPTION_RESPONSE_GET, variables,
            'no-cache', client).then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * fiverResponseDtGet - helps to get fiver's response data.
    *
    * This function helps to get fiver's response data, such as comments, likes
    * votes data. 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverResponseDtGet: async function (fiverId) {

        // query for fiver response data /
        const FIVER_RESPONSE_GET = gql`
            query($fiverId: Float!, $operationBy: ID!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges{
                    node{
                    bunchId
                        {
                        bunchId
                        }
                    optionsExist
                    totalVotes
                    likeCount
                    commentCount
                    optionsCount

                    fivercommentsSet(createdBy_Id: $operationBy, first:1){
                        edges{
                        node{
                           id
                        }
                        }
                    }
                    
                    fiverlikeSet(createdBy_Id: $operationBy)
                        {
                        edges
                        {
                        node
                            {
                            createdBy
                                {
                                id
                                username
                                }
                            }
                        }
                        }
                    }
                }
                }
            }`;

        let variables = {
            "fiverId": fiverId,
            "operationBy": Global.USER_ID
        }

        return await GraphqlAPI.queryCall(
            FIVER_RESPONSE_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error FIVER_RESPONSE_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optnLayoutQustnMediaGet - helps to get options's layout's questions media.
    *
    * This function helps to get options's layout's questions media.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnLayoutQustnMediaGet: async function (layoutId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const OPTN_QUSTN_MEDIA_GET = gql`
        query($optionLayoutId: Float!, $platform: String)
            { 
            optionLayoutQuestionMedia(optionLayoutId:$optionLayoutId, 
                platform:$platform)
                {
                imageList
                    {
                    url
                    }
                }
            }`;

        return await client.query({
            query: OPTN_QUSTN_MEDIA_GET,
            variables: {
                optionLayoutId: layoutId,
                platform: Global.PLATFORM
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                if (data.data.optionLayoutQuestionMedia.imageList.length > 0)
                    return data.data.optionLayoutQuestionMedia;
                else
                    return false
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * strHndlr - helps to handle string.
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
    async formBuildrValidator(layoutDtArr, htmlRndring) {
        try {
            let formValidStatus = true;
            //console.warn(layoutDtArr)
            let formStatus = layoutDtArr.some(function (element, index) {
                let component = element[0].component;
                let label = element[0].label;

                if (StringHelper.strWhiteSpaceRemvr(label).length === 0) {
                    if (htmlRndring === true) {
                        helpers.componentErrDisplyHndlr(component + index)
                        helpers.componentErrDisplyHndlr(component.toLowerCase() + index + "formprvw")
                    }
                    formValidStatus = false;
                    // alert("Please add text in label of " + component + " in " + parseInt(index + 1) + " component");
                    return false;
                }

                if (component === "DropDown" ||
                    component === "CheckBox" ||
                    component === "RadioButton") {
                    let choices = element[0].choices;

                    if (choices === undefined) {
                        if (htmlRndring === true) {
                            helpers.componentErrDisplyHndlr("choice" + index + component + "0");
                            helpers.componentErrDisplyHndlr("choice" + index + component + "1");
                            helpers.componentErrDisplyHndlr(component.toLowerCase() + index + "formprvw");

                        }
                        formValidStatus = false;
                        // alert("Please add choices in" + component + " at " + parseInt(index + 1) + " component");
                        // return false;
                    }


                    if (choices !== undefined) {
                        if (choices.length > 1) {
                            if (choices === "") {
                                if (htmlRndring === true) {
                                    helpers.componentErrDisplyHndlr("choice" + index + component + "0");
                                    helpers.componentErrDisplyHndlr("choice" + index + component + "1");
                                    helpers.componentErrDisplyHndlr(component.toLowerCase() + index + "formprvw");

                                }
                                formValidStatus = false;
                            }

                            if (StringHelper.strWhiteSpaceRemvr(choices[0].text).length === 0 || choices[0] === "" ||
                                StringHelper.strWhiteSpaceRemvr(choices[1].text).length === 0
                                || choices[1] === "") {
                                if (htmlRndring === true) {
                                    if (
                                        StringHelper.strWhiteSpaceRemvr(choices[0].text).length === 0 || choices[0] === "") {
                                        helpers.componentErrDisplyHndlr("choice" + index + component + "0");
                                        helpers.componentErrDisplyHndlr(component.toLowerCase() + index + "formprvw");
                                    }
                                    if (StringHelper.strWhiteSpaceRemvr(choices[1].text).length === 0
                                        || choices[1] === "") {
                                        helpers.componentErrDisplyHndlr("choice" + index + component + "1");
                                        helpers.componentErrDisplyHndlr(component.toLowerCase() + index + "formprvw");
                                    }
                                }
                                formValidStatus = false;
                            }

                            // alert("Please add choices in" + component + " at " + parseInt(index + 1) + " component");
                            // return false;
                        }

                        /*    choices.forEach((choice, choiceIndx) => {
                               if (choice.text === "") {
                                   if (htmlRndring === true)
                                       document.getElementById("choice" + index + component + choiceIndx).style.borderBottom = "1px solid red";
                                   formValidStatus = false;
                                   // alert("Please add text in choices of " + component + " in " + parseInt(index + 1) + " component");
                                   // return false;
                               }
                           }); */
                    }
                }

            });

            return formValidStatus;

        } catch (error) {
            console.warn(error)
            return false;
        }
    },


    /*******************************************************************************
    *
    * componentErrDisplyHndlr - helps to handle display part for errors on components of 
    * form-builder.
    *
    * This function helps to handle display part for errors on components of 
    * form-builder.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    componentErrDisplyHndlr(componentId) {
        try {
            //console.warn(componentId)

            return document.getElementById(componentId.replace(/\s+/g, '').toLowerCase()).style.borderBottom = "1px solid red";

        } catch (error) {
            console.warn(error)

        }
    },


    /*******************************************************************************
    *
    * componentWarningDisplyHndlr - helps to handle display part for warning on components of 
    * form-builder.
    *
    * This function helps to handle display part for warning on components of 
    * form-builder.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    componentWarningDisplyHndlr(componentId) {
        try {
            //console.warn(componentId)

            return document.getElementById(componentId.replace(/\s+/g, '').toLowerCase()).style.borderBottom = "1px solid #c7c745";

        } catch (error) {
            console.warn(error)

        }
    },


    /*******************************************************************************
    *
    * componentNoErrDisplyHndlr - helps to handle display part for no errors on 
    * components of form-builder.
    *
    * This function helps to handle display part for no errors on components of 
    * form-builder.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    componentNoErrDisplyHndlr(componentId) {
        try {
            //console.warn(componentId)

            return document.getElementById(componentId.replace(/\s+/g, '').toLowerCase()).style.borderBottom = "1px solid #cad1d7";

        } catch (error) {
            console.warn(error)

        }
    },

    /*******************************************************************************
    *
    * uniqueNameGenerate - helps to generate the unique name string.
    *
    * This function helps to generate the unique name string.
    *
    * RETURNS: Unique Name String
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    uniqueNameGenerate() {
        let date = new Date();
        let year = date.getFullYear().toString();
        let day = date.getDate().toString()
        if (day.length == 1) {
            day = "0" + day;
        }
        let prefix = year + day;
        let uniqueString = uniquid.process(prefix).toUpperCase();
        // console.log(uniqueString);
        return uniqueString + '.jpeg'

    },

    /*******************************************************************************
    *
    * compressImage - helps to compress image file.
    *
    * This function helps to compress image file.
    *
    * RETURNS: BLOB data
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    compressImage: async function (file, buttonId) {
        if (document.querySelector("#" + buttonId)) {
            document.querySelector("#" + buttonId).classList.add('disabled');
        }

        var options = {
            maxSizeMB: Global.MAX_IMAGE_COMPRESSION_SIZE_IN_MB,
            maxWidthOrHeight: Global.MAX_IMAGE_COMPRESSION_WIDTH_HEIGHT,
            useWebWorker: true,
            fileType: "image/jpeg"
        }
        const output = await imageCompression(file, options)
        return output
    },


    /*******************************************************************************
    *
    * fvrCrtnGrpDtSet - helps to set group data which is required while creating
    * fiver.
    *
    * This function helps to set group data which is required while creating
    * fiver.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrCrtnGrpDtSet(groupId, groupTitle) {
        try {
            Global.CURRENT_GRP_ID = groupId;
            Global.CURRENT_GRP_TITLE = groupTitle;
        } catch (error) {
            console.warn(error)
        }
    },


    /*******************************************************************************
    *
    * optnVotesWithDateRngDtGet - helps to get options's votes data.
    *
    * This function helps to get options's votes data based on days given.it will 
    * accepts 3 paramters :-  optionId, days & anonymous.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnVotesWithDateRngDtGet: async function (optionId, days, anonymous) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const OPTN_VOTES_DT_GET = gql`
        query($optionId: Int!, $days: Int, $anonymous: Boolean)
            { 
            optionVotesTimeRangeDtGet(optionId:$optionId,
                days:$days, 
                anonymous:$anonymous)
                    {
                    optionVotesDt
                        {
                        day
                        voteCount
                        }   
                    }
            }`;

        return await client.query({
            query: OPTN_VOTES_DT_GET,
            variables: {
                optionId: optionId,
                days: days,
                anonymous: anonymous

            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {

                if (data.data.optionVotesTimeRangeDtGet.optionVotesDt.length > 0)
                    return data.data.optionVotesTimeRangeDtGet;
                else
                    return false
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * optnVotesDtGet - helps to get option's votes data.
    *
    * This function helps to get option's votes data, such as up vote, down vote,
    * range votes data set. 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnVotesDtGet: async function (optionId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for option response data /
        const OPTION_VOTES_DT_GET = gql`
        query($optionId: Float!)
            {
            optionSearch(optionId:$optionId)
                {
                edges
                    {
                    node
                        {
                        upVoteCount
                        downVoteCount
                        rating
                        fiverId
                            {
                            fiverId
                            voteType
                            }

                        optionratingSet
                            {
                            edges
                                {
                                node
                                    {
                                    voteType
                                    upVote
                                    downVote
                                    rangeVote
                                    }
                                }
                            }
                        }
                    }
                 }
            }`;

        let variables = {
            "optionId": optionId
        }

        return await this.optionDataGet(OPTION_VOTES_DT_GET, variables,
            'no-cache', client).then(result => {
                let optnDt = result.data["optionSearch"]["edges"];
                if (optnDt.length > 0) {
                    let voteDt = optnDt[0].node;
                    return voteDt;
                }
                else return false
            });
    },

    /*******************************************************************************
    *
    * optnNameGet - helps to get option's name.
    *
    * This function helps to get option's name. 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnNameGet: async function (optionId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for option response data /
        const OPTION_NAME_GET = gql`
        query($optionId: Float!)
            {
            optionSearch(optionId:$optionId)
                {
                edges
                    {
                    node
                        {
                        optionelementSet(first:1)
                            {
                            edges
                                {
                                node
                                    {
                                    value
                                    }
                                }
                            }
                        }
                    }
                }
            }`;

        let variables = {
            "optionId": optionId
        }

        return await this.optionDataGet(OPTION_NAME_GET, variables,
            'no-cache', client).then(result => {
                let optnDt = result.data["optionSearch"]["edges"];
                if (optnDt.length > 0) {
                    let voteDt = optnDt[0].node.value;
                    return voteDt;
                }
                else return false
            });
    },

    /*******************************************************************************
    *
    * optnVotesCountDtGet - helps to get option's votes count data.
    *
    * This function helps to get option's votes count data
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnVotesCountDtGet: async function (optionId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for option vote count data /
        const OPTION_VOTES_COUNT_GET = gql`
    query($optionId: Float!)
        {
        optionSearch(optionId : $optionId)
            {
            edges
                {
                node
                    {
                    upVoteCount
                    downVoteCount
                    rating
                    fiverId
                        {
                        fiverId
                        voteType
                        }
                    }
                }
            }
        }`;

        let variables = { "optionId": optionId }

        return await this.optionDataGet(OPTION_VOTES_COUNT_GET, variables,
            'no-cache', client).then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * fvrTypeGet - helps to get fiver's type.
    *
    * This function helps to get fiver's type.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrTypeGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const FIVER_VOTES_COUNT_GET = gql`
        query($fiverId: Float!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges
                    {
                    node
                        {
                        fiverType
                        }
                    }
                }
            }`;

        return await client.query({
            query: FIVER_VOTES_COUNT_GET,
            variables: {
                fiverId: fiverId,
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                return data.data.fiverSearch["edges"][0].node.fiverType;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * fvrVoteTypeGet - helps to get fiver's vote type.
    *
    * This function helps to get fiver's vote type.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrVoteTypeGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        const FIVER_VOTES_COUNT_GET = gql`
        query($fiverId: Float!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges
                    {
                    node
                        {
                        voteType
                        }
                    }
                }
            }`;

        return await client.query({
            query: FIVER_VOTES_COUNT_GET,
            variables: {
                fiverId: fiverId,
            },
            fetchPolicy: "no-cache"
        })
            .then((data) => {
                return data.data.fiverSearch["edges"][0].node.voteType;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * utcDateFormatGet - helps to get utc date format.
    *
    * This function helps to get utc date format.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    utcDateFormatGet: function (isoDateStr) {
        try {
            let dateTimeObj = new Date(isoDateStr);
            var day = dateTimeObj.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            var month = (dateTimeObj.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            var year = dateTimeObj.getFullYear();
            var hour = dateTimeObj.getUTCHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            var minute = dateTimeObj.getUTCMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            var seconds = dateTimeObj.getUTCSeconds().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            let dateTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
            return dateTime;
        } catch (error) {
            console.log(error)
            return false
        }
    },

    /*******************************************************************************
    *
    * mimicISOString - helps to get iso string.
    *
    * This function helps to get iso string.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    mimicISOString(date) {
        return new Date(date).toISOString();

        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        var hour = d.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        var minute = d.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        var seconds = d.getSeconds().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        return [year, month, day].join('-') + 'T' + hour + ':' + minute + ':' + seconds + '.000Z';
    },

    objectFiltrBykeyVal(set, properties) {
        return set.filter(function (entry) {
            return Object.keys(properties).every(function (key) {
                return entry[key] === properties[key];
            });
        });
    },

    /*******************************************************************************
    *
    * copyLink - helps helps to copy url of selected fiver or option
    *
    * This function helps helps to copy url for sharing
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    copyLink(type, fiverId, optionId) {
        // create a dummy div and copy browser url
        let dummy = document.createElement('input'),
            text = window.location.href;

        // if type is option, split url and alter it
        if (type === 'Option' || type === 'OptionShare') {
            let textArr = text.split('/')

            if (textArr.includes(Global.HOME))
                text = text.replace(Global.HOME, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.GROUP)) {
                text = text.replace(Global.GROUP, `${Global.OPTION}/${optionId}`)
                // remove everything after & including the last backslash
                text = text.substr(0, text.lastIndexOf("/"));
            }


            if (textArr.includes(Global.FIVER)) {
                /* text = text.replace(Global.FIVER, `${Global.OPTION}/${optionId}`)
                // remove everything after & including the last backslash
                text = text.substr(0, text.lastIndexOf("/")); */
                text = process.env.REACT_APP_URL + "/" + Global.OPTION + "/" + optionId;
            }

            if (textArr.includes(Global.EXPLORE))
                text = text.replace(Global.EXPLORE, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.PROFILE))
                text = text.replace(Global.PROFILE, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.FAVS))
                text = text.replace(Global.FAVS, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.GROUPS))
                text = text.replace(Global.GROUPS, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.SEARCH))
                text = text.replace(Global.SEARCH, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.NOTIF))
                text = text.replace(Global.NOTIF, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.ACTIVITY))
                text = text.replace(Global.ACTIVITY, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.PUBLIC))
                text = text.replace(Global.PUBLIC, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.TRNDING_FVR_FEED))
                text = text.replace(Global.TRNDING_FVR_FEED, `${Global.OPTION}/${optionId}`)

            if (textArr.includes(Global.BUNCH)) {
                text = text.replace(Global.BUNCH, `${Global.OPTION}/${optionId}`)
                // remove everything after & including the last backslash
                text = text.substr(0, text.lastIndexOf("/"));
            }

            if (textArr.includes(Global.SPAM))
                text = text.replace(Global.SPAM, `${Global.OPTION}/${optionId}`)

            else if (!textArr.includes(`${Global.OPTION}/${optionId}`))
                text = text.replace(`${Global.OPTION}/${optionId}`, `${Global.OPTION}/${optionId}`)



        }
        else {
            let textArr = text.split('/')
            if (type === 'thanksNote' || type === 'thanksNoteShare') {
                if (textArr.includes(Global.OPTN_CRT)) {
                    // Usefull for social share.
                    text = text.replace(Global.OPTN_CRT, `${Global.FIVER}/${fiverId}`)
                    // remove everything after & including the last backslash
                    text = text.substr(0, text.lastIndexOf("/"));
                }
            }


            if (type === 'groupShare') {
                if (textArr.includes(Global.GROUP)) {
                    // Usefull for social share.
                    text = text.replace(Global.GROUP, `${Global.GROUP}/${fiverId}`)
                    // remove everything after & including the last backslash
                    text = text.substr(0, text.lastIndexOf("/"));
                }
            }
            else if (type === "group") {
                text = text.replace(Global.GROUP, `${Global.GROUP}/${fiverId}`)
                // remove everything after & including the last backslash
                text = text.substr(0, text.lastIndexOf("/"));
            }
            else if (type === Global.BUSSINESS_PAGE) {
                text = text.replace(Global.BUSSINESS_PAGE, `${Global.BUSSINESS_PAGE}/${fiverId}`)
                // remove everything after & including the last backslash
                text = text.substr(0, text.lastIndexOf("/"));
            }
            else if (type === "pageShare") {
                // Usefull for social share.
                text = text.replace(Global.BUSSINESS_PAGE, `${Global.BUSSINESS_PAGE}/${fiverId}`)
                // remove everything after & including the last backslash
                text = text.substr(0, text.lastIndexOf("/"));
            }
            else if (type === "BlackBoxShare") {
                // Usefull for social share.
                // text = text.replace(Global.FIVER, `${Global.OPTN_CRT}/${fiverId}`)
                // remove everything after & including the last backslash
                // text = text.substr(0, text.lastIndexOf("/"));
                text = process.env.REACT_APP_URL + "/" + Global.OPTN_CRT + "/" + fiverId;
            }
            else if (type === "BlackBox") {
                // For copy link in blackbox
                // text = text.replace(Global.FIVER, `${Global.OPTN_CRT}/${fiverId}`)
                // remove everything after & including the last backslash
                // text = text.substr(0, text.lastIndexOf("/"));
                text = process.env.REACT_APP_URL + "/" + Global.OPTN_CRT + "/" + fiverId;
            }
            else {

                if (textArr.includes(Global.HOME))
                    text = text.replace(Global.HOME, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.GROUP)) {
                    text = text.replace(Global.GROUP, `${Global.FIVER}/${fiverId}`)
                    // remove everything after & including the last backslash
                    text = text.substr(0, text.lastIndexOf("/"));
                }
                if (textArr.includes(Global.BUSSINESS_PAGE)) {
                    text = text.replace(Global.BUSSINESS_PAGE, `${Global.FIVER}/${fiverId}`)
                    // remove everything after & including the last backslash
                    text = text.substr(0, text.lastIndexOf("/"));
                }
                if (textArr.includes(Global.EXPLORE))
                    text = text.replace(Global.EXPLORE, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.PROFILE)) {

                    // other's profile 
                    if (text.includes(Global.PROFILE + '/')) {
                        text = text.replace(Global.PROFILE, `${Global.FIVER}/${fiverId}`)
                        // remove everything after & including the last backslash
                        text = text.substr(0, text.lastIndexOf("/"));
                    }
                    else
                        // own profile 
                        text = text.replace(Global.PROFILE, `${Global.FIVER}/${fiverId}`)
                }


                if (textArr.includes(Global.FAVS))
                    text = text.replace(Global.FAVS, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.GROUPS))
                    text = text.replace(Global.GROUPS, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.SEARCH))
                    text = text.replace(Global.SEARCH, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.SPAM))
                    text = text.replace(Global.SPAM, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.PUBLIC))
                    text = text.replace(Global.PUBLIC, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.TRNDING_FVR_FEED))
                    text = text.replace(Global.TRNDING_FVR_FEED, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.BUNCH)) {
                    text = text.replace(Global.BUNCH, `${Global.FIVER}/${fiverId}`)
                    // remove everything after & including the last backslash
                    text = text.substr(0, text.lastIndexOf("/"));
                }

                if (textArr.includes(Global.NOTIF))
                    text = text.replace(Global.NOTIF, `${Global.FIVER}/${fiverId}`)

                if (textArr.includes(Global.ACTIVITY))
                    text = text.replace(Global.ACTIVITY, `${Global.FIVER}/${fiverId}`)


            }


        }

        // if sharing to social media, return the url
        if (type === 'OptionShare' ||
            type === 'FiverShare' ||
            type === "groupShare" ||
            type === "BlackBoxShare" ||
            type === "thanksNoteShare" ||
            type === "pageShare")
            return text;

        // else copy the url on clipboard and notify
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        notify('Link Copied');
    },

    /*******************************************************************************
    *
    * pollChoicesDtGet - helps to get poll choices data.
    *
    * This function helps to get poll choices data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pollChoicesDtGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for poll data /
        const POLL_CHOICES_DT = gql`
    query($fiverId: Float!, $operationBy: ID!)
    { 
    fiverSearch(fiverId: $fiverId)
        {
        edges{
            node{
                totalVotes
                optionSet
                    {
                    edges
                        {
                        node
                            {
                            optionId
                            upVoteCount 
                            downVoteCount
                            anonymous



                            optionratingSet(createdBy_Id:$operationBy)
                                {
                                edges
                                    {
                                    node
                                        {
                                        voteType
                                        upVote
                                        downVote
                                        rangeVote
                                        }
                                    }
                                }


                                createdBy{
                                    id
                                    username
                                    profile
                                       {
                                       userPic
                                       }
                                    }
                               
                                   optionelementSet{
                                     edges{
                                       node{
                                         optionLayoutId{
                                           optionLayoutId
                                           label
                                           sortOrder
                                         }
                                       value
                                       }
                                     }
                                   }

                            }
                        }  
                    }
            }
        }
        }
    }`;

        let variables = {
            "fiverId": fiverId,
            "operationBy": Global.USER_ID === null ? "" : Global.USER_ID
        }

        return await this.fiverDataGet(POLL_CHOICES_DT,
            variables,
            'no-cache',
            client).then(result => {
                return result
            });
    },


    /*******************************************************************************
    *
    * layoutDtGet - helps to get layout's data.
    *
    * This function helps to get layout's data by using fiver and layout id.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    layoutDtGet: async function (fiverId, layoutId, keyword) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for layout data /
        const LAYOUT_DT_GET = gql`
        query($fiverId: ID!, $layoutId: ID!, $keyword:String!){
        
            elementValListFiltrd(fiverId : $fiverId, 
                layoutId:$layoutId, keyword:$keyword)
            {
                elmntValList{
                    elementId{
                      value
                      optionElementId
                      optionId{
                              optionId

                              optionelementSet(first:1){
                                edges{
                                  node{
                                    value
                                  }
                                }
                              }

                              }
                    }
                  }
            }
        }`;

        let variables = {
            "fiverId": fiverId,
            "layoutId": layoutId,
            "keyword": keyword
        }

        return await client.query({
            query: LAYOUT_DT_GET,
            variables: variables,
            fetchPolicy: "no-cache"
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
    * optnLayoutsDataGet - helps to get option layouts data.
    *
    * This function helps to get option layouts data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnLayoutsDataGet: async function (fiverId, optionId, keyword) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for layout data /
        const OPTN_LAYOUTS_DT_GET = gql`
    query($fiverId: ID!, 
        $optionId: ID!, 
        $keyword:String!,
        $elemntOptionId: Float!){
    
        keywordList(
            fiverId : $fiverId, 
            optionId:$optionId, 
            keyword:$keyword
            )
        {
          
            layoutList
                {
                layoutId
                    {
                    optionLayoutId
                    label
                    sortOrder
                    optionelementSet(optionId_OptionId:$elemntOptionId)
                        {
                        edges
                        {
                        node
                            { 
                            value
                            }
                        }
                    }
                }
            }  



        }
    }`;

        let variables = {
            "fiverId": fiverId,
            "optionId": optionId,
            "keyword": keyword,
            "elemntOptionId": optionId,
        }

        return await client.query({
            query: OPTN_LAYOUTS_DT_GET,
            variables: variables,
            fetchPolicy: "no-cache"
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
    * optnsTopVotedGet - helps to get top voted option data.
    *
    * This function helps to get top voted option data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnsTopVotedGet: async function (fiverId, first) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for TOP_VOTED_OPTNS_GET /
        const TOP_VOTED_OPTNS_GET = gql`
        query($fiverId: ID!, 
            $first: Int!)
                {
                topVotedOptions(
                    fiverId : $fiverId, 
                    first:$first
                    )
                    {
                    likeCount
                    commentCount
                    optionId
                    rating
                    upVoteCount
                    downVoteCount


                    optionperfiverstatsSet
                        {
                        upVoteCount
                        downVoteCount
                        ratingCount
                        }

                    optionelementSet(first:1)
                        {
                        edges
                            {
                            node
                                {
                                value
                                }
                            }
                        }


                    optionpertaginfoSet
                        {
                        traitId
                            {
                            traitId
                            }
                        traitsName
                        traitUpVoteCount
                        traitDownVoteCount
                        }

                }
    
        }`;

        let variables = {
            "fiverId": fiverId,
            "first": first,
        }

        return await client.query({
            query: TOP_VOTED_OPTNS_GET,
            variables: variables,
            fetchPolicy: "no-cache"
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
    * fiverResponseDtGet - helps to get fiver's response data.
    *
    * This function helps to get fiver's response data, such as comments, likes
    * votes data. 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverSummryDtGet: async function (fiverId) {
        const FIVER_SUMMRY_GET = gql`
            query($fiverId: Float!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges{
                    node
                        {
                        title
                        description
                        optionsExist
                        totalVotes
                        likeCount
                        commentCount
                        optionsCount
                        optionByOther
                        fiverType
                        voteType
                        ended
                        showVoterlistToOther
                        anonymousOption
                        quizRetake
                        optionModerationByOwner
                        showThankyouNote
                        thanksShare
                        fiverthankyounoteSet
                            {
                            edges
                                {
                                node
                                    {
                                    title
                                    description
                                    }
                                }
                            }

                        qrcodemapSet {
                            edges{
                                node {
                                qrCodeId
                              }             
                            }
                        }
                        anonymousFiver
                        createdAt
                        alias
                        pageId
                          {
                          id
                          title
                          groupId
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
                          }
                        groupId
                            {
                            id
                            groupId
                            title
                            groupType
                            }
                        createdBy
                            {
                            id
                            username
                            profile
                                {
                                userPic
                                verifiedHandle
                                }
                            }

                        }
                    }
                }
            }`;

        let variables = {
            "fiverId": fiverId
        }

        return await GraphqlAPI.queryCall(
            FIVER_SUMMRY_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error in FIVER_SUMMRY_GET data query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * mobileOptnCrtFvrInfoGet - helps to get fiver's info.
    *
    * This function helps to get fiver's info
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    mobileOptnCrtFvrInfoGet: async function (fiverId) {
        const FIVER_BASIC_INFO_GET = gql`
            query($fiverId: Float!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges{
                    node{
                        title
                        description
                        optionsExist
                        totalVotes
                        likeCount
                        commentCount
                        optionsCount
                        optionByOther
                        fiverType
                        anonymousFiver
                        imagesExist
                        videosExist
                        createdAt
                    }
                }
            }
        }`;

        let variables = {
            "fiverId": fiverId
        }

        return await GraphqlAPI.queryCall(
            FIVER_BASIC_INFO_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.fiverSearch.edges[0].node;
            })
            .catch(error => {
                console.log("Error in FIVER_BASIC_INFO_GET data query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fvrComntByOthrGet - helps to get fiver's comments data.
    *
    * This function helps to get fiver's comment data
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrComntByOthrGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for fiver response data /
        const FIVER_COMMENT_GET = gql`
        query($fiverId: Float!)
        { 
        fiverSearch(fiverId: $fiverId)
            {
            edges{
                  node
                    {
                    title
                    commentCount
                    commentByOther
                    }
                }
            }
        }`;

        let variables = {
            "fiverId": fiverId
        }

        return await this.fiverDataGet(FIVER_COMMENT_GET,
            variables,
            'no-cache',
            client).then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * groupTypeDtGet - helps to get GroupType .
    *
    * This function helps to get GroupType.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    groupTypeDtGet: async function (groupId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for fiver response data /
        const GROUP_TYPE_DT_GET = gql`
        query($groupId: Int!, $operationBy: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    id
                    title
                    groupType
                    fiverCreatePermission
                    groupusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
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
            "groupId": groupId,
            "operationBy": Global.USER_ID === null ? "" : Global.USER_ID
        }

        return await this.fiverDataGet(GROUP_TYPE_DT_GET,
            variables,
            'no-cache',
            client).then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * fiverChartsDtGet - helps to get fiver's charts data.
    *
    * This function helps to get fiver's charts data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverChartsDtGet: async function (fiverId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for fiver response data /
        const FIVER_CHARTS_DT_GET = gql`
            query($fiverId: Float!)
            { 
            fiverSearch(fiverId: $fiverId)
                {
                edges{
                    node
                        {
                        title
                        optionsExist
                        fiverType
                        voteType
                        optionsExist
                        totalVotes
                        dashboard

                        groupId
                            {
                            id
                            groupId
                            title
                            groupType
                            }

                        fivertraitSet
                            {
                            trait
                            }


                        

                        }
                    }
                }
            }`;

        let variables = {
            "fiverId": fiverId
        }

        return await this.fiverDataGet(FIVER_CHARTS_DT_GET,
            variables,
            'no-cache',
            client).then(result => {
                return result
            });
    },


    /*******************************************************************************
    *
    * optnStatsDtGet - helps to get option's stats data.
    *
    * This function helps to get option's stats data, such as comments, likes
    * votes data. 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnStatsDtGet: async function (optionId) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for option response data /
        const OPTION_DT_GET = gql`
    query($optionId: Float!){
    optionSearch(optionId :$optionId)
        {
        edges
            {
            node
                {
                readTime
                likeCount
                commentCount
                optionId
                rating
                upVoteCount
                downVoteCount
                
                fiverId 
                    {
                    fiverId
                    voteType
                    totalVotes
                    fiverType
                    }  

                optionperfiverstatsSet
                    {
                    upVoteCount
                    downVoteCount
                    ratingCount
                    }

                optionelementSet(first:1)
                    {
                    edges
                        {
                        node
                            {
                            value
                            }
                        }
                    }


                optionpertaginfoSet
                    {
                    traitId
                        {
                        traitId
                        }
                    traitsName
                    traitUpVoteCount
                    traitDownVoteCount
                    }
  
            }
        }
        }
    }`;

        let variables = {
            "optionId": optionId
        }

        return await this.optionDataGet(OPTION_DT_GET, variables,
            'no-cache', client).then(result => {
                //console.warn(result)
                return result
            });
    },

    /*******************************************************************************
    *
    * optnKeywordsDtGet - helps to get option's keywords data.
    *
    * This function helps to get option's keywords data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnKeywordsDtGet: async function (fiverId, optionId, count) {
        const client = new ApolloClient({
            link: authLink.concat(new HttpLink({ uri: GLOBAL.BASE_URL })),
            cache: new InMemoryCache(),
            // fetchOptions: {
            //   mode: 'no-cors',
            // },
        });

        // query for option response data /
        const OPTN_KEYWORD_DATA = gql`
        query($fiverId: ID!, $optionId: ID!, $count: Int!){
            optionKeywordExtraction(fiverId: $fiverId, optionId:$optionId, count:$count)
            {
            keyword
            }
        }`;

        let variables = {
            fiverId: fiverId,
            optionId: optionId,
            count: count,
        }

        return await client.query({
            query: OPTN_KEYWORD_DATA,
            variables: variables,
            fetchPolicy: "no-cache"
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
    * introReadSet - helps to set intro read status.
    *
    * This function helps to set intro read status.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    introReadSet: async function () {
        // query for setting intro read status
        const INTRO_READ_SET = gql`
        query($userId: ID!)
            {
            introReadSet(userId: $userId)
                {
                userProfileId
                }
            }`;

        let variables = {
            userId: Global.USER_ID,
        }

        return await GraphqlAPI.queryCall(INTRO_READ_SET,
            variables,
            'no-cache').then(result => {
                return result
            });
    },


    /*******************************************************************************
    *
    * introStatusGet - helps to get intro status data.
    *
    * This function helps to get intro status data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    introStatusGet: async function () {

        // query for user profile intro status  
        const INTRO_STATUS_GET = gql`
        query($userId: String!)
            { 
            userProfile(userId: $userId)
                {
                userData
                    {
                    introRead
                    }
                }
            }`;

        let variables = {
            "userId": Global.USER_ID
        }

        return await GraphqlAPI.queryCall(INTRO_STATUS_GET,
            variables,
            'no-cache').then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * mobileIntroStatusGet - helps to get intro status data for mobile.
    *
    * This function helps to get intro status data for mobile.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    mobileIntroStatusGet: async function () {

        // query for user profile intro status for mobile  
        const MINTRO_STATUS_GET = gql`
        query($userId: String!)
            { 
            userProfile(userId: $userId)
                {
                userData
                    {
                    mobIntroRead
                    }
                }
            }`;

        let variables = {
            "userId": Global.USER_ID
        }

        return await GraphqlAPI.queryCall(MINTRO_STATUS_GET,
            variables,
            'no-cache').then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * optnsSortedGet - helps to get options in particular sort order.
    *
    * This function helps to get options in particular sort order.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnsSortedGet: async function (fiverId, optionEndCursor, sortBy) {

        // query for user profile intro status  
        const SORTD_OPTNS_GET = gql`
        query(
            $fiverId: ID!, 
            $operationBy: ID!, 
            $sortBy: String!, 
            $count: Int!,
            $endCursor: String!)
            { 
            optionSort(
                fiverId: $fiverId, 
                userId: $operationBy, 
                sortBy: $sortBy,
                first: $count,  
                after: $endCursor)
                {
                pageInfo{
                        endCursor
                        hasNextPage
                      }
                      
                      edges{
                        node{
                            likeCount
                            commentCount
                            readTime
                            optionId
                            upVoteCount 
                            downVoteCount
                            rating
                          
                          
                            alias
                            pageId
                                {
                                id
                                title
                                groupId
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
                                }

                          optionreadstatusSet(readBy_Id:$operationBy){
                            edges{
                              node{
                              id
                            }
                            }
                          }
                          title
                          description
                          imagesExist
                          anonymous
                          optionelementSet{
                            edges{
                              node{
                                optionLayoutId{
                                  optionLayoutId
                                  label
                                  sortOrder
                                }
                              value
                              }
                            }
                          }
                        
                      
              
                        optionlikeSet(createdBy_Id: $operationBy){
                          edges{
                            node{
                              createdBy{
                                id
                                username
                              }
                            }
                          }
                        }
              
                        optioncommentsSet(createdBy_Id:$operationBy, first:1){
                          edges{
                            node{
                              createdBy{
                                id
                                username
                              }
                            }
                          }
                        }
              
                        optionratingSet(createdBy_Id:$operationBy){
                          edges{
                            node{
                                voteType
                                upVote
                                downVote
                                rangeVote
                                createdBy{
                                    id
                                    username
                                }
                            }
                          }
                        }
              
              
                        optionpertaginfoSet
                            {
                            traitId
                                {
                                traitId
                                }
                            traitsName
                            traitUpVoteCount
                            traitDownVoteCount
                            }
                        
                        fiverId 
                          {
                          fiverId
                          voteType
              
                          optionByOther
                          commentByOther
                          anonymousOption
                          anonymousVote
                          showVoterlistToOther
                          optionModerationByOwner
                          groupId
                            {
                            id
                            groupId
                            title
                            groupType
                            }

                            alias
                            pageId
                                {
                                id
                                title
                                groupId
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
                                }
                          }
                        
                          createdAt
                          createdBy{
                            id
                            username
                            profile
                              {
                              userPic
                              }
                          }
                        }
                      }






                }
            }`;

        let variables = {
            fiverId: fiverId,
            operationBy: Global.USER_ID === null ? "" : Global.USER_ID,
            endCursor: optionEndCursor,
            count: Global.FIVER_PAGE_OPTIONS_COUNT,
            sortBy: sortBy,
        }

        return await GraphqlAPI.queryCall(SORTD_OPTNS_GET,
            variables,
            'no-cache').then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * fileSizeCheck - helps to verify the file size.
    *
    * This function helps to verify that file size is in specified limit
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fileSizeCheck(file, type) {
        let error = false;
        if (type === 'image') {
            file.forEach((image) => {
                if (image.size > GlobalLimits.SIZE_IMG * 1024 * 1024)
                    error = true;
            })
        }
        else if (type === 'video') {
            file.forEach((video) => {
                if (video.size > GlobalLimits.SIZE_VID * 1024 * 1024)
                    error = true
            })
        }
        return error;
    },

    /*******************************************************************************
    *
    * progressBar - helps to get remaining characters left.
    *
    * This function helps to get remaining chars limit for the input field based on GlobalLimits.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */

    progressBar(target, id) {
        const maxLength = target.getAttribute('maxlength');
        const progress = maxLength - target.value.length;
        if (document.querySelector(`#${id}`))
            document.querySelector(`#${id}`).innerHTML = progress;
    },

    counterDisplay(id) {
        if (document.querySelector(`#${id}`))
            document.querySelector(`#${id}`).classList.toggle('hideCounter');
    },

    /*******************************************************************************
    *
    * fvrDuplicatesGet - helps to get duplicate fivers id.
    *
    * This function helps to get duplicate fivers id.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrDuplicatesGet: async function (title, suggstnsCount, fiverType, groupId) {

        // query similar fivers
        const FIVER_DUPLICATES_GET = gql`
        query($title: String!, $fiverType: String!, $groupId: String!)
            {
            duplicateFivers(title: $title, fiverType: $fiverType, groupId: $groupId) 
                {
                title
                    {
                    fiverId
                    score
                    }
                }
            }`

        let variables = {
            title: title,
            fiverType: fiverType.toLowerCase(),
            groupId: groupId
        }

        return await GraphqlAPI.queryCall(FIVER_DUPLICATES_GET,
            variables,
            'no-cache').then(result => {
                let duplictDt = result.data.duplicateFivers.title;
                return duplictDt.slice(0, suggstnsCount);
            }).catch(error => {
                console.log(error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * timeLeftGet - helps to get time left for particular date.
    *
    * This function helps to get time left for particular date.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    timeLeftGet(deadline) {
        try {
            let today = new Date()
            const time = Moment(deadline).valueOf() - Moment(today).valueOf();
            if (time < 0) {
                return ({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const seconds = Math.floor((time / 1000) % 60);
                const minutes = Math.floor((time / 1000 / 60) % 60);
                const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
                const days = Math.floor(time / (1000 * 60 * 60 * 24));
                return ({ days, hours, minutes, seconds });
            }

        } catch (error) {
            console.warn(error)
            return false;

        }
    },

    /*******************************************************************************
    *
    * optnLayoutGet - helps to get option layout.
    *
    * This functionhelps to get option layout by query.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnLayoutGet: async function (fiverId) {
        const OPTION_LAYOUT_GET = gql`
        query($fiverId: Float!)
            {
            optionLayout(fiverId_FiverId :$fiverId)
                {
                edges
                    {
                    node
                        {
                        element
                            { element }
                        label
                        description
                        imageCount
                        videoCount
                        optionLayoutId
                        imagesExist
                        rightAnswerFeedback
                        wrongAnswerFeedback
                        

                        optionlayoutchoiceSet
                            { 
                            edges
                                {
                                node
                                    {
                                    value
                                    other

                                    optionelementanswerSet
                                        {
                                        value
                                        }
                                    }
                                }
                            }
                        sortOrder
                        required
                        }
                    }
                }
            }`;

        let variables = {
            fiverId: fiverId
        }

        return await GraphqlAPI.queryCall(OPTION_LAYOUT_GET,
            variables,
            'no-cache').then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * crtPrmsnCheck - helps to check permission for create operation.
    *
    * This function helps to check permission if user is alloed to create more fivers, options or groups
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    crtPrmsnCheck: async function (entity, entityId) {

        const ENTITY_CRT_PERMSN_CHCK = gql`
            query($userId: ID!, 
                  $entity: String!, 
                  $entityId: ID!)
                { 
                createPermission(userId: $userId, 
                             entity: $entity,
                             entityId:$entityId)
                    {
                    hasPermission 
                    error  
                    }
                }`;

        let variables = {
            userId: Global.USER_ID,
            entity: entity,
            entityId: entityId
        }

        return await GraphqlAPI.queryCall(
            ENTITY_CRT_PERMSN_CHCK,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.createPermission;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * strWordCountGet - helps to get string words count.
    *
    * This function helps to get string words count.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    strWordCountGet(str) {
        try {
            str = str.replace(/(^\s*)|(\s*$)/gi, "");
            str = str.replace(/[ ]{2,}/gi, " ");
            str = str.replace(/\n /, "\n");
            return str.split(' ').length;
        } catch (error) {
            return false
        }

    },

    /*******************************************************************************
    *
    * homeFeedGet - helps to get home feed data.
    *
    * This function helps to get home feed data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    homeFeedGet: async function (feedCounter, fiverType, sortBy, dateTimeStamp) {

        const HOME_FEED_DATA = gql`
        query(
            $userId: ID!, 
            $operationBy: ID!, 
            $counter: Int, 
            $first: Int, 
            $count: Int, 
            $fiverType:String!,
            $sortBy:String!,
            $datetimestamp:String!
            ){ 
                newFeedPage(userId: $userId, 
                first: $first, 
                skip: $counter, 
                fiverType: $fiverType,
                sortBy: $sortBy,
                datetimestamp: $datetimestamp)
                {
               
                groupId
                    {
                    id
                    title
                    groupId
                    groupType


                    groupusersSet(
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
                    
            
          bunchId
            {
            bunchId
            }
          fiverId
          imagesExist
          videosExist
          optionsExist
          endDate
          totalVotes
          title
          description
          url
          metaData
          createdAt
          likeCount
          voteType
          commentCount
          optionsCount
          optionByOther
          commentByOther
          anonymousOption
          anonymousVote
          showVoterlistToOther
          optionModerationByOwner
          fiverType
          anonymousFiver
          scheduleDate
          ended
          dashboard
          optnVsbleToOthr
          optionVoteCount
          sharedFiverId
          alias
          realTime
          pageId
            {
            id
            title
            groupId
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
            }
            
          createdBy{
            id
            username
            profile
              {
              userPic
              verifiedHandle
              }
          }

          fiverlikeSet(createdBy_Id: $operationBy)
            {
            edges
                {
                node
                  {
                  id
                  }
                }
              }


          fivercommentsSet(createdBy_Id: $operationBy)
            {
            edges
              {
              node
                {
                id
                }
              }
            }

          fivertraitSet{
           trait
           traitId
           }
           
           


          optionSet(first: $count, isApproved: true){
            pageInfo{
              startCursor
              hasNextPage
            }
            edges{
              node{
                optionreadstatusSet(readBy_Id:$operationBy){
                  edges{
                    node{
                    id
                  }
                  }
                }
                likeCount
                commentCount
                readTime
                optionId
                imagesExist
                createdAt
                anonymous
                
                upVoteCount 
                downVoteCount
                rating
                
                alias
                pageId
                    {
                    id
                    title
                    groupId
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
                    }
               
                fiverId 
                    {
                    fiverId
                    voteType
                    optionSet(first: 1, isApproved: true, createdBy_Id: $operationBy)
                        {
                        edges
                            {
                            node
                                {
                                optionId
                                }
                            }
                        }
                    }

                optionpertaginfoSet
                    {
                    traitId
                        {
                        traitId
                        }
                    traitsName
                    traitUpVoteCount
                    traitDownVoteCount
                    }
                
                
             
                optionratingSet(createdBy_Id:$operationBy)
                    {
                    edges
                        {
                        node
                            {
                            voteType
                            upVote
                            downVote
                            rangeVote
                            }
                        }
                    }

                optionlikeSet(createdBy_Id:$operationBy){
                    edges{
                        node{
                        id
                        }
                    }
                    }

                optioncommentsSet(createdBy_Id:$operationBy, first:1){
                    edges{
                        node{
                        id
                        }
                    }
                    } 


                createdBy{
                  id
                  username

                  profile
                    {
                    userPic
                    verifiedHandle
                    }

                }
               
                 createdBy{
                 id
                 username
                 profile
                    {
                    userPic
                    verifiedHandle
                    }
                 }
            
                optionelementSet{
                  edges{
                    node{
                      optionLayoutId{
                        optionLayoutId
                        label
                        sortOrder
                      }
                    value
                    }
                  }
                }
          }
        }
              }
          }
        
       
        }`



        let variables = {
            userId: Global.USER_ID,
            operationBy: Global.USER_ID,
            counter: feedCounter,
            first: Global.FEED_COUNTR,
            count: Global.FEED_PAGE_OPTIONS_COUNT,
            fiverType: fiverType,
            sortBy: String(sortBy),
            datetimestamp: dateTimeStamp

        }

        return await GraphqlAPI.queryCall(HOME_FEED_DATA,
            variables,
            'no-cache').then(result => {
                return result
            });
    },



    /*******************************************************************************
    *
    * grpFeedGet - helps to get group feed data.
    *
    * This function helps to get group feed data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpFeedGet: async function (feedCounter, fiverType, grpId, sortBy, dateTimeStamp) {
        const GRP_FEED_DATA = gql`
        query(
            $groupId: ID!, 
            $operationBy: ID!, 
            $counter: Int, 
            $first: Int, 
            $count: Int,
            $fiverType: String!,
            $sortBy: String!,
            $userId: ID!,
            $datetimestamp:String!){ 
            newGroupFeed(
                groupId: $groupId, 
                first: $first, 
                skip: $counter,
                fiverType: $fiverType,
                sortBy: $sortBy,
                userId: $userId,
                datetimestamp: $datetimestamp
                )
                {
                bunchId
                    {
                    bunchId
                    }
                groupId{
                    id
                    title
                    groupId
                    groupType

                    groupusersSet(
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
                       
          
                    fiverId
                    imagesExist
                    videosExist
                    optionsExist
                    endDate
                    totalVotes
                    title
                    description
                    url
                    metaData
                    createdAt
                    likeCount
                    voteType
                    commentCount
                    optionsCount
                    fiverType
                    optionByOther
                    commentByOther
                    anonymousOption
                    anonymousVote
                    sharedFiverId
                    showVoterlistToOther
                    optionModerationByOwner
                    anonymousFiver
                    scheduleDate
                    ended
                    dashboard
                    optnVsbleToOthr
                    optionVoteCount
                    alias
                    realTime
                    pageId
                        {
                        id
                        title
                        groupId
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
                        }
                    createdBy{
                      id
                      username
                      profile
                        {
                        userPic
                        verifiedHandle
                        }
                    }

                    fivercommentsSet(createdBy_Id: $operationBy)
                        {
                        edges
                        {
                        node
                            {
                            id
                            }
                        }
                        }
                    fivertraitSet{
                     trait
                     traitId
                     }
                      fiverlikeSet(createdBy_Id: $operationBy){
                        edges{
                          node{
                            createdBy{
                              id
                              username
                            }
                          }
                        }
                      }
                    optionSet(first: $count, isApproved: true){
                      pageInfo{
                        startCursor
                        hasNextPage
                      }
                      edges{
                        node{
                          optionreadstatusSet(readBy_Id:$operationBy){
                            edges{
                              node{
                              id
                            }
                            }
                          }
                          
                          likeCount
                          commentCount
                          readTime
                          optionId
                          imagesExist
                          createdAt
                          anonymous

                          upVoteCount 
                          downVoteCount
                          rating
                          alias
                          pageId
                              {
                              id
                              title
                              groupId
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
                              }

                        fiverId 
                        {
                        fiverId
                        voteType

                        optionSet(first: 1, isApproved: true, createdBy_Id: $operationBy)
                            {
                            edges
                                {
                                node
                                    {
                                    optionId
                                    }
                                }
                            }
                            
                        }

                        optionpertaginfoSet
                            {
                            traitId
                                {
                                traitId
                                }
                            traitsName
                            traitUpVoteCount
                            traitDownVoteCount
                            }

                          optionlikeSet(createdBy_Id:$operationBy){
                            edges{
                                node{
                                id
                                }
                            }
                            }
        
                         optioncommentsSet(createdBy_Id:$operationBy, first:1){
                            edges{
                                node{
                                id
                                }
                            }
                            }

                          optionratingSet(createdBy_Id:$operationBy)
                            {
                            edges
                                {
                                node
                                    {
                                    voteType
                                    upVote
                                    downVote
                                    rangeVote
                                    }
                                }
                            }
                        
                          createdBy{
                            id
                            username
                          }
                        
                           createdBy{
                           id
                           username
                           profile
                            {
                            userPic
                            verifiedHandle
                            }
                           }
                       
                          optionelementSet{
                            edges{
                              node{
                                optionLayoutId{
                                  optionLayoutId
                                  label
                                  sortOrder
                                }
                              value
                              }
                            }
                          }
                    }
                  }
                        }
                    }
                 
                  
                
                  }`



        let variables = {

            groupId: grpId,
            operationBy: Global.USER_ID === null ? "" : Global.USER_ID,
            counter: feedCounter,
            first: Global.FEED_COUNTR,
            count: Global.FEED_PAGE_OPTIONS_COUNT,
            fiverType: fiverType,
            sortBy: String(sortBy),
            userId: Global.USER_ID === null ? "" : Global.USER_ID,
            datetimestamp: dateTimeStamp

        }
        return await GraphqlAPI.queryCall(GRP_FEED_DATA,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },


    /*******************************************************************************
    *
    * explorFeedGet - helps to get explore feed data.
    *
    * This function helps to get explore feed data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    explorFeedGet: async function (feedCounter, fiverType, spacesId,
        sortBy, country, dateTimeStamp) {
        const EXPLOR_FEED_DATA = gql`
        query(
            $userId: ID!, 
            $operationBy: ID!, 
            $counter: Int, 
            $first: Int, 
            $count: Int,
            $fiverType: String!,
            $spaceIds: [Int],
            $sortBy: String!, 
            $country: String!,
            $datetimestamp:String!)
                { 
            newGlobalGroup(userId: $userId, 
            first: $first, 
            skip: $counter,
            fiverType: $fiverType, spaceIds: $spaceIds,
            sortBy: $sortBy, country: $country,
            datetimestamp: $datetimestamp){

            bunchId
                {
                bunchId
                }
      
            groupId{
                id
                title
                groupId
                groupType

                groupusersSet(
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

        
          fiverId
          imagesExist
          videosExist
          optionsExist
          endDate
          totalVotes
          title
          description
          url
          metaData
          createdAt
          likeCount
          voteType
          commentCount
          optionsCount
          optionByOther
          commentByOther
          anonymousOption
          anonymousVote
          showVoterlistToOther
          optionModerationByOwner
          fiverType
          anonymousFiver
          scheduleDate
          ended
          dashboard
          optnVsbleToOthr
          optionVoteCount
          alias
          sharedFiverId
          realTime
          pageId
            {
            id
            title
            groupId
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
            }
          createdBy{
            id
            username
            profile
              {
              userPic
              verifiedHandle
              }
          }

          fivercommentsSet(createdBy_Id: $operationBy, first:1){
            edges{
            node{
                id
            }
            }
        }


          fivertraitSet{
           trait
           traitId
           }
            fiverlikeSet(createdBy_Id: $operationBy){
              edges{
                node{
                  createdBy{
                    username
                  }
                }
              }
            }
          optionSet(first: $count, isApproved: true){
            pageInfo{
              startCursor
              hasNextPage
            }
            edges{
              node{
                optionreadstatusSet(readBy_Id:$operationBy){
                  edges{
                    node{
                    id
                  }
                  }
                }

                likeCount
                commentCount
                readTime
                optionId
                imagesExist
                createdAt
                anonymous

                upVoteCount 
                downVoteCount
                rating

                alias
                pageId
                    {
                    id
                    title
                    groupId
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
                    }

                fiverId 
                    {
                    fiverId
                    voteType
                    optionSet(first: 1, isApproved: true, createdBy_Id: $operationBy)
                        {
                        edges
                            {
                            node
                                {
                                optionId
                                }
                            }
                        }
                    }

                optionpertaginfoSet
                    {
                    traitId
                        {
                        traitId
                        }
                    traitsName
                    traitUpVoteCount
                    traitDownVoteCount
                    }
                
                optionlikeSet(createdBy_Id:$operationBy){
                    edges{
                        node{
                        id
                        }
                    }
                    }

                optioncommentsSet(createdBy_Id:$operationBy, first:1){
                    edges{
                        node{
                        id
                        }
                    }
                    }
                    
                optionratingSet(createdBy_Id:$operationBy)
                    {
                    edges
                        {
                        node
                            {
                            voteType
                            upVote
                            downVote
                            rangeVote
                            }
                        }
                    }

                upVoteCount 
                downVoteCount
                rating

                createdBy{
                  id
                  username
                  profile
                    {
                    userPic
                    verifiedHandle
                    }
                }
               
                 createdBy{
                 id
                 username
                 profile
                  {
                  userPic
                  verifiedHandle
                  }
                 }
           
                optionelementSet{
                  edges{
                    node{
                      optionLayoutId{
                        optionLayoutId
                        label
                        sortOrder
                      }
                    value
                    }
                  }
                }
          }
        }
              }
          }
      
        
      
        }`

        let variables = {
            userId: Global.USER_ID,
            operationBy: Global.USER_ID,
            counter: feedCounter,
            first: Global.FEED_COUNTR,
            count: Global.FEED_PAGE_OPTIONS_COUNT,
            fiverType: fiverType,
            spaceIds: spacesId === undefined ? [] : spacesId,
            sortBy: String(sortBy),
            country: country,
            datetimestamp: dateTimeStamp
        }

        return await GraphqlAPI.queryCall(EXPLOR_FEED_DATA,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },

    /*******************************************************************************
    *
    * pubicFeedGet - helps to get public feed data.
    *
    * This function helps to get public feed data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pubicFeedGet: async function (feedCounter, fiverType,
        spacesId, sortBy, country, dateTimeStamp) {
        const EXPLOR_FEED_DATA = gql`
        query($counter: Int, 
            $first: Int, 
            $count: Int, 
            $fiverType: String!,
            $userId: ID!, 
            $spaceIds: [Int],
            $sortBy: String!,
            $country: String!,
            $datetimestamp:String!) { 
            publicFeed(first: $first, 
                skip: $counter, 
                fiverType: $fiverType, 
                spaceIds: $spaceIds,
                sortBy: $sortBy,
                country: $country,
                datetimestamp: $datetimestamp){
            bunchId
                {
                bunchId
                }
      
            groupId{
                id
                title
                groupId
                groupType
                }

        
          fiverId
          imagesExist
          videosExist
          optionsExist
          endDate
          totalVotes
          title
          description
          url
          metaData
          createdAt
          likeCount
          voteType
          commentCount
          optionsCount
          optionByOther
          commentByOther
          anonymousOption
          anonymousVote
          showVoterlistToOther
          optionModerationByOwner
          fiverType
          anonymousFiver
          scheduleDate
          ended
          dashboard
          optnVsbleToOthr
          optionVoteCount
          alias
          sharedFiverId
          realTime
          pageId
                {
                id
                title
                groupId
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
                }
          createdBy{
            id
            username
            profile
              {
              userPic
              verifiedHandle
              }
          }


          fivertraitSet{
           trait
           traitId
           }

          optionSet(first: $count, isApproved: true){
            pageInfo{
              startCursor
              hasNextPage
            }
            edges{
              node{

                likeCount
                commentCount
                readTime
                optionId
                imagesExist
                createdAt
                anonymous

                upVoteCount 
                downVoteCount
                rating


                alias
                pageId
                    {
                    id
                    title
                    groupId
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
                    }

                fiverId 
                    {
                    fiverId
                    voteType
                    }

                optionpertaginfoSet
                    {
                    traitId
                        {
                        traitId
                        }
                    traitsName
                    traitUpVoteCount
                    traitDownVoteCount
                    }

                    optionratingSet(createdBy_Id:$userId)
                        {
                        edges
                            {
                            node
                                {
                                id
                                voteType
                                upVote
                                downVote
                                rangeVote
                                }
                            }
                        }


                upVoteCount 
                downVoteCount
                rating

                createdBy{
                  id
                  username
                  profile
                    {
                    userPic
                    verifiedHandle
                    }
                }
               
                 createdBy{
                 id
                 username
                 profile
                  {
                  userPic
                  verifiedHandle
                  }
                 }
           
                optionelementSet{
                  edges{
                    node{
                      optionLayoutId{
                        optionLayoutId
                        label
                        sortOrder
                      }
                    value
                    }
                  }
                }
          }
        }
        }
          }
      
        
      
        }`

        let variables = {
            userId: Global.USER_ID === null ? "" : Global.USER_ID,
            // operationBy: Global.USER_ID,
            counter: feedCounter,
            first: Global.FEED_COUNTR,
            count: Global.FEED_PAGE_OPTIONS_COUNT,
            fiverType: fiverType,
            spaceIds: spacesId === undefined ? [] : spacesId,
            sortBy: String(sortBy),
            country: country,
            datetimestamp: dateTimeStamp

        }

        return await GraphqlAPI.queryCall(EXPLOR_FEED_DATA,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },

    /*******************************************************************************
    *
    * bunchFeedGet - helps to get bunch feed data.
    *
    * This function helps to get bunch feed data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    bunchFeedGet: async function (feedCounter, fiverType,
        bunchId, userId, sortBy, dateTimeStamp) {
        const GRP_FEED_DATA = gql`
query(
    $bunchId: ID!, 
    $operationBy: ID!, 
    $counter: Int, 
    $first: Int, $
    count: Int,
    $fiverType: String!,
    $userId: ID!,
    $sortBy: String,
    $datetimestamp:String!){ 
    bunchFivers(bunchId: $bunchId, 
        first: $first, 
        skip: $counter,
        fiverType: $fiverType,
        userId: $userId,
        sortBy: $sortBy,
        datetimestamp: $datetimestamp){
   
             
            groupId{
                id
                title
                groupId
                groupType

                groupusersSet(
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

                bunchId{
                    bunchId
                    title
                    url
                }
                   
      
                fiverId
                imagesExist
                videosExist
                optionsExist
                endDate
                totalVotes
                title
                description
                url
                metaData
                createdAt
                likeCount
                voteType
                commentCount
                optionsCount
                fiverType
                optionByOther
                commentByOther
                sharedFiverId
                anonymousOption
                anonymousVote
                showVoterlistToOther
                optionModerationByOwner
                anonymousFiver
                scheduleDate
                ended
                dashboard
                optnVsbleToOthr
                optionVoteCount
                alias
                realTime
                pageId
                    {
                    id
                    title
                    groupId
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
                    }
                createdBy{
                  id
                  username
                  profile
                    {
                    userPic
                    verifiedHandle
                    }
                }
                
                fivercommentsSet(createdBy_Id: $operationBy, first:1){
                    edges{
                    node{
                        id
                    }
                    }
                }
                
                fivertraitSet{
                 trait
                 traitId
                 }
                  fiverlikeSet(createdBy_Id: $operationBy){
                    edges{
                      node{
                        createdBy{
                          id
                          username
                        }
                      }
                    }
                  }
                optionSet(first: $count, isApproved: true){
                  pageInfo{
                    startCursor
                    hasNextPage
                  }
                  edges{
                    node{
                        likeCount
                        commentCount
                        readTime
                        optionId
                        imagesExist
                        createdAt
                        anonymous
                        
                        upVoteCount 
                        downVoteCount
                        rating

                      optionreadstatusSet(readBy_Id:$operationBy){
                        edges{
                          node{
                          id
                        }
                        }
                      }
                      alias
                      pageId
                          {
                          id
                          title
                          groupId
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
                          }

                fiverId 
                    {
                    fiverId
                    voteType

                    optionSet(first: 1, isApproved: true, createdBy_Id: $operationBy)
                        {
                        edges
                            {
                            node
                                {
                                optionId
                                }
                            }
                        }
                    }

                optionpertaginfoSet
                    {
                    traitId
                        {
                        traitId
                        }
                    traitsName
                    traitUpVoteCount
                    traitDownVoteCount
                    }

                      optioncommentsSet(createdBy_Id:$operationBy, first:1){
                        edges{
                          node{
                            createdBy{
                              id
                              username
                            }
                          }
                        }
                      }  
                      
                      
                    optionlikeSet(createdBy_Id:$operationBy){
                            edges{
                            node{
                                createdBy{
                                id
                                username
                                }
                            }
                            }
                        }
                      
                     

                      optionratingSet(createdBy_Id:$operationBy)
                        {
                        edges
                            {
                            node
                                {
                                voteType
                                upVote
                                downVote
                                rangeVote
                                }
                            }
                        }

                      createdBy{
                        id
                        username
                      }
                    
                       createdBy{
                       id
                       username
                       profile
                        {
                        userPic
                        verifiedHandle
                        }
                       }
                   
                      optionelementSet{
                        edges{
                          node{
                            optionLayoutId{
                              optionLayoutId
                              label
                              sortOrder
                            }
                          value
                          }
                        }
                      }
                }
              }
                    }
                }
             
              
            
              }`


        let variables = {

            bunchId: bunchId,
            operationBy: Global.USER_ID == null ? "" : Global.USER_ID,
            counter: feedCounter,
            first: Global.FEED_COUNTR,
            count: Global.FEED_PAGE_OPTIONS_COUNT,
            fiverType: fiverType,
            userId: userId == null ? "" : userId,
            sortBy: String(sortBy),
            datetimestamp: dateTimeStamp
        }

        return await GraphqlAPI.queryCall(GRP_FEED_DATA,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },


    /*******************************************************************************
    *
    * groupInviteGet - helps to get the invied users.
    *
    * This function helps to get the group invites
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    groupInviteGet: async function (groupId, userId) {

        const GROUP_INVITE_DATA = gql`
    query($groupId: Int!, $operationBy: ID!)
        { 
        groupSearch(groupId: $groupId)
            {
            groupSearchList
                {
                groupusersSet(userId_Id: $operationBy)
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
            groupId: groupId,
            operationBy: userId === null ? "0" : userId
        }

        return await GraphqlAPI.queryCall(
            GROUP_INVITE_DATA,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in group invites query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * InvitsCountGet - helps to get the invies count.
    *
    * This function helps to get the group invites count
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    InvitsCountGet: async function (userId) {

        const INVITES_COUNT = gql`
        query($userId: ID!){
          userGroupRequest(userId: $userId)
          {
            groupList{
                groupId
                {
                  id
                  groupId
                  title
                }
            }
          }
        }`

        let variables = {
            userId: userId,
        }

        return await GraphqlAPI.queryCall(
            INVITES_COUNT,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in group invites query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fvrSrchDtGet - helps to get fiver's data.
    *
    * This function helps to get fiver's data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrSrchDtGet: async function (fiverId, userId, respondntId, optnsCount) {
        const FVR_DT_GET = gql`
    query($fiverId: ID!, $userId: ID!, $optionsCount: Int!, $respondntId: ID!)
        { 
        fiverData(fiverId: $fiverId, userId: $userId)
            {
            groupId
                {
                id
                groupId
                title
                groupType

                groupusersSet(
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

            fiverId
            realTime
            bunchId
                {
                bunchId
                }
            imagesExist
            videosExist
            optionsExist
            endDate
            totalVotes
            title
            description
            url
            metaData
            createdAt
            likeCount
            voteType
            commentCount
            optionsCount
            optionByOther
            commentByOther
            anonymousOption
            anonymousVote
            showVoterlistToOther
            optionModerationByOwner
            responseTitleDescription
            fiverType
            anonymousFiver
            scheduleDate
            ended
            dashboard
            optnVsbleToOthr
            optionVoteCount
            fivertraitSet
                {
                trait
                traitId
                }
            title
            description
            voteType
            
            
            fiverType
            endDate

            sharedFiverId
            optionsExist
            totalVotes
            likeCount
            commentCount
            optionsCount
            alias
            pageId
              {
              id
              title
              groupId
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
              }
            
            fivercommentsSet(createdBy_Id: $userId, first:1){
                edges{
                  node{
                      id
                  }
                }
              }

            fiverlikeSet(createdBy_Id: $userId, first:1){
                edges{
                  node{
                   id
                  }
                }
              }


              fiverimageSet(first:1){
                edges{
                  node{
                    url
                  }
                }
              }

            fivertraitSet{
                trait
                traitId
                }

            createdAt
            createdBy
                {
                id
                username
                profile
                    {
                    userPic
                    verifiedHandle
                    }
                }



                optionSet(first: $optionsCount,  
                    after: "0", 
                    isApproved: true, 
                    createdBy_Id: $respondntId){
                    pageInfo{
                      endCursor
                      hasNextPage
                    }
                    edges{
                      node{
                        
                        optionId
                       
            
                        title
                        description
                        imagesExist
                        createdAt
                        anonymous
                        
                        optionimageSet(first:1){
                            edges{
                              node{
                                url
                              }
                            }
                          }                        
                        
                        optionelementSet{
                          edges{
                            node{
                              optionLayoutId{
                                optionLayoutId
                                label
                                sortOrder
                              }
                            value
                            }
                          }
                        }
                      
                      readTime
                      likeCount
                      commentCount
                      rating
                      upVoteCount
                      downVoteCount

                      alias
                    pageId
                        {
                        id
                        title
                        groupId
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
                        }

                      fiverId 
                        {
                        fiverId
                        voteType

                        optionSet(first: 1, isApproved: true, createdBy_Id: $userId)
                            {
                            edges
                                {
                                node
                                    {
                                    optionId
                                    }
                                }
                            }

                        }

                    optionpertaginfoSet
                        {
                        traitId
                            {
                            traitId
                            }
                        traitsName
                        traitUpVoteCount
                        traitDownVoteCount
                        }
            
                      optionratingSet(createdBy_Id:$userId)
                        {
                        edges
                            {
                            node
                                {
                                id
                                voteType
                                upVote
                                downVote
                                rangeVote
                                }
                            }
                        }

                        optionlikeSet(createdBy_Id:$userId){
                            edges{
                              node{
                                id
                              }
                            }
                          }

                          optioncommentsSet(createdBy_Id:$userId, first:1){
                            edges{
                              node{
                               id
                              }
                            }
                          } 
            
                      optionpertaginfoSet
                          {
                          traitId
                              {
                              traitId
                              }
                          traitsName
                          traitUpVoteCount
                          traitDownVoteCount
                          }

                      
                    optionreadstatusSet(readBy_Id:$userId)
                        {
                        edges
                            {
                            node
                                {
                                id
                                }
                            }
                        }
                      
                      fiverId 
                        {
                        fiverId
                        voteType
            
                        optionByOther
                        commentByOther
                        anonymousOption
                        anonymousVote
                        showVoterlistToOther
                        optionModerationByOwner
                        groupId
                            {
                            id
                            groupId
                            title
                            groupType
                            }
                        optionSet(first: 1, isApproved: true, createdBy_Id: $userId)
                            {
                            edges
                                {
                                node
                                    {
                                    optionId
                                    }
                                }
                            }
                            
                        }
                      
                        createdAt
                        createdBy{
                          id
                          username
                          profile
                            {
                            userPic
                            verifiedHandle
                            }
                        }
                      }
                    }
                  }
                








               
            }
        }`;

        let variables = {
            fiverId: fiverId,
            userId: userId == null ? "" : userId,
            optionsCount: optnsCount,
            respondntId: respondntId == null ? "" : respondntId,
        }

        return await GraphqlAPI.queryCall(
            FVR_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in fiver data query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * optnSrchDtGet - helps to get response's/option data.
    *
    * This function helps to get response's/option data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnSrchDtGet: async function (optionId, userId) {
        const OPTN_DT_GET = gql`
    query($optionId: ID!, $userId: ID!)
    { 
    optionData(optionId: $optionId, userId: $userId)
        {
       

            id
            optionId
            title
            description
            anonymous
            imagesExist
            readTime

            likeCount
            commentCount
            upVoteCount 
            downVoteCount
            rating

            optionimageSet(first:1){
                edges{
                  node{
                    url
                  }
                }
              }

            optionreadstatusSet(readBy_Id:$userId){
                edges{
                  node{
                  id
                }
                }
              }
            optioncommentsSet(createdBy_Id:$userId, first:1){
                edges{
                  node{
                    createdBy{
                      id
                      username
                    }
                  }
                }
              }  
              
              
        optionlikeSet(createdBy_Id:$userId){
                edges{
                  node{
                    createdBy{
                      id
                      username
                    }
                  }
                }
              }

            optionratingSet(createdBy_Id:$userId)
                {
                edges
                    {
                    node
                        {
                        voteType
                        upVote
                        downVote
                        rangeVote
                        }
                    }
                }

            optionpertaginfoSet
                {
                traitId
                    {
                    traitId
                    }

                traitsName
                traitUpVoteCount
                traitDownVoteCount
                }
        
                optionelementSet 
                    {
                    edges 
                        {
                        node
                            {
                            otherchoiceSet
                                {
                                edges
                                    {
                                    node
                                        {
                                        value
                                        }
                                    }
                                }    
                                
                            optionLayoutId
                                { 
                                  optionLayoutId 
                                  label
                                  description
                                  imagesExist
                                  sortOrder
                                  required
                                  imageCount
                                  videoCount
                                  element
                                      { 
                                      element
                                     }
                                    
                                rightAnswerFeedback
                                wrongAnswerFeedback
                                
                                optionelementanswerSet
                                    {
                                    value
                                    }
                              
                                  optionlayoutchoiceSet
                                      {
                                          edges{
                                              node{
                                                value
                                              }
                                          }
                                       
                                      } 
                                }
                              value
                              optionElementId 
                            } 
                          }
                    } 
    
    
            alias
            pageId
                {
                id
                title
                groupId
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
                }
    
               
                fiverId 
                      {
                      fiverId
                      voteType
                      fiverType
                      commentByOther
                      anonymousVote
                      title
                      showVoterlistToOther
                      totalVotes
                      anonymousFiver
                      scheduleDate
                      optionsCount                     
                      ended
                      dashboard
                      optnVsbleToOthr
                      optionVoteCount
                      optionModerationByOwner
                      optionEdit

                      optionSet(first: 1, isApproved: true, createdBy_Id: $userId)
                            {
                            edges
                                {
                                node
                                    {
                                    optionId
                                    }
                                }
                            }


                      alias
                      pageId
                        {
                        id
                        title
                        groupId
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
                        }
                      groupId
                        {
                        id
                        groupId
                        title
                        groupType

                        
                        groupusersSet(userId_Id:$userId, membership:"ACCEPTED"){
                            edges{
                                node{
                                membership
                                role
                                }
                            }
                            }
                        }
    
                      
                      createdAt
                      createdBy
                              {
                              id
                              username
                              profile
                                {
                                userPic
                                verifiedHandle
                                }
                              }
                      }
              
                
                    
                createdAt
                createdBy
                    {
                    id
                    username
                    profile
                        {
                        userPic
                        verifiedHandle
                        }
                    }
        
               

           
        }
    }`;

        let variables = {
            optionId: optionId,
            userId: userId === null ? "" : userId
        }

        return await GraphqlAPI.queryCall(
            OPTN_DT_GET,
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
    * grpMembrCountGet - helps to get group members count data.
    *
    * This function helps to get group members count data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpMembrCountGet: async function (groupId) {
        const GRP_MMBR_COUNT_GET = gql`
        query($groupId: Int!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    memberCount     
                    }
                }
            }`
        let variables = {
            groupId: groupId,
        }

        return await GraphqlAPI.queryCall(
            GRP_MMBR_COUNT_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in GRP_MMBR_COUNT_GET  query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * fvrManualEndSet - helps to manualy end fiver.
    *
    * This function helps to manualy end fiver.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrManualEndSet: async function (fiverId, userId) {
        const FVR_END_MANUALY = gql`
    query($fiverId: ID!, $userId: ID!)
        { 
        fiverEnd(fiverId: $fiverId, userId: $userId)
            {
            ended
            }
        }`
        let variables = {
            fiverId: fiverId,
            userId: userId
        }

        return await GraphqlAPI.queryCall(
            FVR_END_MANUALY,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in GRP_MMBR_COUNT_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optnVsblStatusGet - helps to get fiver's status of option visible to others.
    *
    * This function helps to get fiver's status of option visible to others.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnVsblStatusGet: async function (fiverId, userId) {
        const OPTN_VSBL_STATUS_GET = gql`
    query($fiverId: ID!, $userId: ID!)
        { 
        fiverData(fiverId: $fiverId, userId: $userId)
            {
            optnVsbleToOthr  
            createdBy
                {
                id
                } 
            }
        }`
        let variables = {
            fiverId: fiverId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            OPTN_VSBL_STATUS_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in OPTN_VSBL_STATUS_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * traitSearch - helps to fetch traits
    *
    * This function helps to fetch traits.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    traitSearch: async function (traitName) {
        const TRAIT_SRCH = gql`
        query($tagName: String!) {
            fiverTagSearch(trait_Istartswith: $tagName, first: 7) {
                edges {
                    node {
                        id
                        trait
                    }
                }
            }
        }`

        let variables = {
            tagName: traitName,
        }

        return await GraphqlAPI.queryCall(
            TRAIT_SRCH,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in TRAIT_SRCH  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * traitCall - helps to fetch traits for edit trait modal
    *
    * This function helps to fetch traits for edit trait modal.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */

    traitCall: async function (fiverId, userId) {
        const TRAIT_DT_GET = gql`
        query($fiverId: ID!, $userId: ID)
        { 
        fiverData(fiverId: $fiverId, userId: $userId)
            {
                fivertraitSet
                {
                trait
                traitId
                }
            }
        }`

        let variables = {
            fiverId: fiverId,
            userId: userId,
        }

        return await GraphqlAPI.queryCall(
            TRAIT_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in TRAIT_UPDATE  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fiverTraitUpdate - helps to update traits
    *
    * This function helps to update traits.
    *
    * RETURNS: N/A
    */

    fiverTraitUpdate: async function (userId, fiverId, traits) {
        const TRAIT_UPDATE = gql`
    query ($userId: ID,  $traits: [String], $fiverId: ID!) 
    { 
        fiverTraitUpdate(userId: $userId, traits: $traits, fiverId: $fiverId)
      {
        trait
        traitId
      }
    }`

        let variables = {
            userId: userId,
            traits: traits,
            fiverId: fiverId
        }
        return await GraphqlAPI.queryCall(
            TRAIT_UPDATE,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in TRAIT_UPDATE  query: ", error);
            })
    },

    /*******************************************************************************
    *
    * fiverTraitRemove - helps to remove traits
    *
    * This function helps to update traits.
    *
    * RETURNS: N/A
    */

    fiverTraitRemove: async function (userId, fiverId, traitIds) {
        const TRAIT_REMOVE = gql`
        query ($userId: ID,  $fiverId: ID!, $traitIds: [ID])
            {   fiverTraitRemove(userId: $userId, fiverId: $fiverId,  traitIds: $traitIds)
                    {
                        optionpertaginfoSet{
                            traitId{
                                traitId
                                trait
                            }
                        traitsName
                    }
            }
        }`

        let variables = {
            userId: userId,
            traitIds: traitIds,
            fiverId: fiverId
        }
        return await GraphqlAPI.queryCall(
            TRAIT_REMOVE,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in TRAIT_UPDATE  query: ", error);
            })
    },

    /*******************************************************************************
    *
    * optnLstByLayoutIdGet - helps to get options list.
    *
    * This function helps to get options list by layoutId and value of element.
    *
    * RETURNS: list , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */

    optnLstByLayoutIdGet: async function (layoutId, value, userId) {
        const OPTN_LIST_BY_LAYOUT_ID_GET = gql`
    query($layoutId: ID!, 
        $userId: ID!, 
        $value : String!)
        { 
        optionByLayoutId(layoutId: $layoutId, 
            value :$value,
            userId: $userId)
            {
            optionId
                {
                optionId

                optionelementSet (first:1)
                    {
                    edges 
                        {
                        node
                            {
                            value
                            }
                        }
                    }
                
                createdAt
                createdBy
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
            layoutId: layoutId,
            value: value,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            OPTN_LIST_BY_LAYOUT_ID_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error OPTN_LIST_BY_LAYOUT_ID_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optnEmotionsGet - helps to get options emotions data.
    *
    * This function helps to get options emotions data.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnEmotionsGet: async function (optionId, entityFilter) {
        const OPTN_EMOTIONS_GET = gql`
        query($optionId: ID!, $entityFilter: JSONString)
            { 
            optionEmotion(optionId: $optionId, data: $entityFilter)
                {
                joy
                fear
                sad
                anger
                commentCount
                }
            }`

        let variables = {
            optionId: optionId,
            entityFilter: JSON.stringify(entityFilter)
        }

        return await GraphqlAPI.queryCall(
            OPTN_EMOTIONS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data;
            })
            .catch(error => {
                console.log("Error OPTN_EMOTIONS_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * optnByLayoutValIdGet - helps to get options id.
    *
    * This function helps to get options id using layout id and value
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnByLayoutValIdGet: async function (fiverId, layoutId, value) {
        const OPTN_ID_GET = gql`
        query($fiverId: Float!, $optionLayoutId: ID!, $value:String!)
            { 
            fiverSearch(fiverId: $fiverId, )
                {
                edges
                    {
                    node
                        {
                        optionlayoutSet (optionLayoutId:$optionLayoutId)
                            {
                            edges 
                                {
                                node 
                                    {
                                    optionLayoutId
                                    optionelementSet(value: $value, 
                                                    optionLayoutId_OptionLayoutId:$optionLayoutId)
                                                    {
                                                    edges
                                                        {
                                                        node
                                                            {
                                                            value
                                                            optionId
                                                                {
                                                                optionId
                                                                }
                                                            }
                                                        }
                                                    }
                      
                                    }
                                    
                                }
                                    
                            }
                        }
                    }
                }
            }`;

        let variables = {
            fiverId: fiverId,
            layoutId: layoutId,
            value: value
        }

        return await GraphqlAPI.queryCall(
            OPTN_ID_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error OPTN_ID_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * fvrDtDownloadGet - helps to get fiver data to be download.
    *
    * This function helps to get fiver data to be download.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrDtDownloadGet: async function (fiverId, userId) {
        const FVR_DT_DOWNLOAD = gql`
            query ($fiverId: ID!, $userId: ID!) 
                {
                fiverData(fiverId: $fiverId, userId: $userId) 
                    {
                    optionlayoutSet 
                        {
                        edges 
                            {
                            node 
                                {
                                element
                                    {
                                    element
                                    }
              
              
                                optionLayoutId
                                label    
                                optionelementSet
                                    {
                                    edges
                                        {
                                        node
                                            {
                                            optionLayoutId
                                                {
                                                optionLayoutId
                                                }
                                            value
                                            optionId
                                                {
                                                optionId
                                                createdAt
                                                createdBy
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
                                        }
                                    }
                                }
                            }
                        }
                    } 

                }`;

        let variables = {
            fiverId: fiverId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            FVR_DT_DOWNLOAD,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error OPTN_ID_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * filtrdDashDtGet - helps to get filtred options data.
    *
    * This function helps to get filtred options data.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    filtrdDashDtGet: async function (layoutIds, values, fiverId, userId, data, demography) {
        const FILTRD_OPTN_DT_GET = gql`
    query($fiverId: ID!, 
        $layoutIds: [ID], 
        $values: [[String]], 
        $userId: ID!,
        $data: JSONString!,
        $demography: Boolean!)
        { 
        dashboardOptionFilter(
            fiverId:$fiverId,
            layoutIds: $layoutIds, 
            values: $values, 
            userId: $userId,
            data:$data,
            demography: $demography)
            {
            value
            choiceCount
            optionLayoutId     
            }
        }`
        let dataObj = null

        if (demography === true)
            dataObj = JSON.stringify((data));
        else
            dataObj = JSON.stringify(JSON.stringify(data))

        let variables = {
            fiverId: fiverId,
            layoutIds: layoutIds,
            values: values,
            userId: userId === null ? "" : userId,
            data: dataObj,
            demography: demography
        }

        return await GraphqlAPI.queryCall(
            FILTRD_OPTN_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error OPTN_EMOTIONS_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optionVoterListByFiverIdGet - helps to get fivers voter list.
    *
    * This function helps to get fivers voter list.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionVoterListByFiverIdGet: async function (fiverId, first, skip) {
        const FVR_VOTER_LIST_GET = gql`
        query($fiverId: ID!, 
            $first: Int!, 
            $skip: Int!
            )
            { 
            optionVoterListByFiverIdGet(
                fiverId:$fiverId,
                first: $first, 
                skip: $skip)
                    {
                    anonymousVoterCount
                    optionVoters 
                        {
                        createdAt
                        createdBy 
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
            fiverId: fiverId,
            first: first,
            skip: skip
        }

        return await GraphqlAPI.queryCall(
            FVR_VOTER_LIST_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.warn("Error FVR_VOTER_LIST_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * optionVoterListByOptionIdGet - helps to get option voter list.
    *
    * This function helps to get option voter list.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionVoterListByOptionIdGet: async function (optionId, vote, first, skip) {
        const OPTN_VOTER_LIST_GET = gql`
        query(
            $optionId: Int!,
            $vote:String!,
            $first: Int!, 
            $skip: Int!)
            { 
            optionVoterListByOptionIdGet(
                optionId:$optionId,
                first: $first, 
                skip:  $skip,
                vote:  $vote)
                    {
                    anonymousVoterCount
                    optionVoters 
                        {
                        createdAt
                        createdBy 
                            {
                            id
                            username
                            profile 
                                {
                                userPic
                                verifiedHandle
                                }
                            }
                        }
                    }
            }`
        let variables = {
            optionId: optionId,
            vote: vote,
            first: first,
            skip: skip
        }

        return await GraphqlAPI.queryCall(
            OPTN_VOTER_LIST_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.warn("Error OPTN_VOTER_LIST_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optnCommntsGet - helps to get options comments data.
    *
    * This function helps to get options comments data.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnFltrdCommntsGet: async function (optionId, userId, filter) {
        let angrfilter = 0;
        let joyfilter = 0;
        let sadfilter = 0;
        let fearFilter = 0;
        let positiveFilter = 0;
        let negativeFilter = 0;
        let neutralFilter = 0;


        if (filter.toLowerCase() === "anger")
            angrfilter = GLOBAL.EMOTIONS_MARK_SCORE

        if (filter.toLowerCase() === "joy")
            joyfilter = GLOBAL.EMOTIONS_MARK_SCORE

        if (filter.toLowerCase() === "sadness")
            sadfilter = GLOBAL.EMOTIONS_MARK_SCORE

        if (filter.toLowerCase() === "fear")
            fearFilter = GLOBAL.EMOTIONS_MARK_SCORE


        if (filter.toLowerCase() === "positive")
            positiveFilter = GLOBAL.EMOTIONS_MARK_SCORE

        if (filter.toLowerCase() === "negative")
            negativeFilter = GLOBAL.EMOTIONS_MARK_SCORE

        if (filter.toLowerCase() === "neutral")
            neutralFilter = GLOBAL.EMOTIONS_MARK_SCORE


        // query for option comments data /
        // const OPTION_COMMNTS_GET = gql`
        const OPTION_COMMNTS_GET = gql`
        query($optionId: ID!, 
            $userId: ID!,
            $angrfilter: Float!,
            $joyfilter: Float!,
            $sadfilter: Float!,
            $fearFilter: Float!,
            $positiveFilter: Float!,
            $negativeFilter: Float,
            $neutralFilter: Float!)
            {
            optionData(optionId: $optionId, 
                userId: $userId)
                    {
                    anonymous
                    createdAt
                    createdBy
                        {
                        id
                        username
                        profile
                            {
                            userPic
                            verifiedHandle
                            }
                        }
                    fiverId 
                        {
                        fiverId
                        voteType
                        fiverType
                        commentByOther
                        anonymousVote
                        title
                        showVoterlistToOther
                        totalVotes
                        anonymousFiver
                        scheduleDate
                        ended
                        dashboard
                        optnVsbleToOthr
                        optionVoteCount
                        groupId
                          {
                          id
                          groupId
                          title
                          groupType
                          }
      
                        
                        createdAt
                        createdBy
                                {
                                id
                                username
                                profile
                                  {
                                  userPic
                                  verifiedHandle
                                  }
                                }
                        }
                    optioncommentsSet(
                        anger_Gt: $angrfilter,
                        joy_Gt: $joyfilter,
                        sadness_Gt: $sadfilter,
                        fear_Gt: $fearFilter,
                        positive_Gt: $positiveFilter,
                        negative_Gt: $negativeFilter,
                        neutral_Gt:$neutralFilter,
                        )
                        {
                        edges
                            {
                            node
                                {
                                commentId
                                message
                                createdAt
                                createdBy
                                    {
                                    id
                                    username
                                    profile
                                        {
                                        userPic
                                        verifiedHandle
                                        }
                                    }
                                }
                            }
                        
                        } 
                }
                      
            }`



        let variables = {
            optionId: optionId,
            userId: userId === null ? "" : userId,
            angrfilter: angrfilter,
            joyfilter: joyfilter,
            sadfilter: sadfilter,
            fearFilter: fearFilter,
            positiveFilter: positiveFilter,
            negativeFilter: negativeFilter,
            neutralFilter: neutralFilter,
        }

        return await GraphqlAPI.queryCall(
            OPTION_COMMNTS_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error OPTN_EMOTIONS_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fvrVotesWithDateRngDtGet - helps to get fiver's votes data.
    *
    * This function helps to get fiver's votes data based on days given.it will 
    * accepts 3 paramters :-  fiverId, days & anonymous.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrVotesWithDateRngDtGet: async function (fiverId, days, anonymous) {
        const FVR_VOTES_DT_GET = gql`
        query($fiverId: Int!, $days: Int, $anonymous: Boolean)
            { 
            fiverVotesTimeRangeDtGet(
                fiverId:$fiverId,
                days:$days, 
                anonymous:$anonymous)
                    {
                    optionVotesDt
                        {
                        day
                        voteCount
                        }   
                    }
            }`;

        let variables = {
            fiverId: fiverId,
            days: days,
            anonymous: anonymous
        }

        return await GraphqlAPI.queryCall(
            FVR_VOTES_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                if (data.data.fiverVotesTimeRangeDtGet.optionVotesDt.length > 0)
                    return data.data.fiverVotesTimeRangeDtGet;
                else
                    return false
            })
            .catch(error => {
                console.log("FVR_VOTES_DT_GET query: ", error);
                return false;
            });

    },


    /*******************************************************************************
    *
    * fvrEmotionsGet - helps to get fiver emotions data.
    *
    * This function helps to get fiver emotions data.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrEmotionsGet: async function (fiverId, entityFilter) {
        const FVR_EMOTONS_GET = gql`
        query($fiverId: ID!, $entityFilter: JSONString)
            { 
            fiverEmotion(fiverId: $fiverId, data: $entityFilter)
                {
                joy
                fear
                sad
                anger
                commentCount
                }
            }`
        let variables = {
            fiverId: fiverId,
            entityFilter: entityFilter
        }

        return await GraphqlAPI.queryCall(
            FVR_EMOTONS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data
            })
            .catch(error => {
                console.log("Error FVR_EMOTONS_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * fiverVotesDtGet - helps to get fiver votes data demographywise.
    *
    * This function helps to get fiver votes data demographywise.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverVotesDtGet: async function (fiverId, userId, anonymous, entityFilter) {
        const FVR_VOTES_GET = gql`
        query(
            $fiverId: Int!,  
            $anonymous: Boolean,
            $entityFilter:String)
            { 
            fiverVotesDtGet(
                fiverId: $fiverId,  
                anonymous: $anonymous,
                entityFilter: $entityFilter)
                    {
                    fieldCountDt
                        {
                        field
                        count
                        }
                    }
            }`

        let variables = {
            fiverId: fiverId,
            anonymous: anonymous,
            entityFilter: entityFilter
        }

        return await GraphqlAPI.queryCall(
            FVR_VOTES_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error FVR_VOTES_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * layoutKeywordsGet - helps to get layout keywords.
    *
    * This function helps to get layout keywords.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    layoutKeywordsGet: async function (fiverId, layoutId, count, filters) {
        const LAYOUT_KEYWORD_GET = gql`
        query(
            $fiverId: ID!, 
            $layoutId: ID!, 
            $count: Int!,
            $data: JSONString!)
                { 
                layoutKeywordsGet(
                    fiverId: $fiverId, 
                    layoutId:$layoutId, 
                    count:$count,
                    data:$data)
                        {
                        keywordList
                        }
                }`;


        let data = {}
        let filterType = 'Normal';

        if (filters != null) {
            filters.forEach((element, index) => {
                if ('component' in element) {
                    filterType = 'Demography';
                    element.filterType = 'Demography'
                    element.layoutId = layoutId
                }
                else {
                    filterType = 'Normal';
                    element.filterType = 'Normal'
                }
            });


            data = [{
                filterType: filterType,
                filter: true,
                filterData: filters
            }]
        }
        else
            data = [{
                filterType: null,
                filter: false,
                filterData: filters
            }]
        data = JSON.stringify((data))

        //console.warn(data)

        let variables = {
            fiverId: fiverId,
            layoutId: layoutId,
            count: count,
            data: data
        }

        return await GraphqlAPI.queryCall(
            LAYOUT_KEYWORD_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.layoutKeywordsGet.keywordList;
            })
            .catch(error => {
                console.log("Error LAYOUT_KEYWORD_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * optionIdsFiltrdGet - helps to get options list.
    *
    * This function helps to get options list filtered on some conditions given in 
    * filter variable.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionIdsFiltrdGet: async function (fiverId, userId, filters, skip) {

        const FILTRD_OPTNS_GET = gql`
        query(
            $userId: ID!, 
            $data: JSONString!,
            $first: Int, 
            $skip: Int,
            $fiverId: ID!)
                { 
                dashboardOptionIdsFilter(
                    userId: $userId, 
                    data: $data,
                    first: $first,
                    skip: $skip,
                    fiverId: $fiverId)
                        {
                        optionId
                        anonymous
                        alias
                        pageId
                            {
                            id
                            title
                            groupId
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
                            }
                        optionelementSet(first:1)
                            {
                            edges
                                {
                                node
                                    {
                                    value
                                    }
                                }
                            }
                        createdAt
                        createdBy
                            {
                            id
                            username
                            profile
                                {
                                userPic
                                }
                            }
                        }
                }`;

        filters.forEach((element, index) => {
            let layoutId = filters[0].layoutId;
            if ('component' in element) {
                element.filterType = 'Demography'
                element.layoutId = layoutId
            }
            else
                element.filterType = 'Normal'
        });

        let dataObj = JSON.stringify(JSON.stringify(filters))
        let variables = {
            fiverId: fiverId,
            userId: userId === null ? "" : userId,
            data: dataObj,
            first: Global.OPTN_LIST_COUNT_SIDE_DRWR,
            skip: skip
        }

        return await GraphqlAPI.queryCall(
            FILTRD_OPTNS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.dashboardOptionIdsFilter;
            })
            .catch(error => {
                console.log("Error FILTRD_OPTNS_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * optnByTitleGet - helps to get option by title.
    *
    * This function helps to get option by title.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnByTitleGet: async function (fiverId, title) {


        // query for fiver response data /
        const OPTN_BY_TITLE_GET = gql`
        query($fiverId: ID!, $title: String!)
            { 
            optionListByTitleGet(fiverId: $fiverId, title: $title)
                {
                optionId
                    {
                    optionId
                    createdAt
                    createdBy
                        {
                        id
                        username
                        profile
                            {
                            userPic
                            }
                        }
                    }
                      
                value
                }
        }`;

        let variables = {
            fiverId: fiverId,
            title: title
        }

        return await GraphqlAPI.queryCall(
            OPTN_BY_TITLE_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data.data.optionListByTitleGet;
            })
            .catch(error => {
                console.log("Error OPTN_BY_TITLE_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * usrImgHnldr - helps to get user image.
    *
    * This function helps to get user image.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrImgHnldr(url) {
        try {
            if (url !== undefined && url !== null && url !== 'null')
                return url
            else
                return DEFAULT_ICON;
        } catch (error) {
            return DEFAULT_ICON;
        }

    },

    /*******************************************************************************
    *
    * usrProfilePicGet - helps to get user profile picture.
    *
    * This function helps to get user profile picture.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrProfilePicGet: async function (userId) {

        // query for user profile intro status  
        const USR_PROFILE_PIC_GET = gql`
        query($userId: String!)
            { 
            userProfile(userId: $userId)
                {
                userData
                    {
                    userPic
                    }
                }
            }`;

        let variables = {
            "userId": userId
        }

        return await GraphqlAPI.queryCall(USR_PROFILE_PIC_GET,
            variables,
            'no-cache').then(result => {
                return result
            });
    },


    /*******************************************************************************
    *
    * usrProfileByEmailSet - helps to set user profile by email.
    *
    * This function helps to set user profile by email.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrProfileByEmailSet: async function (email, socialLogin) {
        // query for setting user profile 
        const USER_PROFILE_SET = gql`
        query($email: String!, $social: Boolean)
            {
            setProfile(email:$email, social: $social)
                {
                userData
                    {
                    user
                        {
                        id
                        }
                    }
                }
          }`

        let variables = {
            "email": email,
            "social": socialLogin
        }

        return await GraphqlAPI.queryCall(
            USER_PROFILE_SET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                if (socialLogin === false)
                    return data.data.setProfile.userData[0].user;
                else
                    return data.data.setProfile;
            })
            .catch(error => {
                console.log("Error USER_PROFILE_SET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * groupSrchDtGet - helps to get the group data.
    *
    * This function helps to get the group data, used in seach page.
    *
    * RETURNS: Array, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    groupSrchDtGet: async function (groupId, userId) {

        const GROUP_SRCH_DATA = gql`
        query($groupId: Int!, $operationBy: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    id
                    groupId
                    title
                    description
                    groupType
                    memberCount
                    fiverCount
                    fiverCreatePermission
                    groupusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
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
            }
            }`

        let variables = {
            groupId: groupId,
            operationBy: userId === null ? "" : userId
        }

        return await GraphqlAPI.queryCall(
            GROUP_SRCH_DATA,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in GROUP_SRCH_DATA query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * usrSrchDataGet - helps to get user data.
    *
    * This function helps to get intro status data.
    *
    * RETURNS: Array ,false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrSrchDataGet: async function (userId, page) {
        var page = page
        if (page === undefined)
            page = "Others"

        const USER_SRCH_DT = gql`
        query($userId: String!, $page: String!)
            { 
            userProfile(userId: $userId, page: $page)
                {
                userData
                    {
                    user
                        {
                        id
                        email
                        username
                        }
                    userPic
                    aboutMe
                    fiverCount
                    optionCount
                    verifiedHandle
                    }
                }
            }`;

        let variables = {
            "userId": userId,
            "page": page
        }

        return await GraphqlAPI.queryCall(USER_SRCH_DT,
            variables,
            'no-cache').then(result => {
                return result
            });
    },


    /*******************************************************************************
    *
    * groupLeave - helps to leave a group.
    *
    * This function  helps to leave a group.
    *
    * RETURNS: true on success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    groupLeave: async function (groupId, userId) {
        // query for leaving group 
        const GRP_LEAVE = gql`
        query ($userId:String!, $groupId:Int!){
            leaveGroup(userId:$userId, groupId:$groupId){
              isDeleted
              isLeaved
              error
            }
          }`;

        let variables = {
            groupId: groupId,
            userId: userId
        }

        return await GraphqlAPI.queryCall(
            GRP_LEAVE,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data.data.leaveGroup;
            })
            .catch(error => {
                console.log("Error GRP_LEAVE  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fvrMenuDtGet - helps to get fiver's data required for menu.
    *
    * This function helps to get fiver's data required for menu.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrMenuDtGet: async function (fiverId, userId) {
        const FVR_MENU_DT_GET = gql`
        query($fiverId: ID!, $userId: ID!)
            { 
            fiverData(fiverId: $fiverId, userId: $userId)
                {
                groupId
                    {
                    id
                    groupId
                    title
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


                    groupusersSet(userId_Id:$userId, membership:"ACCEPTED")
                        {
                        edges
                            {
                            node
                                {
                                membership
                                role
                                }
                            }
                        }


                    }

                fiverId
                bunchId
                    {
                    bunchId
                    }
                imagesExist
                videosExist
                optionByOther
                commentByOther
                anonymousOption
                anonymousVote
                showVoterlistToOther
                optionModerationByOwner
                anonymousFiver
                scheduleDate
                ended
                dashboard
                optnVsbleToOthr
                pinned

                emailupdatesSet{
                    edges{
                        node{
                            notificationType
                            userId{
                                id
                                username
                                profile{
                                    userPic
                                    verifiedHandle
                                }
                            }
                        }
                    }
                }

                filters
                fiverfiltersSet{
                    edges{
                      node{
                       
                        stateIds{
                            countryId{
                              countryId
                              countryName
                            }
                            stateId
                            stateName
                          }

                        gender
                        generation
                      }
                    }
                  }

                qrcodemapSet {
                    edges{
                    	node {
                        qrCodeId
                      }      
                            
                    }
                }
                optionVoteCount
                fivertraitSet
                    {
                    trait
                    traitId
                    }
                title
                description
                voteType
                fiverType
                endDate
                optionsExist
                totalVotes
                likeCount
                commentCount
                optionsCount
                createdAt
                createdBy
                    {
                    id
                    username
                    }
    
                }
            }`;

        let variables = {
            fiverId: fiverId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            FVR_MENU_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in fiver data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * optnMenuDtGet - helps to get response's/option menu data.
    *
    * This function helps to get response's/option menu data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnMenuDtGet: async function (optionId, userId) {
        const OPTN_DT_GET = gql`
        query($optionId: ID!, $userId: ID!)
            { 
            optionData(optionId: $optionId, userId: $userId)
                {
                    id
                    optionId
                    title
                    description
                    anonymous
                    imagesExist
                    readTime

                    likeCount
                    commentCount
                    upVoteCount 
                    downVoteCount
                    rating

                        optionelementSet 
                            {
                            edges 
                                {
                                node
                                    {
                                    otherchoiceSet
                                        {
                                        edges
                                            {
                                            node
                                                {
                                                value
                                                }
                                            }
                                        }    
                                        
                                    optionLayoutId
                                        { 
                                        optionLayoutId 
                                        label
                                        imagesExist
                                        sortOrder
                                        element
                                            { 
                                            element
                                            }
                                            
                                    
                                        optionlayoutchoiceSet
                                            {
                                                edges{
                                                    node{
                                                        value
                                                    }
                                                }
                                            
                                            } 
                                        }
                                    value 
                                    } 
                                }
                            } 
            
                        fiverId 
                            {
                            fiverId
                            voteType
                            fiverType
                            commentByOther
                            anonymousVote
                            title
                            showVoterlistToOther
                            totalVotes
                            anonymousFiver
                            scheduleDate
                            ended
                            dashboard
                            optnVsbleToOthr
                            optionVoteCount
                            groupId
                                {
                                id
                                groupId
                                title
                                groupType
                                }
                            createdAt
                            createdBy
                                    {
                                    id
                                    username
                                    }
                            }
                    
                        createdAt
                        createdBy
                            {
                            id
                            username
                            }
                }
            }`;

        let variables = {
            optionId: optionId,
            userId: userId === null ? "" : userId
        }

        return await GraphqlAPI.queryCall(
            OPTN_DT_GET,
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
    * optnMenuDtGet - helps to get group menu data.
    *
    * This function helps to get group menu data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpMenuDtGet: async function (groupId, userId) {

        const GROUP_MENU_DATA = gql`
        query($groupId: Int!, $operationBy: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    id
                    groupId
                    title
                    description
                    groupType
                    memberCount
                    fiverCount
                    fiverCreatePermission
                    groupusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
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
            groupId: groupId,
            operationBy: userId === null ? "" : userId
        }

        return await GraphqlAPI.queryCall(
            GROUP_MENU_DATA,
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
    * grpMembrTypeGet - helps to get group menu data.
    *
    * This function helps to get group menu data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpMembrTypeGet: async function (groupId) {

        const GROUP_MEMBR_TYPE_DATA = gql`
        query($groupId: Int!, $operationBy: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    id
                    groupId
                    groupusersSet(userId_Id:$operationBy){
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
            groupId: groupId,
            operationBy: Global.USER_ID === null ? "" : Global.USER_ID
        }

        return await GraphqlAPI.queryCall(
            GROUP_MEMBR_TYPE_DATA,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in group member type data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * bunchDtGet - helps to get bunch data.
    *
    * This function helps to get bunch data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    bunchDtGet: async function (fiverType, bunchId,
        userId, dateTimeStamp) {
        const GRP_FEED_DATA = gql`
        query(
        $bunchId: ID!, 
        $skip: Int, 
        $first: Int, 
        $fiverType: String!,
        $userId: ID!,
        $datetimestamp:String!)
            { 
            bunchFivers(
                bunchId: $bunchId, 
                first: $first, 
                skip: $skip,
                fiverType: $fiverType,
                userId: $userId,
                datetimestamp: $datetimestamp)
                    {
                    fiverId
                    groupId
                        {
                        id
                        title
                        groupId
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
                        

                        }

                    bunchId
                        {
                        bunchId
                        title
                        }
                    createdBy
                        {
                        id
                        }

                    }
            }`


        let variables = {
            bunchId: bunchId,
            skip: 0,
            first: 1,
            fiverType: fiverType,
            userId: userId == null ? "" : userId,
            datetimestamp: dateTimeStamp
        }

        return await GraphqlAPI.queryCall(GRP_FEED_DATA,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },



    /*******************************************************************************
    *
    * grpLastAdminChk - helps to check whether user is last admin of the group.
    *
    * This function helps to check whether user is last admin of the group or not.
    *
    * RETURNS: true if last admin, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpLastAdminChk: async function (groupId, userId) {
        const GRP_MMBR_COUNT_GET = gql`
        query($groupId: Int!, $userId: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    memberCount  
                    groupusersSet(
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
            groupId: groupId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            GRP_MMBR_COUNT_GET,
            variables,
            "no-cache")
            .then((data) => {
                let admin = false;
                let grpSrchDt = data.data.groupSearch;
                if (grpSrchDt.groupSearchList.length > 0) {
                    let memberCount = grpSrchDt.groupSearchList[0].memberCount;
                    if (memberCount === 1)
                        if (grpSrchDt.groupSearchList[0].groupusersSet.edges.length > 0)
                            if (grpSrchDt.groupSearchList[0].groupusersSet.edges[0].node.role === "ADMINISTRATOR")
                                admin = true;


                }
                return admin;
            })
            .catch(error => {
                console.log("Error in GRP_MMBR_COUNT_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * grpAdminChk - helps to check whether user is admin of the group.
    *
    * This function helps to check whether user is admin of the group or not.
    *
    * RETURNS: true if admin, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpAdminChk: async function (groupId, userId) {
        const GRP_MMBR_COUNT_GET = gql`
        query($groupId: Int!, $userId: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    memberCount  
                    groupusersSet(
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
            groupId: groupId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            GRP_MMBR_COUNT_GET,
            variables,
            "no-cache")
            .then((data) => {
                let admin = false;
                if (Global.USER_ID !== null) {
                    let grpSrchDt = data.data.groupSearch;
                    if (grpSrchDt.groupSearchList.length > 0) {
                        if (grpSrchDt.groupSearchList[0].groupusersSet.edges.length > 0)
                            if (grpSrchDt.groupSearchList[0].groupusersSet.edges[0].node.role === "ADMINISTRATOR")
                                admin = true;
                    }
                }
                return admin;
            })
            .catch(error => {
                console.log("Error in GRP_MMBR_COUNT_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * groupsListGet - helps to get groups list.
    *
    * This function helps to get groups list.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    groupsListGet: async function (userId, page, skip, role) {

        const GET_GROUP_LIST = gql`
        query(
            $userId: String!,
            $page:   String!, 
            $first:  Int, 
            $skip:   Int,
            $role:   String!)
                {
            groupList(
                userId:$userId, 
                page:  $page, 
                first: $first, 
                skip:  $skip,
                role:  $role)
                    {
                    groupList
                        {
                        groupId
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
            first: Global.ALL_GROUP_LIST_COUNTER,
            skip: skip,
            role: role,
        }

        return await GraphqlAPI.queryCall(GET_GROUP_LIST,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },

    /*******************************************************************************
    *
    * spacesGet - helps to get spaces data.
    *
    * This function helps to get spaces data.
    *
    * RETURNS: data on success, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    spacesGet: async function (userId, filter) {
        const SPACES_DT_GET = gql`
        query($userId: ID!, $filter: Boolean!)
            { 
            spaceData(userId: $userId, filter: $filter)
                {
                spaceId
                name
                imageUrl  
                }
            }`

        let variables = {
            userId: userId == null ? "0" : userId,
            filter: filter
        }

        return await GraphqlAPI.queryCall(
            SPACES_DT_GET,
            variables,
            "no-cache")
            .then((result) => {
                return result.data.spaceData;
            })
            .catch(error => {
                console.log("Error in GRP_MMBR_COUNT_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * userSpacesGet - helps to get user spaces data.
    *
    * This function helps to get user spaces data.
    *
    * RETURNS: data on success, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    userSpacesGet: async function (userId) {
        const USER_SPACES_DT_GET = gql`
    query($userId: String!)
    { userProfile(userId: $userId)
        {
            userData{
            user{                   
                userspacesSet{
                edges{
                    node{
                    spaceId{
                        spaceId
                        name
                        description
                        imageUrl
                    }
                    }
                }
                }
            }         
            }
        }
    }`

        let variables = {
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            USER_SPACES_DT_GET,
            variables,
            "no-cache")
            .then((result) => {
                return result.data.userProfile.userData[0].user.userspacesSet.edges;
            })
            .catch(error => {
                console.log("Error in GRP_MMBR_COUNT_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * grpFvrCountGet - helps to get group fivers count.
    *
    * This function helps to get group fivers count.
    *
    * RETURNS: Count on success, False otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpFvrCountGet: async function (groupId) {

        const GROUP_FVR_COUNT_DATA = gql`
        query($groupId: Int!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    fiverCount
                    }
                }
            }`

        let variables = {
            groupId: groupId
        }

        return await GraphqlAPI.queryCall(
            GROUP_FVR_COUNT_DATA,
            variables,
            "no-cache")
            .then((data) => {
                let grpDt = data.data.groupSearch.groupSearchList;
                if (grpDt.length > 0)
                    return grpDt[0].fiverCount;
                else
                    return false;
            })
            .catch(error => {
                console.log("Error in GROUP_FVR_COUNT_DATA query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * statesGet - helps to get states list based on country.
    *
    * This function helps to get states list based on country.
    *
    * RETURNS: List on success, False otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    statesGet: async function (userId, countryId) {

        const STATE_LIST_GET = gql`
        query($userId: ID!, $countryId: ID!)
            {
            stateData(userId: $userId, countryId: $countryId)
                {
                stateId
                stateName
                }
            }`

        let variables = {
            userId: userId == null ? "" : userId,
            countryId: countryId
        }

        return await GraphqlAPI.queryCall(
            STATE_LIST_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.stateData
            })
            .catch(error => {
                console.log("Error in STATE_LIST_GET query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * countriesGet - helps to get country list based.
    *
    * This function helps to get country list based.
    *
    * RETURNS: List on success, False otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    countriesGet: async function (userId) {

        const COUNTRY_LIST_GET = gql`
        query($userId: ID!) 
            {
            countryData(userId: $userId)
                {
                countryName
                countryId
                }
            }`

        let variables = {
            userId: userId == null ? "" : userId
        }

        return await GraphqlAPI.queryCall(
            COUNTRY_LIST_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.countryData
            })
            .catch(error => {
                console.log("Error in COUNTRY_LIST_GET query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * responseVotsDtGet - helps to get fiver's responses votes data.
    *
    * This function helps to get fiver's responses votes data.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    responsesVotsDtGet: async function (fiverId, anonymous, entityFilter) {
        const RESPONSE_VOTES_GET = gql`
        query(
            $fiverId: ID!,  
            $anonymous: Boolean,
            $entityFilter:JSONString)
            { 
            responsesVotesGet(
                fiverId: $fiverId,  
                anonymous: $anonymous,
                data: $entityFilter)
                    {
                    fieldCountDt
                        {
                        optionId
                        title
                        voteCount
                        }
                    }
            }`

        let variables = {
            fiverId: fiverId,
            anonymous: anonymous,
            entityFilter: entityFilter
        }

        return await GraphqlAPI.queryCall(
            RESPONSE_VOTES_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error RESPONSE_VOTES_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fvrSentimentsGet - helps to get fiver sentiments data.
    *
    * This function helps to get fiver sentiments data.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrSentimentsGet: async function (fiverId, entityFilter) {
        const FVR_SENTIMNTS_GET = gql`
        query($fiverId: ID!, $entityFilter: JSONString)
            { 
            fiverSentiments(fiverId: $fiverId, data: $entityFilter)
                {
                positive
                negative
                commentCount
                }
            }`
        let variables = {
            fiverId: fiverId,
            entityFilter: entityFilter
        }

        return await GraphqlAPI.queryCall(
            FVR_SENTIMNTS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data
            })
            .catch(error => {
                console.log("Error FVR_SENTIMNTS_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * optnSentimentsGet - helps to get options sentiments data.
    *
    * This function helps to get options sentiments data.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnSentimentsGet: async function (optionId, entityFilter) {
        const OPTN_SENTIMNTS_GET = gql`
        query($optionId: ID!, $entityFilter: JSONString)
            { 
            optionSentiments(optionId: $optionId, data: $entityFilter)
                {
                positive
                negative
                commentCount
                }
            }`

        let variables = {
            optionId: optionId,
            entityFilter: JSON.stringify(entityFilter)
        }

        return await GraphqlAPI.queryCall(
            OPTN_SENTIMNTS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data;
            })
            .catch(error => {
                console.log("Error OPTN_SENTIMNTS_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * fvrIntroReadSet - helps to set fiver's intro read status.
    *
    * This function helps to set fiver's intro read status.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrIntroReadSet: async function (isMobile) {
        // query for setting intro read status
        const INTRO_READ_SET = gql`
        query($userId: ID!, $mobileIntro: Boolean)
            {
            fvrIntroReadSet(userId: $userId, mobileIntro: $mobileIntro)
                {
                userProfileId
                }
            }`;

        let variables = {
            userId: Global.USER_ID,
            mobileIntro: isMobile !== undefined ? isMobile : false
        }

        return await GraphqlAPI.queryCall(INTRO_READ_SET,
            variables,
            'no-cache').then(result => {
                return result
            });
    },



    /*******************************************************************************
    *
    * survyDatePickrDtGet - helps to set survey's date-picker data.
    *
    * This function helps to set survey's date-picker data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    survyDatePickrDtGet: async function (fiverId, layoutId, filters) {
        // query for setting intro read status
        const DATE_PICKR_DT_GET = gql`
        query($fiverId: ID!, 
              $layoutId: ID!,
              $filters: JSONString)
            {
            surveyDatePickrDtGet(fiverId: $fiverId, 
                layoutId: $layoutId,
                data: $filters
                )
                {
                optionVotesDt
                    {
                    day
                    voteCount
                    }
                }
            }`;

        let variables = {
            fiverId: fiverId,
            layoutId: layoutId,
            filters: JSON.stringify(filters)
        }

        return await GraphqlAPI.queryCall(
            DATE_PICKR_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.surveyDatePickrDtGet;
            })
            .catch(error => {
                console.log("Error DATE_PICKR_DT_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * inValidTokenHndlr - helps to hanlde event when token not valid
    *
    * This function  helps to hanlde event when token not valid,
    * redirect to root of website.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    inValidTokenHndlr(props, redirect) {
        try {
            // Global.USER_ID = null;
            /* if (pathName.startsWith("/" + Global.FIVER) ||
                pathName.startsWith("/" + Global.OPTION))
                console.warn("Don't redirect");
            else */
            if (window.location.pathname !== "/" + Global.DEFAULT_PAGE)
                window.location.replace("/" + Global.DEFAULT_PAGE);
        } catch (error) {
            console.warn(error)
        }

    },


    /*******************************************************************************
    *
    * grpDtGet - helps to get group data.
    *
    * This function helps to get group data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpDtGet: async function (groupId, operationBy) {

        const GRP_DT_GET = gql`
        query($groupId: Int!, $operationBy: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    id
                    groupId
                    isSystem
                    title
                    description
                    groupType
                    memberCount
                    fiverCount
                    fiverCreatePermission
                    allowIndexing
                    
                    groupimageSet{
                        edges{
                          node{
                            id
                            url
                          }
                        }
                      }

                    groupspacesSet{
                    edges{
                        node{
                        spaceId{
                            spaceId
                            name
                            description
                            imageUrl
                        }
                        }
                    }
                    }

                    groupusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
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
            groupId: groupId,
            operationBy: operationBy
        }

        return await GraphqlAPI.queryCall(
            GRP_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.groupSearch;
            })
            .catch(error => {
                console.log("Error GRP_DT_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * usrNameExstsChck - helps to check whether the username already exists
    *
    * This function helps to check whether the username already exists
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrNameExstsChck: async function (userName) {
        const USER_NAME_EXSTS = gql`
        query($userName: String!)
            {
            usernameExist(username:$userName)
                {
                result
                }
            }`

        let variables = { userName: userName }
        return await GraphqlAPI.queryCall(
            USER_NAME_EXSTS,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.usernameExist.result;
            })
            .catch(error => {
                console.log("Error USER_NAME_EXSTS  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * scrollJumpHndlr - helps to handle jump effect with modal open event.
    *
    * This function helps to handle jump effect with modal open event.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    scrollJumpHndlr(resetScroll) {
        try {
            console.warn(resetScroll)
            if (resetScroll === false) {
                const documentWidth = document.documentElement.clientWidth;
                const windowWidth = window.innerWidth;
                const scrollBarWidth = windowWidth - documentWidth;
                document.getElementsByTagName("body")[0].style.paddingRight = scrollBarWidth + "px";
                var txt = document.getElementsByClassName('navBarTronAppHeader')[0];
                let orgnlPadding = (window.getComputedStyle(txt, null).getPropertyValue('padding-right'));
                let paddingDiv = parseInt(orgnlPadding) + parseInt(scrollBarWidth) + "px"
                document.getElementsByClassName("navBarTronAppHeader")[0].style.padding = "0px " + paddingDiv;
            }
            else
                document.getElementsByClassName("navBarTronAppHeader")[0].style.padding = "0px calc((100vw - 1450px)/2)";



        } catch (error) {
            console.warn(error)
        }
    },


    /*******************************************************************************
    *
    * grpIvitdUsrsListGet - helps to get groups' invited users list.
    *
    * This function  helps to get groups' invited users list.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpInvitdUsrsListGet: async function (groupId, userId, skip) {
        const GRP_INVITD_USRS = gql`
        query($groupId: Float!, $userId: String!, 
            $first: Int, $skip: Int)
            {
            groupIdInvites(groupId: $groupId, 
                userId:$userId, 
                first: $first, 
                skip: $skip)
                {
                groupList
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
            groupId: groupId,
            userId: userId,
            first: Global.GRP_INVTD_USR_LIST_COUNTR,
            skip: skip,
        }
        return await GraphqlAPI.queryCall(
            GRP_INVITD_USRS,
            variables,
            "no-cache")
            .then((data) => {
                return data.data["groupIdInvites"]["groupList"]
            })
            .catch(error => {
                console.log("Error GRP_INVITD_USRS  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * optionEditDtGet - helps to get option data, which will be used for editing.
    *
    * This function helps to get option data, which will be used for editing.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionEditDtGet: async function (fiverId, optionId, userId) {
        const OPTN_EDIT_DT_GET = gql`
        query($fiverId: ID!, $userId: ID!, 
            $optionId: ID!)
            {
            optionEditData(fiverId: $fiverId, 
                userId:$userId, 
                optionId: $optionId)
                {
                layoutId
                layoutLabel
                component
                value
                choices
                imageCount
                otherValue
                required
                imageUrl
                imagesExist
                description
                }
            }`

        let variables = {
            fiverId: fiverId,
            userId: userId,
            optionId: optionId
        }
        return await GraphqlAPI.queryCall(
            OPTN_EDIT_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data["optionEditData"];
            })
            .catch(error => {
                console.log("Error OPTN_EDIT_DT_GET  query: ", error);
                return null;
            });
    },


    /*******************************************************************************
    *
    * optionCrtDtGet - helps to get layout data, which will be used for creating.
    *
    * This function helps to get layout data, which will be used for creating.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionCrtDtGet: async function (fiverId, userId) {
        const OPTN_CRT_DT_GET = gql`
        query($fiverId: ID!, $userId: ID!)
            {
            optionCreateData(fiverId: $fiverId, 
                userId:$userId)
                {
                layoutId
                layoutLabel
                component
                value
                choices
                imageCount
                otherValue
                required
                imageUrl
                imagesExist
                sortOrder
                description
                }
            }`

        let variables = {
            fiverId: fiverId,
            userId: userId === null ? "" : userId
        }
        return await GraphqlAPI.queryCall(
            OPTN_CRT_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data["optionCreateData"];
            })
            .catch(error => {
                console.log("Error OPTN_CRT_DT_GET  query: ", error);

                return false;
            });
    },



    /*******************************************************************************
    *
    * optnCrtdByUsrStatus - helps to check whether user has created response or not.
    *
    * This function helps to check whether user has created response or not.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnCrtdByUsrStatus: async function (fiverId, userId) {
        const OPTN_CRT_DT_GET = gql`
        query($fiverId: Int!, $userId: String!)
            {
            optionCreateStatus(fiverId: $fiverId, 
                userId:$userId)
                {
                hasOption
                }
            }`

        let variables = {
            fiverId: fiverId,
            userId: userId
        }
        return await GraphqlAPI.queryCall(
            OPTN_CRT_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data["optionCreateStatus"];
            })
            .catch(error => {
                console.log("Error OPTN_CRT_DT_GET  query: ", error);

                return false;
            });
    },


    /*******************************************************************************
    *
    * optnCrtFvrSummryDtGet - helps to get fiver's  data.
    *
    * This function helps to get fiver's  data, 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnCrtFvrSummryDtGet: async function (fiverId, userId, optionsCount) {
        const OPTN_CRT_FVR_SUMMRY_GET = gql`
        query($fiverId: Float!, $userId: ID!, $optionsCount: Int!,)
        { 
        fiverSearch(fiverId: $fiverId)
            {
            edges{
                  node
                    {
                    title
                    description
                    optionsExist
                    totalVotes
                    likeCount
                    commentCount
                    optionsCount
                    optionByOther
                    fiverType
                    mobileResponseLayout
                    voteType
                    ended
                    showVoterlistToOther
                    responseTitleDescription
                    anonymousOption
                    quizRetake

                    fiverimageSet(first:1){
                        edges{
                          node{
                            url
                          }
                        }
                      }

                    optionSet(first: $optionsCount,  
                        after: "0", 
                        isApproved: true, 
                        createdBy_Id: $userId){
                            edges{
                                node{
                                optionId
                                }
                            }
                        }



                    groupId
                        {
                        id
                        groupId
                        title
                        groupType
                        

                        groupusersSet(userId_Id:$userId, membership:"ACCEPTED"){
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
                    createdBy
                        {
                        id
                        username
                        }

                    }
                }
            }
        }`;

        let variables = {
            "fiverId": fiverId,
            userId: userId == null ? "" : userId,
            optionsCount: optionsCount
        }

        return await GraphqlAPI.queryCall(
            OPTN_CRT_FVR_SUMMRY_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error OPTN_CRT_FVR_SUMMRY_GET  query: ", error);

                return false;
            });
    },

    /*******************************************************************************
    *
    * fvrTypeGet - helps to get fiver's  type.
    *
    * This function helps to get fiver's  type, 
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrTypeGet: async function (fiverId) {
        const FVR_TYPE_GET = gql`
        query($fiverId: Float!)
        { 
        fiverSearch(fiverId: $fiverId)
            {
            edges{
                  node{
                    fiverType
                    }
                }
            }
        }`;

        let variables = {
            "fiverId": fiverId,
        }

        return await GraphqlAPI.queryCall(
            FVR_TYPE_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.fiverSearch.edges[0].node.fiverType;
            })
            .catch(error => {
                console.log("Error FVR_TYPE_GET query: ", error);

                return false;
            });
    },

    /*******************************************************************************
    *
    * optnsFeedGet - helps to get feed of options for fiver.
    *
    * This function  helps to get feed of options for fiver.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnsFeedGet: async function (fiverId, userId, skip, sortBy) {
        const OPTNS_FEED_GET = gql`
        query($fiverId: ID!, $userId: ID!, 
            $first: Int, $skip: Int)
            {
            optionFeed(fiverId: $fiverId, 
                userId:$userId, 
                first: $first, 
                skip: $skip)
                    {
                    id
                    optionId
                    title
                    description
                    anonymous
                    imagesExist
                    readTime
        
                    likeCount
                    commentCount
                    upVoteCount 
                    downVoteCount
                    rating
                    alias
                    pageId
                      {
                      id
                      title
                      groupId
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
                      }
        
                    optionreadstatusSet(readBy_Id:$userId){
                        edges{
                            node{
                            id
                        }
                        }
                        }
                    optioncommentsSet(createdBy_Id:$userId, first:1){
                        edges{
                            node{
                            createdBy{
                                id
                                username
                            }
                            }
                        }
                        }  
                        
                        
                optionlikeSet(createdBy_Id:$userId){
                        edges{
                            node{
                            createdBy{
                                id
                                username
                            }
                            }
                        }
                        }
        
                    optionratingSet(createdBy_Id:$userId)
                        {
                        edges
                            {
                            node
                                {
                                voteType
                                upVote
                                downVote
                                rangeVote
                                }
                            }
                        }
        
                    optionpertaginfoSet
                        {
                        traitId
                            {
                            traitId
                            }
        
                        traitsName
                        traitUpVoteCount
                        traitDownVoteCount
                        }
                
                        optionelementSet 
                            {
                            edges 
                                {
                                node
                                    {
                                    otherchoiceSet
                                        {
                                        edges
                                            {
                                            node
                                                {
                                                value
                                                }
                                            }
                                        }    
                                        
                                    optionLayoutId
                                        { 
                                            optionLayoutId 
                                            label
                                            imagesExist
                                            sortOrder
                                            required
                                            imageCount
                                            videoCount
                                            element
                                                { 
                                                element
                                                }
                                                
                                        
                                            optionlayoutchoiceSet
                                                {
                                                    edges{
                                                        node{
                                                        value
                                                        }
                                                    }
                                                
                                                } 
                                        }
                                        value
                                        optionElementId 
                                    } 
                                    }
                            } 
            
            
            
            
                        
                        fiverId 
                                {
                                fiverId
                                voteType
                                fiverType
                                commentByOther
                                anonymousVote
                                title
                                showVoterlistToOther
                                totalVotes
                                anonymousFiver
                                scheduleDate
                                ended
                                dashboard
                                optnVsbleToOthr
                                optionVoteCount
                                optionModerationByOwner
                                optionEdit
                                alias
                                pageId
                                  {
                                  id
                                  title
                                  groupId
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
                                  }
                                groupId
                                {
                                id
                                groupId
                                title
                                groupType
        
                                
                                groupusersSet(userId_Id:$userId, membership:"ACCEPTED"){
                                    edges{
                                        node{
                                        membership
                                        role
                                        }
                                    }
                                    }
                                }
            
                                
                                createdAt
                                createdBy
                                        {
                                        id
                                        username
                                        profile
                                        {
                                        userPic
                                        }
                                        }
                                }
                        
                        
                            
                        createdAt
                        createdBy
                            {
                            id
                            username
                            profile
                                {
                                userPic
                                verifiedHandle
                                }
                            }
                    }
            }`

        let variables = {
            fiverId: fiverId,
            userId: userId === null ? "" : userId,
            first: Global.FVR_PAGE_OPTIONS_FEED_COUNT,
            skip: skip,
            sortBy: sortBy
        }
        return await GraphqlAPI.queryCall(
            OPTNS_FEED_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error OPTNS_FEED_GET  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * quizResponsScoreGet - helps to score of response of quiz.
    *
    * This function helps to score of response of quiz.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    quizResponsScoreGet: async function (optionId, fiverId, userId) {
        const OPTN_SCORE_GET = gql`
        query($optionId: ID!, $fiverId: ID!, $userId: ID!)
            {
            answerScore(
                optionId:$optionId,
                fiverId: $fiverId, 
                userId:$userId)
                {
                total
                score
                }
            }`

        let variables = {
            optionId: optionId,
            fiverId: fiverId,
            userId: userId
        }
        return await GraphqlAPI.queryCall(
            OPTN_SCORE_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data["answerScore"];
            })
            .catch(error => {
                console.log("Error OPTN_CRT_DT_GET  query: ", error);

                return false;
            });
    },

    /*******************************************************************************
    *
    * userIdGet - helps to get the userId from name.
    *
    * This function helps to get the userId from name.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    userIdGet: async function (username) {
        const USER_ID_EXTRACT = gql`
        query($userName: String!){ 
            getUserId(userName: $userName) {
                userData {
                user {
                    id
                }
                }
            }
        }`
        let variables = {
            userName: username
        }

        return await GraphqlAPI.queryCall(
            USER_ID_EXTRACT,
            variables,
            "no-cache")
            .then((res) => {
                //console.log(data.data)
                return res.data.getUserId.userData[0].user.id
            })
            .catch(error => {
                console.log("Error in user Id get query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * optionsForApprovalGet - helps to get approval options in a fiver.
    *
    * This function helps to get approval options in a fiver.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionsForApprovalGet: async function (fId) {
        const MODERATION_OPTION_DATA = gql`
        query($fiverId: ID!){
            optionsForApprovalByFiverIdGet(fiverId: $fiverId)
              {
              optionId
              anonymous
              optionelementSet{
                  edges{
                      node
                          {
                          optionLayoutId
                              {
                              optionLayoutId
                              label
                              sortOrder
                              }
                          value
                          }
                      }
                }      
              createdAt
              createdBy{
                  id
                  username
                  profile
                      {
                      userPic
                      }
                  }
              }
        }`
        let variables = {
            fiverId: fId
        }

        return await GraphqlAPI.queryCall(
            MODERATION_OPTION_DATA,
            variables,
            "no-cache")
            .then((res) => {
                //console.log(data.data)
                return res.data.optionsForApprovalByFiverIdGet
            })
            .catch(error => {
                console.log("Error in getting options for approval: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * fiverSettingsGet - helps to get fiver's settings.
    *
    * This function helps to get fiver's settings.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverSettingsGet: async function (fiverId, userId) {
        const FIVER_SETTINGS_GET = gql`
        query($fiverId: ID!, $userId: ID!)
            { 
            fiverData(fiverId: $fiverId, userId: $userId)
                {
                fiverType
                anonymousFiver
                optionByOther
                optionAddCount
                mobileResponseLayout
                anonymousOption
                optionModerationByOwner
                optionEdit
                quizRetake

                commentByOther
                
                optionVoteCount
                anonymousVote
                showVoterlistToOther

                optnVsbleToOthr
                showThankyouNote
                thanksShare
                filters

                groupId{
                    id
                    title
                    groupId
                    groupType
                    }

                fiverfiltersSet{
                    edges{
                      node{
                       
                        stateIds{
                            countryId{
                              countryId
                              countryName
                            }
                            stateId
                            stateName
                          }

                        gender
                        generation
                      }
                    }
                  }

                fiverthankyounoteSet
                    {
                    edges
                        {
                        node
                            {
                            title
                            description
                            }
                        }
                    }
                createdBy
                    {
                    id
                    } 
                }
            }`
        let variables = {
            fiverId: fiverId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            FIVER_SETTINGS_GET,
            variables,
            "no-cache")
            .then((data) => {
                // console.log(data)
                return data
            })
            .catch(error => {
                console.log("Error in OPTN_VSBL_STATUS_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * currntUrlDtGet - helps to get current url data.
    *
    * This function helps to get current url data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    currntUrlDtGet() {
        let url = window.location.href;
        var rest = url.substring(0, url.lastIndexOf("/") + 1);
        var lastParam = url.substring(url.lastIndexOf("/") + 1, url.length);
        rest = rest.substring(0, rest.length - 1);
        let m = rest.lastIndexOf('/');
        var secondLastParam = rest.substring(m + 1);

        return {
            lastParam: lastParam,
            secondLastParam: secondLastParam
        }
    },

    /*******************************************************************************
    *
    * currntUrlDtGet - helps to get current url data.
    *
    * This function helps to get current url data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    itemActiveStatusGet(itemId, itemType) {
        // get url data 
        let urlDt = this.currntUrlDtGet();
        let lastParam = parseInt(urlDt.lastParam);
        let secondLastParam = urlDt.secondLastParam;
        // check url has id as last param \
        if ((Number.isInteger(lastParam) === true) &&
            (secondLastParam === Global.GROUP ||
                secondLastParam === Global.FIVER ||
                secondLastParam === Global.BUSSINESS_PAGE)
        ) {

            if (lastParam === parseInt(itemId) &&
                secondLastParam === itemType) {
                return true;
            }
        }

        return false;
    },


    /*******************************************************************************
    *
    * hdrNavActivItmStatusGet - helps to active status for header nav item.
    *
    * This function helps to active status for header nav item.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    hdrNavActivItmStatusGet(itemType) {
        // get url data 
        let urlDt = this.currntUrlDtGet();
        let lastParam = (urlDt.lastParam);
        let secondLastParam = urlDt.secondLastParam;

        if ((lastParam === Global.NOTIF ||
            lastParam === Global.EXPLORE ||
            lastParam === Global.HOME) &&
            itemType === lastParam)
            return true

        return false;
    },


    /*******************************************************************************
    *
    * optnVoteCountPermsnChk - helps to get permission for how many options a user
    * can vote in a fiver.
    *
    * This function helps to get permission for how many options a user
    * can vote in a fiver.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optnVoteCountPermsnChk: async function (fiverId, userId) {
        const OPTN_VOTE_COUNT_PRMSN = gql`
        query($fiverId: ID!, $userId: ID!)
            { 
            permitOptionVoteCount(fiverId: $fiverId, userId: $userId)
                {
                error
                permit
                totalVotes
                }
            }`
        let variables = {
            fiverId: fiverId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            OPTN_VOTE_COUNT_PRMSN,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in OPTN_VOTE_COUNT_PRMSN  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * trendingFeedGet - helps to get trending feed data.
    *
    * This function helps to get trending feed data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    trendingFeedGet: async function (feedCounter, fiverType, resultCount, country) {
        const TRNDING_FEED_DATA = gql`
        query($counter: Int, $first: Int, $count: Int, $fiverType: String!, $userId: ID!, $country: String!) { 
            trendingFivers(first: $first, skip: $counter, fiverType: $fiverType, country: $country){
            bunchId
                {
                bunchId
                }
      
            groupId{
                id
                title
                groupId
                groupType
                }

        
          fiverId
          imagesExist
          videosExist
          optionsExist
          endDate
          totalVotes
          title
          description
          url
          metaData
          createdAt
          likeCount
          voteType
          commentCount
          optionsCount
          optionByOther
          commentByOther
          anonymousOption
          anonymousVote
          showVoterlistToOther
          optionModerationByOwner
          fiverType
          anonymousFiver
          scheduleDate
          ended
          dashboard
          optnVsbleToOthr
          optionVoteCount
          sharedFiverId
          alias
          pageId
            {
            id
            title
            groupId
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
            }
          createdBy{
            id
            username
            profile
              {
              userPic
              verifiedHandle
              }
          }


          fivertraitSet{
           trait
           traitId
           }

          optionSet(first: $count, isApproved: true){
            pageInfo{
              startCursor
              hasNextPage
            }
            edges{
              node{

                likeCount
                commentCount
                readTime
                optionId
                imagesExist
                createdAt
                anonymous

                upVoteCount 
                downVoteCount
                rating

                alias
                pageId
                    {
                    id
                    title
                    groupId
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
                    }
                fiverId 
                    {
                    fiverId
                    voteType
                    }

                optionpertaginfoSet
                    {
                    traitId
                        {
                        traitId
                        }
                    traitsName
                    traitUpVoteCount
                    traitDownVoteCount
                    }

                    optionratingSet(createdBy_Id:$userId)
                        {
                        edges
                            {
                            node
                                {
                                id
                                voteType
                                upVote
                                downVote
                                rangeVote
                                }
                            }
                        }


                upVoteCount 
                downVoteCount
                rating

                createdBy{
                  id
                  username
                  profile
                    {
                    userPic
                    verifiedHandle
                    }
                }
               
                 createdBy{
                 id
                 username
                 profile
                  {
                  userPic
                  verifiedHandle
                  }
                 }
           
                optionelementSet{
                  edges{
                    node{
                      optionLayoutId{
                        optionLayoutId
                        label
                        sortOrder
                      }
                    value
                    }
                  }
                }
          }
        }
        }
          }
      
        
      
        }`

        let variables = {
            userId: Global.USER_ID === null ? "" : Global.USER_ID,
            // operationBy: Global.USER_ID,
            counter: feedCounter,
            first: resultCount !== undefined ? resultCount : Global.FEED_COUNTR,
            count: Global.FEED_PAGE_OPTIONS_COUNT,
            fiverType: fiverType,
            country: country

        }

        return await GraphqlAPI.queryCall(TRNDING_FEED_DATA,
            variables,
            'no-cache').then(result => {
                //console.warn(result)
                return result
            });
    },


    /*******************************************************************************
    *
    * grpsSimlrGet - helps to get similar group ids.
    *
    * This function helps to get similar group ids.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpsSimlrGet: async function (title, suggstnsCount) {
        // group suggestions  
        return await awsHelper.grpDuplicatsGet("newgroup", title, suggstnsCount).then(result => {
            if (result !== false)
                return result.hits.hits;
            else
                return false;
        });
    },


    /*******************************************************************************
    *
    * feedSettingUpdate - helps to handle settings update of feed.
    *
    * This function helps to handle settings update of feed.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    feedSettingUpdate: async function (userId, sortOrder) {
        const FEED_SETTINGS_UPDT = gql`
        query($userId: ID!, $sortOrder: String!)
            {
            feedSettingUpdate(userId: $userId, sortOrder: $sortOrder)
                {
                userProfileId
                }
            }`;

        let variables = {
            userId: userId,
            sortOrder: sortOrder
        }

        return await GraphqlAPI.queryCall(
            FEED_SETTINGS_UPDT,
            variables,
            "no-cache")
            .then((data) => {
                if (data.feedSettingUpdate !== null)
                    return true;
                else
                    return false;
            })
            .catch(error => {
                console.log("Error in FEED_SETTINGS_UPDT data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * feedSettingGet - helps to handle settings update of feed.
    *
    * This function helps to handle settings update of feed.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    feedSettingGet: async function (userId) {
        const FEED_SETTINGS_GET = gql`
        query($userId: ID!, $sortOrder: String!)
            {
            userProfile(userId: $userId, sortOrder: $sortOrder)
                {
                userData
                        {
                        user
                            {
                            feedSortOrder
                            }
                        }
                }
            }`;

        let variables = {
            userId: userId
        }

        return await GraphqlAPI.queryCall(
            FEED_SETTINGS_GET,
            variables,
            "no-cache")
            .then((data) => {
                let profileDt = data.data.userProfile.userData[0];
                if (profileDt !== undefined) {
                    return profileDt.user;
                }
                else
                    return false;
            })
            .catch(error => {
                console.log("Error in FEED_SETTINGS_GET data query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * notifSettingGet - helps to handle settings update of notifications.
    *
    * This function helps to handle settings update of notifications.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    notifSettingGet: async function (userId) {
        const NOTIF_SETTINGS_GET = gql`
        query($userId: String!){
            userProfile(userId: $userId){
                userData {
                    user {
                      usernotifysettingSet {
                        edges {
                          node {
                            notifyLike
                            notifyVote
                            notifyComments
                            notifyOptionCreate
                            emailOptionCreate
                            emailGroupInvite
                            emailGroupRequest
                            groupFiverCreate
                          }
                        }
                      }
                    }
                }
            }
        }`;

        let variables = {
            userId: userId
        }

        return await GraphqlAPI.queryCall(
            NOTIF_SETTINGS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.userProfile.userData[0].user.usernotifysettingSet.edges[0]
            })
            .catch(error => {
                console.log("Error in NOTIF_SETTINGS_GET data query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * notifSettingUpdate - helps to handle settings update of notifications.
    *
    * This function helps to handle settings update of notifications.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    notifSettingUpdate: async function (userId, notifyComments, notifyVote, notifyOptionCreate, notifyLike, emailOptionCreate, emailGroupInvite, emailGroupRequest, groupFiverCreate) {
        const NOTIF_SETTINGS_GET = gql`
        query($userId: ID!, 
            $notifyComments: Boolean,
            $notifyVote: Boolean,
            $notifyOptionCreate:Boolean,
            $notifyLike:Boolean,
            $emailOptionCreate:Boolean,
            $emailGroupInvite:Boolean,
            $emailGroupRequest:Boolean,
            $groupFiverCreate: Boolean){
            notifySettingUpdate(userId: $userId,
                notifyComments:$notifyComments, 
                notifyVote:$notifyVote, 
                notifyOptionCreate:$notifyOptionCreate,
                notifyLike:$notifyLike,
                emailOptionCreate:$emailOptionCreate,
                emailGroupInvite:$emailGroupInvite,
                emailGroupRequest:$emailGroupRequest,
                groupFiverCreate: $groupFiverCreate){
                    userNotifySettingId
            }
        }`;

        let variables = {
            userId: userId,
            notifyComments: notifyComments,
            notifyVote: notifyVote,
            notifyOptionCreate: notifyOptionCreate,
            notifyLike: notifyLike,
            emailOptionCreate: emailOptionCreate,
            emailGroupInvite: emailGroupInvite,
            emailGroupRequest: emailGroupRequest,
            groupFiverCreate: groupFiverCreate
        }

        return await GraphqlAPI.queryCall(
            NOTIF_SETTINGS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in NOTIF_SETTINGS_GET data query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fiverSimlrsGet - helps to get similar fiver ids.
    *
    * This function helps to get similar fiver ids.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverSimlrsGet: async function (title, suggstnsCount, fvrType) {

        if (fvrType === null)
            // fiver suggestions  
            return await awsHelper.search("quession", title, suggstnsCount).then(result => {
                if (result !== false)
                    return result.hits.hits;
                else
                    return false;
            });

        else
            // fiver suggestions  
            return await awsHelper.fvrsByTypGet("quession", title, suggstnsCount, fvrType).then(result => {
                if (result !== false)
                    return result.hits.hits;
                else
                    return false;
            });
    },

    /*******************************************************************************
    *
    * usrDtByUsrNameGet - helps to get the user data by user name.
    *
    * This function helps to get the user data by user name.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrDtByUsrNameGet: async function (username) {
        const USER_ID_EXTRACT = gql`
        query($userName: String!){ 
            getUserId(userName: $userName) {
                userData {
                user {
                    id
                    username
                }
                userPic
                gender
                aboutMe
                firstName
                }
            }
        }`
        let variables = {
            userName: username
        }

        return await GraphqlAPI.queryCall(
            USER_ID_EXTRACT,
            variables,
            "no-cache")
            .then((res) => {
                return res.data.getUserId.userData[0];
            })
            .catch(error => {
                console.log("Error in user Id get query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * grpBlockdUsrsGet - helps to get group's blocked users.
    *
    * This function helps to get group's blocked users.
    *
    * RETURNS: ARRAY, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpBlockdUsrsGet: async function (groupId, userId) {

        const GROUP_BLOCKD_USRS = gql`
        query($groupId: Int!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    groupusersSet(membership:"BLOCKED"){
                    edges{
                        node{
                        userId
                            {
                            id
                            username
                            profile 
                                {
                                userPic
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
            groupId: groupId,
        }

        return await GraphqlAPI.queryCall(
            GROUP_BLOCKD_USRS,
            variables,
            "no-cache")
            .then((data) => {
                let grpSrchDt = data.data.groupSearch.groupSearchList;
                if (grpSrchDt.length > 0)
                    return grpSrchDt[0].groupusersSet;
                else
                    return false

            })
            .catch(error => {
                console.log("Error in GROUP_BLOCKD_USRS data query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * GroupQrCodes - helps to get qr codes in a group.
    *
    * This function helps to get qr codes in a group.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    getGroupQrCodes: async function (groupId) {
        const GROUP_QR_CODES = gql`
        query($groupId: ID!, $userId: ID!) {
            qrCodeList(groupId: $groupId, userId: $userId){
                qrCodeId
                fiverId{
                    fiverId
                    title
                    imagesExist
                    fiverimageSet(first:1){
                        edges{
                          node{
                            url
                          }
                        }
                      }
                }
                name
                description
                location
            }
        }`

        let variables = {
            groupId: groupId,
            userId: Global.USER_ID !== null ? Global.USER_ID : ""
        }

        return await GraphqlAPI.queryCall(
            GROUP_QR_CODES,
            variables,
            "no-cache")
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log("Error in group qr codes get query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * qrCodeDataGet - helps to get qr codes data.
    *
    * This function helps to get qr codes data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    qrCodeDataGet: async function (qrCodeId) {
        const QR_CODE_DATA = gql`
        query($qrCodeId: ID!) {
            qrCodeData(qrCodeId: $qrCodeId){
                qrCodeId
                fiverId{
                    fiverId
                    fiverType
                    title
                }
                name
                description
                location
            }
        }`

        let variables = {
            qrCodeId: qrCodeId
        }

        return await GraphqlAPI.queryCall(
            QR_CODE_DATA,
            variables,
            "no-cache")
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log("Error in qr code data get query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * qrCodeFvrSugg - helps to get qrCode edit fvr suggestions.
    *
    * This function helps to get qrCode edit fvr suggestions.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    qrCodeFvrSuggestions: async function (feedCounter, grpId, dateTimeStamp) {
        const QR_SUGG_DATA = gql`
        query(
            $groupId: ID!, 
            $counter: Int, 
            $first: Int, 
            $userId: ID!,
            $datetimestamp:String!){ 
            newGroupFeed(
                groupId: $groupId, 
                first: $first, 
                skip: $counter,
                userId: $userId,
                datetimestamp: $datetimestamp
                ){
                    fiverId
                    title
                    description
                    fiverType
                    alias
                    anonymousFiver
                    createdAt
                    createdBy{
                        id
                        username
                        profile{
                            userPic
                            verifiedHandle
                        }
                    }
                    pageId{
                        id
                        title
                        groupId
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
                    }
                }      
            }`

        let variables = {
            groupId: grpId,
            counter: feedCounter,
            first: Global.FEED_COUNTR,
            userId: Global.USER_ID === null ? "" : Global.USER_ID,
            datetimestamp: dateTimeStamp
        }
        return await GraphqlAPI.queryCall(QR_SUGG_DATA,
            variables,
            'no-cache').then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * qrCodeSrcFvrGet - helps to get qrCode edit search suggestions.
    *
    * This function helps to get qrCode edit fvr search suggestions.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    qrCodeSrcFvrGet: async function (fId) {
        const QR_SRC_SUGG_DATA = gql`
        query($fiverId: Float!){ 
            fiverSearch(fiverId: $fiverId){
                edges{
                    node{
                        title
                        description
                        fiverType
                        voteType
                        anonymousFiver
                        createdAt
                        alias
                        pageId{
                            id
                            title
                            groupId
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
                        }
                        groupId{
                            id
                            groupId
                            title
                            groupType
                        }
                        createdBy{
                            id
                            username
                            profile{
                                userPic
                                verifiedHandle
                            }
                        }

                    }
                }
            }
        }`;

        let variables = {
            fiverId: fId,
            userId: Global.USER_ID === null ? "" : Global.USER_ID,
        }
        return await GraphqlAPI.queryCall(QR_SRC_SUGG_DATA,
            variables,
            'no-cache').then(result => {
                return result.data.fiverSearch.edges[0].node
            })
            .catch(err => console.log("error in search suggestions:", err))
    },

    /*******************************************************************************
    *
    * PagesFetrdImgRemove - helps to remove pages fetrurd images.
    *
    * This function helps to remove pages fetrurd images.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    PagesFetrdImgRemove: async function (groupId, imagesUrl, docUrl) {
        const FETRD_IMG_REMOVE = gql`
        query($groupId: ID!, $userId: String!, $deleteImages: [String], $deletePdf: [String]){
            deleteFeatureImages(groupId: $groupId, userId: $userId, deleteImages: $deleteImages, deletePdf: $deletePdf){
                isDeleted
                error
            }    
        }`

        let variables = {
            groupId: groupId,
            userId: Global.USER_ID,
            deleteImages: imagesUrl,
            deletePdf: docUrl
        }

        return await GraphqlAPI.queryCall(
            FETRD_IMG_REMOVE,
            variables,
            "no-cache")
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log("Error in deleting page photos: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * usrNameGet - helps to handle whether user name is anonymous or not.
    *
    * This function helps to handle whether user name is anonymous or not.
    *
    * RETURNS: Anonymous if username is anonymous , username otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrNameGet(entity, data) {
        let anonymous = false;
        let userName = data.createdBy.username;
        if (data.alias !== undefined)
            if (data.alias === true)
                if (data.pageId.title !== null)
                    userName = data.pageId.title;

        if (entity === 'fiver')
            if (data.anonymousFiver === true)
                anonymous = true;

        if (entity === 'option')
            if (data.anonymous === true)
                anonymous = true;

        return anonymous === true ?
            'Anonymous' : userName

    },


    /*******************************************************************************
    *
    * userNameExistsCheck - helps to check whether username is taken or not.
    *
    * This function helps to check whether username is taken or not.
    *
    * RETURNS: true if username taken, false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    userNameExistsCheck: async function (userName) {

        const USER_NAME_EXISTS_CHECK = gql`
        query($name: String!){
          usernameExist(username:$name)
            {
            result
            }
        }`

        let variables = {
            name: userName,
        }

        return await GraphqlAPI.queryCall(
            USER_NAME_EXISTS_CHECK,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in USER_NAME_EXISTS_CHECK data query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * pageDtGet - helps to get page data.
    *
    * This function helps to get page data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pageDtGet: async function (groupId, operationBy) {

        const PAGE_DT_GET = gql`
        query($groupId: Int!, $operationBy: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    id
                    groupId
                    isSystem
                    title
                    description
                    groupType
                    memberCount
                    fiverCount
                    fiverCreatePermission
                    allowIndexing

                    organisationId
                      {
                      title
                      organisationId
                      organisationType
                      }
                    
                    groupimageSet{
                        edges{
                          node{
                            id
                            url
                          }
                        }
                      }

                    groupfileSet {
                        edges{
                            node{
                            url
                            createdAt
                            id
                            fileTitle
                            }
                        }
                    }

                    featureimageSet{
                        edges {
                          node {
                            url
                            createdAt
                            id
                            imageTitle
                          }
                        }
                      }

                      pagedetailsSet{
                        edges{
                          node{
                            pageHandle,
                            email,
                            phone,
                            address,
                            city,
                            postalCode,
                            latitude,
                            longitude,
                            category,
                            logoUrl,
                            website,
                            verifiedHandle,
                            emailDigest
                          }
                        }
                      }


                    groupspacesSet{
                    edges{
                        node{
                        spaceId{
                            spaceId
                            name
                            description
                            imageUrl
                        }
                        }
                    }
                    }

                    groupusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
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
            groupId: groupId,
            operationBy: operationBy
        }

        return await GraphqlAPI.queryCall(
            PAGE_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.groupSearch;
            })
            .catch(error => {
                console.log("Error PAGE_DT_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * businessAliasFetch - helps to fetch alias name for business page.
    *
    * This function helps to fetch alias name for business page.
    * 
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    businessAliasFetch: async function (pageId, operationBy) {

        const PAGE_ALIAS_GET = gql`
        query($groupId: Int!, $operationBy: ID!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    title
                    groupType
                    
                    groupusersSet(userId_Id:$operationBy, membership:"ACCEPTED"){
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

                    pagedetailsSet
                        {
                        edges
                            {
                            node
                                {
                                pageHandle
                                logoUrl
                                verifiedHandle
                                }
                            }
                        }
                    }
                }
            }`


        let variables = {
            groupId: pageId,
            operationBy: operationBy
        }

        return await GraphqlAPI.queryCall(
            PAGE_ALIAS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.groupSearch;
            })
            .catch(error => {
                console.log("Error PAGE_ALIAS_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * pagePicGet - helps to get page pic.
    *
    * This function helps to get page pic.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pagePicGet: async function (groupId) {

        const PAGE_PIC_GET = gql`
        query($groupId: Int!)
            { 
            groupSearch(groupId: $groupId)
                {
                groupSearchList
                    {
                    groupId
                    title
                    pagedetailsSet{
                    edges{
                        node{
                            pageHandle
                            logoUrl
                            verifiedHandle
                        }
                    }
                    }                   
                }
            }
        }`

        let variables = {
            groupId: groupId,
        }

        return await GraphqlAPI.queryCall(
            PAGE_PIC_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.groupSearch;
            })
            .catch(error => {
                console.log("Error PAGE_PIC_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * setEmailDigest - helps to get page pic.
    *
    * This function helps to get page pic.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    setEmailDigest: async function (gId, emailDigest, digestType) {

        const EMAIL_DIGEST_SET = gql`
        query($userId: ID!, $groupId: ID!, $emailDigest: Boolean!, $frequency: String!){
            setEmailDigest(userId: $userId, groupId: $groupId, emailDigest: $emailDigest, frequency: $frequency) {
                pagedetailsSet{
                    edges{
                        node{
                        emailDigest
                        }
                    }
                }
            }
        }`

        let variables = {
            userId: Global.USER_ID,
            groupId: gId,
            emailDigest: emailDigest,
            frequency: digestType

        }

        return await GraphqlAPI.queryCall(
            EMAIL_DIGEST_SET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error EMAIL_DIGEST_SET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * chatContactDetail - helps to get contact details.
    *
    * This function helps to get contact details.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    chatContactDetail: async function (userId) {

        const CONTACT_DETAILS = gql`
        query($userId: String!){
            userProfile(userId: $userId){
              userData{
                userProfileId
                user{
                  id
                  username
                  firstName
                  lastName
                }
                userPic
              }
            }
        }`

        let variables = {
            userId: userId,
        }

        return await GraphqlAPI.queryCall(
            CONTACT_DETAILS,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error CONTACT_DETAILS query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * chatFriendsGet - helps to get chat friends details.
    *
    * This function helps to get chat friends details.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    chatFriendsGet: async function (userId) {

        const FRIEND_DETAILS = gql`
        query($user1: ID!){
            friends(user1: $user1){
              urlId
              uniqueUrl
              messageSet(last : 1){
                edges {
                  node {
                    content
                    timestamp
                  }
                }
              }
              user2{
                id
                username
                profile{
                  userPic
                }
              }
              user1{
                username
                id
                profile{
                  userPic
                }
              }
              
            }
          }`

        let variables = {
            user1: userId,
        }

        return await GraphqlAPI.queryCall(
            FRIEND_DETAILS,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error FRIEND_DETAILS query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * blockedFrndsGet - helps to get blocked frnds.
    *
    * This function helps to get blocked frineds.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    blockedFrndsGet: async function (urlId) {

        const BLOCKED_FRNDS = gql`
        query($user1: ID!){
            blockedFriends(user1: $user1){
              url{
                urlId
                uniqueUrl
              }
              blockedBy{
                id
                username
                profile{
                  userPic
                }
              }
              blockedWho{
                id
                username
                profile{
                  userPic
                }
              }
            }
        }`

        let variables = {
            user1: urlId,
        }

        return await GraphqlAPI.queryCall(
            BLOCKED_FRNDS,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error CHAT_DELETE query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * deleteChat - helps to delete chat.
    *
    * This function helps to delete chat.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    deleteChat: async function (urlId) {

        const CHAT_DELETE = gql`
        query ($urlId: ID!) {
            deleteChat(urlId: $urlId) {
              isDeleted
              error
            }
        }`

        let variables = {
            urlId: urlId,
        }

        return await GraphqlAPI.queryCall(
            CHAT_DELETE,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error CHAT_DELETE query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * fvrTypeNameGet - helps to get fiver type to be used for display in app.
    *
    * This function helps to get fiver type to be used for display in app.
    *
    * RETURNS: Anonymous if username is anonymous , username otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fvrTypeNameGet(entity, smallCase) {
        try {
            if (entity.toUpperCase() === 'BLACKBOX_SURVEY')
                entity = Global.BLACK_BOX_VIEW_STR;

            if (entity.toUpperCase() === 'QUICK_POLL')
                entity = 'QUICK POLL';

            return entity.toUpperCase();

        } catch (error) {
            console.log(error)
        }

    },

    /*******************************************************************************
    *
    * pinnedFiverSet - helps to sets a fiver as a pinned fiver.
    *
    * This function helps to sets a fiver as a pinned fiver.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pinnedFiverSet: async function (userId, groupId, fiverId) {
        const PIND_FIVER_SET = gql`
        query($userId: ID!, $groupId: ID!, $fiverId: ID!)
            {
            setPinnedFiver(userId:$userId, groupId:$groupId, fiverId:$fiverId)
                {
                fiverId
                fiverType
                pinned
                }
            }`

        let variables = { userId: userId, groupId: groupId, fiverId: fiverId }
        return await GraphqlAPI.queryCall(
            PIND_FIVER_SET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.setPinnedFiver;
            })
            .catch(error => {
                console.log("Error PIND_FIVER_SET  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * pinnedFiverGet - helps to gets a fiver as a pinned fiver.
    *
    * This function helps to gets a fiver as a pinned fiver.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pinnedFiverGet: async function (userId, groupId) {
        const PIND_FIVER_GET = gql`
        query($userId: ID!, $groupId: ID!, $operationBy: ID!,  $count: Int)
            {
            getPinnedFiver(userId:$userId, groupId:$groupId)
                {
                fiverId
                fiverType
                pinned

                groupId
                    {
                    id
                    title
                    groupId
                    groupType
                    }
                    
            
          bunchId
            {
            bunchId
            }
          fiverId
          imagesExist
          videosExist
          optionsExist
          endDate
          totalVotes
          title
          description
          url
          metaData
          createdAt
          likeCount
          voteType
          commentCount
          optionsCount
          optionByOther
          commentByOther
          anonymousOption
          anonymousVote
          showVoterlistToOther
          optionModerationByOwner
          fiverType
          anonymousFiver
          scheduleDate
          ended
          dashboard
          optnVsbleToOthr
          optionVoteCount
          alias
          sharedFiverId
          pageId
            {
            id
            title
            groupId
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
            }
            
          createdBy{
            id
            username
            profile
              {
              userPic
              verifiedHandle
              }
          }

          fiverlikeSet(createdBy_Id: $operationBy)
            {
            edges
                {
                node
                  {
                  id
                  }
                }
              }


          fivercommentsSet(createdBy_Id: $operationBy)
            {
            edges
              {
              node
                {
                id
                }
              }
            }

          fivertraitSet{
           trait
           traitId
           }
           
           


          optionSet(first: $count, isApproved: true){
            pageInfo{
              startCursor
              hasNextPage
            }
            edges{
              node{
                optionreadstatusSet(readBy_Id:$operationBy){
                  edges{
                    node{
                    id
                  }
                  }
                }
                likeCount
                commentCount
                readTime
                optionId
                imagesExist
                createdAt
                anonymous
                
                upVoteCount 
                downVoteCount
                rating
                
                alias
                pageId
                    {
                    id
                    title
                    groupId
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
                    }
               
                fiverId 
                    {
                    fiverId
                    voteType

                    optionSet(first: 1, isApproved: true, createdBy_Id: $operationBy)
                        {
                        edges
                            {
                            node
                                {
                                optionId
                                }
                            }
                        }
                    }

                optionpertaginfoSet
                    {
                    traitId
                        {
                        traitId
                        }
                    traitsName
                    traitUpVoteCount
                    traitDownVoteCount
                    }
                
                
             
                optionratingSet(createdBy_Id:$operationBy)
                    {
                    edges
                        {
                        node
                            {
                            voteType
                            upVote
                            downVote
                            rangeVote
                            }
                        }
                    }

                optionlikeSet(createdBy_Id:$operationBy){
                    edges{
                        node{
                        id
                        }
                    }
                    }

                optioncommentsSet(createdBy_Id:$operationBy, first:1){
                    edges{
                        node{
                        id
                        }
                    }
                    } 


                createdBy{
                  id
                  username

                  profile
                    {
                    userPic
                    verifiedHandle
                    }

                }
               
                 createdBy{
                 id
                 username
                 profile
                    {
                    userPic
                    verifiedHandle
                    }
                 }
            
                optionelementSet{
                  edges{
                    node{
                      optionLayoutId{
                        optionLayoutId
                        label
                        sortOrder
                      }
                    value
                    }
                  }
                }
          }
        }
              }

                }
            }`


        let variables = { userId: userId, groupId: groupId, operationBy: Global.USER_ID == null ? "" : Global.USER_ID, count: Global.FEED_PAGE_OPTIONS_COUNT }
        return await GraphqlAPI.queryCall(
            PIND_FIVER_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.getPinnedFiver;
            })
            .catch(error => {
                console.log("Error PIND_FIVER_GET  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * qrCodeTemplateGet - helps to gets a QR code template for group.
    *
    * This function helps to gets a QR code template for group.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    qrCodeTemplateGet: async function (userId, groupId) {
        const QR_CODE_TMPLT_GET = gql`
        query($userId: ID!, $groupId: ID!)
            {
            qrCodeTemplate(userId:$userId, groupId:$groupId)
                {
                templateId
                title
                template
                }
            }`

        let variables = { userId: userId, groupId: groupId }
        return await GraphqlAPI.queryCall(
            QR_CODE_TMPLT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.qrCodeTemplate;
            })
            .catch(error => {
                console.log("Error QR_CODE_TMPLT_GET  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * copyToClipBoard - helps to copy text to clipboard.
    *
    * This function helps to copy text to clipboard, text needs to be passed.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    copyToClipBoard(text) {
        try {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                notify("Copied to clipboard")
                return navigator.clipboard.writeText(text);
            }
            return Promise.reject('The Clipboard API is not available.');
        } catch (error) {
            console.log(error);
        }
    },

    /*******************************************************************************
    *
    * isPageOpn - helps to check is page or page related pages opened.
    *
    * This function helps to check is page or page related pages opened.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    isPageOpn(pagesInclude = true) {
        // get url data 
        let urlDt = this.currntUrlDtGet();
        let secondLastParam = urlDt.secondLastParam;
        let lastParam = urlDt.lastParam;

        let BUSINESS_PAGES_ARR = [
            Global.BUSSINESS_PAGES,
            Global.BUSSINESS_PAGE,
            Global.PAGE_QUESTN,
            Global.PAGE_QUESTNS,
            Global.GROUP_QR_CODES
        ];

        // check url has id as last param \
        if (pagesInclude === true) {
            if (BUSINESS_PAGES_ARR.includes(secondLastParam) ||
                BUSINESS_PAGES_ARR.includes(lastParam))
                return true;
        }
        else {
            if (secondLastParam === Global.BUSSINESS_PAGE)
                return true;
        }

        return false;
    },

    /*******************************************************************************
    *
    * usrsNotJoindGrpFetch - helps to gets users list which are not member of the group.
    *
    * This function helps to gets users list which are not member of the group.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrsNotJoindGrpFetch: async function (userName, groupId, skip) {
        const USERS_NOT_JOIND_GRP = gql`
        query($userName:String!, $groupId: Float!, $skip: Int, $first: Int)
            {
            addGroupUsers(
                username: $userName, 
                groupId: $groupId, 
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
            groupId: groupId,
            skip: skip,
            first: Global.GRP_INVITE_USRS_COUNTR,
        }
        return await GraphqlAPI.queryCall(
            USERS_NOT_JOIND_GRP,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error QR_CODE_TMPLT_GET  query: ", error);
                return null;
            });
    },


    /*******************************************************************************
    *
    * grpRequstsGet - helps to gets users request to join the group.
    *
    * This function helps to gets users request to join the group.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    grpRequstsGet: async function (userId, groupId) {
        const GROUP_REQUSTS_GET = gql`
        query($groupId: Float!, $userId: String!){
            groupIdRequests(userId:$userId, groupId: $groupId)
                {
                groupList{
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
            groupId: groupId,
        }
        return await GraphqlAPI.queryCall(
            GROUP_REQUSTS_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error QR_CODE_TMPLT_GET  query: ", error);
                return null;
            });
    },

    /*******************************************************************************
    *
    * showCaseItemDtGet - helps to gets a show case item data.
    *
    * This function  helps to gets a show case item data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    showCaseItemDtGet: async function (userId, groupId, entity, entityId) {
        const SHOW_CASE_ITEM_GET = gql`
        query($userId: ID!, $groupId: ID!, 
            $entityId: ID!, $entity: String!)
            {
            getShowcaseData(userId:$userId, groupId:$groupId, 
                entityId: $entityId, entity: $entity)
                {
                url
                title
                }
            }`

        let variables = {
            userId: userId,
            groupId: parseInt(groupId),
            entityId: entityId,
            entity: entity
        }
        return await GraphqlAPI.queryCall(
            SHOW_CASE_ITEM_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.getShowcaseData;
            })
            .catch(error => {
                console.log("Error SHOW_CASE_ITEM_GET  query: ", error);
                return null;
            });
    },


    /*******************************************************************************
    *
    * showCaseImageTitleSet - helps to set a show case image title.
    *
    * This function helps to set a show case image title.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    showCaseImageTitleSet: async function (userId, groupId, imageId, title) {
        const SHOW_CASE_IMG_TITLE_SET = gql`
        query($userId: ID!, 
            $groupId: ID!, 
            $imageId: ID!,
            $title: String!)
            {
            setImageTitle(userId:$userId, 
                groupId:$groupId, 
                imageId: $imageId,
                title: $title)
                {
                id
                url
                imageTitle
                }
            }`

        let variables = {
            userId: userId,
            groupId: parseInt(groupId),
            imageId: imageId,
            title: title
        }
        return await GraphqlAPI.queryCall(
            SHOW_CASE_IMG_TITLE_SET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.setImageTitle[0];
            })
            .catch(error => {
                console.log("Error SHOW_CASE_IMG_TITLE_SET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * showCaseFileTitleSet - helps to set a show case file title.
    *
    * This function helps to set a show case file title.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    showCaseFileTitleSet: async function (userId, groupId, fileId, title) {
        const SHOW_CASE_FILE_TITLE_SET = gql`
        query($userId: ID!, 
            $groupId: ID!, 
            $fileId: ID!,
            $title: String!)
            {
            setFileTitle(userId:$userId, 
                groupId:$groupId, 
                fileId: $fileId,
                title: $title)
                {
                id
                url
                fileTitle
                }
            }`

        let variables = {
            userId: userId,
            groupId: parseInt(groupId),
            fileId: fileId,
            title: title
        }
        return await GraphqlAPI.queryCall(
            SHOW_CASE_FILE_TITLE_SET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.setFileTitle[0];
            })
            .catch(error => {
                console.log("Error SHOW_CASE_FILE_TITLE_SET  query: ", error);
                return false;
            });
    },
    /*******************************************************************************
    *
    * checkDashUserInfo - helps to check user info in dashboard.
    *
    * This function helps to check user info in dashboard.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    checkDashUserInfo: async function () {
        const DASH_USER_INFO = gql`
        query($userId: String!){ 
            userProfile(userId: $userId){
                userData{               
                    gender
                    dob               
                    state{
                      stateId
                      stateName
                      countryId{
                        countryName
                        countryId
                      }
                    }
                }
            }
        }`

        let variables = {
            userId: Global.USER_ID,
        }
        return await GraphqlAPI.queryCall(
            DASH_USER_INFO,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.userProfile.userData[0];
            })
            .catch(error => {
                console.log("Error DASH_USER_INFO query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * fiverOptnsVotesDtGet - helps to get fiver votes data demographywise.
    *
    * This function helps to get fiver votes data demographywise.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverOptnsVotesDtGet: async function (fiverId, userId, anonymous, entityFilter) {
        const FVR_OPTNS_VOTES_GET = gql`
        query(
            $fiverId: Int!,  
            $anonymous: Boolean,
            $entityFilter:String)
            { 
            fiverOptionVotesDtGet(
                fiverId: $fiverId,  
                anonymous: $anonymous,
                entityFilter: $entityFilter)
                    {
                    fieldCountDt
                        {
                        field
                        count
                        optionId
                        title
                        totalVotes
                        }
                    }
            }`

        let variables = {
            fiverId: fiverId,
            anonymous: anonymous,
            entityFilter: entityFilter
        }

        return await GraphqlAPI.queryCall(
            FVR_OPTNS_VOTES_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error FVR_OPTNS_VOTES_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * quizLayoutScoreGet - helps to get quiz fiver's answers's score data.
    *
    * This function helps to get quiz fiver's answers's score data, 
    * it takes fiver id as parameter.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    quizLayoutScoreGet: async function (fiverId, layoutId) {
        const QUIZ_LAYOUT_ANSWR_SCORE_GET = gql`
        query(
            $fiverId: ID!,  
            $layoutId: ID!)
            { 
            quizLayoutScore(
                fiverId: $fiverId,  
                layoutId: $layoutId)
                    {
                    rightAnswer
                    rightAnswerFeedback
                    wrongAnswerFeedback
                    title
                    valid
                    invalid
                    }
            }`

        let variables = {
            fiverId: fiverId,
            layoutId: layoutId
        }

        return await GraphqlAPI.queryCall(
            QUIZ_LAYOUT_ANSWR_SCORE_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error QUIZ_LAYOUT_ANSWR_SCORE_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * imgbase64Get - helps to get base64 data from image url
    *
    * This function helps to get base64 data from image url.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    imgbase64Get: async function (userId, url) {
        const IMG_BASE64_GET = gql`
            query(
                $userId: ID!, 
                $url: String!)
                { 
                imageToBase(
                    userId: $userId,  
                    url: $url)
                        {
                        base
                        }
                }`

        let variables = {
            userId: userId,
            url: url
        }

        return await GraphqlAPI.queryCall(
            IMG_BASE64_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.imageToBase
            })
            .catch(error => {
                console.log("Error IMG_BASE64_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * questionListGet - helps to get page questions list asked by viewers.
    *
    * This function helps to get page questions list asked by viewers.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    questionListGet: async function (userId, groupId, first, skip, allQuestions) {
        const PAGE_QUSTNS_LIST_GET = gql`
            query(
                $userId: String!, 
                $groupId: ID!,
                $first: Int,
                $skip: Int!,
                $all: Boolean)
                { 
                questionList(
                    userId: $userId,  
                    groupId: $groupId,
                    first: $first,
                    skip: $skip,
                    all: $all)
                        {
                            questionList{
                                groupId{
                                  groupId
                                }
                                title
                                pageQuestionId
                                createdAt
                                createdBy
                                    {
                                    id
                                    username
                                    profile
                                        {
                                        userPic
                                        verifiedHandle
                                        }
                                    }
                                pageanswersSet(first:1){
                                  edges{
                                    node{
                                      title
                                    }
                                  }
                                }
                              }
                        }
                }`

        let variables = {
            userId: userId === null ? '' : userId,
            groupId: groupId,
            first: first,
            skip: skip,
            all: allQuestions
        }

        return await GraphqlAPI.queryCall(
            PAGE_QUSTNS_LIST_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.questionList
            })
            .catch(error => {
                console.log("Error PAGE_QUSTNS_LIST_GET  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * pageQustnDtGet - helps to get page question data.
    *
    * This function helps to get page question data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pageQustnDtGet: async function (userId, pageQuestionId) {
        const PAGE_QUSTN_DT_GET = gql`
            query(
                $userId: ID!, 
                $pageQuestionId: ID!)
                { 
                questionData(
                    userId: $userId,  
                    pageQuestionId: $pageQuestionId)
                        {
                        pageQuestionId
                        createdAt
                        title
                        description
                        groupId
                            {
                            groupId
                            title
                            groupType
                            groupusersSet(userId_Id:$userId, 
                                membership:"ACCEPTED")
                                {
                                edges
                                    {
                                    node
                                        {
                                        membership
                                        role
                                        }
                                    }
                                }


                                
                            

                            }

                        

                        createdBy
                            {
                            id
                            username
                            profile
                               {
                               userPic
                               verifiedHandle
                               }
                            }
                        pageanswersSet
                            {
                            edges
                                {
                                node
                                    {
                                    pageAnswerId
                                    title

                                    groupId
                                    {
                                    groupId
                                    title
                                    groupType
        
                                    pagedetailsSet
                                        {
                                        edges
                                            {
                                            node
                                                {
                                                pageHandle
                                                logoUrl
                                                verifiedHandle
                                                }
                                            }
                                        }
        
                                    
        
        
                                        
                                    
        
                                    }

                                    createdAt
                                    createdBy
                                        {
                                        id
                                        username
                                        profile
                                        {
                                        userPic
                                        verifiedHandle
                                        }
                                        }
                                    }
                                }
                            }
                        }
                }`

        let variables = {
            userId: userId === null ? '' : userId,
            pageQuestionId: pageQuestionId
        }

        return await GraphqlAPI.queryCall(
            PAGE_QUSTN_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.questionData
            })
            .catch(error => {
                console.log("Error PAGE_QUSTN_DT_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * pageAnsDtGet - helps to get page question's answer data.
    *
    * This function helps to get page question's answer data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pageAnsDtGet: async function (userId, pageAnswerId) {
        const PAGE_ANS_DT_GET = gql`
            query(
                $userId: ID!, 
                $pageAnswerId: ID!)
                { 
                answerData(
                    userId: $userId,  
                    pageAnswerId: $pageAnswerId)
                        {
                        pageAnswerId
                        createdAt
                        title
                        pageQuestionId
                            {
                            pageQuestionId
                            }
                        groupId
                            {
                            groupId
                            title
                            groupType
                            groupusersSet(userId_Id:$userId, 
                                membership:"ACCEPTED")
                                {
                                edges
                                    {
                                    node
                                        {
                                        membership
                                        role
                                        }
                                    }
                                }
                            }
                        }
                }`

        let variables = {
            userId: userId,
            pageAnswerId: pageAnswerId
        }

        return await GraphqlAPI.queryCall(
            PAGE_ANS_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.answerData
            })
            .catch(error => {
                console.log("Error PAGE_ANS_DT_GET  query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * templatesGet - helps to get fiver templates.
    *
    * This function helps to get fiver templates.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    templatesGet: async function (userId, counter, templateType, pageId, fiverType) {

        const FIVER_TEMPLATES_DATA = gql`
            query($userId: ID!, 
                $first: Int, 
                $counter: Int,
                $templateType: String!,
                $pageId: ID!,
                $fiverType: String!)
                    { 
                    fiverTemplate(userId: $userId, 
                        first: $first, 
                        skip: $counter,
                        templateType: $templateType,
                        pageId: $pageId,
                        fiverType: $fiverType)
                            {
                            templateId
                            createdAt
                            template
                            title
                            

                            groupId{
                            groupusersSet(
                                userId_Id: $userId, 
                                membership:"ACCEPTED"){
                                edges{
                                    node{
                                    role
                                    }
                                }
                            } 
                            }  

                            createdBy
                                {
                                id
                                username
                                }
                            }
                    }`;

        let variables = {
            userId: userId,
            first: Global.TEMPLATE_FEED_COUNTR,
            counter: counter,
            templateType: templateType,
            pageId: pageId,
            fiverType: fiverType
        }

        return await GraphqlAPI.queryCall(
            FIVER_TEMPLATES_DATA,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.fiverTemplate
            })
            .catch(error => {
                console.log("Error PAGE_ANS_DT_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * pageFvrCrtsListGet - helps to get fiver creators list of page.
    *
    * This function helps to get fiver creators list of page.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    pageFvrCrtsListGet: async function (groupId, fiverCreate = true) {
        const FVR_CRTS_LIST = gql`
                query($groupId: Float!, 
                    $fiverCreate : Boolean)
                    {
                    groupMembers(groupId: $groupId,
                        fiverCreate: $fiverCreate)
                            {
                            groupList
                                {
                                userId
                                    {
                                    id
                                    username
                                    profile 
                                        {
                                        userPic
                                        verifiedHandle
                                        }
                                    }
                                role
                                membership
                                }
                            }
                    }`

        let variables = {
            groupId: groupId,
            fiverCreate: fiverCreate
        }

        return await GraphqlAPI.queryCall(
            FVR_CRTS_LIST,
            variables,
            "no-cache")
            .then((data) => {
                return data.data["groupMembers"]["groupList"]
            })
            .catch(error => {
                console.log("Error GET_GROUP_USERS  query: ", error);
                return false;
            });
    },

    /*******************************************************************************
    *
    * usrVerifiedChk - helps to check whether user is verified.
    *
    * This function helps to check whether user is verified.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrVerifiedChk: async function (userId) {
        const USR_VERIFIED_STATUS = gql`
            query($userId: String!)
                { 
                userProfile(userId: $userId)
                    {
                    userData
                        {
                        verifiedHandle
                        }
                    }
                }`;

        let variables = {
            "userId": userId
        }

        return await GraphqlAPI.queryCall(USR_VERIFIED_STATUS,
            variables,
            'no-cache').then(result => {
                return result
            });
    },

    /*******************************************************************************
    *
    * ipAddresGet - helps to get ip address and its data.
    *
    * This function helps to get ip address and its data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    ipAddresGet: async function () {
        let url = 'https://geolocation-db.com/json/';
        // headers for api request 
        let headers = null;
        // calling API service 
        return RestAPI.apiCall(url, "GET",
            headers, null).then(response => {
                return response;
            }).catch(err => {
                console.log(err);
                return false;
            }
            );
    },


    /*******************************************************************************
    *
    * fiverGrpDtGet - helps to get fiver's group's data.
    *
    * This function helps to get fiver's group's data.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverGrpDtGet: async function (fiverId, userId, optionId) {
        const FVR_GRP_DT_GET = gql`
            query($fiverId: ID!, $userId: ID!, $optionId: ID!)
                { 
                fiverDataNew(fiverId: $fiverId, 
                    userId: $userId, optionId: $optionId)
                    {
                    groupData
                        {
                        
                            id
                            groupId
                            title
                            groupType
                            
                        }
                    
                    }
                }`
        let variables = {
            fiverId: fiverId,
            optionId: optionId,
            userId: userId == null ? "" : userId,
        }

        return await GraphqlAPI.queryCall(
            FVR_GRP_DT_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data
            })
            .catch(error => {
                console.log("Error in FVR_GRP_DT_GET  query: ", error);
                return false;
            });
    },


    /*******************************************************************************
    *
    * usrsNotJoindGrpFetch2 - helps to gets users list which are not member of the group.
    *
    * This function helps to gets users list which are not member of the group.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    usrsNotJoindGrpFetch2: async function (userName, groupId, skip, organisationId) {
        const USERS_NOT_JOIND_GRP = gql`
        query($userName:String!, 
            $groupId: ID!,
            $organisationId: ID!, 
            $skip: Int, 
            $first: Int)
            {
            grpInvitablUsrs(
                username: $userName, 
                groupId: $groupId, 
                organisationId: $organisationId
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
            groupId: groupId === null ? "" : groupId,
            organisationId: organisationId === null ? "" : organisationId,
            skip: skip,
            first: Global.GRP_INVITE_USRS_COUNTR,
        }
        return await GraphqlAPI.queryCall(
            USERS_NOT_JOIND_GRP,
            variables,
            "no-cache")
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.log("Error USERS_NOT_JOIND_GRP  query: ", error);
                return null;
            });
    },


    /*******************************************************************************
    *
    * layoutKeywordsGet - helps to get layout keywords.
    *
    * This function helps to get layout keywords.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    fiverKeywordsGet: async function (fiverId, count) {
        const FVR_KEYWORD_GET = gql`
        query(
            $fiverId: ID!,
            $count: Int!)
                { 
                fiverKeywordsGet(
                    fiverId: $fiverId, 
                    count:$count
                    )
                        {
                            keyword
                            optionId
                        }
                }`;



        let variables = {
            fiverId: fiverId,
            count: count,
        }

        return await GraphqlAPI.queryCall(
            FVR_KEYWORD_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.fiverKeywordsGet;
            })
            .catch(error => {
                console.log("Error FVR_KEYWORD_GET  query: ", error);
                return false;
            });
    },



    /*******************************************************************************
    *
    * optionsListGet - helps to get options list.
    *
    * This function helps to get options list filtered on some conditions given in 
    * filter variable.
    *
    * RETURNS: data , false otherwise.
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    optionsListGet: async function (fiverId, filterType, filterData, skip) {

        const OPTNS_LIST_GET = gql`
        query(
            $userId: ID!, 
            $filterData: String!, 
            $filterType: String!,
            $first: Int, 
            $skip: Int,
            $fiverId: ID!,
            $anonymous:Boolean!)
                { 
                optionListFilter(
                    userId: $userId,
                    filterData: $filterData, 
                    filterType: $filterType,
                    first: $first,
                    skip: $skip,
                    fiverId: $fiverId,
                    anonymous: $anonymous)
                        {
                        optionId
                        anonymous
                        alias
                        pageId
                            {
                            id
                            title
                            groupId
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
                            }
                        optionelementSet(first:1)
                            {
                            edges
                                {
                                node
                                    {
                                    value
                                    }
                                }
                            }
                        createdAt
                        createdBy
                            {
                            id
                            username
                            profile
                                {
                                userPic
                                verifiedHandle
                                }
                            }
                        }
                }`;



        let variables = {
            userId: "", /* no required as of now */
            fiverId: fiverId,
            filterType: filterType,
            filterData: filterData,
            first: Global.OPTN_LIST_COUNT_SIDE_DRWR,
            skip: skip,
            anonymous: true
        }

        return await GraphqlAPI.queryCall(
            OPTNS_LIST_GET,
            variables,
            "no-cache")
            .then((data) => {
                return data.data.optionListFilter;
            })
            .catch(error => {
                console.log("Error OPTNS_LIST_GET  query: ", error);
                return false;
            });
    },



}


export default Helpers;

