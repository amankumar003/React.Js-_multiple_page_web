/* BuyerDetailsAdd.js - BuyerDetailsAdd component for the FOOTFALL */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01a,17nov22,pwn  created.
*/

/*
DESCRIPTION
This file is the BuyerDetailsAdd component for FOOTFALL.
*/

/* Imports */
import React from "react"
import { Button, Card, Input, Modal } from "reactstrap"
import StringHelper from "../../../config/StringHelper";
import notify from "../../toasts/toast";

class BuyerDetailsAdd extends React.Component {
    constructor(props) {
        super(props);
        let name = "";
        let email = "";
        let phone = "";

        let userData = this.props.userData;

        if (userData !== "" &&
            userData !== null &&
            userData !== undefined) {
            name = userData.name;
            email = userData.email;
            phone = userData.phone;
        }
        this.state = {
            name: name,
            email: email,
            phone: phone,
        };
    }


    modalView() {
        return <Modal
            isOpen={this.props.isOpen}
            className="modal-dialog-centered fiverCrtModal mfivrCrt"


        >
            <div className="cardBody fiverCrtTabContnr"
                style={{
                    background: "#F1F2F2"
                }}
            >
                <div className="fiverCrtTabs" style={{
                    display: "flex",
                    background: "white",
                    borderBottom: "1px solid #00000029",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                    borderRadius: "1rem 1rem 0rem 0rem "
                }}>
                    <div></div>
                    <h5 className="modal-title modal-heading"
                        style={{ margin: 0, fontSize: "1rem" }}>
                        Buyer's personal details
                    </h5>

                    <button
                        aria-label="Close"
                        className="close"
                        style={{ position: "relative", top: "0.3rem", right: "0.7rem" }}
                        onClick={() => this.props.onModalClose()}
                        type="button"
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <Card
                    className="fiverCrtTabContent fiverCrtTabContentActive FiverCrtBodyContainer"
                    style={{
                        boxShadow: "none", marginBottom: 0,
                        borderRadius: "7px 7px 7px 7px",
                        padding: "1rem"
                    }}>


                    {this.inputsUI()}


                    <div style={{
                        marginTop: "2rem",
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Button color="primary" type="button"
                            style={{}}
                            onClick={() => {
                                if (StringHelper.strWhiteSpaceRemvr(this.state.name).length === 0) {
                                    notify("Name is required");
                                    this.setState({ loading: false });
                                    return false;
                                }

                                return this.props.onSubmitPress({
                                    name: this.state.name,
                                    email: this.state.email,
                                    phone: this.state.phone
                                })
                            }}>
                            Submit
                        </Button>
                    </div>

                </Card>
            </div>
        </Modal>
    }


    inputsUI() {
        return <>
            <Input
                className="agentsInputs"
                value={this.state.name}
                placeholder="Name"
                name="agentName"
                onChange={(e) => {
                    this.setState({ name: e.target.value }, () => {
                    })
                }}
            />


            <Input
                className="agentsInputs"
                value={this.state.email}
                placeholder="Email"
                name="agentEmail"
                onChange={(e) => {
                    this.setState({ email: e.target.value }, () => {
                    })
                }}
            />


            <Input
                className="agentsInputs"
                value={this.state.phone}
                placeholder="Phone"
                name="agentEmail"
                onChange={(e) => {
                    this.setState({ phone: e.target.value }, () => {
                    })
                }}
            />
        </>
    }

    render() {
        let { modalView } = this.props;

        return (
            <div>
                {modalView === true ?
                    this.modalView()
                    :
                    this.inputsUI()
                }

            </div >
        )
    }
}

export default (BuyerDetailsAdd)
