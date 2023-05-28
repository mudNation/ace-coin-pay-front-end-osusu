import React, { useState } from "react";
import CardInput from './CardInput'; 
import CardDetails from './CardDetails'; 
import "../style/index.scss"; 
import LogoSection from "./LogoSection";

const Index = () => {
    const [cardDetails, setCardDetails] = useState({
        first: '2412',
        second: '7512',
        third: '3412', 
        fourth: '3456',
    })

    const [canEdit, setCanEdit] = useState(false); 
    const [expiryMonth, setExpiryMonth] = useState('09'); 
    const [expiryYear, setExpiryYear] = useState('22'); 
    const [cardType, setCardtype] = useState("mastercard");

    

    return(
        <>
            <div className="closeWrapper">
                <div className='closeContainer'>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
             

            <div className='indexContainer'>
                
                <CardInput cardDetails={cardDetails} setCardDetails={setCardDetails} canEdit={canEdit} setCanEdit={setCanEdit}
                    expiryMonth={expiryMonth} setExpiryMonth={setExpiryMonth} expiryYear={expiryYear} setExpiryYear={setExpiryYear} 
                    cardType={cardType} setCardtype={setCardtype}
                />

                <div className="space"></div>
                <CardDetails cardDetails={cardDetails} expiryMonth={expiryMonth} expiryYear={expiryYear} cardType={cardType} />

                <div className="mobLogo">
                    <LogoSection/>
                </div>
            </div>
        </>
    )
}

export default Index; 