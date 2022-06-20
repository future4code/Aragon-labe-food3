import { goToBack } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import logoVermelho from "../assets/logoVermelho.jpg"

function Header(props) {
    const navigate = useNavigate()
    const showHeader = () => {
        switch (props.currentPage) {
            case "home":
                return <img src={logoVermelho} alt="Logo IFuture" width="180px" heigth="90px" />
            case "cart":
                return (
                    <>
                        <h3 text-align="center" font-size="22px">Meu carrinho</h3>
                        <button onClick={() => goToBack(navigate)}>Voltar</button>
                    </>
                )
            case "details":
                return (
                    <>
                        <h3 text-align="center" font-size="22px">Restaurante</h3>
                        <button onClick={() => goToBack(navigate)}>Voltar</button>
                    </>
                )
            case "address":
                return <h3 text-align="center" font-size="22px">Meu endereço</h3>
            case "edit-address":
                return (
                    <>
                        <h3 text-align="center" font-size="22px">Editar endereço</h3>
                        <button onClick={() => goToBack(navigate)}>Voltar</button>
                    </>
                )
            case "profile":
                return (
                    <>
                        <h3 text-align="center" font-size="22px">Meu perfil</h3>
                        <button onClick={() => goToBack(navigate)}>Voltar</button>
                    </>
                )
            case "edit-profile":
                return (
                    <>
                        <h3 text-align="center" font-size="22px">Editar perfil</h3>
                        <button onClick={() => goToBack(navigate)}>Voltar</button>
                    </>
                )
            default:
                return <img src={logoVermelho} alt="Logo IFuture" width="180px" heigth="90px" />
        }
    }

    return  <>
                {showHeader()}             
            </>
}

export default Header