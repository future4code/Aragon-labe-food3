import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToAddressPage } from "../routes/coordinator"

function SignupPage() {
  const navigate = useNavigate()
  const context = useContext(GlobalStateContext)
  const { signUp, checker } = context.states
  const { setSignUp, setChecker } = context.setters
  const { postSignUp } = context.posts
  const onChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value })
  }
  const onChangeChecker = (e) => {
    setChecker({ ...checker, [e.target.name]: e.target.value })
  }
  const register = (e) => {
    e.preventDefault();
    postSignUp();
    goToAddressPage(navigate)
  }

  return (
    <>
      <Header currentPage={"signup"} />
      <p>Cadastrar</p>
      <form onSubmit={register}>
        <label htmlFor="name">Nome: </label>
        <input
          id="name"
          placeholder="Nome completo"
          name="name"
          value={signUp.name}
          onChange={onChangeSignUp}
          required
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          placeholder="email@email.com"
          name="email"
          value={checker.email}
          onChange={onChangeChecker}
          required
        />
        <br />
        <label htmlFor="cpf">CPF: </label>
        <input
        pattern=""
          id="cpf"
          placeholder="somente números"
          name="cpf"
          type="number"
          value={signUp.cpf}
          onChange={onChangeSignUp}
          required
        />
        <br />
        <label htmlFor="password">Senha: </label>
        <input
          id="password"
          placeholder="Inserir senha"
          type="password"
          name="password"
          value={checker.password}
          onChange={onChangeChecker}
          required
        />
        <br />
        <label htmlFor="password">Senha: </label>
        <input
          id="password"
          placeholder="Confirmar senha"
          type="password"
          name="password"
          value={signUp.password}
          onChange={onChangeSignUp}
          required
        />
        {checker.password !== signUp.password && <p>repita a mesma senha</p>}
        <br />
        {checker.password === signUp.password && checker.email === signUp.email ? <button type="submit">Cadastrar</button> : <button disabled>Cadastrar</button>}
      </form>
    </>
  )
}
export default SignupPage;