/* Step4.js - Step4 component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,01mar23,pwn  added questions for admin.
01a,01dec22,pwn  created.
*/

/*
DESCRIPTION
This file is the Step4 component for FOOTFALL.
*/

/* Imports */
import { Checkbox } from '@material-ui/core';
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import { Button, Input, Label } from 'reactstrap';
import Global from '../../../config/Global';
import StringHelper from '../../../config/StringHelper';
import notify from '../../toasts/toast';
import AgentDetailsAdd from '../detailsModal/AgentDetailsAdd';
import BuyerDetailsAdd from '../detailsModal/BuyerDetailsAdd';

class Step4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            knowHomeVal: false,
            buySell: false,
            refral: false,

            getContacted: false,
            clientOffer: false,
            contctListingAgnt: false,
            offrToListingAgnt: false,

            feedBackType: this.props.feedBackType,
            width: window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
            height: window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
        };
    }

    componentDidUpdate(prevProps) {

        if (prevProps.feedBackType !== this.props.feedBackType) {
            let knowHomeVal = false;
            let buySell = false;
            let refral = false;
            let getContacted = false;
            let clientOffer = false;


            if (this.props.feedBackType === "BUYER_AGENT") {
                knowHomeVal = false;
                buySell = false;
                refral = false;
                getContacted = false;
                clientOffer = false;
            }


            if (this.props.feedBackType === "ONLY_AGENT") {
                knowHomeVal = false;
                buySell = false;
                refral = false;
            }

            if (this.props.feedBackType !== "ONLY_AGENT") {
                getContacted = false;
                clientOffer = false;
            }

            this.setState({
                feedBackType: this.props.feedBackType,
                knowHomeVal: knowHomeVal,
                buySell: buySell,
                refral: refral,

                getContacted: getContacted,
                clientOffer: clientOffer,

            })
        }
    }

    questionsHndlr() {
        return this.props.onRefralChng({
            knowHomeVal: this.state.knowHomeVal,
            buySell: this.state.buySell,
            refral: this.state.refral,

            getContacted: this.state.getContacted,
            clientOffer: this.state.clientOffer,
            contctListingAgnt: this.state.contctListingAgnt,
            offrToListingAgnt: this.state.offrToListingAgnt,

        })
    }

    render() {


        return (
            <div className="step1Div questionDiv bigDiv"
                style={{
                    marginTop: this.state.height <= 800 ? "40%" : "45%",
                    // background: "#f4f5f7",
                    padding: "1rem",
                    marginLeft: this.state.height <= 800 ? "0rem" : "3rem",
                    marginRight: this.state.height <= 800 ? "0rem" : "3rem",

                    paddingBottom: "0rem",
                    paddingTop: "2.5rem",
                    borderRadius: "0.5rem",
                    // border: "1px solid #dbdbdb"
                }}>

                <h5 style={{ textAlign: "center", marginBottom: "1rem", fontWeight: "bold" }}>How can we help?</h5>

                {(this.state.feedBackType !== "ONLY_AGENT" &&
                    this.state.feedBackType !== "BUYER_AGENT") ?
                    <>
                        <div className="settingsModalContnt22" style={{
                            display: "block",

                        }}

                        >
                            <tr className="firstRow"

                            >

                                <td

                                    className={"settingContrl"} style={{ paddingRight: "0.8rem" }}>

                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={this.state.knowHomeVal}
                                            // onChange={(e) => this.anonymousVote()}
                                            className="customCheckBoxTron" />
                                        <span class="settings-checkmark" onClick={(e) => {
                                            this.setState({ knowHomeVal: !this.state.knowHomeVal }, () => {
                                                this.questionsHndlr();
                                            })
                                        }}
                                        ></span>
                                    </label>
                                </td>

                                <td
                                    style={{
                                        marginLeft: "0.5rem"
                                    }}
                                    onClick={(e) => {
                                        this.setState({ knowHomeVal: !this.state.knowHomeVal }, () => {
                                            this.questionsHndlr();
                                        })
                                    }}
                                    className={"settingContrl"}>
                                    <font className="settingsTypeStr">  I would like to know the value of my current home</font>
                                </td>
                            </tr>
                        </div>


                        <div className="settingsModalContnt22" style={{
                            display: "block",
                            marginTop: "1rem",
                            marginBottom: "1rem"
                        }}

                        >
                            <tr className="firstRow">

                                <td


                                    className={"settingContrl"} style={{ paddingRight: "0.8rem" }}>

                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={this.state.buySell}
                                            // onChange={(e) => this.anonymousVote()}
                                            className="customCheckBoxTron" />
                                        <span class="settings-checkmark"
                                            onClick={(e) => this.setState({ buySell: !this.state.buySell }, () => {
                                                this.questionsHndlr();
                                            })}
                                        ></span>
                                    </label>
                                </td>

                                <td
                                    style={{
                                        marginLeft: "0.5rem"
                                    }}
                                    onClick={(e) => this.setState({ buySell: !this.state.buySell }, () => {
                                        this.questionsHndlr();
                                    })}

                                    className={"settingContrl"}>
                                    <font className="settingsTypeStr"> I am interested in buying or selling a home</font>
                                </td>
                            </tr>
                        </div>


                        <div className="settingsModalContnt22" style={{
                            display: "block"
                        }}
                        >
                            <tr className="firstRow">

                                <td


                                    className={"settingContrl"} style={{ paddingRight: "0.8rem" }}>

                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={this.state.refral}
                                            // onChange={(e) => this.anonymousVote()}
                                            className="customCheckBoxTron" />
                                        <span class="settings-checkmark" onClick={(e) => this.setState({ refral: !this.state.refral }, () => {
                                            this.questionsHndlr();
                                        })}></span>
                                    </label>
                                </td>

                                <td
                                    style={{
                                        marginLeft: "0.5rem"
                                    }}
                                    onClick={(e) => this.setState({ refral: !this.state.refral }, () => {
                                        this.questionsHndlr();
                                    })}

                                    className={"settingContrl"}>
                                    <font className="settingsTypeStr">I know someone who is looking to buy or sell a home that i would like to refer you</font>
                                </td>
                            </tr>
                        </div>
                    </>

                    :
                    this.state.feedBackType === "ONLY_AGENT" ?
                        <>
                            <div className="settingsModalContnt22" style={{
                                display: "block",

                            }}

                            >
                                <tr className="firstRow"

                                >

                                    <td

                                        className={"settingContrl"} style={{ paddingRight: "0.8rem" }}>

                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={this.state.getContacted}
                                                // onChange={(e) => this.anonymousVote()}
                                                className="customCheckBoxTron" />
                                            <span class="settings-checkmark" onClick={(e) => {
                                                this.setState({ getContacted: !this.state.getContacted }, () => {
                                                    this.questionsHndlr();
                                                })
                                            }}
                                            ></span>
                                        </label>
                                    </td>

                                    <td
                                        style={{
                                            marginLeft: "0.5rem"
                                        }}
                                        onClick={(e) => {
                                            this.setState({ getContacted: !this.state.getContacted }, () => {
                                                this.questionsHndlr();
                                            })
                                        }}
                                        className={"settingContrl"}>
                                        <font className="settingsTypeStr">  I would like to be contacted for the additional questions</font>
                                    </td>
                                </tr>
                            </div>




                            <div className="settingsModalContnt22" style={{
                                display: "block",
                                marginTop: "1rem",
                                marginBottom: "1rem"
                            }}
                            >
                                <tr className="firstRow">

                                    <td


                                        className={"settingContrl"} style={{ paddingRight: "0.8rem" }}>

                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={this.state.clientOffer}
                                                // onChange={(e) => this.anonymousVote()}
                                                className="customCheckBoxTron" />
                                            <span class="settings-checkmark" onClick={(e) => this.setState({ clientOffer: !this.state.clientOffer }, () => {
                                                this.questionsHndlr();
                                            })}></span>
                                        </label>
                                    </td>

                                    <td
                                        style={{
                                            marginLeft: "0.5rem"
                                        }}
                                        onClick={(e) => this.setState({ clientOffer: !this.state.clientOffer }, () => {
                                            this.questionsHndlr();
                                        })}

                                        className={"settingContrl"}>
                                        <font className="settingsTypeStr"> I will submit an offer for my client</font>
                                    </td>
                                </tr>
                            </div>




                        </>
                        :
                        this.state.feedBackType === "BUYER_AGENT" &&
                        <>
                            <div className="settingsModalContnt22" style={{
                                display: "block",

                            }}

                            >
                                <tr className="firstRow"

                                >

                                    <td

                                        className={"settingContrl"} style={{ paddingRight: "0.8rem" }}>

                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={this.state.contctListingAgnt}
                                                // onChange={(e) => this.anonymousVote()}
                                                className="customCheckBoxTron" />
                                            <span class="settings-checkmark" onClick={(e) => {
                                                this.setState({ contctListingAgnt: !this.state.contctListingAgnt }, () => {
                                                    this.questionsHndlr();
                                                })
                                            }}
                                            ></span>
                                        </label>
                                    </td>

                                    <td
                                        style={{
                                            marginLeft: "0.5rem"
                                        }}
                                        onClick={(e) => {
                                            this.setState({ contctListingAgnt: !this.state.contctListingAgnt }, () => {
                                                this.questionsHndlr();
                                            })
                                        }}
                                        className={"settingContrl"}>
                                        <font className="settingsTypeStr"> My agent will contact the listing agent for more questions.</font>
                                    </td>
                                </tr>
                            </div>




                            <div className="settingsModalContnt22" style={{
                                display: "block",
                                marginTop: "1rem",
                                marginBottom: "1rem"
                            }}
                            >
                                <tr className="firstRow">

                                    <td


                                        className={"settingContrl"} style={{ paddingRight: "0.8rem" }}>

                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={this.state.offrToListingAgnt}
                                                // onChange={(e) => this.anonymousVote()}
                                                className="customCheckBoxTron" />
                                            <span class="settings-checkmark" onClick={(e) => this.setState({ offrToListingAgnt: !this.state.offrToListingAgnt }, () => {
                                                this.questionsHndlr();
                                            })}></span>
                                        </label>
                                    </td>

                                    <td
                                        style={{
                                            marginLeft: "0.5rem"
                                        }}
                                        onClick={(e) => this.setState({ offrToListingAgnt: !this.state.offrToListingAgnt }, () => {
                                            this.questionsHndlr();
                                        })}

                                        className={"settingContrl"}>
                                        <font className="settingsTypeStr"> My agent will send an offer to the listing agent.</font>
                                    </td>
                                </tr>
                            </div>




                        </>
                }


                <div style={{
                    marginTop: "2rem",
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}>
                    <Button type="button"
                        style={{
                            background: "#0098f2",
                            borderRadius: "2rem",
                            paddingLeft: "3rem",
                            paddingRight: "3rem",
                            textTransform: "capitalize",
                            color: "white", boxShadow: "none", position: "absolute", bottom: "1rem"
                        }}
                        onClick={() => {
                            if (StringHelper.strWhiteSpaceRemvr(this.state.name).length === 0) {
                                notify("Name is required");
                                this.setState({ loading: false });
                                return false;
                            }

                            this.props.onSubmitPress();
                        }}>
                        Submit
                    </Button>
                </div>

            </div >
        )
    }
}

export default withRouter(Step4)
