import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/common/Header";
import MixLogo from '../../assets/images/logo-mix.svg'
import User from '../../assets/images/comman/user.png'
import ProfleBanner from '../../assets/images/comman/profile-banner.png'
import Scanner from '../../assets/images/comman/scanner.png'


const UserABHAcard = () => {

    const [abhaProfile, setAbhaProfile] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState("");
    useEffect(() => {
        const storedProfile = localStorage.getItem("orignalBeneficiaryData");
        if (storedProfile) {
            setAbhaProfile(JSON.parse(storedProfile));
        }
    }, []);    
    useEffect(() => {
        const base64Prefix = "data:image/png;base64,";
        const base64String = abhaProfile ? base64Prefix + abhaProfile.photo: null;
        setProfilePhoto(base64String);
        console.log(abhaProfile);
    },[abhaProfile]);

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
                                                <img src={profilePhoto} />
                                            </div>
                                            <div className="profileContent">
                                                <h4>{abhaProfile ? abhaProfile.firstName+''+abhaProfile.middleName+' '+abhaProfile.lastName : ''}</h4>
                                                <p>{abhaProfile ? abhaProfile.phrAddress[0] : ''} <span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                                <p>{abhaProfile ? abhaProfile.mobile : ''} <span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                            </div>
                                        </div>
                                        <div className="abhaNumber">
                                            <h4>ABHA Number</h4>
                                            <p>{abhaProfile ? abhaProfile.ABHANumber : ''} <span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                        </div>
                                        <div className="abhaNumber abhaAddress">
                                            <h4>ABHA Address</h4>
                                            <p>{abhaProfile ? abhaProfile.phrAddress[0] : ''}<span className="contentCopy"><i className="material-icons">content_copy</i></span></p>
                                        </div>
                                        <div className="abhaNumber dateOfBirthday">
                                            <div>
                                                <h4>Gender</h4>
                                                <p>{abhaProfile ? (abhaProfile.gender == 'M') ? 'Male'  : (abhaProfile.gender == 'F') ? 'Female' : '' : '' }</p>
                                            </div>
                                            <div>
                                                <h4>Date Of Birth</h4>
                                                <p>{abhaProfile ? abhaProfile.dob : ''}</p>
                                            </div>
                                        </div>
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