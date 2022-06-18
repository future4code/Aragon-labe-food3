import { useContext, useEffect } from "react"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToProfilePage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
            <Header currentPage={"edit-address"}/>
            <hr />
            <section>
            <form onSubmit={saveAddress}>
                <label htmlFor="street">Logradouro: </label>
                <input
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={onChangeAddress}
                    required
                />
                <br />
                <label htmlFor="number">Número: </label>
                <input
                    id="number"
                    name="number"
                    value={address.number}
                    onChange={onChangeAddress}
                    required
                />
                <br />
                <label htmlFor="complement">Complemento: </label>
                <input
                    id="complement"
                    name="complement"
                    value={address.complement}
                    onChange={onChangeAddress}
                />
                <br />
                <label htmlFor="neighbourhood">Bairro: </label>
                <input
                    id="neighbourhood"
                    name="neighbourhood"
                    value={address.neighbourhood}
                    onChange={onChangeAddress}
                    required
                />
                <br />
                <label htmlFor="city">Cidade: </label>
                <input
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={onChangeAddress}
                    required
                />
                <br />
                <label htmlFor="state">Estado: </label>
                <input
                    id="state"
                    name="state"
                    value={address.state}
                    onChange={onChangeAddress}
                    required
                />
                <p />
                <button type="submit">Salvar</button>
            </form>
            </section>
            <hr />
            <Footer />
        </>
    )
}

export default EditAddressPage