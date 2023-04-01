/* verifyEmail.js - verify component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,26oct22,pwn  created.
*/

/*
DESCRIPTION
This file is the for verify email through token recieved through URL.
*/

/* Imports */
import React from "react";

// reactstrap components
import { Input } from "reactstrap";
import { Redirect, useRouteMatch, useParams } from 'react-router-dom';
// Core Components
// import Navbar from "components/navbar/navbar.js";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// import Global from "config/Global";
import {
  SITE_LOGO

} from "../config/GlobalIcons";
import notify from '../components/toasts/toast';
import Helpers from "../config/Helpers";

import Layout from "../functions/layout";
import Global from "../config/Global";
// import LoginModal from "../components/loginModal/LoginModal";
import ResetPasswordModal from "../components/loginModal/resetPasswordModal";

const resetPass = gql`
mutation passwordReset($token:String!, $newPassword1:String!, $newPassword2:String!)
    {
        passwordReset(
        token: $token,
        newPassword1: $newPassword1,
        newPassword2: $newPassword2)
        {
            success,
            errors,
        }
    }`;



/*******************************************************************************
 *
 * profileSet - helps to set user profile by email.
 *
 * This function helps to set user profile by email.
 *
 * RETURNS: N/A
 *
 * ERRNO: N/A
 *
 * SEE_ALSO: N/A
 */
async function profileSet(email) {
  try {
    return await Helpers.usrProfileByEmailSet(email, false).then(result => {
      // console.warn(result)
      if (result !== false) {
        return result.id;
      }
      else {
        return false
      }
    });
  } catch (error) {
    console.warn(error)
  }
}



function ResetPassword(props) {
  React.useEffect(() => {
    document.body.classList.add("login-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });
  const [verification, setverification] = React.useState(false);
  const [password, setpassword] = React.useState("");
  const [confirmPassword, setconfirmPassword,] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [setConfirmPassword, showSetConfirmPassword] = React.useState(false);
  const [processComplete, setPasswordComplete] = React.useState(false)
  let { path, url } = useRouteMatch();
  let { token, email } = useParams()

  const resetPassHlpr = (resetPassMutation) => {
    // calling mutation
    if (!Global.MODAL_BASED_LOGIN)
      resetPassMutation({
        variables: {
          token: token,
          newPassword1: password,
          newPassword2: password
        }
      })
        .then(res => {
          // console.log(JSON.stringify(res))
          if (res.data.passwordReset.success === true) {

            profileSet(email).then(result => {
              if (result !== false) {
                setverification(true)
                notify("Password changed successfully")
                setPasswordComplete(true)
              }
              else {
                notify("Error occured while reseting password")
              }
            });
          }

          /* return <NotificationModal 
          message={"Fiver created successfully"} 
          infoType={"bg-gradient-danger"} /> */

          else if (res.data.passwordReset.success === false) {
            notify("This url is expired ! Please try again with a new request.")
          }
          /* return <NotificationModal 
          message={"Error occured while creating fiver"}
          infoType={"bg-gradient-danger"}  /> */

        })
        .catch(err => {
          // console.log(err);
          notify("Error occured while reseting password")
          // return <NotificationModal message={"Error occured while creating fiver"} />
        });

  };

  if (processComplete) {
    return <Redirect push to={"/" + Global.DEFAULT_PAGE} />
  }

  if (!Global.MODAL_BASED_LOGIN)
    return (
      <>
        <div className="coverPicture"></div>
        {/* Branding */}
        <div className="brandContainer">
          <img className="brandLogo" src={SITE_LOGO} alt="logo"></img>
          {/* <div className="brandName">{Global.WEB_SITE_NAME}</div> */}
        </div>

        <div className="loginCard loginCardContainer resetPassContnr">
          <div className="loginHeading" style={{ marginBottom: "1rem" }}>Reset Password</div>

          <div className="inputHeading" style={{ marginBottom: "0.2rem" }}>Password</div>
          <div style={{ display: "inline-flex", alignItems: "center", width: "100%", position: "relative", marginBottom: "1.3rem" }}>
            <Input
              // placeholder="enter your password here"
              className="inputField loginInputs"
              // style={{border: "none", paddingRight: "30px"}}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setpassword(e.target.value)}></Input>
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
              style={{ position: "absolute", right: 5, color: "#C9C9C9", cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}></i>
          </div>

          {/*  <div className="inputHeading" style={{marginBottom: "0.2rem"}}>Confirm password</div>
          <div style={{display: "inline-flex", alignItems: "center", width: "100%", position: "relative", marginBottom: "1.5rem"}}>
            <Input 
            // placeholder="enter your password again"
            className="inputField loginInputs"
            // style={{border: "none", paddingRight: "30px"}}
            type={setConfirmPassword ? "text" : "password"}
            onChange={(e) => setconfirmPassword(e.target.value)}></Input> 
            <i className={setConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"} 
              style={{position: "absolute", right: 5, color: "#C9C9C9", cursor: "pointer"}}
              onClick={() => showSetConfirmPassword(!setConfirmPassword) }></i>
          </div>  */}

          <Mutation mutation={resetPass}>
            {(resetPassMutation, { data }) => (
              <div
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="loginButton"
                  /*  style={{
                     border: "2px solid #EDEDED", borderRadius: "21px", marginTop: "-0.7rem",
                     marginBottom: "0.35rem", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "10px 0px", cursor: "pointer"
                   }} */
                  onClick={() => resetPassHlpr(resetPassMutation, null)}>
                  <div className="loginButtonText">Reset</div>
                </div>
              </div>
            )}
          </Mutation>
        </div>


        {/* Copyrights  */}
        {/* <div className="comingSoonContainer">
        <div className="comingSoonCard">
          <p className="loginSubHeading copyRightTronStr"
            style={{
              marginBottom: "-0.5rem",
              fontWeight: "400",
              padding: "0 1rem",
            }}>
            Copyrights © 2021 <a href="http://www.localytee.com" target="_blank" style={{ color: "#0098f2" }}>{" Localytee"}</a>. All rights reserved.
          </p>
        </div>
      </div> */}
      </>
    )

  if (Global.MODAL_BASED_LOGIN)
    return <>
      {/* <PublicLoading /> */}
      <ResetPasswordModal />
      {/* <LoginModal resetPassword={true} onClose={() => props.history.push({ pathname: "/" + Global.DEFAULT_PAGE })} /> */}
    </>

  // return (
  //   <>
  //     {console.log(token)}
  //     <Navbar type="transparent" />
  //     <div className="section-shaped my-4 skew-separator skew-mini">
  //       {/* Email Verify mutation  */}
  //       <div className="page-header page-header-small header-filter">
  //         <div
  //           className="page-header-image"
  //           style={{
  //             backgroundImage:
  //               "url(" + require("../assets/img/sections/unsplashs.jpg") + ")",
  //           }}
  //         ></div>
  //         <Container className="mt-6">
  //           <div className="header-body text-center ">
  //             <Row className="justify-content-center">
  //               <Col className="px-5" lg="6" md="8" xl="5">
  //                 {/* <h1 className="text-white">Welcome!</h1> */}
  //                 <h1 className="text-white">Password Reset</h1>
  //                 <div className="modal-body bg-secondary">
  //                   <Form>
  //                     <FormGroup>
  //                       <Label htmlFor="resetPasswordInput" className="col-form-label">
  //                         Password:
  //                           <Input
  //                           className="form-control-alternative"
  //                           //   defaultValue="Creative Tim"
  //                           id="resetPasswordInput"
  //                           type="password"
  //                           onChange={(e) => setpassword(e.target.value)}
  //                         ></Input>
  //                       </Label>
  //                     </FormGroup>
  //                     <FormGroup>
  //                       <Label htmlFor="message-text" className="col-form-label">
  //                         Confirm Password:
  //                           <Input
  //                           className="form-control-alternative"
  //                           id="message-text"
  //                           type="password"
  //                           onChange={(e) => setconfirmPassword(e.target.value)}
  //                         ></Input>
  //                       </Label>
  //                     </FormGroup>
  //                   </Form>
  //                   {/* <div>&nbsp;</div> */}
  //                   <div className="align-item-center">
  //                     {/* password reset mutation  */}
  //                     <Mutation mutation={resetPass}>
  //                       {(resetPassMutation, { data }) => (
  //                         <Button color="primary" type="button"
  //                           onClick={() => resetPassHlpr(resetPassMutation, null)}>
  //                           Submit
  //                         </Button>
  //                       )}
  //                     </Mutation>
  //                   </div>
  //                 </div>
  //                 {/* { verification == false &&
  //                 <Mutation mutation={emailVerify}>
  //                 {(emailVerifyMutation, { data }) => (
  //                   <Button color="primary" type="button"
  //                   onClick={() => emailVerifyHlpr(emailVerifyMutation, null)}>
  //                   Verify Email
  //                   </Button>
  //                   )}
  //                   </Mutation>
  //                 }
  //                 { verification == true &&
  //                 <h3 className="text-white"> Congratulations Your account has been verified Successfully </h3>
  //                 } */}
  //               </Col>
  //             </Row>
  //           </div>
  //         </Container>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default Global.MODAL_BASED_LOGIN ? (ResetPassword) : ResetPassword;
