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
    background-position: center;
    background-repeat:no-repeat;
`

function SplashScreen() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => { goToLoginPage(navigate) }, 3000)
    }, [])

    return (
        <main>
            <Container>
                <img src={logoBranco} width="40%" alt="Logo IFuture" />
            </Container>
        </main>
    )
}

export default SplashScreen