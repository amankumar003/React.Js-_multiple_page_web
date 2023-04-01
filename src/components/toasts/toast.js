/* profile.js - profile page component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,19aug21,pwn added limit to 1.
01a,23feb21,abh created
*/

/*
DESCRIPTION
This file is profile page component for the TRON.

Created a component toast.js which can be used anywhere by just importing it
import notify from 'components/toasts/toast'; and then replacing alert by notify.
eg - notify("Error login")
*/

import React from "react";
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 5000,
    draggable: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: 0,
    limit: 1,
    clearWaitingQueue: true,
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide
});
function notify(message, color) {

const customId = "custom-id-yes";
    if (color === undefined)
        color = "default_toast"
    toast(
        message, {
        className: `notify ${color}`,
        closeButton: false,
        toastId: customId
    });
}
export default notify;