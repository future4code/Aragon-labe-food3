import { Splash } from "./styled.jsx"
import logoBranco from "../../assets/logoBranco.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { goToLoginPage } from "../../routes/coordinator"
import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: red;
    background-image: url(${logoBranco});
    background-position: center;
    background-size: 32%;
    background-repeat:no-repeat;
`

function SplashScreen() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => { goToLoginPage(navigate) }, 5000)
    }, [])

    return (
        <Splash>
            <Container>
                <img src={logoBranco} alt="Logo IFuture" />
            </Container>
        </Splash>
    )
}

export default SplashScreen