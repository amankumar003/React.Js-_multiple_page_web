/* 404.js - not found page 404 component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01f,12sep22,srs  added quessionNotAvailable
01e,18aug22,pwn  added NotFoundJoinGrp.
01d,18aug22,pwn  added group join button.
01c,20nov21,pwn  added metaTagsUpdt().
01b,14oct21,pwn  removed sig in button.
01a,07apr21,pwn  created.
*/

/*
DESCRIPTION
This file is the not found page 404 component for TRON.
*/

/* Imports */
import React from "react";
import "./NotFoundPage.scss"
// reactstrap components
import {
    Row,
    Col,
    Input,
    Label,
    Badge,
    Button,
    PopoverBody,
    UncontrolledPopover,

} from "reactstrap";
import PageHelmet from "../../components/pageHelmet/PageHelmet";
import { withRouter } from "react-router-dom";
import quessionNotAvailable from '../../assets/img/quessionNotAvailable.png';

class NotFoundPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    /*******************************************************************************
    *
    * metaTagsUpdt - helps to update meta tags.
    *
    * This function helps to update meta tags.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    metaTagsUpdt() {
        let creatorName = "";
        let title = "Quession: Your feedback destination";
        let description = "Quession is a perfect place to arrive at a conclusion through collaborative feedback on important matters."
        let icon = null;

        return <PageHelmet
            creatorName={creatorName}
            title={title}
            description={description}
            icon={icon} />
    }

    render() {
        let { groupData } = this.props;
        let groupId = "";
        let showGrpJoin = false;
        if (groupData !== undefined)
            groupId = groupData.groupId;

        if (groupId !== null &&
            groupId !== "" &&
            groupId !== undefined)
            showGrpJoin = true;

        let metaTags = this.metaTagsUpdt()
        return (
            <>
                {metaTags}
                <span className="notFoundPage">
                    <div id="notfound" className="feedCard ">
                        <div className="notfound">
                            {showGrpJoin === false &&
                                <>
                                    <div className="notfound-404">
                                        <img className="feedNotAvailableIcon blurCard" src={quessionNotAvailable} alt="..." />
                                        <p style={{ marginTop: '-0.4rem' }}>
                                        Oops! Page Not Found. 
                                        </p>
                                        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable
                                        </p>
                                    </div>
                                </>
                            }


                            
                        </div>
                    </div>
                </span>
            </>
        );
    }
}
export default withRouter(NotFoundPage);
