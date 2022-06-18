import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../routes/coordinator"

function ErrorPage() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => { goToHomePage(navigate) }, 3000)
    }, [])
    return (
        <>
            <h3>Página não encontrada!</h3>
            <h4>Você será redirecionado para a HomePage</h4>
        </>
    )
}
export default ErrorPage