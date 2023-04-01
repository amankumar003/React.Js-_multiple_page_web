/* Global.js - global varaibles file for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
04m,30aug22,pwn  added QUSTN_KEYWORD_EXTRACTION_COUNT.
04l,25aug22,pwn  added CHARTS_LEGENDS_AT_BOTTOM.
04k,27jul22,srs  added CHAT_HEADING
04j,11may22,pwn  added QUIZ_DRAFT_OPND.
04i,04may22,pwn  added TEMPLATE_FEED_COUNTR.
04h,03may22,pwn  added FVR_CRT_PAGE_SHARE_LABEL.
04g,26apr22,pwn  added BLIND_SURVEY_THANKS_NOTE_DESC.
04f,18apr22,pwn  added QUIZ_RESPONSE_ADD_LIMIT_STR.
04e,11apr22,pwn  added THANKS_NOTE_TITLE, THANKS_NOTE_DESC.
04d,07apr22,pwn  added BLACK_BOX_VIEW_STR.
04c,31mar22,pwn  added PAGE_QUESTNS.
04b,29mar22,pwn  added ACTIVE_PAGE_ID.
04a,31Mar22,SK   Added QR_CODE_COLOR
03z,16mar22,pwn  added GRP_INVITE_USRS_COUNTR.
03y,12mar22,pwn  added CURRNT_LOCATION.
03x,12mar22,pwn  added BUSSINESS_PAGE_DELETE_SUCESS.
03w,24Feb22,SK   Added pagesFeaturedMedia.
03v,17Feb22,SK   Added QR_CODE_PAGE & GROUP_QR_CODE
03u,17feb22,pwn  renamed business to page.
03t,16feb22,pwn  added COMNT_AS_TOOL_TIP_STRING.
03s,15feb22,pwn  added FVR_POST_AS_STRING, FVR_POST_AS_TOOL_TIP_STRING.
03r,14feb22,pwn  added CURRENT_PAGE_DATA.
03q,12feb22,pwn  added GOOGLE_MAP_KEY.
03p,03feb22,pwn  added ACTIV_GRP_MENU_ITEM.
03o,02feb22,pwn  added MEMBR_BLOCK_STRNG, MEMBR_BLOCK_HDR_STRNG.
03n,02feb22,pwn  added APP_LOGO_URL, APP_URL.
03m,31jan22,pwn  added PAGES_VISTED.
03l,25jan22,pwn  added FVR_SUGGESTION_COUNT.
03k,21jan22,pwn  added GRP_SUGGESTION_COUNT.
03j,21jan22,pwn  added TOUR_PAGE.
03i,07jan22,pwn  update FIVER_PAGE_OPTIONS_COUNT to 6 from 4.
03h,27Nov21,Sk   Added MODAL_BASED_LOGIN
03g,16Nov21,Sk   Added QUIZ_RESPONSE_TITLE
03f,10Nov21,SK   Changed spaces to interests
03e,01Nov21,SK   Added new API key for link rendering
03d,28Oct21,Sk   Changed link rendering api url endpoint.
03c,22Sep21,Sk   Added LINK_RENDER_URL
03b,08Oct21,Sk   Added user pic name Snippet variables
03a,3aug21,pwn   added TOOOLTIPS variables.
02z,23aug21,pwn  SPAM messages change.
02y,23aug21,pwn  added ? in message.
02x,17Aug21,Sk   Added ACTIVITY
02w,16Aug21,Sk   Changed FORM_BUILDR_CHOICES_LIMIT from 10 to 5 & added NOTIF
02v,12aug21,pwn  added NOTIFY_PAGE_RELOAD.
02u,12aug21,pwn  added GLOBAL_FEED_RELOAD.
02t,11aug21,pwn  added QPOLL_SUMMARY_CHARTS_STR_COUNT.
02s,11aug21,pwn  CREATOR to EDITOR && ADMINSTRATOR to ADMINISTRATOR.
02r,10Aug21,Sk   Added IMAGE_POLL_CHOICES
02q,07aug21,pwn  added OPTN_LIST_COUNT_SIDE_DRWR.
02p,23jul21,pwn  added GROUP_JOINED_SUCESS,GROUP_LEAVE_SUCESS, 
                 GROUP_DELETE_SUCESS, GROUP_JOIN_REQ_SENT.
02o,23jul21,pwn  reset GROUP_NOT_JOINED. 
02n,21jul21,pwn  set QUESTN_MAX_IMG_COUNT to 1 from 5.
02m,20Jul21,SK   Added GROUP_NOT_JOINED
02l,13Jul21,SK   Changed INSUFICNT_PRVLGS message
02k,22jun21,Sk   Added FEEDBACK_IMG_COUNT
02j,01jun21,pwn  added EMOTIONS_MARK_SCORE.
02i,11may21,shb  added PUBLIC_GROUP_COUNTER.
02h,05may21,pwn  added png in IMAGE_ALLWD_TYPES.
02g,23apr21,pwn  added OPTN_ADD_COUNT_UNLMTD_STR, OPTN_VOTE_COUNT_UNLMTD_STR.
02f,19apr21,pwn  renamed GROUP_NOT_JOINED to INSUFICNT_PRVLGS.
02e,16apr21,SK   added GROUP_NOT_JOINED msg.
02d,16apr21,pwn  modified FEED_PAGE_OPTIONS_COUNT to 2 from 4.
02c,13apr21,SK   added all URL's list as global variables.
02b,12apr21,SK   changed voted tags color.
02a,12apr21,shb  added FAV_FIVER_COUNTER
01z,12apr21,pwn  added FIVER_END_INFO_MSG.
01y,10apr21,pwn  added FIVER_DRAFT_OPND.
01x,08apr21,pwn  added GRP_USR_LIST_COUNTR.
01w,08apr21,pwn  added USR_NOT_LOGD_IN_ACTNS, USR_NOT_LOGD_IN_ACTNS_PRFMD.
01v,22Mar21,SK   added EMPTY_GROUP_LIST & EMPTY_FAV_LIST
01u,20Mar21,pwn  added ANONMOUS_FVRS_RSPONS_VOTE.
01t,14Mar21,SK   added TRENDING_SECTION_COUNT
01s,01mar21,shb  added NOTIFICATION_COUNTER and ACTIVITY_COUNTER
01r,27feb21,pwn  added OPTN_KEYWORD_EXTRACTION_COUNT
01q,12feb21,shb  added GROUP_PAGE_OPEN_STATUS 
01p,11feb21,shb  added OPTN_CALLED.
01p,09feb21,pwn  added FVR_CRT_SUB_MODAL_UI.
01o,05feb21,pwn  modified WEB_SITE_NAME.
01n,31jan21,pwn  added SINGLE_OPTN_VOTE_STR.
01m,29jan21,pwn  added ENTITY_CREATION_USRS_ROLE_ALLOWD
01l,23jan21,pwn  added QUSTN_FORM_DEFAULT_TITLE QUSTN_FORM_DEFAULT_DESC
01k,15jan21,pwn  removed duplicate variables.
01j,13jan21,jtn  added FACEBOOK_CLIENT_ID & GOOGLE_CLIENT_ID.
01i,08jan21,pwn  added added DRAFT_FEED_COUNTR.
01h,07jan21,pwn  added DRAFT_FIVER_DELETE_STRING, FIVER_DRAFTS_NOT_FOUND.
01g,02Jan21,SK   added TOP_RESULTS_COUNT SEARCH_RESULTS_COUNT  
01f,07jan20,pwn  added DRAFT_OPRTN_STRNG DRAFT_SAVE_STRING
01e,06jan20,pwn  added FIVER_START_DATE, FIVER_END_DATE
01d,05jan20,pwn  added SUMMARY_CHARTS_STR_COUNT.
01c,04jan20,jtn  added again MAX_IMAGE_COMPRESSION_SIZE_IN_MB to MAX_IMAGE_COMPRESSION_WIDTH_HEIGHT.
01b,09oct20,pwn  removed Video from option layout.
01a,10sep20,pwn  created
*/

/*
DESCRIPTION
This file has variables which will be used throughot the app.
*/
module.exports = {
    USER_TOKEN: null,
    REST_URL: 'https://api.footfallz.com/',
    BASE_URL: 'https://api.footfallz.com/graphql/',
    READ_URL: 'https://api.footfallz.com/graphql/',
    GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    FACEBOOK_CLIENT_ID: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
    GOOGLE_MAP_KEY: process.env.REACT_APP_GOOGLE_MAP_KEY,
    LINK_RENDER_URL: "https://api.linkpreview.net/?key=54ec4ce87a54df32308cc349b1af9d29&q=",
    APP_URL: process.env.REACT_APP_URL,
    APP_LOGO_URL: "https://s3.ap-south-1.amazonaws.com/static.quession.com/quession/static/quession/png/quessionFavLogo.png",
    USER_ID: null,
    EMAIL: null,
    USER_NAME: null,
    USR_ICO_PIC: null,
    USR_ORGNL_PIC: null,
    FEED_DATA: [],
    FIRST_RUN: true,
    RELOAD: false,
    GLOBAL_FEED_RELOAD: false,
    NOTIFY_PAGE_RELOAD: false,
    SCROLL: 0,
    PREVIOUS_PAGE: "/home",
    WEB_SITE_NAME: "FootFallz",
    FIVER_FORM_DEFAULT_TITLE: "Give a title to your response (Optional)",
    FIVER_FORM_DEFAULT_DESC: "Describe your response (Optional)",
    QUSTN_FORM_DEFAULT_TITLE: "Title for your answer",
    QUSTN_FORM_DEFAULT_DESC: "Description for you answer",
    RESPONSE_CRT_STR: "Add your answer here...",
    RESPONSE_HYPR_LINK_CRT_STR: "Add your web link here...",
    RESPONSE_NMBR_INPUT_CRT_STR: "Add your number input here...",
    FIVER_QUESTN_DEFAULT_TITLE: "Enter title for your answer",
    FIVER_QUESTN_DEFAULT_DESC: "Enter description for your answer",

    LAST_FIVER_ID: null,
    OPTIONS_LIST: null,
    FVR_CRT_IMG_ICO: false, /* Will be used for fiver create modal */
    FVR_CRT_SUB_MODAL_UI: false,

    FVR_CRT_TITLE_PLCHOLDR: "Ask a question...",
    FVR_CRT_GRP_LABEL: "Select group to share",
    FVR_CRT_GRP_SHARE_LABEL: "Choose group",
    BUSSINESS_PAGE_CATEGORY_SLCTN_LABEL: "Choose category",
    FVR_CRT_PAGE_SHARE_LABEL: "Choose page",

    MODAL_BASED_LOGIN: true,
    TEMP_FEED_COUNTER: 0,
    FEED_COUNTR: 5,
    FEED_PAGE_OPTIONS_COUNT: 4,
    FIVER_PAGE_OPTIONS_COUNT: 6,
    KEYWORD_DISPLAY_COUNT: 5,
    FORM_BUILDR_CHOICES_LIMIT: 5,
    FAV_TO_FIVER_LINK: false,
    OPTN_PAGE_OPND: false,
    FVR_PAGE_OPND: false,
    OPTION_QUESTION_MEDIA_UPOAD: true,
    SUMMARY_CHARTS_STR_COUNT: 6,
    QPOLL_SUMMARY_CHARTS_STR_COUNT: 10,
    FIVER_START_DATE: null,
    FIVER_END_DATE: null,
    DRAFT_FEED_COUNTR: 10,
    TEMPLATE_FEED_COUNTR: 6,

    OPTN_CALLED: false,
    KEYWORD_EXTRACTION_COUNT: 10,
    OPTN_KEYWORD_EXTRACTION_COUNT: 5,
    SUGGESTION_COUNT: 3,
    TRENDING_SECTION_COUNT: 5,
    EMPTY_GROUP_LIST: false,
    EMPTY_FAV_LIST: false,
    EMPTY_PUBLIC_GROUP_LIST: false,
    GRP_USR_LIST_COUNTR: 5,
    VOTER_LIST_COUNTR: 5,
    IMAGE_POLL_CHOICES: 4,
    GRP_INVTD_USR_LIST_COUNTR: 5,
    GRP_SUGGESTION_COUNT: 4,
    FVR_SUGGESTION_COUNT: 4,
    GRP_INVITE_USRS_COUNTR: 5,


    OPTN_LIST_COUNT_SIDE_DRWR: 20,
    FVR_PAGE_OPTIONS_FEED_COUNT: 5,

    // charts related 
    COMPRSN_CHARTS_COLORS: ['#ffba60', '#0092fb', '#fc5655', '#13d287',],
    OPTN_SUMRY_CHARTS_COLORS: ['#ffba60', '#0092fb', '#fc5655', '#13d287', "#9ede73", "#CCD4BF", "#BEB4C5", "#D5E4C3", "#F3CBBD", "#86736C", "#C6AC85"],

    // validations checks 
    MAX_IMG_COUNT: 5,
    MAX_VDU_COUNT: 1,

    // group media validations
    GRP_MAX_IMG_COUNT: 1,
    GRP_MAX_VDU_COUNT: 0,


    // option media validations
    OPTN_MAX_IMG_COUNT: 5,
    OPTN_MAX_VDU_COUNT: 0,
    QUESTN_MAX_IMG_COUNT: 1,
    QUESTN_MAX_VDU_COUNT: 0,



    FIVER_TITLE_LENGTH: 100,
    OPTION_TITLE_LENGTH: 100,
    VIDEO_AUTO_PLAY: false,
    STAR_RATING_COUNT: 5,
    MAX_FIVER_TAG_COUNT: 10,
    PLATFORM: "original",
    CURRENT_GRP_ID: null,
    CURRENT_GRP_TITLE: null,
    CURRENT_FIVER_ID: 0,
    SNIPPET_TAGS_COUNT: 3,
    CURRENT_PAGE_DATA: null,

    // Feedback form 
    FEEDBACK_IMG_COUNT: 5,

    //search constants
    TOP_RESULTS_COUNT: 2,
    SEARCH_RESULTS_COUNT: 5,

    // UPLOAD ALLOWED_TYPES
    IMAGE_ALLWD_TYPES: ["image/jpeg", "image/png", "image/gif"],
    VDU_ALLWD_TYPES: ["video/mp4", "video/quicktime"],

    // roles of users allowed to create a fiver/entity 
    ENTITY_CREATION_USRS_ROLE_ALLOWD: ['ADMINISTRATOR', 'EDITOR'],

    // form-builder layout 
    OPTION_DEFAULT_LAYOUT: [{ "component": "TextInput", "index": -2, "order": -2, "label": "Title for your response", "required": true },
    { "component": "TextArea", "index": -1, "order": -1, "label": "Description for your response", "required": true },
    { "component": "ImagePicker", "index": 0, "order": 0, "label": "Images", "required": false, "imageCount": 1 }
        /* { "component": "VideoPicker", "index": 2, "order": 2, "label": "Video", "required": false, "videoCount": 1 } */
    ],

    // Charts related
    CHARTS_DATA_NOT_FOUND: "Data not sufficient to represent",

    // info title messages related
    LIKE_NOT_ALLWD: "Not allowed to like",
    CMNT_NOT_ALLWD: "Not allowed to comment",
    OPTN_VOTE_NOT_ALLWD: "Please join group to vote this response",
    OPTN_RATING_NOT_ALLWD: "Please join group to rate this response",
    OPTN_ADD_NOT_ALLWD: "Please join group to add response",
    FIVER_NOT_FOUND: "Quession doesn't exists",
    OPTION_NOT_FOUND: "Response doesn't exists",
    DELETE_OPRTN_STRNG: "Delete",
    OPTION_DELETE_STRING: "Are you sure to delete this response?",
    COMMENT_DELETE_STRING: "Are you sure to delete this comment?",
    FIVER_DELETE_STRING: "Are you sure to delete this ",
    FORM_BUILDER_ERR_MSG: "Please fill form's required fields",
    SINGLE_OPTN_VOTE_STR: "Allow vote on single response only",
    FIVER_MANUAL_END_STRING: "Are you sure to end this ",
    FIVER_END: "Manual quession end",
    FIVER_END_INFO_MSG: " ended, Can't perform any action",
    INSUFICNT_PRVLGS: "Insufficient privileges",
    GROUP_NOT_JOINED: "You are not a member of this group",
    GROUP_JOINED_SUCESS: "Group joined successfully",
    GROUP_LEAVE_SUCESS: "Group exited successfully",
    GROUP_DELETE_SUCESS: "Group deleted successfully",
    GROUP_JOIN_REQ_SENT: "Group join request sent",
    GRP_JOIN_OPRTN_STRNG: "Group Join",
    GRP_JOIN_STRNG: "Join group to perform an operation",
    GRP_SLCTN_RQURD_MSG: "Please choose a group to publish",
    PAGE_NOT_JOINED: "You haven't followed this page",
    BUSSINESS_PAGE_JOINED_SUCESS: "Page followed successfully",
    BUSSINESS_PAGE_LEAVE_SUCESS: "Page unfollowed successfully",
    BUSSINESS_PAGE_DELETE_SUCESS: "Page deleted successfully",
    ORG_NOT_JOINED: "You are not a member of this organisation",

    // draft confirmation related 
    DRAFT_OPRTN_STRNG: "Draft",
    DRAFT_SAVE_STRING: "Would you like to save as draft?",

    // drafts related 
    DRAFT_FIVER_DELETE_STRING: "Are you sure to delete this draft?",
    FIVER_DRAFTS_NOT_FOUND: "Drafts not found",
    FIVER_DRAFT_OPND: false,
    QUIZ_DRAFT_OPND: false,

    // templates related
    FIVER_TMPLTS_NOT_FOUND: "Templates not found",
    TEMPLATE_DATA: null,
    TEMPLATE_DELETE_STRING: "Are you sure to delete this template?",

    USR_NOT_LOGD_IN_ACTNS_PRFMD: false,
    USR_NOT_LOGD_IN_ACTNS: "Please login to perform any action",

    // Group leave 
    GRP_LEAVE_OPRTN_STRNG: "Group leave",
    GRP_LEAVE_STRNG: "Are you sure, you want to leave this group?",

    // page leave 
    PAGE_LEAVE_OPRTN_STRNG: "Page unfollow",
    PAGE_LEAVE_STRNG: "Are you sure, you want to unfollow this page?",


    // organisation leave 
    ORG_LEAVE_OPRTN_STRNG: "Organisation leave",
    ORG_LEAVE_STRNG: "Are you sure, you want to leave this organisation?",
    ORG_DELETE_SUCESS: "Organisation deleted successfully",
    ORG_LEAVE_SUCESS: "Organisation exited successfully",

    // Member Remove
    MEMBR_REMOVE_HDR_STRNG: "Remove member",
    MEMBR_REMOVE_STRNG: "Are you sure you want to remove this member from your group?",

    // Member Block
    MEMBR_BLOCK_HDR_STRNG: "Block member",
    MEMBR_BLOCK_STRNG: "Are you sure you want to block this member from your group?",


    // spamm aprroval 
    SPAM_APPRVL_OPRTN_STR: "Approve",
    SPAM_APPRVL_STR: "Accept this response as spam?",
    SPAM_NOT_APPRVL_STR: "Reject this response as spam?",

    // response approval 
    RESPONSE_APPRVL_STR: "Are you sure to accept this response?",
    RESPONSE_REJECT_STR: "Are you sure to reject this response?",

    // resend verify email 
    VERIFY_EMAIL_RESEND: "Verification Error",

    // options string 
    QUSTNS_OPTN_STR: "response",
    QPOLL_OPTN_STR: "response",
    POLL_OPTN_STR: "response",
    IPOLL_OPTN_STR: "response",
    SURVEY_OPTN_STR: "response",
    POST_OPTN_STR: "response",
    QUIZ_OPTN_STR: "response",



    // css varaibles
    THEME_COLOR: "#0098f2",
    THEME_INPUT_COLOR: 'rgb(120, 120, 120)',
    MODAL_HEADER_CLASS: "modal-header py-2",
    UP_VOTE_BG_COLOR: "#d4ffc6",
    DOWN_VOTE_BG_COLOR: "#e9c4cb",
    FVR_TITL_COLOR: "#0098f2",
    FVR_DESC_COLOR: "black",
    OPTN_SNPPT_DSC_CLR: "black",
    UI_MIN_WIDTTH: 45,
    UI_MAX_WIDTTH: 45,
    QR_CODE_COLOR: "black",


    // TAGS CSS variables
    VOTED_TAG_BG_COLOR: "rgb(64, 145, 255)",
    VOTED_TAG_FONT_COLOR: "#fff",

    FIRST_TAG_BG_COLOR: "#E3EEFD",
    FIRST_TAG_FONT_COLOR: "#0992D9",

    LAST_TAG_BG_COLOR: "#E3EEFD",
    LAST_TAG_FONT_COLOR: "#0992D9",

    MIDDL_TAGS_BG_COLOR: "#E3EEFD",
    MIDDLE_TAGS_FONT_COLOR: "#0992D9",

    // IMAGE COMPRESSION VARIABLES
    MAX_IMAGE_COMPRESSION_SIZE_IN_MB: 1,
    MAX_IMAGE_COMPRESSION_WIDTH_HEIGHT: 800,

    // Group Page open status
    GROUP_PAGE_OPEN_STATUS: false,

    FORM_BUILDR_DELTD_IMGS_ARR: [],

    //UPLOAD BUTTON MEDIA HANDLING 
    FIVER_UPLOAD_COUNT: {
        questionImgsMedia: 0,
        quickPollImgsMedia: 0,
        pollImgsMedia: 0,
        surveyImgsMedia: 0,
        postImgsMedia: 0,
        OptionCreateModal: 0,
        GroupCrtModal: 0,
        pagesFeaturedMedia: 0,
    },

    NOTIFICATION_COUNTER: 20,
    ACTIVITY_COUNTER: 20,

    // for handling anonmous voting 
    ANONMOUS_FVRS_RSPONS_VOTE: [],
    EMBEDDED_FIVER_OPTION: 2,

    // favourite fav list counter
    FAV_FIVER_COUNTER: 15,

    // favourite fav list counter
    PUBLIC_GROUP_COUNTER: 15,

    //Url List
    HOME: "home",
    EXPLORE: "discover",
    FIVER: "quession",
    OPTION: "response",
    PROFILE: "profile",
    FAVS: "favourites",
    GROUPS: "groups",
    GROUP: "group",
    SEARCH: "search",
    CHAT: "message",
    DASHBOARD: "dashboard",
    SPAM: "spam",
    BUNCH: "bunch",
    SPACES: "Interests",
    NOTIF: "notifications",
    ACTIVITY: "activity",
    OPTN_CRT: "createResponse",
    DASHBOARD_COMPRSN: "comparison",
    OPTNS_FEED: "answersFeed",
    QUIZ: "Quiz",
    PUBLIC: "",
    TRNDING_FVR_FEED: "trendingQuessions",
    DEFAULT_PAGE: "trendingQuessions",
    TOUR_PAGE: "discover",
    BUSSINESS_PAGE: "page",
    BUSSINESS_PAGE_CATEGORY: "category",
    BUSSINESS_PAGES: "pages",
    QR_CODE_PAGE: "qCode",
    GROUP_QR_CODES: "QRCodes",
    PAGE_QUESTN: "pageQuestion",
    PAGE_QUESTNS: "pageQuestions",
    ORGANISATIONS: "organisations",
    ORGANISATION: "organisation",

    //GroupList counter
    ALL_GROUP_LIST_COUNTER: 15,
    OPTN_ADD_COUNT_UNLMTD_STR: "Unlimited",
    OPTN_VOTE_COUNT_UNLMTD_STR: "Unlimited",

    // fiver form charts data 
    FIVER_FORM_CHART_DT: null,
    DASH_FILTR_APPLIED: false,


    // emotions chart mark  
    EMOTIONS_MARK_SCORE: 0.5,

    COMPRSN_OPTNS: [],
    OPTN_CRTD: false,


    // TOOOLTIPS 
    FVR_CRT_BTN_TOOLTIP: "Create Quession",
    EXPLORE_BTN_TOOLTIP: "Explore Global Feed",
    FEEBACK_BTN_TOOLTIP: "Share Feedback",
    NOTIFY_BTN_TOOLTIP: "Notifications",
    USR_PROFILE_BTN_TOOLTIP: "Manage you account",
    BACK_BTN_TOOLTIP: "Back",
    GRP_ADD_BTN_TOOLTIP: "Create Group",
    GRP_ID: null,
    PUBLIC_GRP_DETAIL: "Anyone can view quessions & responses",
    PRIVATE_GRP_DETAIL: "Only approved user can view quessions and responses",

    // fiver create tabs details strings 
    QUSTN_CRT_DETAIL: "Need some answers? Ask a question",
    QPOLL_CRT_DETAIL: "Quickly create a poll with two options",
    POLL_CRT_DETAIL: "Create a poll for your options",
    IPOLL_CRT_DETAIL: "Create a poll for your images",
    SURVY_CRT_DETAIL: "Create a form for the world to fill",
    POST_CRT_DETAIL: "Share something with the world",
    QUIZ_CRT_DETAIL: "Create a quiz for the world to answer",
    NO_MORE_QUESTNS: "No more quessions to show",

    // fiver settings strings
    OPTN_ADD_COUNT_SETTNGS: "Number of responses a user can add",
    OPTN_VOTE_COUNT_SETTNGS: "Number of responses a user can vote",

    // RESPONSE CREATION 
    POLL_RESPONSE_TITLE: "Add choice",
    SURVEY_RESPONSE_TITLE: "Fill form",
    QUESTN_RESPONSE_TITLE: "Add answer",
    QUIZ_RESPONSE_TITLE: "Answer quiz",
    FVR_POST_AS_STRING: null,
    FVR_POST_AS_TOOL_TIP_STRING: "Post as",
    COMNT_AS_TOOL_TIP_STRING: "Comment as",

    // token related 
    ACCS_TOKN: null,

    // User pic name Snippet
    USR_PIC_BACKGROUND: "0098f2",   // set to random for getting random colors
    USR_PIC_COLOR: "fff",
    USR_PIC_CHAR_LEN: 2,
    USR_PIC_SIZE: 200,
    USR_PIC_TXT_SIZE: 1.7,

    OPTION_EDIT_DLTD_IMGS: [],
    PAGES_VISTED: [],
    ACTIV_GRP_MENU_ITEM: null,
    CURRNT_LOCATION: { lat: -34.397, lng: 150.644 },
    ACTIVE_PAGE_ID: null,
    QUSTNS_LIST_COUNTER: 8,

    BLACK_BOX_VIEW_STR: 'Blind survey',
    THANKS_NOTE_TITLE: "Thank You",
    THANKS_NOTE_DESC: "Thank you for your valuable response.",
    QUIZ_RESPONSE_ADD_LIMIT_STR: "Quiz can be answered only once.",
    BLIND_SURVEY_THANKS_NOTE_DESC: "Thank you for your valuable feedback.",

    ALL_ORGNISTN_LIST_COUNTER: 15,
    ORGNISTN_FEED_COUNTER: 10,
    ORG_SHARE_LABEL: "Choose organisation",
    ORG_MEMBR_REMOVE_STRNG: "Are you sure you want to remove this member from your organisation?",

    //Chats
    CHAT_HEADING: "Messages",

    //survey and quiz templete
    RES_TEMP: "Response templete for mobile",
    SINGLE_PG: "Single Page",
    SLIDED: "Slides",

    SRCH_INPUT_TYPD: false,
    CHARTS_LEGENDS_AT_BOTTOM: true,
    QUSTN_KEYWORD_EXTRACTION_COUNT: 20,

    ACTIVE_CHAT_URL: null,

    PUBLIC_ORG_DETAIL: "Anyone can view group & pages",
    PRIVATE_ORG_DETAIL: "Only approved user can view group & pages",

    LABEL: '#565656',
    INFO: '#11CDEF',
    ERROR: '#F5365C',
    SUCCESS: '#2DCE89',
    WARNING: '#FB6340',


    NEIGHBOUR: "#ffc4c9",
    BUYER_WITH_AGENT: "#CAF8DF",
    BUYER_NO_AGENT: "#b6a1f1",
    PASSING_BY: "#d1bfa8",
    ONLY_AGENT: "#c0d1ac",


    NEIGHBOUR_TXT: "#836568",
    BUYER_WITH_AGENT_TXT: "#5c8a63",
    BUYER_NO_AGENT_TXT: "#625782",
    PASSING_BY_TXT: "#716b49",
    ONLY_AGENT_TXT: "#677964",


    NEIGHBOUR_PLUS_TXT: "#6a5254",
    BUYER_WITH_AGENT_PLUS_TXT: "#5c8a63",
    BUYER_NO_AGENT_PLUS_TXT: "#625782",
    PASSING_BY_PLUS_TXT: "#716b49",
    ONLY_AGENT_PLUS_TXT: "#677964",


    EXPRNC_HAPPY_TXT: "#52d243",
    EXPRNC_EXTREMELY_HAPPY_TXT: "#00b747",
    EXPRNC_DISAPPOINTED_TXT: "#ea8033",
    EXPRNC_EXTREMELY_DISAPPOINTED_TXT: "#ff000f",
    EXPRNC_MODERATE_TXT: "#ffd500",
};
