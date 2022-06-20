import { useContext, useEffect } from "react"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToProfilePage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styled from "styled-components"

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
const Headers = styled.header`
    text-align: center;
`

function EditAddressPage() {
    const context = useContext(GlobalStateContext)
    const { address } = context.states
    const { setAddress } = context.setters
    const { addAddress } = context.puts
    const { getFullAddress } = context.getters

    const onChangeAddress = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const saveAddress = (e) => {
        e.preventDefault()
        addAddress()
        goToProfilePage(navigate)
    }

    useEffect(() => {
        getFullAddress()
    }, [])
    return (
        <>
            <Headers>
                <Header currentPage={"edit-address"} />
            </Headers>
            <hr />
            <Section>
                <form onSubmit={saveAddress}>
                    <label htmlFor="street">Logradouro: </label>
                    <input
                        id="street"
                        name="street"
                        value={address.street}
                        onChange={onChangeAddress}
                        required
                        placeholder="Rua / Av"
                    />
                    <br />
                    <label htmlFor="number">Número: </label>
                    <input
                        id="number"
                        name="number"
                        value={address.number}
                        onChange={onChangeAddress}
                        required
                        placeholder="Número"
                    />
                    <br />
                    <label htmlFor="complement">Complemento: </label>
                    <input
                        id="complement"
                        name="complement"
                        value={address.complement}
                        onChange={onChangeAddress}
                        placeholder="Apto / Bloco"
                    />
                    <br />
                    <label htmlFor="neighbourhood">Bairro: </label>
                    <input
                        id="neighbourhood"
                        name="neighbourhood"
                        value={address.neighbourhood}
                        onChange={onChangeAddress}
                        required
                        placeholder="Bairro"
                    />
                    <br />
                    <label htmlFor="city">Cidade: </label>
                    <input
                        id="city"
                        name="city"
                        value={address.city}
                        onChange={onChangeAddress}
                        required
                        placeholder="UF"
                    />
                    <br />
                    <label htmlFor="state">Estado: </label>
                    <input
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={onChangeAddress}
                        required
                        placeholder="Estado"
                    />
                    <p />
                    <button type="submit">Salvar</button>
                </form>
            </Section>
            <hr />
            <Footer />
        </>
    )
}

export default EditAddressPage