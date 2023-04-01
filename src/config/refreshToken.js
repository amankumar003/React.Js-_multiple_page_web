/* refreshToken.js - Refresh Token utilities */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,08jan21,jatin  created.
*/

/*
DESCRIPTION
This file is the Refresh Token utilities.
*/

export const refreshTokenSetup = (res) => {
  // console.log("wigi");
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    // console.log(refreshTiming);
    // console.log(res.tokenObj);
    // console.log(res.profileObj);
    // console.log(res.accessToken);
    // console.log(res.tokenId);
  
    const refreshToken = async () => {
      // console.log("bifi");
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      // console.log('newAuthRes:', newAuthRes);
      // saveUserToken(newAuthRes.access_token);  <-- save new token
      localStorage.setItem('authToken', newAuthRes.id_token);
  
      // Setup the other timer after the first one
      setTimeout(refreshToken, refreshTiming);
    };
  
    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
  };