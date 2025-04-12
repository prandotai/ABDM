import React from 'react';
import MixLogo from '../../assets/images/logo-mix.svg';
import MobileIcon from '../../assets/images/comman/mobileNumber.png'
import AadharIcon from '../../assets/images/comman/AadharNumber.png'
import ABHANumber from '../../assets/images/comman/abhaNumber.png'
import LoginABHANumber from '../../components/Login-ABHA/LoginABHANumber';
import LoginAadharNumber from '../../components/Login-ABHA/LoginAadharNumer';
import LoginMobileNumber from '../../components/Login-ABHA/LoginMobileNumer';


const LoginABHAPage = () => {
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
                                <h4>Login To  ABHA</h4>
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
                                <label for="mobileNumber" className='selectTypeLogin'>
                                    <input type='radio' name='loginType' id='mobileNumber' />
                                    <div className='loginTypeSelectOne'>
                                        <img src={ABHANumber} />
                                        <p>ABHA Number</p>
                                    </div>
                                </label>
                            </div>
                            <LoginAadharNumber />
                            {/* <LoginMobileNumber /> */}
                            {/* <LoginABHANumber /> */}
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

export default LoginABHAPage;