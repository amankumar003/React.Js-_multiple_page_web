/* verifyEmailmodal.js - verify component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01b,02Dec21,Sk  Added linking with login modal for proper working.
01a,27Nov21,Sk  created.
*/

/*
DESCRIPTION
This file is the for verify email through token recieved through URL.
*/

/* Imports */
import React from "react";

// reactstrap components
import { Container, Button, Row, Col, Label, FormGroup, Form, Input } from "reactstrap";
import { Redirect, useRouteMatch } from 'react-router-dom';

import {
  SITE_LOGO

} from "config/GlobalIcons";
// Core Components
import Navbar from "components/navbar/navbar.js";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import notify from 'components/toasts/toast';

const resendVerify = gql`
mutation resendActivationEmail($email:String!)
{
     resendActivationEmail(email: $email)
     {
     errors,
     success,
   }
   }`;


function ResendVerifyEmail(props) {
  React.useEffect(() => {
    document.body.classList.add("login-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });
  const [email, setemail] = React.useState("");
  let { path, url } = useRouteMatch();
  const resendVerifyHlpr = (resendVerifyMutation) => {
    // calling mutation
    resendVerifyMutation({
      variables: {
        email: email,
      }
    })
      .then(res => {
        // console.log(JSON.stringify(res))
        if (res.data.resendActivationEmail.success == true) {
          notify("Email sent successfully")
          props.closeVerify()
        }
        else {
          notify(res.data.resendActivationEmail.errors.email[0]["message"])
        }
      })
      .catch(err => {
        notify("Error occured while sending verify email")
      });
  };

  return (
    <div style={{margin: "2rem 1.8rem"}}>
        <div className="loginHeading" style={{ marginBottom: "0.75rem" }}>Resend Verify Email</div>

        <div className="loginSubHeading" style={{ marginBottom: "2rem" }}>
          <div style={{fontSize: "1rem", color: "#686464", lineHeight: "1rem", fontWeight: "300"}}>
            {"Your account is not verified. Resend verification email?"}
          </div>
        </div>
        {/* <Input
          placeholder="enter your email here"
          className="inputField"
          autoComplete="off"
          style={{ border: "none", marginBottom: "2rem" }}
          type="email"
          onChange={(e) => setemail(e.target.value)}></Input> */}
        <Input
          placeholder="enter your email here"
          className="inputField loginInputs"
          autoComplete="off"
          //style={{ border: "none", marginBottom: "2rem" }}
          type="email"
          onChange={(e) => setemail(e.target.value)}/>

        
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{cursor: 'pointer', width: "max-content", color: "#0098F2", marginTop: '2rem'}}
              onClick={() => props.closeVerify()}>
              Cancel
            </div>
          </div>
            
          <Mutation mutation={resendVerify}>
            {(resendVerifyMutation, { data }) => (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="loginButton"
                  style={{ padding: "5px 14px", cursor: "pointer" }}
                  onClick={() => resendVerifyHlpr(resendVerifyMutation, null)}>
                  <div className="loginButtonText">Submit</div>
                </div>
              </div>
            )}
          </Mutation>
        </div>
    </div>
  )

}

export default ResendVerifyEmail;
