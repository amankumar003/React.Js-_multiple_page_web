/* FeedBackAdd.js - FeedBackAdd component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01e,01mar23,pwn  added questions for agent and fixed UI.
01d,28feb23,pwn  added left/right navigation and close button on each slide.
01c,30jan23,pwn  added reEnter prop.
01b,13jan22,pwn  modified mutation.
01a,14nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the FeedBackAdd component for FOOTFALL.
*/

/* Imports */
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Button, Col, Row } from 'reactstrap';
import "./feedBackAdd.scss";
import FeedBackCatgries from './FeedBackCatgries';
import notify from '../toasts/toast';
import StringHelper from '../../config/StringHelper';
import Global from '../../config/Global';
import gql from "graphql-tag";
import { Mutation } from 'react-apollo';
import Step4 from './steps/Step4';
import Step1A from './steps/Step1A';

import SwipeableViews from 'react-swipeable-views';
import ThanksMsg from './steps/ThanksMsg';


// Mautation for FEEDBACK_ADD /
const FEEDBACK_ADD = gql`
  mutation feedbackCreate($userId: ID!, 
    $userType: String!, 
    $openHouseId: ID!,
    $experience: String!,
    $price: String!,
    $note: String!,
    $likeSet: [String],
    $dislikeSet: [String],
    $followUp: Boolean!,
   
    $peopleVisited: Int!,
    $buyer: Boolean!,

    $knowValue: Boolean!,
    $buySell: Boolean!,
    $buySellOther: Boolean!,
    $offerPrice: Int!,
	$contactList: JSONString!,
 	$getContacted: Boolean!,
    $clientOffer: Boolean!,
	$contctListingAgnt: Boolean!,
    $offrToListingAgnt: Boolean!,
    ) 
        {
        feedbackCreate(userId: $userId,
          userType: $userType,
          openHouseId: $openHouseId,
          price: $price,
          experience: $experience,
          note: $note,
          likeSet: $likeSet,
          dislikeSet: $dislikeSet,
          followUp: $followUp,
         

          peopleVisited: $peopleVisited,
		  buyer: $buyer,


		  knowValue: $knowValue,
		  buySell: $buySell,
		  buySellOther: $buySellOther,
          offerPrice: $offerPrice,
          contactList: $contactList,

		  getContacted: $getContacted,
		  clientOffer: $clientOffer,
		  contctListingAgnt: $contctListingAgnt,
		  offrToListingAgnt: $offrToListingAgnt,
          ) 
            {
            error
            result
            }
        }`;

const styles = {
	slide: {
		padding: 15,
		paddingBottom: 0,
		height: window.innerHeight - 50
	},
	slide1: {
		// background: '#FEA900',
	},
	slide2: {
		// background: '#B3DC4A',
	},
	slide3: {
		// background: '#6AC0FF',
	},
};

class FeedBackAdd extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef(null);

		let peopleVisited = 1;
		let offerPrice = 0;
		/* if (this.props.route.params.type === "BUYER_AGENT") {
			minValue = 2;
			peopleVisited = 2;
		} */
		this.state = {
			openHouseId: this.props.openHouseId,


			loading: false,
			currentPosition: 0,
			likeSet: [],
			disLikeSet: [],
			price: "",
			experience: "",
			note: "",
			followUp: false,
			userData: "",
			peopleVisited: peopleVisited,
			feedBackType: "",
			slideShow: true,
			offerPrice: offerPrice,
			refralObj: {
				knowHomeVal: false,
				buySell: false,
				refral: false,

				getContacted: false,
				clientOffer: false,
				contctListingAgnt: false,
				offrToListingAgnt: false,

			},
			currentIndx: 0
		}
	}



	/*******************************************************************************
	*
	* priceHndlr - helps to handle price change event on child component.
	*
	* This function helps to handle price change event on child component.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	priceHndlr(price) {
		this.setState({ price: price, currentIndx: 3 })
	}

	/*******************************************************************************
	*
	* likeDislikeHndlr - helps to handle like/dislike event from children component.
	*
	* This function helps to handle like/dislike event from children component.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	likeDislikeHndlr(likeDislikeObj) {
		this.setState({
			likeSet: likeDislikeObj.likeSet,
			disLikeSet: likeDislikeObj.disLikeSet
		});
	}


	/*******************************************************************************
	*
	* exprncHndlr - helps to handle experience change event on child component.
	*
	* This function helps to handle experience change event on child component.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	exprncHndlr(experience) {
		if (experience === "EXTREMELY HAPPY")
			experience = "EXTREMELY_HAPPY";

		if (experience === "EXTREMELY DISAPPOINTED")
			experience = "EXTREMELY_DISAPPOINTED";

		this.setState({ experience: experience, currentIndx: 2 }, () => {
			/* if (window.innerWidth ||
				document.documentElement.clientWidth ||
				document.body.clientWidth > 800)
				this.myRef.current.goNext(); */
		})
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

		this.setState({
			feedBackType: feedBackType,
			slideShow: true,
			defaultIndex: 1,
			currentIndx: 1
		})
		/* 	if (window.innerWidth ||
				document.documentElement.clientWidth ||
				document.body.clientWidth > 800)
				this.myRef.current.goNext();
	 */
	}

	/*******************************************************************************
	*
	* noteChngHndlr - helps to handle note change event on child component.
	*
	* This function helps to handle note change event on child component.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	noteChngHndlr(note) {
		this.setState({ note });
	}


	/*******************************************************************************
	*
	* submitHndlr - helps to handle submit click event on child component.
	*
	* This function helps to handle submit click  event on child component.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	feedBackCrt = (mutation) => {
		try {
			this.setState({ loading: true })

			if (this.state.feedBackType === "") {
				notify("Please select feedback type");
				return false;
			}

			/* if (this.state.experience === null) {
				notify("Please select your experience");
				this.setState({ loading: false });
				return false;
			}


			if (this.state.price === null) {
				notify("Please select price");
				this.setState({ loading: false });
				return false;
			} */

			let agentPhone = "";
			let agentName = "";
			let agentEmail = "";
			let agentData = this.state.userData.agentData;
			if (agentData !== undefined &&
				agentData !== null &&
				agentData !== "") {

				if (agentData.name !== undefined &&
					agentData.name !== null &&
					agentData.name !== "")
					agentName = agentData.name;

				if (agentData.email !== undefined &&
					agentData.email !== null &&
					agentData.email !== "")
					agentEmail = agentData.email;

				if (agentData.phone !== undefined &&
					agentData.phone !== null &&
					agentData.phone !== "")
					agentPhone = agentData.phone;
			}


			let buyerPhone = "";
			let buyerName = "";
			let buyerEmail = "";
			let contactList = [];
			let buyerData = this.state.userData.buyerData;
			if (buyerData !== undefined &&
				buyerData !== null &&
				buyerData !== "") {

				if (buyerData.name !== undefined &&
					buyerData.name !== null &&
					buyerData.name !== "")
					buyerName = buyerData.name;

				if (buyerData.email !== undefined &&
					buyerData.email !== null &&
					buyerData.email !== "")
					buyerEmail = buyerData.email;

				if (buyerData.phone !== undefined &&
					buyerData.phone !== null &&
					buyerData.phone !== "")
					buyerPhone = buyerData.phone;


				contactList.push({
					name: buyerName,
					email: buyerEmail,
					phone: buyerPhone,
					userType: "Buyer",
					id: "0",
				})
			}

			if (contactList.length === 0) {
				notify("Please add buyer personal details")
				return false;
			}

			if (StringHelper.strWhiteSpaceRemvr(contactList[0].name).length === 0) {
				notify("Please add buyer name")
				return false;
			}


			if (StringHelper.strWhiteSpaceRemvr(contactList[0].email).length === 0) {
				notify("Please add buyer email")
				return false;
			}


			if (StringHelper.strWhiteSpaceRemvr(contactList[0].phone).length === 0) {
				notify("Please add buyer phone")
				return false;
			}

			let peopleVisited = this.state.peopleVisited;
			mutation({
				variables: {
					userId: Global.USER_ID === null ? "" : Global.USER_ID,
					userType: this.state.feedBackType,
					openHouseId: this.state.openHouseId,
					experience: this.state.experience,
					price: StringHelper.spaceWithUnderscore((this.state.price).toUpperCase()),
					note: this.state.note,
					likeSet: this.state.likeSet,
					dislikeSet: this.state.disLikeSet,
					followUp: this.state.followUp,
					/* agentName: agentName,
					agentEmail: agentEmail,
					agentPhone: agentPhone,
					buyerName: buyerName,
					buyerEmail: buyerEmail,
					buyerPhone: buyerPhone, */
					peopleVisited: peopleVisited,
					buyer: true,
					contactList: contactList.length > 0 ? JSON.stringify({ "contact_list": contactList }) : JSON.stringify({ "contact_list": [] }),
					knowValue: this.state.refralObj.knowHomeVal,
					buySell: this.state.refralObj.buySell,
					buySellOther: this.state.refralObj.refral,
					offerPrice: this.state.offerPrice,
					getContacted: this.state.refralObj.getContacted,
					clientOffer: this.state.refralObj.clientOffer,
					contctListingAgnt: this.state.refralObj.contctListingAgnt,
					offrToListingAgnt: this.state.refralObj.offrToListingAgnt,


				}
			})
				.then(res => {
					console.log(JSON.stringify(res))
					this.setState({ loading: false });

					if (res !== false) {
						if (res.data.feedbackCreate.result !== false) {
							this.setState({ slideShow: false })
							notify("Thanks for your feedback");

							if (this.props.reload === true) {
								this.setState({ slideShow: false }, () => {
									this.timeoutId = setTimeout(() => {
										window.location.reload();
									}, 5000);
								})


							}

						}
						else {
							this.setState({ loginError: true })
							notify(res.data.feedbackCreate.error)
						}
					}
				})
				.catch(err => {
					this.setState({ loading: false });
					console.log("feedbackCreate Mutation Failed:", err);
					notify("Something went wrong, please try again");

				})



		} catch (error) {
			console.log(error)
			notify("Something went wrong, please try again");
		}
	}

	/*******************************************************************************
	*
	* followUpChngHndlr - helps to handle followUp change event on child component.
	*
	* This function helps to handle followUp change event on child component.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	followUpChngHndlr(followUp) {
		this.setState({ followUp })
	}

	/*******************************************************************************
	*
	* detailsCloseHndlr - helps to handle close event of details add view.
	*
	* This function helps to handle close event of details add view.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	detailsHndlr(userData) {
		this.setState({ userData: userData })
	}

	/*******************************************************************************
	*
	* peopleVisitedHndlr - helps to handle change event of people visited input.
	*
	* This function helps to handle change event of people visited input.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	peopleVisitedHndlr(peopleVisited) {
		this.setState({ peopleVisited: peopleVisited })
	}

	refralChngHndlr(obj) {
		this.setState({ refralObj: obj })
	}

	/*******************************************************************************
	*
	* priceHndlr - helps to handle offer  price change event on child component.
	*
	* This function helps to handle offer price change event on child component.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	offerPriceHndlr(offerPrice) {
		this.setState({ offerPrice: offerPrice })
	}

	switchingHndlr(currentIndx) {
		console.log(currentIndx)
		this.setState({ currentIndx: currentIndx })
	}

	closeBtnUI() {
		return <div className='closeBtnDivUI'>
			<i className='fa fa-times-circle closeBtnUI'
				onClick={(e) => {
					window.location.reload();
				}}

			/>
		</div>
	}

	render() {
		let workSlides = [1, 2, 3, 4, 5, 6]

		return (

			<>




				{this.state.slideShow === true ?
					window.innerWidth ||
						document.documentElement.clientWidth ||
						document.body.clientWidth < 800 ?
						<>
							<SwipeableViews
								style={{ marginTop: "0rem", marginBottom: "0rem" }}
								index={(this.state.currentIndx)}
								onChangeIndex={this.switchingHndlr.bind(this)}
							>
								<div style={Object.assign({}, styles.slide, styles.slide1)}>
									{this.closeBtnUI()}
									<FeedBackCatgries
										feedBackType={this.state.feedBackType}
										onFeedBackTypeChng={this.feedBackTypeChngHndlr.bind(this)}
									/>
								</div>
								<div style={Object.assign({}, styles.slide, styles.slide2)}>
									{this.closeBtnUI()}

									<Step1
										onExprncChang={this.exprncHndlr.bind(this)}
										onPriceChang={this.priceHndlr.bind(this)}
									/>
								</div>
								<div style={Object.assign({}, styles.slide, styles.slide3)}>
									{this.closeBtnUI()}

									<Step1A
										onPriceChang={this.priceHndlr.bind(this)}
										onOfferPriceChng={this.offerPriceHndlr.bind(this)}
									/>
								</div>
								<div style={Object.assign({}, styles.slide, styles.slide3)}>
									{this.closeBtnUI()}
									<Step2
										onLikeDislike={this.likeDislikeHndlr.bind(this)}
									/>
								</div>

								<div style={Object.assign({}, styles.slide, styles.slide3)}>
									{this.closeBtnUI()}

									<Step3
										feedBackType={this.state.feedBackType}
										onNoteChang={this.noteChngHndlr.bind(this)}
										onFollowUpChang={this.followUpChngHndlr.bind(this)}
										onDetailsSubmit={this.detailsHndlr.bind(this)}
										onPeopleVisitedChange={this.peopleVisitedHndlr.bind(this)}
									// onSubmitPress={this.feedBackCrt.bind(this, mutation)}
									/>
								</div>


								<div style={Object.assign({}, styles.slide, styles.slide3)}>
									{this.closeBtnUI()}

									<Mutation mutation={FEEDBACK_ADD}>
										{(mutation, data) => (
											<Step4
												feedBackType={this.state.feedBackType}
												onRefralChng={this.refralChngHndlr.bind(this)}
												onSubmitPress={this.feedBackCrt.bind(this, mutation)}

											/>
										)}
									</Mutation>
								</div>
							</SwipeableViews>
							{(window.innerWidth ||
								document.documentElement.clientWidth ||
								document.body.clientWidth < 800 &&
								this.state.slideShow === true) &&
								<div style={{
									textAlign: "center",
									marginTop: "0rem",
									// position: "absolute",
									// bottom: "1.9rem",
									// left: "30%"
									marginBottom: "2rem",
								}}>

									{/* <i className='fa fa-chevron-circle-left arrowsControl'
										onClick={(e) => {
											if (this.state.currentIndx !== 0)
												this.setState({ currentIndx: (this.state.currentIndx - 1) })
										}}

									/> */}



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



									{/* <i className='fa fa-chevron-circle-right arrowsControl'
										onClick={(e) => {
											if (this.state.currentIndx !== 5)
												this.setState({ currentIndx: (this.state.currentIndx + 1) })
										}}
									/> */}

								</div>
							}
						</>
						:

						<Slide
							defaultIndex={this.state.defaultIndex}
							slidesToShow={1}
							autoplay={false}
							indicators={true}
							transitionDuration={300}
							arrows={window.innerWidth ||
								document.documentElement.clientWidth ||
								document.body.clientWidth < 800 ? false : true}
							infinite={false}
							canSwipe={window.innerWidth ||
								document.documentElement.clientWidth ||
								document.body.clientWidth < 800 ? true : false}
							cssClass="optionCrtSlides"
							style={{}}
							slidesToScroll={1}
							ref={this.myRef}
						>
							{workSlides.map((slide, index) => {
								return <div key={"lIntroSlds" + index}
									className="lIntroSide"
									style={{
										width: window.innerWidth ||
											document.documentElement.clientWidth ||
											document.body.clientWidth < 800 && "98vw",
										padding: "1rem",

										// width:"10rem"
									}}>
									<div className="slideImgContr">

										{index === 0 &&
											<FeedBackCatgries
												feedBackType={this.state.feedBackType}
												onFeedBackTypeChng={this.feedBackTypeChngHndlr.bind(this)}
											/>
										}

										{index === 1 &&
											<Step1
												onExprncChang={this.exprncHndlr.bind(this)}
												onPriceChang={this.priceHndlr.bind(this)}
											/>
										}

										{index === 2 &&
											<Step1A
												onPriceChang={this.priceHndlr.bind(this)}
												onOfferPriceChng={this.offerPriceHndlr.bind(this)}
											/>
										}

										{index === 3 &&
											<Step2
												onLikeDislike={this.likeDislikeHndlr.bind(this)}
											/>

										}


										{index === 4 &&

											<Step3
												feedBackType={this.state.feedBackType}
												onNoteChang={this.noteChngHndlr.bind(this)}
												onFollowUpChang={this.followUpChngHndlr.bind(this)}
												onDetailsSubmit={this.detailsHndlr.bind(this)}
												onPeopleVisitedChange={this.peopleVisitedHndlr.bind(this)}
											// onSubmitPress={this.feedBackCrt.bind(this, mutation)}
											/>


										}


										{index === 5 &&
											<Mutation mutation={FEEDBACK_ADD}>
												{(mutation, data) => (
													<Step4
														feedBackType={this.state.feedBackType}
														onRefralChng={this.refralChngHndlr.bind(this)}
														onSubmitPress={this.feedBackCrt.bind(this, mutation)}

													/>
												)}
											</Mutation>
										}

										{/* <h3 className="workTitle">{"slide.title"}</h3> */}
									</div>


								</div>
							})}
						</Slide>
					:
					<div
						className="lIntroSide"
						style={{
							height: "90vh",
							textAlign: "center"
						}}>
						<ThanksMsg
							message={this.props.message}
							reEnter={this.props.reEnter} />
						<font className="feedbackThnxMsg"
							style={{
								marginTop: "2rem",
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: "center",
								fontSize: "1.2rem",
								paddingLeft: "1rem",
								paddingRight: "1rem"
							}}
						>

							{this.props.message}


						</font>
						<font className=""
							style={{
								marginTop: "1rem",
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: "center",
								fontSize: "0.9rem",
								paddingLeft: "1rem",
								paddingRight: "1rem"
							}}
						> The Open House host will contact you within 24 hours, to let you know if you won!
							<br></br>  We Wish You The Best Of Luck! "</font>

						{(this.props.reEnter === true &&
							this.props.reload === false) &&
							<font className="feedbackThnxMsgBtn"
								style={{
									marginTop: "1rem",
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}


								onClick={() => {
									this.setState({ slideShow: false, currentIndx: 0 }, () => {
										this.setState({ slideShow: true })
									})
								}}>
								Give another feedback
							</font>
						}
					</div>}





			</>

		)
	}
}

export default withRouter(FeedBackAdd)
