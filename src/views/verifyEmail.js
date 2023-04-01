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
import { useParams } from 'react-router-dom';
import gql from "graphql-tag";
// import Global from "config/Global";
import notify from '../components/toasts/toast';
import {
  SITE_LOGO

} from "../config/GlobalIcons";
import Spinner from "reactstrap/lib/Spinner";
// import { useMutation } from "@apollo/client";
import { useMutation } from "react-apollo"
import Helpers from "../config/Helpers";
import Layout from "../functions/layout";
import Global from "../config/Global";
import EmailVerifyModal from "../components/loginModal/emailVerifyModal"

const emailVerify = gql`
mutation verifyAccount($token:String!)
    {
    verifyAccount(token:$token)
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

function VerifyEmail(props) {
  // let { url } = useRouteMatch();
  let { token, email } = useParams()



  const [verifyEmail, { loading, data, error }] = useMutation(emailVerify)
  const [onError, setError] = React.useState(false)
  const [usrVerified, setVerify] = React.useState(false)
  React.useEffect(() => {
    if (!Global.MODAL_BASED_LOGIN)
      verifyEmail({
        variables: {
          token: token
        }
      })
        .then(res => {
          if (res.data.verifyAccount.success === true) {
            // notify("success")
            profileSet(email).then(result => {
              if (result !== false) {
                setVerify(true)
              }
              else {
                // notify("Failed")
                setError(true)
              }
            });
          }
          else {
            // notify("Failed")
            setError(true)
          }
        })
        .catch(err => {
          console.log("Error in verify mutation ", err)
          notify("Error occured while verifying account")
        })
  }, []);


  return <EmailVerifyModal closeVerify={() => this.setState({ verifyEmail: false, Login: true }, () => {
    // props.history.push({ pathname: "/" })
  })} />


}


export default Global.MODAL_BASED_LOGIN ? (VerifyEmail) : VerifyEmail;
