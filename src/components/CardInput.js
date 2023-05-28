import { useState } from 'react'; 
import "../style/cardinput.scss"; 

import mastercard from "../assets/mastercard.svg"; 
import visa from "../assets/visa.jpg"; 
import bluetick from "../assets/blue-tick.png";
import dots from "../assets/dots-menu.png";
import LogoSection from "./LogoSection";
import valid from 'card-validator'; 

const CardInput = (props) => {
    const {cardDetails, setCardDetails, canEdit, setCanEdit, expiryMonth, setExpiryMonth, 
        expiryYear, setExpiryYear, cardType, setCardtype} = props; 

    
    const [isCardValid, setIsCardValid] = useState(true); 
    const [cvv, setCvv] = useState(327); 
    const [password, setPassword] = useState("abcde"); 
    

    const setCardTypeHelper = (number) => {
        
        var numberValidation = valid.number(number);

        setCardtype(numberValidation?.card?.type)

        setIsCardValid(numberValidation.isValid)
    }

    const editFirst = (value) => {
        if(value !== '' && (!containsOnlyNumbers(value) || value.length > 4)){
            return; 
        }

        setCardDetails({...cardDetails, first: value})

        setCardTypeHelper(value + cardDetails.second + cardDetails.third + cardDetails.fourth); 
    }

    const editSecond = (value) => {
        if(value !== '' && (!containsOnlyNumbers(value) || value.length > 4)){
            return; 
        }

        setCardDetails({...cardDetails, second: value})
        setCardTypeHelper(cardDetails.first + value + cardDetails.third + cardDetails.fourth)
    }

    const editThird = (value) => {
        if(value !== '' && (!containsOnlyNumbers(value) || value.length > 4)){
            return; 
        }

        setCardDetails({...cardDetails, third: value})
        setCardTypeHelper(cardDetails.first + cardDetails.second + value + cardDetails.fourth)
    }

    const editFourth = (value) => {
        if(value !== '' && (!containsOnlyNumbers(value) || value.length > 4)){
            return; 
        }

        setCardDetails({...cardDetails, fourth: value})
        setCardTypeHelper(cardDetails.first + cardDetails.second + cardDetails.third + value)
    }

    const handleCVV = (value) => {
        if(value !== '' && (!containsOnlyNumbers(value) || value.length > 3)){
            return; 
        }

        setCvv(value); 
    }

    const handleExpiryMonth = (value) => {
        if(value !== '' && (!containsOnlyNumbers(value) || value.length > 2)){
            return; 
        }

        setExpiryMonth(value); 
    }

    const handleExpiryYear = (value) => {
        if(value !== '' && (!containsOnlyNumbers(value) || value.length > 2)){
            return; 
        }

        setExpiryYear(value); 
    }

    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }

    return (
    <div className='cardInput'>
        <div className="logoSection">
            <LogoSection/>
        </div>
        

        <div className="cardNumberLabel">
            <div className="nameLabel">
                <p>Card Number</p>
                <p>Enter the 16-digit card number on the card</p>
            </div>

            <p className="edit" onClick={() => setCanEdit(!canEdit)} > <i class="fa-solid fa-pencil"></i> Edit</p>
        </div>

        <div className="cardFields">
            <div>
                <img src={cardType === 'visa' ? visa : mastercard} alt='card logo'/>

                <input type='text' value={cardDetails.first} onChange={(e) => editFirst(e.target.value)} disabled={!canEdit}/>
                <span></span>

                <input type='text' value={cardDetails.second} onChange={(e) => editSecond(e.target.value)} disabled={!canEdit}/>
                <span></span>

                <input type='text' value={cardDetails.third} onChange={(e) => editThird(e.target.value)} disabled={!canEdit}/>
                <span></span>
                <input type='text' value={cardDetails.fourth} onChange={(e) => editFourth(e.target.value)} disabled={!canEdit}/>
            </div>
            

            {isCardValid && <img src={bluetick} alt='valid card tick'/>}
        </div>

        <div className='lowerFields'>
            <div className="nameLabel">
                <p>CVV Number</p>
                <p>Enter the 3 or 4 digit number of the card</p>
            </div>

            <div className="inputSpace"></div>

            <div className="singleInputDiv">
                <input className='cvv' type='text' value = {cvv} onChange={(e) => handleCVV(e.target.value)} disabled={!canEdit}/>
                <img src={dots} alt='dots menu'/>
            </div>
        </div>

        <div className='lowerFields'>
            <div className="nameLabel">
                <p>Expiry Date</p>
                <p>Enter the expiration date of the card</p>
            </div>

            <div className="inputSpace"></div>

            <div className="multipleInputs">
                <input type="text" value={expiryMonth} onChange={(e) => handleExpiryMonth(e.target.value)} disabled={!canEdit}/>
                <div>/</div>
                <input type="text" value={expiryYear} onChange={(e) => handleExpiryYear(e.target.value)} disabled={!canEdit}/>
            </div>
        </div>

        <div className='lowerFields'>
            <div className="nameLabel">
                <p>Password</p>
                <p>Enter your dynamic password</p>
            </div>

            <div className="inputSpace"></div>

            <div className="singleInputDiv">
                <input className='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={!canEdit}/>
                <img src={dots} alt='dots menu'/>
            </div>
        </div>

        <button>Pay Now</button>
    </div>)
}

export default CardInput; 