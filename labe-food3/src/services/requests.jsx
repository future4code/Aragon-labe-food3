import axios from "axios"
import { goToSignUp, goToSignAddress, goToFeed } from "../routes/coordinator"
import { BASE_URL } from "../constants/urls"

export const requestLogin = (form, clear, navigate) => {
    const body = {
        email: form.email,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("Login realizado com sucesso!")
        goToSignUp(navigate)
    })
    .catch((err) => {
        alert("Email e/ou senha inválidos! Tente novamente.")
        clear()
    })
}

export const requestSignUp = (form, clear, navigate) => {
    const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("Usuário criado com sucesso!")
        goToSignAddress(navigate)
    })
    .catch((err) => {
        alert("Algo deu errado!")
        clear()
    })
}

export const requestAddAddress = (form, clear, navigate) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    const body = {
        street: form.street,
        number: form.number,
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
        complement: form.complement
    }

    console.log(localStorage.getItem("token"))

    axios
    .put(`${BASE_URL}/address`, body, header)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Endereço cadastrado com sucesso ")
        goToFeed(navigate)
    })
    .catch((error) => {
        alert("Algo deu errado")
        clear()
    })
}


