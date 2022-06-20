import { useContext } from "react"
import { goToHomePage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import GlobalStateContext from "../globalState/GlobalStateContext"
import styled from "styled-components"

const AddresStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
        font-size: 14px;
    }
    button{
        background-color: red;
        height: 5vh;
        border: solid 0.1px grey;
        border-radius: 2px;
    }
    section{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    b{
        font-size: 18px;
    }
    h3{
        font-size:20px;
    }
`

function AddressPage() {

  const context = useContext(GlobalStateContext)
  const { address } = context.states
  const { setAddress } = context.setters
  const { addAddress } = context.puts
  const onChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const saveAddress = (e) => {
    e.preventDefault()
    addAddress()
    goToHomePage(navigate)
  }
  return (
    <AddresStyle>
      <Header currentPage={"address"} />
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
                    placeholder="Cidade"
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
                <button type="submit"> <b>Salvar</b> </button>
            </form>
    </AddresStyle>
  )
}

export default AddressPage