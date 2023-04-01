/* ResetPassword.js - reset password component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,14jan22,pwn added default page.
01a,27Nov21,Sk  created.
*/

/*
DESCRIPTION
This file is the for reset password through token recieved through URL.
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

import notify from '../../components/toasts/toast';
import Helpers from "../../config/Helpers";
import Global from "../../config/Global";
import "../LoginCard/LoginCard.scss"


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



function ResetPassword() {
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

  /*  if (processComplete) {
     return <Redirect push to={"/" } />
   } */

  return (
    <div style={{ margin: "2rem 1.8rem" }} className={"tronDiv"}>
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
  )


}

export default ResetPassword;
