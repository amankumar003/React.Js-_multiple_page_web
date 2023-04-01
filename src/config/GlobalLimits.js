/* GlobalLimits.js - global varaibles file for limits in the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
-------------------- 
02e,23apr22,pwn  THNKS_TITLE modified. 
02d,23Apr22,Sk   Changed QR_CODE_DESC from 128 to 256
02c,07apr22,pwn  added THNKS NOTE variables.
02b,05apr22,pwn  modified GROUP_SIDE, FAV_SIDE.
02a,30mar22,pwn  added ADD_ANSWR_TITLE.
01z,29mar22,pwn  added QUSTNS_LIST_SIDE, ASK_QUSTN_TITLE
01y,17mar22,pwn  added SHOW_CASE_TITLE.
01x,14Mar22,SK   Changed QR_CODE_LOCATION limit from 64 to 50
01w,04mar22,pwn  added PAGE_DESC.
01v,25Feb22,Sk   Added MAX_PAGE_PHOTOS_COUNT
01u,22Feb22,Sk   Added BLACKBOX_SURVEY limits
01t,14Feb22,Sk   Added QR code limits
01s,10feb22,pwn  added pages variables.
01r,05Jan22,Sk   Changed poll, qpoll & photoll limits from 64 to 32.
01q,11nov21,pwn  added OPTION QUIZ components limits.
01p,09nov21,pwn  added QUIZ_RIGHT_ANS_DESCRIPTION, QUIZ_WRONG_ANS_DESCRIPTION. 
01o,26oct21,pwn  descriptions for survey form layout.
01n,10Aug21,SK   Added image poll limits
01m,06Aug21,Sk   Changed PROFILE limits similar to backend.
01l,04Jul21,SK   Changed descriptions limit to 2048
01k,03Jul21,Sk   Added Feedback limits.
01j,21Jun21,SK   Changed SIGNUP_USERNAME from 64 to 20
01i,26apr21,pwn  added SURVEY_FORM_RATING_INPUT_TITLE.
01h,22apr21,pwn  added OPTN_ADD_LIST_ITM_COUNT.
01g,22apr21,pwn  modified SURVEY_FORM_NOINPUT_TITLE to 128 from 16.
01f,16apr21,pwn  added NUMBERINPUT.
01e,16apr21,pwn  added SURVEY_FORM_NOINPUT_TITLE.
01d,06Mar21,SK   Reduces group name limit from 128 to 64
01b,22Mar21,pwn  added POST_TITLE, OPTION object added QUESTION title.
01b,16Mar21,SK   Changed Group_side to 4
01a,10mar21,shb  created
*/

/*
DESCRIPTION
This file has variables which will be used to implement limits throughot the app.
*/
module.exports = {
  SIGNUP_EMAIL: 64,
  SIGNUP_PASSWORD: 64,
  SIGNUP_USERNAME: 20,

  GROUP_NAME: 64,
  GROUP_DESC: 2048,
  GROUP_IMG: 1,

  PAGE_ADDRESS: 100,
  PAGE_CITY: 64,
  PAGE_POST_CODE: 20,
  PAGE_DESC: 512,

  USER_COMMENT: 512,

  SIZE_VID: 15,
  SIZE_IMG: 5,

  // Question
  QS_TAGS: 10,
  QS_TAG_SIZE: 16,
  QS_IMG: 5,
  QS_VID: 1,
  QS_TITLE: 128,
  QS_ANS_IMG: 5,

  // Poll
  POLL_IMG: 5,
  POLL_VID: 1,
  POLL_TITLE: 128,
  POLL_DESC: 2048,
  POLL_ANS_IMG: 1,
  POLL_CUSTOM: 32,

  // Quick Poll
  QPOLL_IMG: 5,
  QPOLL_VID: 1,
  QPOLL_TITLE: 128,
  QPOLL_CUSTOM: 32,

  // Image Poll
  IMAGE_POLL_TITLE: 128,
  IMAGE_POLL_DESC: 2048,
  IMAGE_POLL_ANS_IMG: 1,
  IMAGE_POLL_CUSTOM: 32,

  // Survey
  SURVEY_TAGS: 10,
  SURVEY_TAG_SIZE: 16,
  SURVEY_IMG: 5,
  SURVEY_VID: 1,
  SURVEY_TITLE: 128,
  SURVEY_DESC: 2048,
  SURVEY_DRAFT: 50,

  // Form
  SURVEY_FORM_TITLE: 128,
  SURVEY_FORM_DESC: 512,

  SURVEY_FORM_TI_TITLE: 128,
  SURVEY_FORM_TI_IMG: 1,
  SURVEY_FORM_TI_ANS: 128,
  SURVEY_FORM_TI_DESCRIPTION: 512,

  SURVEY_FORM_TA_TITLE: 128,
  SURVEY_FORM_TA_IMG: 1,
  SURVEY_FORM_TA_ANS: 512,
  SURVEY_FORM_TA_DESCRIPTION: 512,


  // BTN is for dropdown, radio, checkbox
  SURVEY_FORM_BTN_TITLE: 128,
  SURVEY_FORM_BTN_OP_SIZE: 64,
  SURVEY_FORM_BTN_OP: 16,
  SURVEY_FORM_BTN_IMG: 1,
  SURVEY_FORM_BTN_DESCRIPTION: 512,

  SURVEY_FORM_IMG_TITLE: 128,
  SURVEY_FORM_IMG: 5,
  SURVEY_FORM_IMG_DESCRIPTION: 512,

  SURVEY_FORM_HL_TITLE: 128,
  SURVEY_FORM_HL_ANS: 512,
  SURVEY_FORM_HL_DESCRIPTION: 512,


  SURVEY_FORM_AB_TITLE: 16,
  SURVEY_FORM_AB_ANS: 512,

  SURVEY_FORM_NOINPUT_TITLE: 128,
  SURVEY_FORM_NOINPUT_ANS: 999,

  SURVEY_FORM_RATING_INPUT_TITLE: 128,


  SURVEY_FORM_DP_TITLE: 128,

  // Post
  POST_IMG: 5,
  POST_VID: 1,
  POST_DESC: 2048,
  POST_TITLE: 128,

  // Option
  OPTION: {
    QUESTION: {
      desc: 2048,
      title: 128,
    },
    SURVEY: {
      title: 128,
      desc: 2048,
      LINK: {
        title: 512,
      },
      ACTIONBUTTON: {
        title: 512,
      },
      NUMBERINPUT: {
        title: 16,
      },

    },
    BLACKBOX_SURVEY: {
      title: 128,
      desc: 2048,
      LINK: {
        title: 512,
      },
      ACTIONBUTTON: {
        title: 512,
      },
      NUMBERINPUT: {
        title: 16,
      },

    },
    POLL: {
      title: 64,
    },
    QUIZ: {
      title: 128,
      desc: 2048,
      LINK: {
        title: 512,
      },
      ACTIONBUTTON: {
        title: 512,
      },
      NUMBERINPUT: {
        title: 16,
      },

    },
  },

  // profile
  PROFILE_NAME: 50,
  PROFILE_ABOUT: 500,
  PROFILE_PHONE: 10,
  PROFILE_ADDRESS: 256,


  // Favourite
  FAV_SIDE: 3,

  // Group
  GROUP_SIDE: 4,

  PAGES_SIDE: 4,

  // Fiver Page
  FIVER_OP: 5,
  FIVER_TAG_OP: 3,

  // Option Page

  // Trending Page
  TREND_SIDE: 5,

  // Discover
  DISCOVER_SIDE: 5,

  // Activity Page
  // days
  ACTIVITY_LAST_ENTRY: 365,

  // Notification Page
  // entry
  NOTIFY_LAST: 50,

  // Search
  SEARCH_DD: 5,
  SEARCH_TOP: 2,
  SEARCH_QUES: 5,
  SEARCH_GRP: 5,
  SEARCH_USER: 5,

  // quession setting for response add count 
  OPTN_ADD_LIST_ITM_COUNT: 10,

  // Feedback limits
  FEEDBACK_TITLE: 128,
  FEEDBACK_DESC: 2048,

  // template name limit 
  TMPLT_TITLE: 128,

  // quiz 
  QUIZ_RIGHT_ANS_DESCRIPTION: 512,
  QUIZ_WRONG_ANS_DESCRIPTION: 512,

  // Qr code
  QR_CODE_NAME: 64,
  QR_CODE_DESC: 256,
  QR_CODE_LOCATION: 50,

  // Page photos
  MAX_PAGE_PHOTOS_COUNT: 5,

  // showcase 
  SHOW_CASE_TITLE: 20,

  // question list sidebar
  QUSTNS_LIST_SIDE: 5,
  ASK_QUSTN_TITLE: 512,
  ADD_ANSWR_TITLE: 512,

  // THNKS NOTE 
  THNKS_TITLE: 32,
  THNKS_DESCRIPTION: 120,

}