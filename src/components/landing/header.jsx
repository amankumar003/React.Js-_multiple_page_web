import React from "react";
import YouTube from 'react-youtube';

export const Header = (props) => {
  const opts = {
    height: '350',
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 intro-text">
                <div>
                  <h1>
                    <span className="header-title" style={{ color: 'white' }}>{props.data ? props.data.title.toUpperCase() : "LOADING"}</span>
                  </h1>
                  <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{props.data ? props.data.paragraph : "LOADING"}</p>
                </div>
                <div className="app-store-buttons">
                  <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                    <img src="/img/googlePlay.png" alt="Google Play Store" className="playStore-logo"/>
                  </a>
                  <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                    <img src="/img/appStore.png" alt="Apple App Store" className="appStore-logo"/>
                  </a>
                </div>
              </div>
              <div className="col-md-6 intro-video">
                  <YouTube videoId="QmgTLTIgKas" opts={opts} className="video-container"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
