import Header from "../../components/common/Header";
import MixLogo from '../../assets/images/logo-mix.svg'
import User from '../../assets/images/comman/user-1.png'
import ProfleBanner from '../../assets/images/comman/profile-banner.png'
import Scanner from '../../assets/images/comman/scanner.png'


const UserProfileABDM = () => {
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
                                        <li><a className="active" href="/my-profile">My Profile</a></li>
                                        <li><a href="/manage-ABHA-profile">Manage ABHA Profile</a></li>
                                        <li><a href="/manage-password">Manage Password</a></li>
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
                                        <div className="profileUser">
                                            <div className="profileContent">
                                                <h4>Rahul Sharma</h4>
                                                <p>Male - 28 year old</p>
                                            </div>
                                        </div>
                                        <div className="abhaNumber">
                                            <h4>Address</h4>
                                            <p>687, Ideaaz Enclave, 1st 'B' Main Road, 7th Block, 2nd Phase, Banashankari 3rd Stage</p>
                                        </div>
                                        <div className="phrAddress">
                                            <div className="feilds mb-2">
                                                <label>Mobile Number</label>
                                                <input type="text" placeholder="9876543210" />
                                                {/* <span className="notes">4-32 character alphabetical and numerical ony </span> */}
                                            </div>
                                            <div className="feilds">
                                                <label>Email Address</label>
                                                <input type="text" placeholder="abcd@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="abhaNumber">
                                            <h4>District</h4>
                                            <p>Bengaluru</p>
                                        </div>
                                        <div className="abhaNumber dateOfBirthday">
                                            <div>
                                                <h4>State</h4>
                                                <p>Karnataka</p>
                                            </div>
                                            <div>
                                                <h4>Pincode</h4>
                                                <p>560085</p>
                                            </div>
                                        </div>
                                        {/* <div className="scanner">
                                            <div className="scannerImg">
                                                <img src={Scanner} />
                                            </div>
                                            <div className="scannerShare">
                                                <p>Share <i class="material-icons">
                                                    share
                                                </i></p>
                                            </div>
                                        </div> */}
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

export default UserProfileABDM;