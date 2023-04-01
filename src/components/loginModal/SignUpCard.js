/* signUpCard.js - signUpCard component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01c,01Feb22,SK  Removed username and added a system generated username.
01b,31Jan22,Sk  Created a single signup modal.
01a,28Sep21,SK  created.
*/

/*
DESCRIPTION
This file is the SignUp card componet of login page.
*/

/* Imports */
import React from "react";
import { Link, Redirect, withRouter } from 'react-router-dom'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { check } from '../signUpCard/signUpVerification';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
import { SITE_LOGO } from "config/GlobalIcons";
import { ApolloClient, HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import Global from "config/Global";
import { setContext } from '@apollo/client/link/context';
import notify from 'components/toasts/toast';
import GlobalLimits from "config/GlobalLimits";
import helpers from "config/Helpers";
import RsrvdUsrnames from "assets/docs/resrvUsrnams.json";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: Global.BASE_URL })),
  cache: new InMemoryCache(),
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
});

// Mautation for register /
const register = gql`
mutation register($email: String!,$username: String!, $password1: String!, $password2:String! ){
    register(
      email: $email,
      username: $username,
      password1: $password1,
      password2: $password2,
    ) {
    success,
    errors
  }
  }
  `;


const USER_NAME = gql`
query($name: String!){
  usernameExist(username:$name)
  {
    result
  }
}`



class SignUpCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: '',
      success: false,
      showPassword: false,
      showPassword1: false,
      usernameExist: false,
      validName: false,
      validEmail: false,
      validPass: false,
    }
  }

  componentDidMount() {
    if (this.state.email === '' || this.state.password1 === '')
      if (document.querySelector('#submitBtn') !== null)
        document.querySelector('#submitBtn').classList.add('disabled')
  }

  /*******************************************************************************
  *
  * checkUsername - helps to check whether the username already exist
  *
  * This function helps to verify the validation of the username
  *
  * RETURNS: N/A
  *
  * ERRNO: N/A
  *
  * SEE_ALSO: N/A
  */
  async checkUsername(username) {
    if (username.value.length >= 5) {
      await client.query({ query: USER_NAME, variables: { name: username.value }, fetchPolicy: "no-cache" })
        .then(res => {
          this.setState({ userExist: res.data.usernameExist.result })
        })
        .catch(err => {
          console.log(`Error in validation: ${err}`);
        })
    }
    if (check(username, this.state.userExist) !== false)
      this.setState({ validName: true })
    else
      this.setState({ validName: false })
  }

  /*******************************************************************************
  *
  * registerUser - helps to register a user with register mutation.
  *
  * This function helps to register a new user.
  *
  * RETURNS: N/A
  *
  * ERRNO: N/A
  *
  * SEE_ALSO: N/A
  */
  registerUser = (signUpMutation) => {
    let formValid = true;
    if (this.state.email === "") {
      const field = document.querySelector('#email')
      check(field)
      formValid = false;
    }
    // if (this.state.name === "") {
    //   const field = document.querySelector('#name')
    //   check(field)
    //   formValid = false;
    // }
    if (this.state.password1 === "") {
      const field = document.querySelector('#password1')
      check(field)
      formValid = false;
    }

    // A system generated username created by using email string and a random 4 digit number
    let systemUserName = this.state.email.split("@")[0] + Math.floor(1000 + Math.random() * 9000);

    let index = RsrvdUsrnames.map(function (o) { return o.twitter.toLowerCase(); }).indexOf((systemUserName).toLowerCase());
    // if exists dont allow registration 
    if (index !== -1) {
      formValid = false;
      notify("Username already taken, please choose different one")
    }

    if (!formValid)
      return false

    if (this.state.password1.match(/^[\s].+[\s]$/)) {
      notify("Your password can’t start or end with a blank space")
      return false
    }

    signUpMutation({
      variables: {
        email: this.state.email.toLowerCase(),
        username: systemUserName,
        password1: this.state.password1,
        password2: this.state.password1
      }
    })
      .then(res => {
        // console.log("response is: ", res)
        if (res.data.register.success === true) {
          // this.profileSet(this.state.email);

          //notify("Registration Successful, Please check your email to verify your account")
          this.setState({ success: !this.state.success })
        }
        else if (res.data.register.errors.username) {
          notify(res.data.register.errors.username[0].message)
          // notify("Username can only contain alphanumerics, underscore(_) and dot(.)")
        }
        else if (res.data.register.errors.email) {
          notify(res.data.register.errors.email[0].message)
        }
        else if (res.data.register.errors.password2) {
          notify(res.data.register.errors.password2[0].message)
        }
      })
      .catch(err => {
        console.log(err);
        notify("Error occured while registration")
      });
  }

  /*******************************************************************************
  *
  * usrProfileByEmailSet - helps to set user profile by email.
  *
  * This function helps to set user profile by email.
  *
  * RETURNS: N/A
  *
  * ERRNO: N/A
  *
  * SEE_ALSO: N/A
  */
  async profileSet(email) {
    try {
      return await helpers.usrProfileByEmailSet(email, false).then(result => {
        if (result === true) {
          return result.id;
        }
      });
    } catch (error) {
      console.warn(error)
    }
  }

  render() {
    var { validPass, validEmail } = this.state;

    if (validEmail && validPass) {
      if (document.querySelector('#submitBtn') !== null)
        document.querySelector('#submitBtn').classList.remove('disabled')
      else
        if (document.querySelector('#submitBtn') !== null)
          document.querySelector('#submitBtn').classList.add('disabled')
    }
    else
      if (document.querySelector('#submitBtn') !== null)
        document.querySelector('#submitBtn').classList.add('disabled')

    return (!this.state.success ?
      <div className="loginModalInfoCard">
        <Mutation mutation={register}>
          {(registerMutation, data) => (
            <div role="form" style={{ padding: "0" }}>
              {/* Quession logo */}
              <img className="loginModalLogo" src={SITE_LOGO} alt="logo"></img>
              {/* Headers */}
              <div className="loginHeading" style={{ marginTop: "0.6rem", fontSize: "22px" }}>
                Create an account
              </div>
              <div className="loginSubHeading" style={{ display: "inline-flex", marginBottom: "1rem", fontSize: "1rem" }}>
                <div style={{ color: "#323232" }}>
                  Already have an account?
                </div>
                <div className="crtAccountStr inputHeading" style={{ cursor: "pointer" }} onClick={() => this.props.toLogin()}>
                  {" Log in"}
                </div>
              </div>

              <Form role="form" noValidate={true} autoComplete="off">
                {/* Email input */}
                <div className="inputHeading" style={{ marginBottom: "0.2rem" }}>Email</div>
                <Input
                  required
                  id="email"
                  maxLength={GlobalLimits.SIGNUP_EMAIL}
                  //placeholder="Email"
                  className="inputField loginInputs"
                  type="email"
                  onChange={(e) => {
                    this.setState({ email: e.target.value })
                    if (check(e.target) !== false)
                      this.setState({ validEmail: true })
                    else this.setState({ validEmail: false })
                    helpers.progressBar(e.target, 'SIGNUP_EMAIL')
                  }}
                ></Input>

                {/* Username input */}
                {/* <div className="inputHeading"
                  style={{ marginBottom: "0.2rem", marginTop: "1rem" }}>Username</div>
                <Input
                  autoComplete="off"
                  required
                  id="name"
                  // placeholder="create a username here"
                  className="inputField loginInputs"
                  pattern="^[A-Za-z][A-Za-z0-9_\.]*[A-Za-z0-9]$"
                  minLength="5"
                  maxLength={GlobalLimits.SIGNUP_USERNAME}
                  // style={{ border: "none" }}
                  type="name"
                  onChange={(e) => {
                    this.setState({ name: e.target.value })
                    this.checkUsername(e.target)
                    helpers.progressBar(e.target, 'SIGNUP_USERNAME')
                  }}></Input> */}

                {/* Password */}
                <div className="inputHeading" style={{ marginBottom: "0.2rem", marginTop: "1rem" }}>Password</div>
                <div style={{ display: "grid", width: "100%", position: "relative", marginBottom: "1.3rem" }}>
                  <Input
                    autoComplete="off"
                    required
                    id="password1"
                    minLength="8"
                    maxLength={GlobalLimits.SIGNUP_PASSWORD}
                    // placeholder="enter your password here"
                    className="inputField loginInputs"
                    style={{ paddingRight: "2rem" }}
                    type={this.state.showPassword ? "text" : "password"}
                    onChange={(e) => {
                      this.setState({ password1: e.target.value })
                      if (check(e.target) !== false)
                        this.setState({ validPass: true })
                      else this.setState({ validPass: false })
                      helpers.progressBar(e.target, 'SIGNUP_PASSWORD')
                    }}
                  ></Input>

                  <i className={this.state.showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
                    style={{ position: "absolute", right: 5, top: 8.5, color: "#C9C9C9", cursor: "pointer" }}
                    onClick={() => this.setState({ showPassword: !this.state.showPassword })}></i>
                </div>

                <Row>
                  <Col className="col-6">
                    <h6 style={{ cursor: 'pointer', width: "max-content", color: "#0098F2" }} onClick={() => this.props.goBack()}>Back</h6>
                  </Col>
                  <Col className="col-6">
                    <div className="signUpButton">
                      <div className="" id="submitBtn"
                        style={{
                          border: "2px solid #EDEDED", borderRadius: "21px",
                          marginBottom: "0.35rem", display: "inline-flex", alignItems: "center",
                          justifyContent: "center", width: "100%", padding: "10px 0px",
                          cursor: "pointer", background: "#0098f2"
                        }}
                        onClick={() => this.registerUser(registerMutation)}>
                        <div className="loginButtonText mModalSignUpBtn">Create account</div>
                      </div>
                    </div>
                  </Col>
                </Row>

              </Form>

              <Row className="justify-content-center" style={{ position: "absolute", bottom: "1rem", left: 0, width: "100%", margin: 0 }}>
                <div className="termsAndC mModalTandC" style={{ fontSize: "14px", padding: "0 1.8rem" }}>
                  By signing up, you agree to our <span style={{ color: "#0098F2" }}><Link to="/legal/disclaimer" target="_blank">Disclamer</Link></span>, <span style={{ color: "#0098F2" }}><Link to="/legal/privacy-policy" target="_blank">Privacy Policy</Link></span>, <span style={{ color: "#0098F2" }}><Link to="/legal/cookie-policy" target="_blank">Cookie Policy</Link></span> & <span style={{ color: "#0098F2" }}><Link to="/legal/terms-of-use" target="_blank">Member Agreement</Link></span>.
                </div>
              </Row>
              {/* <div className="termsAndC" style={{position: "absolute", bottom: "1rem", width: "100%", fontSize: "10px"}}>
                By signing up, you agree to our <span style={{ color: "#0098F2" }}><Link to="/legal/disclaimer" target="_blank">Disclamer</Link></span>, <span style={{ color: "#0098F2" }}><Link to="/legal/privacy-policy" target="_blank">Privacy Policy</Link></span>, <span style={{ color: "#0098F2" }}><Link to="/legal/cookie-policy" target="_blank">Cookie Policy</Link></span> & <span style={{ color: "#0098F2" }}><Link to="/legal/terms-of-use" target="_blank">Member Agreement</Link></span>.
              </div> */}

            </div>
          )}
        </Mutation>
      </div> :
      <div className="" style={{ padding: "2rem" }}>
        <h3 className="loginSubHeading" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Thanks for registering with Quession
        </h3>
        <div style={{ fontWeight: "400", lineHeight: "1.7rem", fontSize: "1.4rem", marginBottom: "3rem" }}>
          Before you log in, please verify your email address.
        </div>

        <div className="signUpButton">
          <div
            style={{
              border: "2px solid #EDEDED", borderRadius: "21px",
              marginBottom: "0.35rem", display: "inline-flex", alignItems: "center",
              justifyContent: "center", width: "100%", padding: "10px 0px",
              cursor: "pointer", background: "#0098f2", maxWidth: "6rem"
            }}
            onClick={() => this.props.toLogin()}>
            <div className="loginButtonText">Login</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpCard);
