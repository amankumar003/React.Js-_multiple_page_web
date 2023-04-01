import React from "react"

import gql from 'graphql-tag';
import Global from "config/Global";
import { ApolloClient, HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from '@apollo/client/link/context';

import defaultdp from "assets/img/defaultAvatar.png"
import { connect } from "react-redux";

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

const GET_USER_INFO = gql`
  query($userId: String!)
  { userProfile(userId: $userId)
  {
    userData{
      userPic
    }
    }
    }`;


const GetProfilePic = (dpRefresh) => {
  const [dp, setDp] = React.useState("")

  React.useEffect(() => {
    client.query({ query: GET_USER_INFO, variables: { userId: Global.USER_ID }, fetchPolicy: "no-cache" })
    .then(res => {
      if(res.data.userProfile.userData[0] !== undefined) {
        setDp(res.data.userProfile.userData[0].userPic)
      } 
      else setDp(defaultdp)
    })
    .catch(err => console.log("Error in getProfilePic query", err))
  }, [dpRefresh])

  return (
    <img
      style={{height: 26, width: 26}}
      alt="..."
      className="avatar avatar-sm rounded-circle"
      src={ dp }
    ></img> 
  )

}


export default GetProfilePic; 