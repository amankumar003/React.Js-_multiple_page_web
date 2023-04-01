/* layout.js - Basic layout for TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,17nov22,pwn   created.
*/

/*
DESCRIPTION
This file is a higher order component for the layout of web app.  
*/

/* Imports */
import React from 'react'
import Global from '../config/Global'
import { ErrorBoundary } from 'react-error-boundary';
import NotFoundPage from '../components/pagesTron/404';
import Helpers from '../config/Helpers';
// import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import PageHelmet from '../components/pageHelmet/PageHelmet'
// import MobNavBottmTabBarWithotLogin from 'mobileView/mobNavBottmTabBarWithotLogin'



/*******************************************************************************
*
* ErrorFallback - helps to handle error/exceptions raised by child components.
*
* This function helps to handle error/exceptions raised by child components.
*
* RETURNS: N/A
*
* ERRNO: N/A
*
* SEE_ALSO: N/A
*/
function ErrorFallback({ error, resetErrorBoundary }) {
	console.warn("Error occured in quession app");
	console.warn(error)
	return (
		<div className="col-md-11 cardLayout">
			<NotFoundPage />
		</div>
	)
}

const Layout = (WrappedComponent) => {
	class HOC extends React.Component {
		static propTypes = {
			// cookies: instanceOf(Cookies).isRequired
		};


		state = {
			width:
				window.innerWidth ||
				document.documentElement.clientWidth ||
				document.body.clientWidth,
		}

		updateDimensions() {
			if (window.innerWidth < 500) {
				this.setState({ width: 450 })
			} else {
				let update_width = window.innerWidth
				this.setState({ width: update_width })
			}
		}

		componentDidMount() {
			this.updateDimensions()
			window.addEventListener('resize', this.updateDimensions.bind(this))
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.updateDimensions.bind(this))
		}


		/*******************************************************************************
		*
		* handleScroll - helps to check user session with scroll event.
		*
		* This function helps to check user session with scroll event.
		*
		* RETURNS: N/A
		*
		* ERRNO: N/A
		*
		* SEE_ALSO: N/A
		*/
		handleScroll(event) {
			return true;

			/* const { cookies } = this.props;
			// for automatic logout from other tab if getOperationDefinition, 
			// and user try to click anywhere in app 
			let token = localStorage.getItem('token');
			let pathName = this.props.location.pathname;

			if (pathName.startsWith("/" + Global.FIVER) ||
				pathName.startsWith("/" + Global.OPTION) ||
				pathName.startsWith("/" + Global.GROUP) ||
				pathName.startsWith("/" + Global.BUNCH) ||
				pathName.startsWith("/" + Global.OPTN_CRT) ||
				pathName.startsWith("/comparison/") ||
				pathName.startsWith("/" + Global.OPTNS_FEED) ||
				pathName.startsWith("/" + Global.QR_CODE_PAGE) ||
				pathName.startsWith("/" + Global.BUSSINESS_PAGE) ||
				pathName.startsWith("/" + Global.ORGANISATIONS) ||
				pathName.startsWith("/" + Global.ORGANISATION) ||
				pathName.startsWith("/" + Global.BUSSINESS_PAGES)) {
				Global.USER_ID = localStorage.getItem('userID');
				// this.props.profilePicRefresh(localStorage.getItem('userImage'));
			}
			else
				if (this.props.location.pathname !== "/" + Global.TRNDING_FVR_FEED)
					if (token === null && localStorage.getItem('userID') == null &&
						cookies.cookies.token !== undefined) {
						Helpers.inValidTokenHndlr(this.props, true);
						// Global.USER_ID = localStorage.getItem('userID');
					} */
		}

		/*******************************************************************************
		*
		* pageHelmetUpdate - helps to handle meta-tags updation.
		*
		* This function helps to handle meta-tags updation based on pages.
		*
		* RETURNS: N/A
		*
		* ERRNO: N/A
		*
		* SEE_ALSO: N/A
		*/
		/* pageHelmetUpdate(pathname) {
			if (pathname.startsWith("/" + Global.FIVER) ||
				pathname.startsWith("/" + Global.OPTION) ||
				pathname.startsWith("/" + Global.GROUP) ||
				pathname.startsWith("/" + Global.BUSSINESS_PAGE) ||
				pathname.startsWith("/" + Global.ORGANISATIONS) ||
				pathname.startsWith("/" + Global.ORGANISATION) ||
				pathname.startsWith("/" + Global.BUSSINESS_PAGES))
				return false
			else {
				let creatorName = "";
				let title = "Quession: Your feedback destination";
				let description = "Quession is a perfect place to arrive at a conclusion through collaborative feedback on important matters."
				let icon = null;

				return <PageHelmet
					creatorName={creatorName}
					title={title}
					description={description}
					icon={icon} />
			}


		} */

		render() {
			// let helmet = this.pageHelmetUpdate(this.props.location.pathname)
			return (
				<div className="app" /* onClick={(e) => {

					const { cookies } = this.props;
					// for automatic logout from other tab if getOperationDefinition, 
					// and user try to click anywhere in app 
					let token = localStorage.getItem('token');
					let usrID = localStorage.getItem('userID');
					let pathName = this.props.location.pathname;

					if (pathName.startsWith("/" + Global.FIVER) ||
						pathName.startsWith("/" + Global.OPTION) ||
						pathName.startsWith("/public") ||
						pathName.startsWith("/" + Global.GROUP) ||
						pathName.startsWith("/" + Global.BUNCH) ||
						pathName.startsWith("/" + Global.OPTN_CRT) ||
						pathName.startsWith("/comparison/") ||
						pathName.startsWith("/" + Global.OPTNS_FEED) ||
						pathName.startsWith("/" + Global.TRNDING_FVR_FEED) ||
						pathName.startsWith("/" + Global.QR_CODE_PAGE) ||
						pathName.startsWith("/" + Global.BUSSINESS_PAGE) ||
						pathName.startsWith("/" + Global.ORGANISATIONS) ||
						pathName.startsWith("/" + Global.ORGANISATION) ||
						pathName.startsWith("/" + Global.BUSSINESS_PAGES)) {
						Global.USER_ID = usrID;
						// this.props.profilePicRefresh(localStorage.getItem('userImage'));
					}
					else
						if (token === null && localStorage.getItem('userID') == null &&
							cookies.cookies.token !== undefined) {
							Helpers.inValidTokenHndlr(this.props, true);
						}
						else {
							Global.USER_ID = usrID;
							// this.props.profilePicRefresh(localStorage.getItem('userImage'));
						}
				}} */>
					{/* {helmet} */}
					<ErrorBoundary
						FallbackComponent={ErrorFallback}
						onReset={() => {
							// reset the state of your app so the error doesn't happen again
						}}
					>
						{this.state.width > 800 ? (
							<>
								{/* <HomeNav /> */}
								{(
									<div className="RootContainer">
										<div
											className="flex w-100 pb6 RootContainer2"
											style={{ paddingTop: '4.8rem' }}
										>
											{this.state.width > 1040 ? (
												<div className="leftSideContnrTron">
													{/* {(Global.USER_ID != null || this.props.location.pathname.includes('/public')) &&
														<></>
													} */}
												</div>
											) : null}

											<div
												className={
													this.state.width > 800 ? 'centralContnr' : 'centralFull'
												}
											>
												<ErrorBoundary
													FallbackComponent={ErrorFallback}
													onReset={() => {
														// reset the state of your app so the error doesn't happen again
													}}
												>
													<WrappedComponent {...this.props} />
												</ErrorBoundary>
											</div>

											{this.state.width > 1200 ? (
												<div className="rightSideContnrTron">

												</div>
											) : null}
										</div>
									</div>
								)}
							</>
						) : (
							<div className=" w-100 " style={{
								// paddingTop:"4.2rem",
								background: "white"
							}}>
								{/* <MobileNavBar /> */}
								{
									<div className="centralFull">
										<ErrorBoundary
											FallbackComponent={ErrorFallback}
											onReset={() => {
												// reset the state of your app so the error doesn't happen again
											}}
										>
											<WrappedComponent {...this.props} />
										</ErrorBoundary>
									</div>
								}


							</div>
						)}
					</ErrorBoundary>
				</div>
			)
		}
	}

	return ((HOC))

	// return (withCookies(HOC))
}

export default (Layout);
