/* Forgotpass.js - Forgot Card component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,30sep21,SK  created.
*/

/*
DESCRIPTION
This file is the Forgot password for the recovery process
*/

/* Imports */
import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import notify from 'components/toasts/toast';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

const resetPassEmail = gql`
mutation sendPasswordResetEmail($email:String!)
    {
      sendPasswordResetEmail(
        email: $email)
        {
            success,
            errors,
        }
    }`;


class ForgotPass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkEmail: ''
    }
  }

  /*******************************************************************************
  *
  * handelEmail - helps to get the email entered
  *
  * This function helps to get email which the user enters.
  *
  * RETURNS: N/A
  *
  * ERRNO: N/A
  *
  * SEE_ALSO: N/A
  */
  handelEmail = (event) => {
    this.setState({ checkEmail: event.target.value })
  }

  /*******************************************************************************
* UNDER CONSTRUCTION!!

* resetClicked - used to reset the password
*
* This function helps to reset the password.  
*
* RETURNS: N/A
*
* ERRNO: N/A
*
* SEE_ALSO: N/A
*/
  resetClicked(sendPasswordResetEmail) {
    // calling mutation
    sendPasswordResetEmail({
      variables: {
        email: this.state.checkEmail
      }
    })
      .then(res => {
        if (res.data.sendPasswordResetEmail.success === true) {
          notify("Please check your email and follow the instructions given there")
        }
        else {
          notify(res.data.sendPasswordResetEmail.errors.email[0].message)
        }
      })
      .catch(err => {
        notify("Error occured while sending email")
      });
  }

  render() {
    return (
      <div style={{padding: "1.8rem"}}>
        <div className="loginHeading" style={{ marginBottom: "0.5rem" }}>Forgot Password</div>
        <div className="loginSubHeading" style={{ marginBottom: "2.5rem" }}>
          <div style={{fontSize: "1rem", color: "#686464", lineHeight: "1rem", fontWeight: "300"}}>
            Please enter your email address provided at the time of registration. We'll send you an email to reset your password.
          </div>
        </div>

        <div className="inputHeading" style={{ marginBottom: "0.2rem" }}>Email</div>
        <div style={{/*  borderBottom: "1px solid #efefef", */
          marginBottom: "0rem"
        }}>
          <Input
            className="inputField loginInputs"
            // style={{ border: "none" }}
            type="email"
            onChange={(e) => this.handelEmail(e)}></Input>
        </div>

        <Row style={{marginTop: "2rem"}}>
          <Col className="col-6">
            <h6 style={{cursor: 'pointer', width: "max-content", color: "#0098F2"}} onClick={() => this.props.goBack()}>Back</h6>
          </Col>
          <Col className="col-6 d-flex justify-content-end">
            <Mutation mutation={resetPassEmail}>
              {(sendPasswordResetEmail, { data }) => (               
                <div className="" id="resetBtn"
                  style={{
                    border: "2px solid #EDEDED", borderRadius: "21px",
                    marginBottom: "0.35rem", display: "inline-flex", alignItems: "center",
                    justifyContent: "center", width: "100%", padding: "10px 0px",
                    cursor: "pointer", background: "#0098f2", maxWidth: "8rem"
                  }}
                  onClick={() => this.resetClicked(sendPasswordResetEmail)}>
                  <div className="loginButtonText">Reset</div>
                </div>
              )}
            </Mutation>
          </Col>
        </Row>
        
        {/* <div>

          <div className="loginSubHeading" style={{ textAlign: "center", borderBottom: "1px solid #efefef", margin: "20px 0 3rem", lineHeight: "0.1em" }}>
            <span style={{ background: "#fff", padding: "px 10px" }}>Or</span></div>

          <div style={{ marginBottom: "0.35rem", marginTop: "1.5rem" }}>
              <div style={{ background: "#eaeaea", border: "2px solid #EDEDED", borderRadius: "21px", marginBottom: "0.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "10px 0px", cursor: "pointer" }}>
                <div className="customLoginText" onClick={() => this.props.GoToSignUp()}>Create an account</div>
              </div>

          </div>

        </div> */}

      </div>
    )
  }
}

export default ForgotPass;
