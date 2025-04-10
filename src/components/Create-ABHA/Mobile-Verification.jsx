import MixLogo from "../../assets/images/logo-mix.svg";

const MobileVerification = () => {
    return (
        <div className="pranHealtnMainUserFlow">
            <div className="abha-paranLogo">
                <img src={MixLogo} />
            </div>
            <div className="userFlowAdharVer">
                <div className="backArrow">
                    <i class="material-icons">
                        keyboard_backspace
                    </i>
                </div>
                <div className="flowTitle">
                    <div className="adharVerified">Aadhar Verified <i class="material-icons">
                        check_circle
                    </i></div>
                    <h4>Mobile Number Verification</h4>
                    <p>OTP will be sent to the mobile number to the aadhar</p>
                </div>
                <div className="flow-feilds">
                    <div className="feilds">
                        <label>Mobile Number</label>
                        <input type="text" className="filds-form" placeholder="Enter mobile number" />
                        <span className="notes">OTP will be sent to this mobile number</span>
                    </div>
                    <div className="feilds">
                        <label>OTP</label>
                        <input type="text" className="filds-form" placeholder="Enter OTP" />
                    </div>
                    <div className="feilds feildsBtn">
                        <button className="custBtn btnCancel">Back</button>
                        <button className="custBtn btnSuccess">Continue <i className="material-icons">arrow_right_alt</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileVerification