import React from 'react';
import MixLogo from '../../assets/images/logo-mix.svg';
import MobileIcon from '../../assets/images/comman/mobileNumber.png'
import AadharIcon from '../../assets/images/comman/AadharNumber.png'
import ABHANumber from '../../assets/images/comman/abhaNumber.png'
import ForgoatMobileNumber from '../../components/Forgot-ABHA/Forgoat-mobile-Number';
import ForgoatAadharNumber from '../../components/Forgot-ABHA/Forgoat-Aadhar-number';


const ForgotABHAPage = () => {
    return (
        <>
            <div className="mainFlow">
                <div className="container">
                    <div className="pranHealtnMainUserFlow">
                        <div className="abha-paranLogo">
                            <img src={MixLogo} />
                        </div>
                        <div className="userFlowAdharVer anotherPaddingPage">
                            <div className="flowTitle">
                                <h4>Forgot To  ABHA</h4>
                            </div>
                            <div className='selectLoginType'>
                                <label for="mobileNumber" className='selectTypeLogin'>
                                    <input type='radio' name='loginType' id='mobileNumber' />
                                    <div className='loginTypeSelectOne'>
                                        <img src={MobileIcon} />
                                        <p>Mobile Number</p>
                                    </div>
                                </label>
                                <label for="mobileNumber" className='selectTypeLogin'>
                                    <input type='radio' name='loginType' id='mobileNumber' />
                                    <div className='loginTypeSelectOne'>
                                        <img src={AadharIcon} />
                                        <p>Aadhar Number</p>
                                    </div>
                                </label>
                            </div>
                            {/* <ForgoatMobileNumber /> */}
                            <ForgoatAadharNumber />
                            <div className='loginPageFooter'>
                                <div className='forgotAbhaRetrive'>
                                    <p>Forgot ABHA number?</p>
                                    <p>Retrieve your Enrollment number</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotABHAPage;