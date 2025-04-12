import React, {useState, useRef} from "react";
import MixLogo from "../../assets/images/logo-mix.svg";
import { useNavigate } from "react-router-dom";
import Loader from '../../components/common/Loader';
import axios from 'axios';
import { encryptString, createSession } from "../../Service/apiUtils";
import { v4 as uuidv4 } from 'uuid';

const AdharVerification = () => {

    const [adharFormated, setAdharFormated] = useState("");
    const [adharno, setAdharno] = useState("");
    const [accessToken, setaccessToken] = useState("");
    const [adharEncrpt, setadharEncrpt] = useState("");
    const [errorMessage, seterrorMessage] = useState("");
    const [isPageLoading, setIsPageLoading] = useState(false);
    const consentCheckboxRef = useRef(0);

    const navigate = useNavigate();

    const back = () => {
        navigate('/abha-home');
    }

    const adharNumberFormater = (e) => {

        const inputValue = e.target.value;

        // Remove non-numeric characters
        const numericValue = inputValue.replace(/\D/g, "");

        // Format the value as xx-xxxx-xxxx-xxxx
        const formattedValue = numericValue.replace(
            /^(\d{0,4})(\d{0,4})(\d{0,4}).*/,
            (match, p1, p2, p3, p4) => [p1, p2, p3, p4].filter(Boolean).join("-")
        );

        // Update state
        setAdharFormated(formattedValue);
        setAdharno(numericValue);
    };

    const sendCreateAbhaOtp = async () => {
        try {
            if(consentCheckboxRef.current.checked){
                // Encrypt Aadhaar
                const encryptedAdhar = await encryptString(adharno);
                if (!encryptedAdhar) {
                    seterrorMessage("Failed to encrypt Aadhaar. Please try again.");
                    return;
                }
                setadharEncrpt(encryptedAdhar); // Update state
                // Create session
                const sessionResponse = await createSession();
                if (!sessionResponse?.accessToken) {
                    seterrorMessage(sessionResponse?.error?.message || "Failed to create session.");
                    return;
                }
                setaccessToken(sessionResponse.accessToken); // Update state
                localStorage.setItem("abdmAccessToken", sessionResponse.accessToken);
            }else{
                seterrorMessage("Kindly click on the consent box to proceed further.")  
            }
            
        } catch (error) {
            setIsPageLoading(false);
            seterrorMessage("An unexpected error occurred. Please try again.");
            console.error(error);
        }
    };


    return (
        <>
        {isPageLoading && <Loader />}
        <div className="pranHealtnMainUserFlow">
            <div className="abha-paranLogo">
                <img src={MixLogo} />
            </div>
            <div className="userFlowAdharVer">
                <div className="backArrow" onClick={back}>
                    <i class="material-icons">
                        keyboard_backspace
                    </i>
                </div>
                <div className="flowTitle">
                    <h4>Aadhar Verification</h4>
                    <p>OTP will be sent to the mobile number to the aadhar</p>
                </div>
                <div className="flow-feilds">
                    <div className="feilds">
                        <label>Aadhar Number</label>
                        <input type="text" className="filds-form" placeholder="Enter Aadhar" name="adharno"
                            maxLength="14" value={adharFormated}
                            onChange={adharNumberFormater} autoComplete='off'/>
                        <span className="notes">Aadhar Verification allows to start using your ABHA account instantly</span>
                    </div>
                    <div className="feilds">
                        <label>Enter OTP</label>
                        <input type="text" className="filds-form" placeholder="Enter OTP" />
                    </div>
                    <div className="feilds feildsBtn">
                        <button className="custBtn btnCancel">Back</button>
                        <button className="custBtn btnSuccess">Continue <i className="material-icons">arrow_right_alt</i></button>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default AdharVerification