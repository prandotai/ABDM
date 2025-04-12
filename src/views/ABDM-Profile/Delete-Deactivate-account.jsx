import Header from "../../components/common/Header";
import MixLogo from '../../assets/images/logo-mix.svg'
import Deactivate1 from '../../assets/images/comman/deactivate1.png'
import Deactivate2 from '../../assets/images/comman/deactivate2.png'
import Deactivate3 from '../../assets/images/comman/deactivate3.png'


const DeleteDeactivateAccount = () => {
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
                                        <li><a className="active" href="/delete-deactivate-account">Delete/Deactivate</a></li>
                                        <li><a href="/re-KYC">Re-KYC</a></li>
                                        <li><a href="/login-ABHA">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="centerBoard disableDeactivateAccountProfile">
                                    <div className="rightProfileMain withoutBorder ">

                                        <div className="deactivate-delete-section">
                                            <div className="desabled-account-content">
                                                <h4>Deactivate/Delete Account</h4>
                                                <p>You can Deactivate or Delete your ABHA by choosing below options</p>
                                            </div>

                                            <div className="account-selectOne">
                                                <label for="DeactivateTemporarily" className="DeactivateTemporarily">
                                                    <input type="radio" name="validate" id="DeactivateTemporarily" />
                                                    <div className="selctDisabledAccount">
                                                        <span className="icon"><i className="material-icons">pause</i></span>
                                                        <p>Deactivate Temporarily</p>
                                                    </div>
                                                </label>
                                                <label for="DeletePermanently" className="DeletePermanently">
                                                    <input type="radio" name="validate" id="DeletePermanently" />
                                                    <div className="selctDisabledAccount">
                                                        <span className="icon"><i className="material-icons">delete</i></span>
                                                        <p>Delete Permanently</p>
                                                    </div>
                                                </label>
                                            </div>



                                            <div className="desabled-account-content text-center">
                                                <h4>Deactivate Temporarily </h4>
                                            </div>
                                            <div className="DeactivateTemporarilyBoxRow">
                                                <div className="deaDisColBox">
                                                    <img src={Deactivate1} />
                                                    <p>You will loose all access to ABDM application</p>
                                                </div>
                                                <div className="deaDisColBox">
                                                    <img src={Deactivate2} />
                                                    <p>You will loose all access to ABDM application</p>
                                                </div>
                                                <div className="deaDisColBox">
                                                    <img src={Deactivate3} />
                                                    <p>You will loose all access to ABDM application</p>
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

export default DeleteDeactivateAccount;