import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/common/Header";
import { GlobalContext } from "../../GlobalDataContext/GlobalContext";
import MixLogo from "../../assets/images/logo-mix.svg";
import { useNavigate } from "react-router-dom";


const AadharVerificationPage = () => {


    const { getDataByKey } = useContext(GlobalContext)
    const checked = getDataByKey('AdharCardNumber')
    console.log("checked", checked)

    const navigate = useNavigate();

    const back = () => {
        navigate('/abha-home');
    }


    return (
        <>
            <div className="mainFlow">
                <Header />
                <div className="container">
                    <div className="pranHealtnMainUserFlow">
                        <div className="abha-paranLogo">
                            <img src={MixLogo} />
                        </div>
                        <div className="userFlowAdharVer pre-create-ABHA">
                            <div className="backArrow" onClick={back}>
                                <i class="material-icons">
                                    keyboard_backspace
                                </i>
                            </div>
                            <div className="flowTitle">
                                <h4>Aadhar Verification</h4>
                                <p>OTP will be sent to the mobile number to the aadhar</p>
                            </div>
                            <div className="flow-feilds">
                                <div className="feilds">
                                    <label>Aadhar Number</label>
                                    <input type="text" className="filds-form" placeholder="Enter Aadhar" />
                                    <span className="notes">Aadhar Verification allows to start using your ABHA account instantly</span>
                                </div>
                                <div className="feilds">
                                    <label>Enter OTP</label>
                                    <input type="text" className="filds-form" placeholder="Enter OTP" />
                                </div>
                                <div className="feilds feildsBtn">
                                    <button className="custBtn btnCancel">Back</button>
                                    <button className="custBtn btnSuccess">Continue <i className="material-icons">arrow_right_alt</i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AadharVerificationPage;