import React, { useContext } from "react";
import Header from "../../components/common/Header";
import MixLogo from '../../assets/images/logo-mix.svg'
import User from '../../assets/images/comman/user.png'
import ProfleBanner from '../../assets/images/comman/profile-banner.png'
import Scanner from '../../assets/images/comman/scanner.png'


const UserABHAcard = () => {




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
                                        <li><a className="active" href="/abha-Card">ABHA Card</a></li>
                                        <li><a href="/my-profile">My Profile</a></li>
                                        <li><a href="/manage-ABHA-profile">Manage ABHA Profile</a></li>
                                        <li><a href="/manage-password">Manage Password</a></li>
                                        <li><a href="/delete-deactivate-account">Delete/Deactivate</a></li>
                                        <li><a href="/re-KYC">Re-KYC</a></li>
                                        <li><a href="/login-ABHA">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="centerBoard">
                                    <div className="rightProfileMain">
                                        <div className="profileBanner">
                                            <img src={ProfleBanner} />
                                        </div>
                                        <div className="profileUser">
                                            <div className="profileImg">
                                                <img src={User} />
                                            </div>
                                            <div className="profileContent">
                                                <h4>Rahul Sharma</h4>
                                                <p>rahulsharma02@abdm <span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                                <p>9876543210 <span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                            </div>
                                        </div>
                                        <div className="abhaNumber">
                                            <h4>ABHA Number</h4>
                                            <p>91-5485-1148-2166 <span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                        </div>
                                        <div className="abhaNumber abhaAddress">
                                            <h4>ABHA Address</h4>
                                            <p>9876543210@abdm <span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                        </div>
                                        <div className="abhaNumber dateOfBirthday">
                                            <div>
                                                <h4>Gender</h4>
                                                <p>Male</p>
                                            </div>
                                            <div>
                                                <h4>Date Of Birth</h4>
                                                <p>31/12/2000</p>
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
                                    <div className="scanner">
                                        <div className="scannerImg">
                                            <img src={Scanner} />
                                        </div>
                                        <div className="scannerShare">
                                            <p>Share <i class="material-icons">
                                                share
                                            </i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bottomDashboard">
                                <div className="saveBtnProfile justify-content-center">
                                    <button className="custBtn btnThems"><i className="material-icons">download</i>Download ABHA Card</button>
                                    <button className="custBtn btnThems"><i className="material-icons">print</i>Print ABHA Card</button>
                                    <button className="custBtn btnThems"><i className="material-icons">credit_card</i>Print PVC</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserABHAcard;