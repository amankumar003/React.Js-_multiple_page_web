/* SpinnerTron.js - SpinnerTron component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,24sep20,pwn  created.
*/

/*
DESCRIPTION
This file is the SpinnerTron component for TRON.
*/

/* Imports */
import React from "react";

// reactstrap components
import {
    Spinner
} from "reactstrap";

class SpinnerTron extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <>
                <div className="modal fade show" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog null modal-dialog-centered confirmModalContainer" role="document">
                        <div className="modal-content">
                            <Spinner className="text-primary spinnerTron mobileSpinnerPosition" style={{
                                position: 'absolute',
                                left: '50%',
                                width: '5rem',
                                height: '5rem',
                                zIndex: '9999999'
                            }} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default SpinnerTron;
