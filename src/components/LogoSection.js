import { useEffect, useState } from 'react'; 
import logo from "../assets/logo.png";
import "../style/logoSection.scss"; 
const LogoSection = () => {
    const [date, setDate] = useState("-- : --"); 

    const setDateHelper = () => {
        const nDate = new Date(); 
        let hour = nDate.getHours().toString(); 
        hour = hour.length===1 ? '0' + hour : hour; 

        let minutes = nDate.getMinutes().toString(); 
        minutes = minutes.length === 1 ? '0' + minutes : minutes; 
        
        setDate(hour + " : " + minutes)
    }

    useEffect(() => {
        const timer = setInterval(setDateHelper, 1000); 

        return () => {clearInterval(timer)}
    }, []); 

    

    return(
        <div className="logoSection">
            <div className="logoName">
                <img src={logo} alt='logo'/>
                <p><span>AceCoin</span>Pay</p>
            </div>
            
            <div className='timeContainer'>
                <div className="timeSquare"><p>{date[0]}</p></div>
                <div className="timeSquare">{date[1]}</div>
                <div className="timeColumn">:</div>
                <div className="timeSquare">{date[5]}</div>
                <div className="timeSquare">{date[6]}</div>
            </div>
        </div>
    )
}

export default LogoSection; 