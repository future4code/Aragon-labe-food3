import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import useForm from "../hooks/useForm"
import useUnprotectedPage from "../hooks/useUnprotectedPage"
import { requestLogin } from "../services/requests"
import { goToSignUp } from "../routes/coordinator"


const Login = () => {
    useUnprotectedPage() // verifica se a tela esta protegida

    const navigate = useNavigate()
    const {form, onChange, clear} = useForm({email: "", password:""})
    
    const login = (e) =>{
        e.preventDefault()

        requestLogin(form,clear, navigate)
    }

  return (
    <main>
        <Header
            isProtected={false}
        />
        <hr />
        <section>
            <h2>Login</h2>
            <form onSubmit={login}>
                <label htmlFor={"email"}>Email:</label>    
                <input
                type={"email"}
                id={"email"}
                name={"email"}
                value={form.email}
                onChange={onChange}
                />
                <label htmlFor={"password"}>Senha:</label>
                <input
                type={"password"}
                id={"password"}
                name={"password"}
                value={form.password}
                onChange={onChange}
                />
                <br />
                <button type={"submit"}>Entrar</button>            
            </form>   
        </section>
        <hr />
        <section>
            <h3>Não tem cadastro? clique aqui</h3>
            <button onClick={() => goToSignUp(navigate)}>Ir para cadastro</button>
        </section>
        
     
    </main>
  )
}

export default Login