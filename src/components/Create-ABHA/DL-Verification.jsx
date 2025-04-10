import MixLogo from "../../assets/images/logo-mix.svg";

const DLVerification = () => {
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
                    <h4>Driving Licence Verification</h4>
                    <p>OTP will be sent to the mobile number to the Driving Licence</p>
                </div>
                <div className="flow-feilds">
                    <div className="feilds">
                        <label>Driving Licence Number</label>
                        <input type="text" className="filds-form" placeholder="Format: DL-000000000000" />
                        <span className="notes">DL licence verification allows to start using your ABHA account instantly</span>
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
    )
}

export default DLVerification