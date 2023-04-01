/* FeedBackCatgries.js - FeedBackCatgries component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,17nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the FeedBackCatgries component for FOOTFALL.
*/

/* Imports */
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import Global from '../../config/Global';
import FeedBackCatgrySnippet from './FeedBackCatgrySnippet';

class FeedBackCatgries extends React.Component {
    constructor(props) {
        super(props);
        let feedBackType = "";
        if (this.props.feedBackType !== undefined &&
            this.props.feedBackType !== null &&
            this.props.feedBackType !== "")
            feedBackType = this.props.feedBackType;

        this.state = {
            feedBackType: feedBackType,
            render: true,
            height: window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
        }
    }

    /*******************************************************************************
    *
    * feedBackTypeChngHndlr - helps to handle feedback type change event on child component.
    *
    * This function helps to handle feedback type change event on child component.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    feedBackTypeChngHndlr(feedBackType) {
        if (feedBackType === this.state.feedBackType)
            return false;

        this.setState({
            // render: false,
            feedBackType: feedBackType
        }, () => {
            // this.setState({ render: true })

        });
        return this.props.onFeedBackTypeChng(feedBackType)

    }


    /*******************************************************************************
    *
    * buttonUI - helps to render button.
    *
    * This function helps to render button.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    buttonUI(btnStr, icon, backgroundColor, iconColor,
        matchString) {
        if (this.state.render === true)
            return <FeedBackCatgrySnippet
                btnStr={btnStr}
                icon={icon}
                backgroundColor={backgroundColor}
                iconColor={iconColor}
                matchString={matchString}
                feedBackType={this.state.feedBackType}
                onFeedBackTypeChng={this.feedBackTypeChngHndlr.bind(this)}
            />


    }


    render() {


        return (
            <div className='step1Div' style={{
                marginTop: this.state.height <= 800 ? "40%" : "30%",
                marginLeft: this.state.height <= 800 ? "0rem" : "3rem",
                marginRight: this.state.height <= 800 ? "0rem" : "3rem",

            }}>
                <h5 style={{ textAlign: "center" }}> What type of guest are you?</h5>

                {this.buttonUI("Neighbour", "plus",
                    Global.NEIGHBOUR,
                    Global.NEIGHBOUR_PLUS_TXT,
                    "NEIGHBOUR")}


                {this.buttonUI("Buyer with agent",
                    "plus",
                    Global.BUYER_WITH_AGENT,
                    Global.BUYER_WITH_AGENT_PLUS_TXT,
                    "BUYER_AGENT")
                }


                {this.buttonUI("Buyer, no agent",
                    "plus",
                    Global.BUYER_NO_AGENT,
                    Global.BUYER_NO_AGENT_PLUS_TXT,
                    "BUYER_NO_AGENT")
                }


                {/* {this.buttonUI("Passing by",
                    "plus", Global.PASSING_BY,
                    Global.PASSING_BY_PLUS_TXT,
                    "PASSING_BY")
                } */}


                {this.buttonUI("Agent",
                    "plus",
                    Global.ONLY_AGENT,
                    Global.ONLY_AGENT_PLUS_TXT,
                    "ONLY_AGENT")
                }

                {(window.innerWidth < 800 &&
                    this.state.slideShow === true) &&
                    <div style={{
                        textAlign: "center",
                        marginTop: "0rem",
                        position: "absolute",
                        bottom: "1.9rem",
                        left: "30%"
                        // marginBottom: "1rem",
                    }}>

                        <i className='fa fa-window-minimize' style={{
                            border: 0,
                            padding: 0,
                            color: this.state.currentIndx === 0 ? "#0098f2" : "black"
                        }} onClick={(e) => { this.setState({ currentIndx: 0 }) }} />
                        <i className='fa fa-window-minimize' style={{
                            border: 0,
                            padding: 0,
                            marginLeft: "1rem",
                            color: this.state.currentIndx === 1 ? "#0098f2" : "black"

                        }} onClick={(e) => {
                            this.setState({ currentIndx: 1 })
                        }} />
                        <i className='fa fa-window-minimize' style={{
                            border: 0,
                            padding: 0,
                            marginLeft: "1rem",
                            color: this.state.currentIndx === 2 ? "#0098f2" : "black"

                        }} onClick={(e) => { this.setState({ currentIndx: 2 }) }} />
                        <i className='fa fa-window-minimize' style={{
                            border: 0,
                            padding: 0,
                            marginLeft: "1rem",
                            color: this.state.currentIndx === 3 ? "#0098f2" : "black"

                        }} onClick={(e) => { this.setState({ currentIndx: 3 }) }} />
                        <i className='fa fa-window-minimize' style={{
                            border: 0,
                            padding: 0,
                            marginLeft: "1rem",
                            color: this.state.currentIndx === 4 ? "#0098f2" : "black"

                        }} onClick={(e) => { this.setState({ currentIndx: 4 }) }} />


                        <i className='fa fa-window-minimize' style={{
                            border: 0,
                            padding: 0,
                            marginLeft: "1rem",
                            color: this.state.currentIndx === 5 ? "#0098f2" : "black"

                        }} onClick={(e) => { this.setState({ currentIndx: 5 }) }} />

                    </div>
                }
            </div>
        )
    }
}

export default withRouter(FeedBackCatgries)
