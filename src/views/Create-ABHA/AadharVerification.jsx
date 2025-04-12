import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/common/Header";
import AdharVerification from "../../components/Create-ABHA/Aadhar-verification";
import DLVerification from "../../components/Create-ABHA/DL-Verification";
import MobileVerification from "../../components/Create-ABHA/Mobile-Verification";
import { GlobalContext } from "../../GlobalDataContext/GlobalContext";


const AadharVerificationPage = () => {


    const { getDataByKey } = useContext(GlobalContext)
    const checked = getDataByKey('AdharCardNumber');
    console.log("checked", checked);

    return (
        <>
            <div className="mainFlow">
                <Header />
                <div className="container">
                    <AdharVerification />
                </div>
            </div>
        </>
    )
}

export default AadharVerificationPage;