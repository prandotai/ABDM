import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import MixLogo from "../../assets/images/logo-mix.svg";

import persnal from "../../assets/images/comman/persnal-health-records.png";
import constent from "../../assets/images/comman/constent-access.png";
import digital from "../../assets/images/comman/digital-health-records.png";
import { GlobalContext } from "../../GlobalDataContext/GlobalContext";


const AbhaAbout = () => {



    const navigate = useNavigate();

    const handlCraeteABHAaddress = () => {
        navigate('/aadhar-verification')
    }

    const handlCancelABHAaddress = () => {
        navigate('/home')
    }




    const [adharNo, setAdharNo] = useState("695968714526");

    const { setDataByKey } = useContext(GlobalContext)
    useEffect(() => {
        setDataByKey('AdharCardNumber', adharNo)
    }, []);



    return (
        <>
            <div className="mainFlow">
                <Header />
                <div className="container">
                    <div className="pranHealtnMainUserFlow">
                        <div className="abha-paranLogo">
                            <img src={MixLogo} />
                        </div>
                        <div className="pranAbhaHealthContent">
                            <h4>PRAN.AI Health</h4>
                            <h5>ABHA - Ayushman Bharat Health Account - Key to your digital healthcare journey.</h5>
                            <h6>Why create ABHA?</h6>
                            <p>ABHA number will establish a strong and trustable identity for you that will be accepted by healthcare providers across the country. Seamless sign up for PHR (Personal Health Records) applications such as ABDM ABHA application for Health data sharing.</p>
                            <div className="Know-more">Know more</div>
                        </div>
                        <div className="pranAiBoxes">
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <div className="pranBoxes">
                                        <div className="pranBoxedImg">
                                            <img src={persnal} />
                                        </div>
                                        <h4>Personal Health Records</h4>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <div className="pranBoxes">
                                        <div className="pranBoxedImg">
                                            <img src={constent} />
                                        </div>
                                        <h4>Consent Access</h4>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <div className="pranBoxes">
                                        <div className="pranBoxedImg">
                                            <img src={digital} />
                                        </div>
                                        <h4>Digital Health Record</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="createAbhaBtn">
                                <button className="custBtn btnCancel" onClick={handlCancelABHAaddress}>Cancel</button>
                                <button className="custBtn btnSuccess" onClick={handlCraeteABHAaddress}>Create  ABHA Address <i className="material-icons">arrow_right_alt</i></button>
                                <button className="custBtn btnThems">Login to ABHA <i className="material-icons">arrow_right_alt</i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AbhaAbout;