/* feedBackAdd.js - feedBackAdd component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,14nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the feedBackAdd component for the FOOTFALL
*/

/* Imports */
import React, { useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import FeedBackAdd from '../components/feedBack/FeedBackAdd';
import Layout from '../functions/layout';


const FeedBackAddScreen = (props) => {
  let { openHouseId } = useParams()


  return <FeedBackAdd
    message={"Thanks for your feedback"}
    openHouseId={openHouseId}
    reload={false}
  />
}


export default Layout(FeedBackAddScreen);

