/* Step1A.js - Step1A component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,16feb23,pwn  modified priceUI().
01a,02dec22,pwn  created.
*/

/*
DESCRIPTION
This file is the Step1A component for FOOTFALL.
*/

/* Imports */
import { Slider } from '@material-ui/core';
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import { Input, Row } from 'reactstrap';
import Helpers from '../../../config/Helpers';
import { IMAGES } from '../../../config/Images';
import FeedBackExprncIcons from '../FeedBackExprncIcons';

class Step1A extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            experience: null,
            loading: true,
            priceVal: null,
            price: "",
            width: window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
        }
    }

    changeMultiValue = (event, value) => {
        this.setState({ price: value });
    };


    /*******************************************************************************
    *
    * priceHndlr - helps to handle price change event on Slider component.
    *
    * This function helps to handle price change event on Slider component.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    priceHndlr = (event, value) => {
        let price = "Low Balled";

        /* if (value === 0)
          price = ""; */
        if (value === 1)
            price = "Low Balled";
        else if (value === 2)
            price = "Below Market Price";
        else if (value === 3)
            price = "Fair Price";
        else if (value === 4)
            price = "Above Market Price";
        else if (value === 5)
            price = "Extremely Pricey";

        this.setState({ price: price }, () => {
            this.setState({ priceVal: value });
            return this.props.onPriceChang(this.state.price.toUpperCase())
        })
    }


    valuetext() {
        let value = this.state.price;
        let price = "Low Balled";

        if (value === 1)
            price = "Low Balled";
        else if (value === 2)
            price = "Below Market Price";
        else if (value === 3)
            price = "Fair Price";
        else if (value === 4)
            price = "Above Market Price";
        else if (value === 5)
            price = "Extremely Pricey";

        return parseInt(value) + "re";
    }

    priceUI(iconTxt, marginLeft, imagURL) {
        return <div
            style={{
                marginLeft: marginLeft,
                display: "grid"
            }}
            onClick={() => {
                this.setState({
                    activePrice: iconTxt
                }, () => {
                    return this.props.onPriceChang(this.state.activePrice.toUpperCase())
                })
            }}
            className='feedBackExprncIconDiv22'>


            <div className='feedBackExprncIconDiv' style={{
                border: this.state.activePrice === iconTxt ? "1px solid #bcbcbc" : "1px solid white",

                borderRadius: 6,
                padding: "0.5rem"
            }}>
                <i className="fa fa-check" color={"white"} style={{
                    backgroundColor: "#0098f2",
                    padding: 4,
                    textAlign: "right",
                    alignSelf: "flex-end",
                    borderRadius: 100,
                    color: "white",
                    opacity: this.state.activePrice === iconTxt ? 1 : 0
                }} />

                <img className="feedBackExprncIcon"
                    src={imagURL} style={{

                        objectFit: "contain"
                    }} />
            </div>
            <font className="feedBackExprncIconTxt" style={{ lineHeight: "1rem", textAlign: "center" }}>
                {iconTxt}

            </font>
        </div>
    }

    render() {


        return (
            <div className="step1Div" style={{
                marginTop: this.state.width <= 800 ? "30%" : "35%",

            }} >




                <div style={{
                    padding: "1rem", 
                }}>
                    <h5 style={{ textAlign: "center", marginBottom: "1rem" }}>
                        What's your price opinion?
                    </h5>
                    {/* <font className="priceValTxt" style={{
                        float: "right",

                    }}>{this.state.price}</font> */}

                    {/*  <Slider
                        size="small"
                        defaultValue={this.state.priceVal}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        // value={this.valuetext()}
                        // getAriaValueText={getText}
                        // marks={customMarks}

                        min={1}
                        max={5}
                        onChange={this.priceHndlr}
                    />
 */}
                    <div style={{

                    }}>
                        <div style={{
                            marginTop: '1rem',
                            display: "flex",
                            justifyContent: "center",

                            flexDirection: "row",
                            alignSelf: "center",
                            alignContent: "center",
                            alignItems: "center"
                        }}>
                            {/* {this.priceUI('Low Balled', "0rem")} */}

                            {this.priceUI('Below Market Price', "1rem", IMAGES.BELOW_MRKT_PRICE)}
                            {this.priceUI('Fair Price', "1rem", IMAGES.FAIR_PRICE)}
                        </div>

                        <div style={{
                            marginTop: '1rem',
                            display: "flex",
                            justifyContent: "center",

                            flexDirection: "row",
                            alignSelf: "center",
                            alignContent: "center",
                            alignItems: "center"
                        }}>

                            {this.priceUI('Above Market Price', "1rem", IMAGES.ABOVE_MRKT_PRICE)}

                            {this.priceUI('Extremely Pricey', "1rem", IMAGES.EXTRMLY_PRICEY)}

                        </div>
                    </div>

                </div>

                {/* <div style={{
                    paddingLeft: "1rem",
                }
                }>

                    <h5
                        style={{
                            marginTop: window.innerWidth > 800 ? "10rem" : "3rem"
                        }}
                    >What do you think the home will sell for?</h5>
                    <Input
                        style={{
                            width: "30%",
                            marginLeft: "0rem"
                        }
                        }

                        className="agentsInputs"
                        value={this.state.offerPrice}
                        placeholder="Offer price"
                        name="offerPrice"
                        type="number"
                        onChange={(e) => {
                            this.setState({ offerPrice: e.target.value }, () => {
                                this.props.onOfferPriceChng(this.state.offerPrice)
                            })
                        }}
                    />
                </div> */}

            </div>
        )
    }
}

export default withRouter(Step1A)
