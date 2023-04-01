/* FeedBackExprncIcons.js - FeedBackExprncIcons component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,14nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the FeedBackExprncIcons component for FOOTFALL.
*/

/* Imports */
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import happy_face from '../../assets/img/feedBackForm/experience/happy_face.png';
import { IMAGES } from '../../config/Images';
import StringHelper from '../../config/StringHelper';

class FeedBackExprncIcons extends React.Component {
    constructor(props) {
        super(props)
        let experience = this.props.experience;
        if (experience !== null && experience !== "" && experience !== undefined)
            experience = StringHelper.underscoreWithSpace(experience);

        this.state = {
            experience: experience
        };
    }


    componentDidUpdate(prevProps) {
        if (prevProps.experience !== this.props.experience) {
            this.setState({ experience: this.props.experience })
        }
    }

    render() {
        let { iconTxt, noAction } = this.props;


        return (
            <div className='feedBackExprncIconDiv22' style={{ display: "grid" }}>


                <div className='feedBackExprncIconDiv'
                    onClick={() => {
                        if (noAction === true)
                            return false;

                        if (this.state.experience === iconTxt.toUpperCase())
                            this.setState({ experience: null }, () => {
                                return this.props.onExprncChang(this.state.experience)
                            })
                        else
                            this.setState({ experience: null }, () => {
                                this.setState({ experience: iconTxt.toUpperCase() }, () => {
                                    return this.props.onExprncChang(this.state.experience)
                                })
                            });
                    }}
                >

                    {(this.state.experience === "HAPPY" &&
                        iconTxt === "Happy") ?
                        <img className="feedBackExprncIcon"
                            src={IMAGES.HAPPY_FACE_DARK} />
                        :
                        iconTxt === "Happy" &&
                        <img className="feedBackExprncIcon"
                            src={IMAGES.HAPPY_FACE} />
                    }

                    {(this.state.experience === "EXTREMELY HAPPY" &&
                        iconTxt === "Extremely happy") ?
                        <img className="feedBackExprncIcon"
                            src={IMAGES.EXTRM_HAPPY_FACE_DARK} />
                        :
                        iconTxt === "Extremely happy" &&
                        <img className="feedBackExprncIcon"
                            src={IMAGES.EXTRM_HAPPY_FACE} />
                    }

                    {(this.state.experience === "MODERATE" &&
                        iconTxt === "Moderate") ?
                        <img className="feedBackExprncIcon"
                            src={IMAGES.NORMAL_FACE_DARK} />
                        :
                        iconTxt === "Moderate" &&
                        <img className="feedBackExprncIcon"
                            src={IMAGES.NORMAL_FACE} />
                    }

                    {(this.state.experience === "DISAPPOINTED" &&
                        iconTxt === "Disappointed") ?
                        <img className="feedBackExprncIcon"
                            src={IMAGES.SAD_FACE_DARK} />
                        :
                        iconTxt === "Disappointed" &&
                        <img className="feedBackExprncIcon"
                            src={IMAGES.SAD_FACE} />
                    }

                    {(this.state.experience === "EXTREMELY DISAPPOINTED" &&
                        iconTxt === "Extremely disappointed") ?
                        <img className="feedBackExprncIcon"
                            src={IMAGES.EXTRM_SAD_FACE_DARK} />
                        :
                        iconTxt === "Extremely disappointed" &&
                        <img className="feedBackExprncIcon"
                            src={IMAGES.EXTRM_SAD_FACE} />
                    }



                </div>
                <font className="feedBackExprncIconTxt">
                    {
                        iconTxt === "Extremely disappointed" ? "Disappointed" :
                            iconTxt === "Disappointed" ? "Not Interested" :
                                iconTxt === "Moderate" ? "Neutral" :
                                    iconTxt === "Happy" ? "Interested" :
                                        iconTxt === "Extremely happy" ? "Super Excited" :

                                            iconTxt}

                </font>
            </div>

        )
    }
}

export default withRouter(FeedBackExprncIcons)
