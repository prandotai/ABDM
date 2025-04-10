import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../views/Home/Home"
import AbhaAbout from "../views/Create-ABHA/UserFlow"
import AadharUserFlow from "../views/Create-ABHA/UserFlowVerification"
import UserProfileABDM from "../views/Create-ABHA/ABDM-profile"
import UserABHAcard from "../views/Create-ABHA/ABHA-Card"



const WebRoutes = () => {
    return (
        <>
            <Suspense>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/abha-home" element={<AbhaAbout />}></Route>
                    <Route path="/aadhar-verification" element={<AadharUserFlow />}></Route>
                    <Route path="/abha-Card" element={<UserABHAcard />}></Route>
                    <Route path="/abdm-profile" element={<UserProfileABDM />}></Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default WebRoutes;