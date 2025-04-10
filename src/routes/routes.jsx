import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../views/Home/Home"
import AbhaAbout from "../views/Create-ABHA/UserFlow"
import AadharUserFlow from "../views/Create-ABHA/AadharVerification"
import UserProfileABDM from "../views/Create-ABHA/ABDM-profile"
import UserABHAcard from "../views/Create-ABHA/ABHA-Card"
import AadharVerification from "../views/Create-ABHA/AadharVerification"
import DLverification from "../views/Create-ABHA/DL-Verification"
import AadharVerificationPage from "../views/Create-ABHA/AadharVerification"
import DLverificationPage from "../views/Create-ABHA/DL-Verification"



const WebRoutes = () => {
    return (
        <>
            <Suspense>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/abha-home" element={<AbhaAbout />}></Route>
                    <Route path="/aadhar-verification" element={<AadharVerificationPage />}></Route>
                    <Route path="/dl-verification" element={<DLverificationPage />}></Route>
                    <Route path="/abha-Card" element={<UserABHAcard />}></Route>
                    <Route path="/abdm-profile" element={<UserProfileABDM />}></Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default WebRoutes;