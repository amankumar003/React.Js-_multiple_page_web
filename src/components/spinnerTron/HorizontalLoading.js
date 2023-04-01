/* HorizontalLoading.js - HorizontalLoading component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,19nov21,pwn  created.
*/

/*
DESCRIPTION
This file is the HorizontalLoading component for TRON.
*/

/* Imports */
import React from "react";
import './HorizontalLoading.scss'

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

class HorizontalLoading extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <span className="HorizontalLoading">
                <div id="fountainG">
                    <div id="fountainG_1" className="fountainG"></div>
                    <div id="fountainG_2" className="fountainG"></div>
                    <div id="fountainG_3" className="fountainG"></div>
                    <div id="fountainG_4" className="fountainG"></div>
                    <div id="fountainG_5" className="fountainG"></div>
                    <div id="fountainG_6" className="fountainG"></div>
                    <div id="fountainG_7" className="fountainG"></div>
                    <div id="fountainG_8" className="fountainG"></div>
                </div>
            </span>
        );
    }
}
export default HorizontalLoading;
