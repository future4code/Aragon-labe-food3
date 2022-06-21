import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToAddressPage } from "../routes/coordinator"
import styled from "styled-components"

const SignUpStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        font-size: 18px;
    }
    button{
        background-color: red;
        height: 5vh;
        border: solid 0.1px grey;
        border-radius: 2px;
        color: black;
        font-size: 20px;
    }
    section{
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    h3{
        font-size:22px;
    }
    p{
      color: red;
      text-align: center;
      font-size: 20px;
    }

`

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
    <SignUpStyle>
      <Header currentPage={"signup"} />
      <h3> <b>Cadastrar</b> </h3>
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
        {checker.password === signUp.password  ? <button type="submit"> <b>Cadastrar</b> </button> : <button disabled> <b>Cadastrar</b> </button>}
      </form>
    </SignUpStyle>
  )
}

export default SignupPage;