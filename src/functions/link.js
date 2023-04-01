/* link.js - custom link for TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,09Jan21,SK   created.
*/

/*
DESCRIPTION
This file is for controlling the linking between pages using history props by replacing same 
page linking and pushing others.  
*/

/* Imports */
import { withRouter } from 'react-router-dom';

export const link = (props, current, pushed) => {
  // console.log("Custom Link from", current, pushed)
  if(current === pushed) 
    return props.history.replace({pathname: pushed})
  else 
    return props.history.push({pathname: pushed})

}

export default withRouter(link);