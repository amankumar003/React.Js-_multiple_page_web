/* IpadView.js - IpadView component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,17feb23,pwn  created.
*/

/*
DESCRIPTION
This file is the IpadView component for FOOTFALL.
*/

/* Imports */
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import { Button, Row, Spinner } from 'reactstrap'
import { IMAGES } from '../../../config/Images';
import Avatar from 'react-avatar';
import CustomQRCode from '../../QRCode/CustomQRCode';
import Global from '../../../config/Global';
import FeedBackAdd from '../../feedBack/FeedBackAdd';
import StringHelper from '../../../config/StringHelper';

class IpadView extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            openHouseId: this.props.openHouseId,
            loading: false,
            showForm: false,
            render: false,
            raffleView: false,
            showFeedBackAdd: false,
            height: window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
        }
    }






    /*******************************************************************************
    *
    * spinnrUI - helps to render spiiner.
    *
    * This function helps to render spiiner.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    spinnrUI() {
        return <>
            <span className="notFoundPage" style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
            }}>
                <div id="notfound" className=" " style={
                    {

                    }
                }>
                    <div className="notfound">
                        <Spinner
                            className=" spinnerTron mobileSpinnerPosition" style={{
                                width: '5rem', height: '5rem',
                                color: Global.THEME_COLOR
                            }} />
                    </div>
                </div>
            </span>
        </>
    }


    footerUI() {
        let userDt = this.props.openHouseDt[0].userId.profile;
        let personName = userDt.name === null ? "" : userDt.name;
        let userId = this.props.openHouseDt[0].userId.id;
        let userPic = userDt.userPic === null ? "" : userDt.userPic;;
        let teamName = userDt.teamName === null ? "" : userDt.teamName;;
        let borkerageName = userDt.brokerageName === null ? "" : userDt.brokerageName;;
        let phoneNumber = userDt.phoneNumber === null ? "" : userDt.phoneNumber;;

        return this.state.showFeedBackAdd === false &&
            <div style={{
                background: "white",
                position: "absolute",
                bottom: "0rem",
                flex: 1,
                width: "100%",
                display: "contents",
            }}>

                <div style={{
                    flexDirection: "row",
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingBottom: "0rem",
                }}>
                    <div style={{
                        flexDirection: "row",
                        display: 'flex',
                        flex: 1,

                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>
                        <div style={{
                            flexDirection: "row",
                            display: 'flex',
                            padding: "0.5rem",
                            paddingBottom: "0.1rem"
                        }}>

                            <font style={{ display: "block", fontSize: "0.7rem" }}>
                                {"Powered by   "}

                            </font>
                            <img style={{
                                marginLeft: "0.2rem",
                                marginTop: "-0.4rem",
                                height: "1.2rem", objectFit: "cover", display: "block"
                            }}
                                src={IMAGES.LOGO3} />

                        </div>

                    </div>




                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'column',
                    }}>
                        <div style={{
                            flexDirection: "row",
                            display: 'flex',
                            flex: 1,

                        }}>
                            <div style={{ display: "block" }}>
                                <Avatar
                                    size="60"
                                    round="20rem"
                                    name={personName}
                                    src={userPic} />
                            </div>

                            <div style={{ marginLeft: "0.5rem" }}>
                                <font style={{ display: "block", fontSize: "1.1rem", fontWeight: "bold", color: "black" }}>
                                    {StringHelper.strTruncate(personName, 15)}

                                </font>

                                {borkerageName !== "" &&

                                    <font style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        marginTop: "-0.3rem"
                                    }}>
                                        {StringHelper.strTruncate(borkerageName, 15)}

                                    </font>
                                }

                                {phoneNumber !== "" &&
                                    <font style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        marginTop: "-0.3rem",
                                    }}>
                                        {phoneNumber}

                                    </font>
                                }
                            </div>
                        </div>

                    </div>
                </div>



            </div>

    }

    render() {


        return (
            <>
                {this.state.showFeedBackAdd === false &&
                    <div style={{

                        flex: 1,
                    }}>
                        <div style={{
                            display: "flex",

                        }}>
                            <div style={{
                                flex: 1,
                                paddingTop: "1.5rem",
                                textAlign: "center",
                                marginBottom: "1rem"
                            }}>
                                <font style={{
                                    textAlign: "center",
                                    fontWeight: "500",
                                    color: "black",
                                    textTransform: "uppercase",
                                    display: "block",
                                    fontSize: "1rem"

                                }}>{this.props.headerStr1}</font>


                                <font className="strechtedTxt" style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "black",
                                    textTransform: "uppercase",
                                    display: "block",
                                    fontSize: "2rem"

                                }}>{this.props.headerStr2}</font>
                            </div>
                        </div>





                        <div style={{
                            // display: "flex",
                            backgroundColor: '#e7b62b',
                            height: this.state.height <= 800 ? "65vh" : "75vh",
                            marginBottom: "0.5rem",


                        }}>
                            <div style={{
                                flex: 1,
                                textAlign: "center",
                                paddingTop: this.state.height <= 800 ? "4rem" : "10rem",

                            }}>
                                <font style={{
                                    display: "block",
                                    fontSize: '1rem',
                                    fontWeight: "bold",
                                    color: "black",
                                    textAlign: "cnter", textTransform: "upperCase",
                                    marginBottom: "1rem"
                                }}>
                                    {this.props.qrStr1}
                                </font>
                                <CustomQRCode
                                    size={this.state.height <= 800 ? 160 : 180}
                                    url={"https://footfallz.com/ipadFeedBackAdd/" + this.state.openHouseId} />
                                <font style={{
                                    textAlign: "center",
                                    fontWeight: "400",
                                    color: "black",
                                    textTransform: "uppercase",
                                    display: "block",
                                    fontSize: "0.8rem"
                                }}>Scan QR code</font>


                                <font style={{
                                    textAlign: "center",
                                    fontWeight: "400",
                                    color: "black",
                                    textTransform: "uppercase",
                                    display: "block",
                                    fontSize: "0.8rem"

                                }}>OR</font>

                                <font style={{
                                    textAlign: "center",
                                    fontWeight: "400",
                                    color: "black",
                                    textTransform: "uppercase",
                                    display: "block",
                                    fontSize: "0.8rem"

                                }}>Press</font>

                                <Button
                                    type="button"
                                    style={{
                                        marginTop: this.state.height <= 800 ? "1rem" : "8rem",
                                        background: "white",
                                        boxShadow: "none",
                                        borderRadius: "1rem",
                                        borderColor: "black",
                                        padding: "0.4rem",
                                        paddingLeft: "4rem",
                                        paddingRight: "4rem",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        justifyContent: "center",
                                        marginBottom: "2rem"
                                    }}
                                    onClick={() => {
                                        this.setState({ showFeedBackAdd: true })
                                        /* 
                                        if (StringHelper.strWhiteSpaceRemvr(this.state.name).length === 0) {
                                            notify("Name is required");
                                            this.setState({ loading: false });
                                            return false;
                                        } */
                                    }}>
                                    <font style={{
                                        fontWeight: "bold",
                                        fontSize: "1.5rem",
                                        color: "black"
                                    }}>  Enter</font>
                                </Button>
                            </div>
                        </div>
                    </div>
                }

                {this.state.showFeedBackAdd === true &&
                    <FeedBackAdd
                        message={"Thanks for your feedback"}
                        reEnter={true}
                        openHouseId={this.state.openHouseId}
                        reload={true}
                    />
                }


                {this.footerUI()}

            </>


        )
    }
}

export default withRouter(IpadView)
