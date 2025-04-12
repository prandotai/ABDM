import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../views/Home/Home"
import AbhaAbout from "../views/Abha-home/UserFlow"
import AadharUserFlow from "../views/Create-ABHA/AadharVerification"
import UserProfileABDM from "../views/ABDM-Profile/ABDM-profile"
import UserABHAcard from "../views/ABDM-Profile/ABHA-Card"
import AadharVerification from "../views/Create-ABHA/AadharVerification"
import DLverification from "../views/Create-ABHA/DL-Verification"
import AadharVerificationPage from "../views/Create-ABHA/AadharVerification"
import DLverificationPage from "../views/Create-ABHA/DL-Verification"
import ManageABHAProfile from "../views/ABDM-Profile/Managr-abha-profile"
import ManagePassword from "../views/ABDM-Profile/Manage-Password"
import DeleteDeactivateAccount from "../views/ABDM-Profile/Delete-Deactivate-account"
import LoginABHAPage from "../views/Login-ABHA/Login-ABHA-page"
import ForgotABHAPage from "../views/Forgot-ABHA/Forgot-ABHA"
import ReKYC from "../views/ABDM-Profile/Re-KYC"



const WebRoutes = () => {
    return (
        <>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/abha-home" element={<AbhaAbout />}></Route>
                    <Route path="/aadhar-verification" element={<AadharVerificationPage />}></Route>
                    <Route path="/dl-verification" element={<DLverificationPage />}></Route>
                    <Route path="/abha-Card" element={<UserABHAcard />}></Route>
                    <Route path="/my-profile" element={<UserProfileABDM />}></Route>
                    <Route path="/manage-ABHA-profile" element={<ManageABHAProfile />}></Route>
                    <Route path="/manage-password" element={<ManagePassword />}></Route>
                    <Route path="/delete-deactivate-account" element={<DeleteDeactivateAccount />}></Route>
                    <Route path="/re-KYC" element={<ReKYC />}></Route>
                    <Route path="/login-ABHA" element={<LoginABHAPage />}></Route>
                    <Route path="/forgoat-ABHA" element={<ForgotABHAPage />}></Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default WebRoutes;