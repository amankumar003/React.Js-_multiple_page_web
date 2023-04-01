/* Step3.js - Step3 component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,14nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the Step3 component for FOOTFALL.
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
import FloatingLabelInput from 'react-floating-label-input';
class Step3 extends React.Component {
	constructor(props) {
		super(props)
		let minValue = 1;
		let peopleVisited = 1;
		let feedBackType = this.props.feedBackType;
		if (feedBackType === "BUYER_AGENT") {
			minValue = 2;
			peopleVisited = 2;
		}


		this.state = {
			loading: true,
			note: "",
			followUp: false,
			followUpErr: false,
			agentDetailsShow: false,
			buyerDetailsShow: false,
			peopleVisited: peopleVisited,
			minValue: minValue,
			feedBackType: feedBackType,
			name: "",
			email: "",
			phone: "",
			pageType: "BUYER",
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
			let feedBackType = this.props.feedBackType;
			let minValue = 1;
			let peopleVisited = 1;
			if (feedBackType === "BUYER_AGENT") {
				minValue = 2;
				peopleVisited = 2;
			}

			this.setState({
				feedBackType: this.props.feedBackType,
				minValue: minValue,
				peopleVisited: peopleVisited
			})
		}
	}


	modalClosHndlr() {
		this.setState({ agentDetailsShow: false, buyerDetailsShow: false })
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
		if (this.state.pageType === "AGENT")
			this.setState({
				agentData: userData,
				agentDetailsShow: false,
			}, () => {
				return this.props.onDetailsSubmit({ agentData: this.state.agentData })
			});

		if (this.state.pageType === "BUYER")
			this.setState({
				buyerData: userData,
				buyerDetailsShow: false
			}, () => {
				return this.props.onDetailsSubmit({ buyerData: this.state.buyerData })
			});

	}

	render() {


		return (
			<div className="step1Div bigDiv"
				style={{
					marginTop: "45%",
					marginLeft: this.state.height <= 800 ? "0rem" : "3rem",
					marginRight: this.state.height <= 800 ? "0rem" : "3rem",

				}}>

				<h5 style={{ textAlign: "center", marginBottom: "1rem", fontWeight: "bold" }}>Personal details</h5>

				<div className='agentDetailInputDiv'>
					<FloatingLabelInput
						id="agentName"
						label="Name"
						className="agentsInputs"
						onChange={(e) => {
							this.setState({ name: e.target.value }, () => {
								this.detailsHndlr(
									{
										name: this.state.name,
										email: this.state.email,
										phone: this.state.phone
									}
								)

							})
						}}
						value={this.state.name}
					/>
				</div>
				<div className='agentDetailInputDiv'>


					<FloatingLabelInput
						id="agentEmail"
						label="Email"
						className="agentsInputs"
						onChange={(e) => {
							this.setState({ email: e.target.value }, () => {
								this.detailsHndlr(
									{
										name: this.state.name,
										email: this.state.email,
										phone: this.state.phone
									}
								)
							})
						}}
						value={this.state.email}
					/>
				</div>
				<div className='agentDetailInputDiv'>
					<FloatingLabelInput
						id="agentPhone"
						label="Phone Number"
						className="agentsInputs"
						onChange={(e) => {
							this.setState({ phone: e.target.value }, () => {
								this.detailsHndlr(
									{
										name: this.state.name,
										email: this.state.email,
										phone: this.state.phone
									}
								)
							})
						}}
						value={this.state.phone}
					/>

				</div>


				<Input
					placeholder="Note"
					type="textarea"
					name="textValue"
					rows={4}
					style={{
						visibility: "hidden"
					}}
					onChange={(e) => {
						this.setState({ note: e.target.value }, () => {
							return this.props.onNoteChang(this.state.note)
						})
					}}
				/>

				{/* <input
					type="checkbox"
					defaultChecked={this.state.followUpErr === true}
					style={{ marginTop: "2rem", }}
					// labelStyle={[styles.profileCrtCheckBoxTextColor, { marginTop: 20, marginBottom: 10 }]}
					color={this.state.followUpErr === true ? Global.ERROR : Global.INFO}
					onChange={() => {
						this.setState({ followUp: !this.state.followUp }, () => {
							if (this.state.followUp === false)
								this.setState({ followUpErr: true }, () => {
									return this.props.onFollowUpChang(this.state.followUp)

								});
							else
								this.setState({ followUpErr: false }, () => {
									return this.props.onFollowUpChang(this.state.followUp)

								});

						})
					}}
				/><font > Follow up</font>

				<div style={{ marginBottom: "4rem", marginTop: "2rem" }}>
					<label className=" "
					>
						People visited
					</label>

					<Input
						type="number"
						min={this.state.minValue}
						id="CustomCountPoll"
						value={this.state.peopleVisited}
						onChange={(e) => {
							this.setState({ peopleVisited: e.target.value }, () => {
								this.props.onPeopleVisitedChange(this.state.peopleVisited)
							})
						}}
						className=""></Input>


				</div>





				{(this.state.feedBackType === "ONLY_AGENT" ||
					this.state.feedBackType === "BUYER_AGENT") &&
					<div
						className={"agentDetailsAddHyperLinkContnr"}
						onClick={() => {
							this.setState({
								agentDetailsShow: true,
								pageType: "AGENT"
							})
						}}>
						<a className={"agentDetailsAddHyperLink"}
						>+ Agent's personal details</a>
					</div>
				}


				{(this.state.feedBackType !== "ONLY_AGENT") &&
					<div
						className={"agentDetailsAddHyperLinkContnr"}
						onClick={() => {
							this.setState({ buyerDetailsShow: true, pageType: "BUYER" })
						}}>
						<a className={"agentDetailsAddHyperLink"}
						>+ Buyer's personal details</a>
					</div>
				}
 */}



				{/* {this.state.agentDetailsShow === true &&
					<AgentDetailsAdd
						userData={this.state.pageType === "AGENT" ? this.state.agentData : this.state.pageType === "BUYER" && this.state.buyerData}
						isOpen={this.state.agentDetailsShow}
						onModalClose={this.modalClosHndlr.bind(this)}
						onSubmitPress={this.detailsHndlr.bind(this)}
					/>
				} */}


				{/* {this.state.buyerDetailsShow === true &&
					<BuyerDetailsAdd
						userData={this.state.pageType === "AGENT" ? this.state.agentData : this.state.pageType === "BUYER" && this.state.buyerData}
						isOpen={this.state.buyerDetailsShow}
						onModalClose={this.modalClosHndlr.bind(this)}
						onSubmitPress={this.detailsHndlr.bind(this)}
					/>
				} */}

			</div >
		)
	}
}

export default withRouter(Step3)
