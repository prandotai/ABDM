import Header from "../../components/common/Header";
import MixLogo from '../../assets/images/logo-mix.svg'
import User from '../../assets/images/comman/user-1.png'


const ManagePassword = () => {
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
                                        <li><a className="active" href="/manage-password">Manage Password</a></li>
                                        <li><a href="/delete-deactivate-account">Delete/Deactivate</a></li>
                                        <li><a href="/re-KYC">Re-KYC</a></li>
                                        <li><a href="/login-ABHA">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="centerBoard">
                                    <div className="rightProfileMain withoutBorder myProfilePage">
                                        {/* <div className="profileBanner">
                                            <img src={ProfleBanner} />
                                        </div> */}
                                        <div className="phrAddress">
                                            <div className="feilds mb-2">
                                                <label>New Password</label>
                                                <input type="password" placeholder="********" />
                                                {/* <span className="notes">4-32 character alphabetical and numerical ony </span> */}
                                            </div>
                                            <div className="feilds">
                                                <label>Reenter new password</label>
                                                <input type="password" placeholder="********" />
                                            </div>
                                        </div>
                                        <div className="validate">
                                            <p>Validate Using</p>
                                            <label className="validateSelect" for="aadharNumberOTO">
                                                <input type="radio" name="validate" id="aadharNumberOTO" />
                                                <div className="valideContent" >
                                                    <h4>Aadhaar number OTP  </h4>
                                                    <p>OTP on mobile number linked with Aadhaar number</p>
                                                </div>
                                            </label>
                                            <label className="validateSelect" for="abhaNumberOTO">
                                                <input type="radio" name="validate" id="abhaNumberOTO" />
                                                <div className="valideContent" >
                                                    <h4>ABHA number OTP  </h4>
                                                    <p>OTP on mobile number linked with ABHA number</p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="phrAddress">
                                            <div className="feilds mb-2">
                                                <span className="notes mb-3 mt-3" style={{ fontSize: '14px' }}>OTP sent to Aadhaar registered mobile number ending with ******3210</span>
                                                <label>Confirm OTP</label>
                                                <input type="text" placeholder="" />
                                                <span className="notes text-end">00:60 Resend OTP</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="rightDashBord">
                                    <div className="profileImg">
                                        <img src={User} />
                                    </div>
                                </div>
                            </div>

                            <div className="bottomDashboard">
                                <div className="saveBtnProfile justify-content-center">
                                    <button className="custBtn btnThems">Cancel</button>
                                    <button className="custBtn disabled">Save</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManagePassword;