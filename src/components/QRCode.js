/* QRCode.js - QRCode component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,30jan23,pwn  added RaffleFeedBackAddView.
01a,16nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the QRCode component for FOOTFALL.
*/

/* Imports */
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import { Row, Spinner } from 'reactstrap'
import Global from '../config/Global';
import ListingHelpers from '../config/ListingHelpers';
import RaffleHelpers from '../config/RaffleHelpers';
import FeedBackAdd from './feedBack/FeedBackAdd';
import RaffleFeedBackAddView from './raffle/RaffleFeedBackAddView';


class QRCode extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            openHouseId: this.props.openHouseId,
            reFeedBack: this.props.reFeedBack,
            loading: false,
            showForm: false,
            render: false,
            raffleView: false,

        }
    }



    componentDidMount() {
        this.lastRaffleGet();
    }


    /*******************************************************************************
    *
    * raffleDtGet - helps to get open house data.
    *
    * This function helps to get  open house data.
    *
    * RETURNS: Array if success, false otherwise
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    async lastRaffleGet() {
        try {
            this.setState({ loading: true })


            // call feed get API 
            RaffleHelpers.lastRaffleGet(Global.USER_ID,
                this.state.openHouseId).then(res => {
                    this.setState({ loading: false });
                    if (res !== false) {

                        console.log(res.data.lastRaffle.raffle)
                        if (res.data.lastRaffle.error === "Open House doesn't exist") {
                            this.setState({
                                dtNtFound: true,
                                render: false,
                            }, () => {


                            })
                            return false;
                        }

                        if (res.data.lastRaffle.raffle === null) {
                            this.setState({
                                raffleView: false,
                                render: true,
                            }, () => {


                            })
                            return false;
                        }

                        this.setState({
                            raffleDt:
                                res.data.lastRaffle.raffle
                        }, () => {

                            if (this.state.raffleDt[0].length === 0) {
                                this.setState({ loading: false, dtNtFound: true });
                                return false;
                            }

                            this.setState({
                                render: true,
                                raffleView: true,
                                botttomRchd: true
                            }, () => {


                            });

                        })
                    }
                    else
                        this.setState({ loading: false, dtNtFound: true })

                });




        } catch (error) {
            console.log("error on feed get", error)
            this.setState({ loading: false, dtNtFound: true });
            // Toast.show("Something went wrong, please try again.");
        }
    }


    /* listingDtGet() {
        try {


            this.setState({ loading: true }, () => {

                // call feed get API 
                ListingHelpers.listingQrDtGet(
                    this.state.listingId).then(res => {
                        this.setState({ loading: false });

                        if (res !== false) {

                            this.setState({
                                qrData: res.data.listingQrDtGet
                            }, () => {
                                if (this.state.qrData.length === 0) {
                                    this.setState({
                                        loading: false,
                                        dtNtFound: true
                                    });
                                    return false;
                                }

                                this.setState({
                                    render: true,
                                    botttomRchd: true
                                }, () => {
                                    if (res.data.listingQrDtGet.length === 0 &&
                                        this.state.qrData.length > 0)
                                        this.setState({ noMoreDt: true })

                                });

                            })
                        }
                        else
                            this.setState({
                                loading: false,
                                dtNtFound: true
                            })

                    });

            })

        } catch (error) {
            this.setState({
                loading: false,
                dtNtFound: true
            })
        }


    } */


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


    render() {


        return (
            <>
                {this.state.render === true ?

                    (this.state.raffleView === false ||
                        this.state.reFeedBack === true) ?
                        <FeedBackAdd
                            message={"Thanks for your feedback"}
                            reEnter={this.state.reFeedBack}
                            openHouseId={this.state.openHouseId}
                            reload={false}
                        />
                        :
                        <RaffleFeedBackAddView
                            message={"Thank you for your feedback and entering the raffle!"}
                            raffleDt={this.state.raffleDt}
                            openHouseId={this.state.openHouseId} />
                    :
                    this.state.loading === true ?
                        this.spinnrUI()
                        :
                        this.state.dtNtFound === true &&
                        <span className="notFoundPage"
                            style={{
                                textAlign: "center",
                                justifyContent: "center",
                                display: "flex",
                                // border: "1px solid red"
                            }}>
                            <font style={{
                                fontSize: "2rem",
                                marginTop: "3rem"
                            }}>Open house does not exists, please check with Realtor.</font>
                            <i className='fa fa-home' style={{
                                fontSize: "5rem",
                                textAlign: "center",
                                justifyContent: "center",
                            }}></i>


                        </span>
                }
            </>


        )
    }
}

export default withRouter(QRCode)
