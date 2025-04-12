import React from "react"


const LoginAadharNumber = () => {
    return (
        <>
            <div className="flow-feilds aadharCardLogin">
                <div className="feilds">
                    <label>Aadhar Number</label>
                    <input type="text" className="filds-form" placeholder="20 - 2001 - 3001 - 4001" />
                </div>
                <div className="feilds">
                    <span className="notes">OTP sent to Aadhaar registered mobile number ending with ******3210</span>
                    <label>Enter OTP</label>
                    <input type="text" className="filds-form" placeholder="Enter OTP" />
                    <span className="notes text-end">00:60 Resend OTP</span>
                </div>
            </div>
            <label className="terms-condition-section" for="termsConditionClick">
                <input type="checkbox" id="termsConditionClick" />
                <div className="terms-condition-right">
                    <h4>I agree to Terms and Conditions</h4>
                    <p>I, hereby declare that I am voluntarily sharing my Aadhaar number and demographic information issued by UIDAI, with National Health Authority (NHA) </p>
                    <span className="readMore">Read More</span>
                </div>
            </label>
            <div className="flow-feilds" style={{ minHeight: 'auto' }}>
                <div className="feilds feildsBtn">
                    <button className="custBtn btnCancel">Back</button>
                    <button className="custBtn btnSuccess">Continue <i className="material-icons">arrow_right_alt</i></button>
                </div>
            </div>
        </>
    )
}

export default LoginAadharNumber


