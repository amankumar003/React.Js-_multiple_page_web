import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import VerifyEmail from "./views/verifyEmail";
import ResetPassword from "./views/resetPassword";

// import ResendVerifyEmail from './views/resendVerifyEmail';
// import { withRouter } from 'react-router-dom';
// import FeedBackAddScreen from './views/FeedBackAddScreen';
import QRCodeScreen from './views/QRCodeScreen';
import IpadScreen from './views/IpadScreen';
import Landing from './views/landing'

const App = () => {
  {


    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Landing {...props} />}
        />
        <Route
          path="/verifyEmail/:email/:token"
          exact
          render={(props) => <VerifyEmail {...props} />}
        />

        <Route
          path="/resetPassword/:email/:token"
          exact
          render={(props) => <ResetPassword {...props} />}
        />

        <Route
          exact
          path="/feedBackAdd/:openHouseId"
          render={(props) => <QRCodeScreen {...props} />}
        />

        <Route
          exact
          path="/ipadFeedBackAdd/:openHouseId"
          render={(props) => <IpadScreen {...props} />}
        />
        {/* <Route
          exact
          path="/feedBackAdd/:openHouseId"
          render={(props) => <FeedBackAddScreen {...props} />}
        /> */}

        {/*  <Route
        path="/resendVerify"
        exact
        render={(props) => <ResendVerifyEmail {...props} />}
      /> */}
      </Switch>
    );
  }
}

export default App;
