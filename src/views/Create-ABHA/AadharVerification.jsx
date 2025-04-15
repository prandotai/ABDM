import React, { useContext, useEffect, useState, useRef } from "react";
import Header from "../../components/common/Header";
import { GlobalContext } from "../../GlobalDataContext/GlobalContext";
import MixLogo from "../../assets/images/logo-mix.svg";
import { useNavigate } from "react-router-dom";
import Loader from '../../components/common/Loader';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { encryptString, createSession } from "../../Service/apiUtils";
import { API_BASE_URL } from "../../Service/getBaseAPIUrl";

import { v4 as uuidv4 } from 'uuid';


const AadharVerificationPage = () => {


    const { getDataByKey } = useContext(GlobalContext)
    const checked = getDataByKey('AdharCardNumber');

    const [adharFormated, setAdharFormated] = useState("");
    const [adharno, setAdharno] = useState("");
    const [accessToken, setaccessToken] = useState("");
    const [adharEncrpt, setadharEncrpt] = useState("");
    const [txnId, setTxnId] = useState("");
    const [showOtpBox, setShowOtpBox] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [formatedMobile, setFormatedMobile] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [OtpText, setOtpText] = useState("");
    const [encryptAbhaOtp, setencryptAbhaOtp] = useState(null);
    const consentCheckboxRef = useRef(0);

    const navigate = useNavigate();

    const back = () => {
        setAdharFormated("");
        setAdharno("");
        setaccessToken("");
        setadharEncrpt("");
        setTxnId("");
        navigate('/abha-home');
    }

    /**
     * Funtion used to be formate adhar number
     * @param {*} e 
     */
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
    /**
     * Function used to set otp text
     */
    const handleOtpChange = (e) => {
        const value = e.target.value;
        // Allow only digits and up to 6 characters
        if (/^\d{0,6}$/.test(value)) {
            setOtpText(value);
        }
    };
    /**
     * Function used to set mobile or formate in input box
     */
    const handleMobileInput = (e) => {
        const inputValue = e.target.value;

        // Remove non-numeric characters
        const numericValue = inputValue.replace(/\D/g, "");

        // Format the value as xx-xxxx-xxxx-xxxx
        const formattedValue = numericValue.replace(
            /^(\d{0,2})(\d{0,4})(\d{0,4}).*/,
            (match, p1, p2, p3, p4) => [p1, p2, p3, p4].filter(Boolean).join("-")
        );

        // Update state
        setFormatedMobile(formattedValue);
        setMobileNumber(numericValue);
    };
    /**
     * Function is use to send otp on mobile number which register with adhaar
     */
    const sendAbhaOtpRequest = async (encryptedAdhar) => {
        try {
            const response = await axios.post(
                '/abha/api/v3/enrollment/request/otp',
                {
                    txnId: "",
                    scope: ["abha-enrol"],
                    loginHint: "aadhaar",
                    loginId: encryptedAdhar,
                    otpSystem: "aadhaar",
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'REQUEST-ID': uuidv4(),
                        'TIMESTAMP': new Date().toISOString(), // Generate the current timestamp dynamically
                        'Authorization': `Bearer ${accessToken}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error("Server responded with a status:", error.response.status);
                console.error("Response data:", error.response.data);
            } else if (error.request) {
                console.error("Request was made, but no response received:", error.request);
            } else {
                console.error("Error in setting up the request:", error.message);
            }
        }

    };
    /**
     * Funtion Trigger when accessToken set access token
     */
    useEffect(() => {
        if (!accessToken || !adharEncrpt) return; // 🔒 Skip if either is blank
    
        const sendOtpIfReady = async () => {
            try {
                const abhaOtpResponse = await sendAbhaOtpRequest(adharEncrpt);
                if (abhaOtpResponse?.txnId) {
                    toast.success(abhaOtpResponse?.message);
                    setTxnId(abhaOtpResponse.txnId);
                    setIsPageLoading(false);
                    setShowOtpBox(true);
                } else {
                    setaccessToken("");
                    setIsPageLoading(false);
                    toast.error(abhaOtpResponse?.message || "Failed to send OTP. Please try again.");
                }
            } catch (error) {
                setIsPageLoading(false);
                toast.error("An unexpected error occurred. Please try again.");
            }
        };
    
        sendOtpIfReady();
    }, [accessToken, adharEncrpt]);

    /**
     * Funtion is used to be hadle all the process of the send otp, adhar encription and create token as well
     * @returns
     */
    const sendCreateAbhaOtp = async () => {
        setIsPageLoading(true);
        if(adharno){
            try {
                // Encrypt Aadhaar
                const encryptedAdhar = await encryptString(adharno);
                if (!encryptedAdhar) {
                    setIsPageLoading(false);
                    toast.error("Failed to encrypt Aadhaar. Please try again.");
                    return;
                }else{
                    setadharEncrpt(encryptedAdhar); // Update state
                    // Create session
                    const sessionResponse = await createSession();
                    if (!sessionResponse?.accessToken) {
                        setIsPageLoading(false);
                        toast.error(sessionResponse?.error?.message || "Failed to create session.");
                        return;
                    }else{
                        setaccessToken(sessionResponse.accessToken); // Update state
                        localStorage.setItem("abdmAccessToken", sessionResponse.accessToken);
                    }
                }
            } catch (error) {
                setIsPageLoading(false);
                toast.error("An unexpected error occurred. Please try again.");
            }
        }else{
            setIsPageLoading(false);
            toast.error("Please enter adhaar number");
        }
    };

    /**
     * Function use to be verify OTP to create ABHA profile
     */
    const verifyOtp = async () => {
        try {
            const response = await axios.post(
                "/abha/api/v3/enrollment/enrol/byAadhaar",
                {
                    authData: {
                        authMethods: ["otp"],
                        otp: {
                          txnId: txnId,
                          otpValue: encryptAbhaOtp,
                          mobile:  mobileNumber,
                        },
                    },
                    consent: {
                        code: "abha-enrollment",
                        version: "1.4",
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'REQUEST-ID': uuidv4(),
                        'TIMESTAMP': new Date().toISOString(), // Generate the current timestamp dynamically
                        'Authorization': 'Bearer ' + accessToken, // Replace with a valid token
                    },
                }
            );
            return response.data;
        } catch (error) {
            toast.error("Something went wrong!!");
            setIsPageLoading(false);
        } finally {
            console.log('error');
        }
    };

    // Trigger when accessToken changes
    useEffect(() => {
        const sendOtpIfReady = async () => {
            if (mobileNumber && encryptAbhaOtp) {
                const abhaOtpResponse = await verifyOtp();
                if (abhaOtpResponse?.txnId) {
                    if (abhaOtpResponse?.ABHAProfile) {                            
                        const orignalBeneficiaryData = abhaOtpResponse.ABHAProfile;
                        localStorage.setItem("orignalBeneficiaryData", JSON.stringify(orignalBeneficiaryData));
                        setIsPageLoading(false);
                        navigate("/abha-Card");
                    } 
                } else if(abhaOtpResponse?.message){
                    setIsPageLoading(false);
                    toast.error(abhaOtpResponse?.message);
                } else{
                    setIsPageLoading(false);
                    toast.error(abhaOtpResponse?.mobile);
                }
            }
        };
        sendOtpIfReady();
    }, [mobileNumber, encryptAbhaOtp]);

    const handleCreateAbha = async () => {
        try {
            if(!OtpText){
                setIsPageLoading(false);
                toast.error("Please enter OTP.");
            }else if(!mobileNumber){
                setIsPageLoading(false);
                toast.error("Please enter mobile number");
            } else {
                setIsPageLoading(true);
                const encryptedOtp = await encryptString(OtpText);
                if (!encryptedOtp) {
                    setIsPageLoading(false);
                    toast.error("Encryption failed. Please try again.");
                    return;
                }
                setencryptAbhaOtp(encryptedOtp);
            }
            
        } catch (error) {
            setIsPageLoading(false);
            toast.error("An unexpected error occurred.");
        }
    };

    return (
        <>
            <div className="mainFlow">
                <Header />
                <ToastContainer />
                {isPageLoading && <Loader />}
                <div className="container">
                    <div className="pranHealtnMainUserFlow">
                        <div className="abha-paranLogo">
                            <img src={MixLogo} />
                        </div>
                        <div className="userFlowAdharVer pre-create-ABHA">
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
                                {showOtpBox && (
                                    <>
                                        <div className="feilds">
                                            <label>Enter OTP</label>
                                            <input type="text" className="filds-form" placeholder="Enter OTP" maxLength={6} value={OtpText} onChange={handleOtpChange}/>
                                        </div>
                                        <div className="feilds">
                                            <label>Enter Mobile Number</label>
                                            <input type="text" className="filds-form" placeholder="Enter Mobile Number" maxLength={12} value={formatedMobile} onChange={handleMobileInput}/>
                                        </div>
                                    </>
                                )}
                                <div className="feilds feildsBtn">
                                    <button className="custBtn btnCancel" onClick={back}>Back</button>
                                    {!showOtpBox && (
                                        <button className="custBtn btnSuccess" onClick={sendCreateAbhaOtp}>Continue <i className="material-icons">arrow_right_alt</i></button>
                                    )}
                                    {showOtpBox && (
                                        <button className="custBtn btnSuccess" onClick={handleCreateAbha}>Verify<i className="material-icons">arrow_right_alt</i></button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AadharVerificationPage;