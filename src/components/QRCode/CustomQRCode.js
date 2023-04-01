/* CustomQRCode.js - Qr code component for the TRON */

/* Copyright (c) 2020-2021, Localytee, LLC */

/*
modification history
--------------------
01a,17feb23,pwn  created.
*/

/*
DESCRIPTION
This file is the Qr code component for TRON.
*/

/* Imports */
import React from "react"
import { FOOTFALLZ_ICO } from "../../config/GlobalIcons";
import QRCodeStyling from "qr-code-styling";
import Global from "../../config/Global";
// import "./QrCodeModal.scss"


const qrCode = new QRCodeStyling({
  // image: FOOTFALLZ_ICO,
  dotsOptions: {
    color: Global.QR_CODE_COLOR,
    // type: "dots"
  },
  cornersSquareOptions: {
    color: Global.QR_CODE_COLOR,
    // type: "extra-rounded"
  },
  cornersDotOptions: {
    color: Global.QR_CODE_COLOR,
    // type: "dots"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 8
  }
});

class CustomQRCode extends React.Component {

  qrRef = React.createRef()

  componentDidMount() {
    qrCode.update({
      data: this.props.url,
      height: this.props.size ? this.props.size : 300,
      width: this.props.size ? this.props.size : 300,
    });

    qrCode.append(this.qrRef.current);
  }

  render() {
    return <div ref={this.qrRef} className={this.props.size === undefined && "qrSizeSetter"} />
  }
}

export default CustomQRCode;