import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToSignUpPage } from "../routes/coordinator"
import Header from "../components/Header"
import styled from "styled-components"

const LoginStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20vw;

    form{
        display: flex;
        flex-direction: column;
        width: 90vw;
    }

    input{
        height: 5vh;
        border-radius: 5px;
        border: solid 0.1px grey;
        font-size: 16px;
    }

    button{
        background-color: red;
        height: 5vh;
        border: solid 0.1px grey;
        border-radius: 2px;
    }

    section{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    b{
        font-size: 18px;
    }

    h3{
        font-size:20px;
    }
`
const ButtonC = styled.div`
    background-color: white;
    cursor: pointer;
    margin-left: 4vw;
`
function LoginPage() {
    const navigate = useNavigate()
    const context = useContext(GlobalStateContext)
    const { login } = context.states
    const { setLogin } = context.setters
    const { postLogin } = context.posts
    const onChangeLogin = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const signIn = (e) => {
        e.preventDefault()
        postLogin(navigate)
    }

    return (
        <LoginStyle>
            <Header currentPage={"login"} />
            <hr />
            <h3>Entrar</h3>
            <form onSubmit={signIn}>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={login.email}
                    onChange={onChangeLogin}
                    required
                    placeholder="email@email.com:"
                />
                <br />
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={login.password}
                    onChange={onChangeLogin}
                    required
                />
                <br />
                <button type="submit" variant="contained"> <b>Entrar</b> </button>
                <br />
                <br />
            </form>
            <section>
                <span><b>Não possui cadastro?</b></span>
                <br />
                <ButtonC onClick={() => goToSignUpPage(navigate)}><b>Clique aqui</b></ButtonC>
            </section>

        </LoginStyle>
    )
}

export default LoginPage