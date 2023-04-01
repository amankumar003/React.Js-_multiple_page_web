/* Step2.js - Step2 component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,28feb23,pwn  lightness to brightness.
01a,14nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the Step2 component for FOOTFALL.
*/

/* Imports */
import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import 'react-step-progress/dist/index.css';
import { STRING_CONTANTS } from '../../../config/constants/StringConstants';
import Global from '../../../config/Global';
import { IMAGES } from '../../../config/Images';
import StringHelper from '../../../config/StringHelper';

class Step2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			price: 0,
			disLikeSet: [],
			likeSet: [],
			height: window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight,
		}
	}


	/*******************************************************************************
	*
	* clickHndlr - helps to handle click event on icons.
	*
	* This function helps to handle click event on icons.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	clickHndlr(item, operation, array) {
		var index = array.indexOf(item);
		// if aleady there in array, remove 
		if (index !== -1)
			array.splice(index, 1);
		else
			array.push(item);

		if (operation === "disLike")
			this.setState({ disLikeSet: array }, () => {
				this.likeDislikeSlctnHndlr(operation, item)
			});
		else
			this.setState({ likeSet: array }, () => {
				this.likeDislikeSlctnHndlr(operation, item)
			});



	}



	/*******************************************************************************
	*
	* likeDislikeSlctnHndlr - helps to handle click event on icons.
	*
	* This function helps to handle click event on icons.
	*
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	likeDislikeSlctnHndlr(operation, item) {
		try {
			let checkArray = [];
			let array = [];
			if (operation === "disLike") {
				checkArray = this.state.likeSet;
				array = this.state.disLikeSet;
			}

			if (operation === "like") {
				checkArray = this.state.disLikeSet;
				array = this.state.likeSet;
			}

			var othrIndex = checkArray.indexOf(item);
			// if aleady there in array, remove 
			if (othrIndex !== -1)
				checkArray.splice(othrIndex, 1);


			if (operation === "disLike")
				this.setState({ likeSet: checkArray }, () => {

					this.props.onLikeDislike({
						likeSet: this.state.likeSet,
						disLikeSet: this.state.disLikeSet
					})
				});
			else
				this.setState({ disLikeSet: checkArray }, () => {
					this.props.onLikeDislike({
						likeSet: this.state.likeSet,
						disLikeSet: this.state.disLikeSet
					})
				});




		} catch (error) {
			console.log(error)
		}

	}

	/*******************************************************************************
	*
	* iconUI - helps to handle UI of icons.
	*
	* This function helps to handle UI of icons.
	* RETURNS: N/A
	*
	* ERRNO: N/A
	*
	* SEE_ALSO: N/A
	*/
	iconUI(icon, iconTxt, operation) {
		let array = this.state.disLikeSet;
		if (operation === "disLike")
			array = this.state.disLikeSet;
		else
			array = this.state.likeSet;

		let subClass = ""

		subClass = operation === "disLike" ?
			" dislikeSelectn" : " likeSelectn"

		return <div
			onClick={() => this.clickHndlr(iconTxt, operation, array)}

			style={{
				marginLeft: window.innerWidth > 800 ? 5 : 4,
				marginRight: window.innerWidth > 800 ? 5 : 4,
				display: "inline-grid"
			}}
		>

			<div
				className={[array.includes(iconTxt) ?
					["slctdFeedBackImg22" + subClass

					]
					:
					"nonSlctdFeedBackImg22"]}>
				<img src={icon}
					className="likeDiskLikeIcon"
					style={{
						height: "3rem",
						width: "3rem",
						minWidth: "3rem",
						minHeight: "3rem",

					}}
				// style={styles.likeDislikeIco}
          /* style={[array.includes(iconTxt) ? styles.slctdFeedBackImg2 :
            styles.nonSlctdFeedBackImg2]}  *//>

			</div>
			<font
				className={"feedBackIconlabelTxt2"}
			>{StringHelper.strCapitalize(iconTxt === "brightness" ? "Brightness" :
				iconTxt === "community" ? "Neighborhood" :
					iconTxt)}</font>
		</div >
	}

	likeUI() {
		return <>
			<div style={{ display: "flex", flexDirection: "row", }}>
				{this.iconUI(IMAGES.LIGHT_BULB, "brightness", "like")}
				{this.iconUI(IMAGES.NOISE, "noise", "like")}
				{this.iconUI(IMAGES.LAYOUTS, "layout", "like")}
				{this.iconUI(IMAGES.MONEY_BAG, "upgrades", "like")}

			</div>

			<div style={{ display: "flex", flexDirection: "row", marginTop: "1rem", }}>
				{this.iconUI(IMAGES.GARAGE, "garage", "like")}
				{this.iconUI(IMAGES.CUTLERY, "kitchen", "like")}
				{this.iconUI(IMAGES.YARD, "yard", "like")}
				{this.iconUI(IMAGES.SHOWER, "bathroom", "like")}

			</div>

			<div style={{ display: "flex", flexDirection: "row", marginTop: "1rem", }}>
				{this.iconUI(IMAGES.FENGSHUI_ICO, "fengshui", "like")}
				{this.iconUI(IMAGES.PARKING_ICO, "parking", "like")}
				{this.iconUI(IMAGES.PRIVACY_ICO, "privacy", "like")}
				{this.iconUI(IMAGES.HOUSE, "community", "like")}

			</div>
		</>
	}

	disLikeUI() {
		return <>
			<div style={{ display: "flex", flexDirection: "row", }}>


				{this.iconUI(IMAGES.LIGHT_BULB, "brightness", "disLike")}
				{this.iconUI(IMAGES.NOISE, "noise", "disLike")}
				{this.iconUI(IMAGES.LAYOUTS, "layout", "disLike")}
				{this.iconUI(IMAGES.MONEY_BAG, "upgrades", "disLike")}
			</div>
			<div style={{ display: "flex", flexDirection: "row", marginTop: "1rem", }}>


				{this.iconUI(IMAGES.GARAGE, "garage", "disLike")}
				{this.iconUI(IMAGES.CUTLERY, "kitchen", "disLike")}
				{this.iconUI(IMAGES.YARD, "yard", "disLike")}
				{this.iconUI(IMAGES.SHOWER, "bathroom", "disLike")}
			</div>

			<div style={{ display: "flex", flexDirection: "row", marginTop: "1rem", }}>
				{this.iconUI(IMAGES.FENGSHUI_ICO, "fengshui", "disLike")}
				{this.iconUI(IMAGES.PARKING_ICO, "parking", "disLike")}
				{this.iconUI(IMAGES.PRIVACY_ICO, "privacy", "disLike")}
				{this.iconUI(IMAGES.HOUSE, "community", "disLike")}

			</div>
		</>
	}

	render() {


		return (
			<div className='step1Div' style={{
				marginTop: this.state.height <= 800 ? "3rem" : "3rem",

				display: "grid"
			}}>
				<div style={{
					justifyContent: "center",
					display: "grid",

					alignSelf: "center",
					alignContent: "center",
					alignItems: "center"
				}}>
					<font
						className={"likeDisLikeHeading"}
						style={{
							color: Global.SUCCESS,
							textAlign: "center",
							fontSize: "1.3rem",
							fontWeight: "400",
							marginBottom: 10,
						}}>
						What did you like about the {STRING_CONTANTS.HOME}?
					</font>
					{this.likeUI()}




					<div style={{
						marginTop:this.state.height <= 800 ? "2rem" : "5rem",

					}}>
						<font
							className={"likeDisLikeHeading"}
							style={{
								color: Global.ERROR,
								// fontSize: 20,
								textAlign: "center",
								fontSize: "1.3rem",
								fontWeight: "400",
								marginBottom: 10,

							}}>
							What did you dislike about the {STRING_CONTANTS.HOME}?

						</font>
						{this.disLikeUI()}

					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Step2)
