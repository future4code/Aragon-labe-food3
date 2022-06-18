import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToSignUpPage } from "../routes/coordinator"
import Header from "../components/Header"

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
        <>
            <Header currentPage={"login"} />
            <hr />
            <form onSubmit={signIn}>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={login.email}
                    onChange={onChangeLogin}
                    required
                />
                <br />
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={login.password}
                    onChange={onChangeLogin}
                    required
                />
                <br />
                <button type="submit" variant="contained">Entrar</button>
                <br />
                <br />
            </form>
            <span>Não possui cadastro?</span>
            <br />
            <button onClick={() => goToSignUpPage(navigate)}>Clique aqui</button>
        </>
    )
}

export default LoginPage