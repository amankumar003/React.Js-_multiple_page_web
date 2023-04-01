/* Step1.js - Step1 component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,14nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the Step1 component for FOOTFALL.
*/

/* Imports */
import { Slider } from '@material-ui/core';
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import { Row } from 'reactstrap';
import Helpers from '../../../config/Helpers';
import FeedBackExprncIcons from '../FeedBackExprncIcons';

class Step1 extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            experience: null,
            loading: true,
            priceVal: null,
            price: "",
            height: window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
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



    /*******************************************************************************
    *
    * exprncHndlr - helps to handle experience icons click event.
    *
    * This function helps to handle experience icons click event.
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    exprncHndlr(experience) {
        this.setState({ experience }, () => {
            return this.props.onExprncChang(this.state.experience)
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


    render() {


        return (
            <div className="step1Div"
                style={{
                    marginTop: this.state.height <= 800 ? "70%" : "50%",
                    display: "grid"
                }}>
                <font style={{
                    textAlign: "center",
                    fontSize: "1.3rem",
                    fontWeight: "400",
                    color: "black"
                }}>
                    How was your overall experience?
                </font>
                <div style={{
                    marginTop: '1rem',
                    display: "flex",
                    justifyContent: "center",

                    flexDirection: "row",
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center"
                }}>
                    {/* <div style={{}}>
                        <FeedBackExprncIcons
                            experience={this.state.experience}
                            iconTxt={"Extremely disappointed"}
                            onExprncChang={this.exprncHndlr.bind(this)}
                        />
                    </div> */}
                    <FeedBackExprncIcons
                        experience={this.state.experience}
                        iconTxt={"Disappointed"}
                        onExprncChang={this.exprncHndlr.bind(this)}
                    />

                    <FeedBackExprncIcons
                        experience={this.state.experience}
                        iconTxt={"Moderate"}
                        onExprncChang={this.exprncHndlr.bind(this)}
                    />

                    <FeedBackExprncIcons
                        experience={this.state.experience}
                        iconTxt={"Happy"}
                        onExprncChang={this.exprncHndlr.bind(this)}
                    />

                    {/* <div style={{ marginLeft: "0.5rem" }}>
                        <FeedBackExprncIcons
                            experience={this.state.experience}
                            iconTxt={"Extremely happy"}
                            onExprncChang={this.exprncHndlr.bind(this)}
                        />
                    </div>
 */}

                </div>




                <div style={{
                    padding: "1rem", marginTop: "5rem",
                    display: "none"
                }}>
                    <h3>
                        What do you think about the price?
                    </h3>
                    <font className="priceValTxt" style={{
                        float: "right",

                    }}>{this.state.price}</font>

                    <Slider
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
                </div>
            </div>
        )
    }
}

export default withRouter(Step1)
