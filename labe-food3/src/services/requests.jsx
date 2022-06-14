import axios from "axios"
import { goToFeed } from "../routes/coordinator"
import { BASE_URL } from "../constants/urls"


export const requestLogin = (form, clear, navigate) => {
    const body ={
        email:form.email,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/login`, body)
    .then((res) =>{

        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("Login realizado com sucesso!")

        goToFeed(navigate)
    })
    .catch((err) =>{
        alert("Email e/ou senha inválidos! tente novamente.")

        clear()
    })    
}

export const requestSignUp = (form, clear, navigate) =>{
    const body ={
        
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }

    axios
    .post(`${BASE_URL}/signup`, body) 
    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("Usuário criado com sucesso!")
        goToFeed(navigate)
    })   
    .catch((err)=>{
        alert("Algo deu errado!")

        clear()
    })

}

