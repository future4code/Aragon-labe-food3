import useUnprotectedPage from "../hooks/useUnprotectedPage"
import { requestSignUp } from "../services/requests"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"
import {  goToSignAddress } from "../routes/coordinator"




const SignUp = () => {
  useUnprotectedPage()

  const navigate = useNavigate()

  const {form, onChange, clear} = useForm({name:"", email:"", cpf:"", password:""})

  const signup = (e) =>{
    e.preventDefault()

    requestSignUp(form, clear, navigate)
  }


  return (
    <main>
      <Header 
        isProtected={false}
      />
      <hr />
      <section>
        <h2>Cadastro de Novo Usúario</h2>
        <form onSubmit={signup}>
          <label htmlFor={"name"}>Nome:</label>
          <input
          id={"name"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
          />
          <br />
          <label htmlFor={"email"}>E-mail:</label>
          <input 
          id={"email"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          />
          <br />
          <label htmlFor={"cpf"}>CPF</label>
          <input 
          id={"cpf"}
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          required
          />
          <br />
          <label htmlFor={"password"}>Senha:</label>
          <input 
          id={"password"}
          type={"password"} 
          name={"password"}
          value={form.password}
          onChange={onChange}
          pattern={"^.{6,30}$"}
          title={"A senha deve ter no mínimo 8 caracteres"}
          required          
          />
          <br />
          <button type={"submit"}>Cadastrar usuário</button>        
        </form>
        <button onClick={() => goToSignAddress(navigate)}>Voltar</button>
      </section>

    </main>
  )
}

export default SignUp