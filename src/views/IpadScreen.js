/* IpadScreen.js - IpadScreen component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,16feb23,pwn  created.
*/

/*
DESCRIPTION
This file is the IpadScreen component for the FOOTFALL
*/

/* Imports */
import React, { useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import FeedBackAdd from '../components/feedBack/FeedBackAdd';
import IpadQRView from '../components/pagesTron/iPadView/IpadQRView';
import IpadView from '../components/pagesTron/iPadView/IpadView';
import QRCode from '../components/QRCode';


const IpadScreen = (props) => {
    let { openHouseId } = useParams()


    return <IpadQRView openHouseId={openHouseId} reFeedBack={true} />
}


export default (IpadScreen);

