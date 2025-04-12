import React, { useContext } from "react";
import Header from "../../components/common/Header";
import MixLogo from '../../assets/images/logo-mix.svg'
import User from '../../assets/images/comman/user-1.png'
import user2 from '../../assets/images/comman/user-2.png'


const ManageABHAProfile = () => {




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
                                        <li><a className="active" href="/manage-ABHA-profile">Manage ABHA Profile</a></li>
                                        <li><a href="/manage-password">Manage Password</a></li>
                                        <li><a href="/delete-deactivate-account">Delete/Deactivate</a></li>
                                        <li><a href="/re-KYC">Re-KYC</a></li>
                                        <li><a href="/login-ABHA">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="centerBoard manageAbhaProfile">
                                    <div className="rightProfileMain">
                                        <div className="manageProfileSection">
                                            <div className="manageProfileBox">
                                                <div className="manageProfilePhoto">
                                                    <img src={user2} />
                                                </div>
                                                <div className="manageProfileContent">
                                                    <div className="userName">
                                                        <h4>Sriya Sharma</h4>
                                                        <p>rahulSharma02@abdm</p>
                                                    </div>
                                                    <div className="userAbhaNumber">
                                                        <h4>ABHA Number</h4>
                                                        <p>91-5485-1148-2166</p>
                                                    </div>
                                                </div>
                                                <div className="selectProfile">
                                                    <button className="custBtn btnThems w-100">Select Profile</button>
                                                </div>
                                            </div>
                                            <div className="manageProfileBox">
                                                <div className="manageProfilePhoto">
                                                    <img src={User} />
                                                </div>
                                                <div className="manageProfileContent">
                                                    <div className="userName">
                                                        <h4>Rahul Sharma</h4>
                                                        <p>rahulSharma02@abdm</p>
                                                    </div>
                                                    <div className="userAbhaNumber">
                                                        <h4>ABHA Number</h4>
                                                        <p>91-5485-1148-2166</p>
                                                    </div>
                                                </div>
                                                <div className="selectProfile">
                                                    <button className="custBtn btnThems w-100">Select Profile</button>
                                                </div>
                                            </div>

                                        </div>
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

export default ManageABHAProfile;