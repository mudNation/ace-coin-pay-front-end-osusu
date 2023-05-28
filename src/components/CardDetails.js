import '../style/cardDetails.scss';  
import chip from "../assets/chip.png"; 
import masterCardFull from "../assets/Mastercard-logo.svg.png";
import visa from "../assets/visa.jpg";

const CardDetails = (props) => {
    const { cardDetails, expiryMonth, expiryYear, cardType } = props; 
    return(
    <div className='cardDetail'>
        <div className='card'>
            <div className='blueLine blueTop'></div>
            <div className='blueLine blur'></div>
            <div className='cardBackground'></div>

            <div className="circleContainer">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
            </div>

            <div className='cardInfo'>
                <div className='chipHolder'>
                    <img src={chip} alt='crerdit card  chip'/>
                    <i class="fa-solid fa-wifi"></i>
                </div>

                <div className='bottomCardInfo'>
                    <p>Jonathan Michael</p>

                    <div className='cardNumber'>
                        <div className='dots'>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                        </div>

                        <p>{cardDetails.fourth}</p>
                    </div>

                    <div className='masterCard'>
                        <p>{expiryMonth} / {expiryYear}</p>
                        <img src={cardType === "visa" ? visa : masterCardFull} alt='Card logo'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='firstBlock'>

        </div>

        <div className='company'>
            <div className="innerCompany">
                <div className='companyLabel'>
                    <p>Company</p>
                    <p> <span className='span'><i class="fa-brands fa-apple"></i></span> Apple</p>
                </div>

                <div className='companyLabel'>
                    <p>Order Number</p>
                    <p>12666201</p>
                </div>

                <div className='companyLabel'>
                    <p>Product</p>
                    <p>Macbook Air</p>
                </div>

                <div className='companyLabel'>
                    <p>VAT (20%)</p>
                    <p>$100.00</p>
                </div>

                <div className="seperator">
                    <div className="whiteBall"></div>
                    <div className="line"></div>
                    <div className="whiteBall"></div>
                </div>

                <div className='summary'>
                    <div>
                        <p>You have to pay</p>
                        <p>549.<span>99</span> <span>USD</span></p>
                    </div>

                    <i class="fa-solid fa-file-invoice"></i>
                </div>
            </div>

            
        </div>
    </div>)
}

export default CardDetails; 