/* QRCodeScreen.js - QRCodeScreen component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,16nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the QRCodeScreen component for the FOOTFALL
*/

/* Imports */
import React, { useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import FeedBackAdd from '../components/feedBack/FeedBackAdd';
import QRCode from '../components/QRCode';


const QRCodeScreen = (props) => {
  let { openHouseId } = useParams()


  return <QRCode openHouseId={openHouseId} reFeedBack={false} />
}


export default (QRCodeScreen);

