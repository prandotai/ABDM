import Header from "../../components/common/Header";
import MixLogo from '../../assets/images/logo-mix.svg'
import User from '../../assets/images/comman/user-1.png'
import ProfleBanner from '../../assets/images/comman/profile-banner.png'
import Scanner from '../../assets/images/comman/scanner.png'


const ReKYC = () => {
    return (
        <>
            <div className="mainFlow">
                <Header />
                <div className="container">
                    <div className="pranHealtnMainUserFlow">
                        <div className="abha-paranLogo">
                            <img src={MixLogo} />
                        </div>
                        <div className="userFlowAdharVer">
                            {/* <div className="flowTitle">
                                <h4>Set your PHR (ABDM) Address</h4>
                                <p>Basic profile information is captured from Aadhar</p>
                            </div> */}
                            <div className="user-profile-dashboard">
                                <div className="leftDashbirdMenu">
                                    <ul>
                                        <li><a href="/abha-Card">ABHA Card</a></li>
                                        <li><a href="/my-profile">My Profile</a></li>
                                        <li><a href="/manage-ABHA-profile">Manage ABHA Profile</a></li>
                                        <li><a href="/manage-password">Manage Password</a></li>
                                        <li><a href="/delete-deactivate-account">Delete/Deactivate</a></li>
                                        <li><a className="active" href="/re-KYC">Re-KYC</a></li>
                                        <li><a href="/login-ABHA">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="centerBoard kyc-section-page">
                                    <div className="rightProfileMain withoutBorder re-kyc">

                                        <div className="kyc-section">
                                            <div className="re-kyc-heading">
                                                <h4>Complete KYC Using Aadhaar</h4>
                                            </div>
                                            <div className="colordTextContent">
                                                <p>Please ensure that mobile number is linked with Aadhaar as it will be required for OTP authentication. If you do not have a mobile number linked, visit the nearest <u>ABDM participating facility</u> and seek assistance.</p>
                                            </div>
                                            <div className="feilds">
                                                <label>Aadhar Number</label>
                                                <input type="text" placeholder="0000 - 0000 - 0000" />
                                            </div>

                                            <label className="terms-condition-section" for="termsConditionClick">
                                                <input type="checkbox" id="termsConditionClick" />
                                                <div className="terms-condition-right">
                                                    <h4>I agree to Terms and Conditions</h4>
                                                    <p>I, hereby declare that I am voluntarily sharing my Aadhaar number and demographic information issued by UIDAI, with National Health Authority (NHA) </p>
                                                    <span className="readMore">Read More</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="compleate-kyc-section">
                                            <div className="re-kyc-heading">
                                                <h4>Complete KYC Using Aadhaar</h4>
                                            </div>
                                            <div className="feilds">
                                                <span className="notes">OTP sent to Aadhaar registered mobile number ending with ******3210</span>
                                                <label>Confirm OTP</label>
                                                <input type="text" placeholder="" />
                                                <span className="notes text-end">00:60 Resend OTP</span>
                                            </div>
                                        </div>

                                        <div className="nowCompleateReKYC">
                                            <div className="compleateKYC-icon">
                                                <span className="bgImg">&nbsp;</span>
                                                <h4>Re KYC  Complete</h4>
                                            </div>
                                            <div className="Now-you-can">
                                                <h4>Now you can</h4>
                                            </div>
                                            <div className="thirdreKycColum">
                                                <div className="kyc-boxes">
                                                    <p>Access to ABDM
                                                        application</p>
                                                </div>
                                                <div className="kyc-boxes">
                                                    <p>Share your health
                                                        records over ABDM</p>
                                                </div>
                                                <div className="kyc-boxes">
                                                    <p>Share health records
                                                        to any Health Facility</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="bottomDashboard">
                                <div className="saveBtnProfile justify-content-center">
                                    <button className="custBtn btnThems">Cancel</button>
                                    <button className="custBtn disabled">Continue</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReKYC;