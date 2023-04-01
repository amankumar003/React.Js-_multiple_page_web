/* ComingSoon.js - coming soon page 404 component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,17nov21,pwn  created.
*/

/*
DESCRIPTION
This file is the coming soon page for TRON.
*/

/* Imports */
import React from "react";
import "./NotFoundPage.scss"
import iconNotFound from "assets/img/theme/smilying.png"
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
import Global from "config/Global";

class ComingSoon extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <>
                <span className="notFoundPage">
                    <div id="notfound" className="feedCard ">
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1><span
                                    style={{ backgroundImage: "url(" + iconNotFound + ")" }}
                                ></span></h1>
                            </div>
                            <h2>Coming soon</h2>
                            <p>Stay tuned for something amazing</p>
                            {/* {Global.USER_ID === null &&
                                < a className="notfoundSignUpSingIn" href="/login">Sign in</a>
                            } */}
                        </div>
                    </div>
                </span>
            </>
        );
    }
}
export default ComingSoon;
