import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { goToCartPage, goToHomePage, goToProfilePage } from "../routes/coordinator"
import imgHome from "../assets/homepageWhite.png"
import imgCart from "../assets/cartWhite.png"
import imgProfile from "../assets/avatarWhite.png"

const FooterIFuture = styled.footer`
     display: flex;
    justify-content: space-around; 
    position: fixed;
    bottom: 0;
    background-color: white;
    height: 8vh;
    width: 100%;
    align-items: center;
    border-top:solid 1px black;
    
    img{
        width: 40px;
        cursor: pointer;
        display: flex;
        
        height: 4vh;
        justify-content: center;
        align-items: center;
        font-size: 18px;        
    }
`

function Footer() {
    const navigate = useNavigate()
    return (
        <>
            <FooterIFuture>
                <img src={imgHome} alt="homeLogo" onClick={() => goToHomePage(navigate)} />
                <img src={imgCart} alt="cartLogo" onClick={() => goToCartPage(navigate)} />
                <img src={imgProfile} alt="cartLogo" onClick={() => goToProfilePage(navigate)} />
            </FooterIFuture>
        </>
    )
}
export default Footer