/* FeedBackCatgry.js - FeedBackCatgry component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,14nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the FeedBackCatgry component for FOOTFALL.
*/

/* Imports */
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import Global from '../../config/Global';

class FeedBackCatgrySnippet extends React.Component {
    constructor(props) {
        super(props)
        this.myRef2 = React.createRef(null);

        this.state = {
            backgroundColor: this.props.backgroundColor,
            feedBackType: this.props.feedBackType,
            color: this.props.iconColor
        }
    }


    componentDidUpdate(prevProps) {
        /*   console.log(prevProps.feedBackType)
          console.log(this.props.matchString)
          console.log(this.props.feedBackType)
   */
        if (prevProps.feedBackType !== this.props.feedBackType) {

            if (this.props.matchString !== this.props.feedBackType)
                this.setState({
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.iconColor
                })
        }
    }



    render() {

        let { btnStr, icon, backgroundColor, iconColor,
            matchString } = this.props;

        return (
            <div
                className={this.state.backgroundColor === "#8fa2ae" ? ' feedBackTypeBtnSlctd ' : 'feedBackTypeBtn'}
                ref={this.myRef2}

                style={{
                    // flexDirection: "row",
                    backgroundColor: this.state.backgroundColor,
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    borderRadius: "5rem",
                    marginLeft: "1rem",
                    marginRight: "1rem"

                    //  border:border
                }}
                onClick={() => {
                    this.setState({
                        backgroundColor: "#8fa2ae",
                        color: "white"
                    }, () => {
                        // this.myRef2.current.style.backgroundColor="yellow"

                    })
                    return this.props.onFeedBackTypeChng(matchString)
                }}
            >
                <font className='feedBackTypeBtnTxt'
                    style={{
                        color: this.state.color,

                        textAlign: 'left',
                        marginLeft: "0.5rem"
                    }}
                >
                    {btnStr}

                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",


                    }}>
                        <i className={this.state.backgroundColor === "#8fa2ae" ? 'fa fa-check catgryPlusIco' : 'fa fa-plus catgryPlusIco'}
                            color={iconColor}
                            style={{
                                marginRight: "0.7rem",
                            }}></i>
                    </div>
                </font>
            </div>
        )
    }
}

export default withRouter(FeedBackCatgrySnippet)
