/* emailVerificationModal.js - verify email component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,27Nov21,Sk  created.
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
import notify from '../../components/toasts/toast';

import Spinner from "reactstrap/lib/Spinner";
// import { useMutation } from "@apollo/client";
import { useMutation } from "react-apollo"
import Helpers from "../../config/Helpers";

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

function EmailVerifyModal(props) {
  // let { url } = useRouteMatch();
  let { token, email } = useParams()

  const [verifyEmail, { loading, data, error }] = useMutation(emailVerify)
  const [onError, setError] = React.useState(false)
  const [usrVerified, setVerify] = React.useState(false)

  React.useEffect(() => {
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

  return (
    <div style={{ padding: "3rem 1.8rem" }} className={"tronDiv"}>
      {loading &&
        <Spinner className="text-primary spinnerTron" style={{
          position: 'absolute', left: '47%', top: '17%',
          width: '3rem', height: '3rem'
        }} />
      }
      {(data && !onError && usrVerified === true) &&
        <div>
          <h3 className="loginSubHeading" style={{ marginBottom: "2rem" }}>
            Congratulations! Your account has been verified successfully, please login on mobile application </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <div className="loginButton"
                style={{ padding: "5px 14px", cursor: "pointer" }}
                onClick={() => props.closeVerify()}>
                <div className="loginButtonText">Login</div>
              </div> */}
          </div>
        </div>
      }
      {error || onError &&
        <div>
          <h3 className="loginSubHeading" style={{ marginBottom: "0.35rem", fontSize: "1.2rem" }}>
            Account verification failed.</h3>
          <div style={{ fontWeight: "400", fontSize: "1.2rem", lineHeight: "1.3rem" }}>
            Verification code is invalid or email has already been verified.</div>
        </div>
      }


    </div>
  )

}

export default EmailVerifyModal;
