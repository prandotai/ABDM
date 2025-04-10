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
                            <div className="flowTitle">
                                <h4>Set your PHR (ABDM) Address</h4>
                                <p>Basic profile information is captured from Aadhar</p>
                            </div>
                            <div className="user-profile-dashboard">
                                <div className="leftDashbirdMenu">
                                    <ul>
                                        <li><a className="active" href="#">My PHR Account</a></li>
                                        <li><a href="#">My Profile</a></li>
                                        <li><a href="#">Link/Unlink ABHA
                                            Profile</a></li>
                                        <li><a href="#">Change Password</a></li>
                                        <li><a href="#">Delete/Deactivate</a></li>
                                    </ul>
                                </div>
                                <div className="rightDashBord">
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
                                                <p>Male - 28 year old</p>
                                                <p>Bengaluru, Karnataka</p>
                                            </div>
                                        </div>
                                        <div className="abhaNumber">
                                            <h4>ABHA Number</h4>
                                            <p>91-5485-1148-2166</p>
                                        </div>
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
                                    <div className="saveBtnProfile justify-content-center">
                                        <button className="custBtn danger">Remove Member</button>
                                        <button className="custBtn btnSuccess">Add Member</button>
                                    </div>
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