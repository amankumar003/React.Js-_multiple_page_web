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
import { Container, Button, Row, Col, Label, FormGroup, Form, Input } from "reactstrap";
import { Redirect, useRouteMatch } from 'react-router-dom';

import {
  SITE_LOGO

} from "../config/GlobalIcons";
// Core Components
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import notify from '../components/toasts/toast';
// import LoginModal from "components/loginModal/LoginModal";
import Layout from "../functions/layout";
import Global from "../config/Global";

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
  const [processComplete, setPasswordComplete] = React.useState(false)
  let { path, url } = useRouteMatch();
  const resendVerifyHlpr = (resendVerifyMutation) => {
    // calling mutation
    if (!Global.MODAL_BASED_LOGIN)
      resendVerifyMutation({
        variables: {
          email: email,
        }
      })
        .then(res => {
          // console.log(JSON.stringify(res))
          if (res.data.resendActivationEmail.success == true) {
            notify("Email sent successfully")
            setPasswordComplete(true)
          }
          else {
            notify(res.data.resendActivationEmail.errors.email[0]["message"])
          }
        })
        .catch(err => {
          notify("Error occured while sending verify email")
        });
  };

  if (processComplete) {
    return <Redirect push to="/login" />
  }

  if (!Global.MODAL_BASED_LOGIN)
    return (
      <>
        <div className="coverPicture"></div>
        {/* Branding */}
        <div className="brandContainer">
          <img className="brandLogo" src={SITE_LOGO} alt="logo"></img>
          {/* <div className="brandName">FIVER</div> */}
        </div>

        <div className="loginCard loginCardContainer">
          <div className="loginHeading" style={{ marginBottom: "1rem" }}>Resend Verify Email</div>
          <div className="inputHeading" style={{ marginBottom: "0.2rem" }}>Email address</div>
          <Input
            placeholder="enter your email here"
            className="inputField"
            autoComplete="off"
            style={{ border: "none", marginBottom: "2rem" }}
            type="email"
            onChange={(e) => setemail(e.target.value)}></Input>
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

  


  // return (
  //   <>
  //     <Navbar type="transparent" />
  //     <div className="section-shaped my-4 skew-separator skew-mini">
  //        {/* Email Verify mutation  */}
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
  //                 <h1 className="text-white">Resend Verify Email</h1>
  //                 <div className="modal-body bg-secondary">
  //                   <Form>
  //                       <FormGroup>
  //                       <Label htmlFor="resendVerifyEmailInput" className="col-form-label">
  //                           Email:
  //                           <Input
  //                           className="form-control-alternative"
  //                           //   defaultValue="Creative Tim"
  //                           id="resendVerifyEmailInput"
  //                           type="email"
  //                           onChange={(e) => setemail(e.target.value)}
  //                           ></Input>
  //                       </Label>
  //                       </FormGroup>
  //                   </Form>
  //                   {/* <div>&nbsp;</div> */}
  //                   <div className="align-item-center">
  //                   {/* password reset mutation  */}
  //                   <Mutation mutation={resendVerify}>
  //                       {(resendVerifyMutation, { data }) => (
  //                   <Button color="primary" type="button"
  //                       onClick={() => resendVerifyHlpr(resendVerifyMutation, null)}>
  //                       Submit
  //                   </Button>
  //                   )}
  //                   </Mutation>
  //                   </div>
  //               </div>
  //               </Col>
  //             </Row>
  //           </div>
  //         </Container>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default Global.MODAL_BASED_LOGIN ? Layout(ResendVerifyEmail) : ResendVerifyEmail;  
