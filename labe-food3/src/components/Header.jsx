import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"
import logo from "../assets/logo.jpg"


const Header = (props) => {
    const navigate = useNavigate()

    const logout =() =>{
        if(window.confirm("Tem certeza de que deseja sair?")){
            localStorage.removeItem("token")
            localStorage.removeItem("userEmail")
            goToLogin(navigate)
            alert("Logout com sucesso!")
        }
    }


  return (
   <header>
       <img src={logo} alt="imagem_logo" />
       
      
           <>
            <h3>Bem vindo, {localStorage.getItem("userEmail")}!</h3>
            <button onClick={logout}>Logout</button>
           </>
       
   </header>
  )
}

export default Header