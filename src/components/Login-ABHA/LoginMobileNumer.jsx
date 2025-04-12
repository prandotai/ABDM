import React from "react"


const LoginMobileNumber = () => {
    return (
        <>
            <div className="flow-feilds">
                <div className="feilds">
                    <label>Mobile Number</label>
                    <input type="text" className="filds-form" placeholder="20 - 2001 - 3001 - 4001" />
                </div>
                <div className="feilds">
                    <span className="notes">OTP sent to Aadhaar registered mobile number ending with ******3210</span>
                    <label>Enter OTP</label>
                    <input type="text" className="filds-form" placeholder="Enter OTP" />
                    <span className="notes text-end">00:60 Resend OTP</span>
                </div>
                <div className="feilds feildsBtn">
                    <button className="custBtn btnCancel">Back</button>
                    <button className="custBtn btnSuccess">Continue <i className="material-icons">arrow_right_alt</i></button>
                </div>
            </div>
        </>
    )
}

export default LoginMobileNumber


