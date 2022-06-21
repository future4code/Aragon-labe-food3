import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import GlobalStateContext from "../globalState/GlobalStateContext"
import styled from "styled-components"

const HeaderStyle = styled.header`
    text-align: center;

`
const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:10px;

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
    color: gray;
    font-size: 14px;
}

button{
    background-color: red;
    height: 5vh;
    border: solid 0.1px grey;
    border-radius: 2px;
}

header{
    text-align: center;
}   
`
function EditProfilePage() {
    const context = useContext(GlobalStateContext)
    const { signUp } = context.states
    const { setSignUp } = context.setters
    const { updateProfile } = context.puts

    const onChangeSignUp = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const updateUserData = (e) => {
        e.preventDefault()
        updateProfile(navigate)
    }

    return (
        <>
            <HeaderStyle>
                <Header currentPage={"edit-profile"} />
            </HeaderStyle>

            <hr />
            <Section>
                <form onSubmit={updateUserData}>
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
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={signUp.email}
                        onChange={onChangeSignUp}
                        required
                    />
                    <br />
                    <label htmlFor="cpf">CPF: </label>
                    <input
                        pattern=""
                        id="cpf"
                        placeholder="Números"
                        name="cpf"
                        type="number"
                        value={signUp.cpf}
                        onChange={onChangeSignUp}
                        required
                    />
                    <p />
                    <button>Atualizar</button>
                </form>
            </Section>
            <hr />
            <Footer />
        </>
    )
}

export default EditProfilePage