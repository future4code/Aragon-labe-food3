import { useContext, useEffect } from "react"
import Header from "../components/Header"
import { goToEditAddressPage, goToEditProfilePage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import GlobalStateContext from "../globalState/GlobalStateContext"

function ProfilePage() {
  const navigate = useNavigate()
  const context = useContext(GlobalStateContext)
  const { address, profile } = context.states
  const { getFullAddress, getProfile } = context.getters

  useEffect(() => {
    getFullAddress()
    getProfile()
  }, [])

  return (
    <>
      <Header currentPage={"profile"} />
      <hr />
      {profile ?
        <section key={profile.id}>
          <span>{profile.name}</span>
          <br />
          <span>{profile.email}</span>
          <br />
          <span>{profile.cpf}</span>
          <br />
          <button onClick={() => { goToEditProfilePage(navigate) }}>Editar</button>
          <p></p>
        </section> : <p>Carregando...</p>}

      {address ?
        <section>
          <span>{address.street},</span>
          <span> {address.number}</span>
          {address.complement !== null &&
            <span>, {address.complement}</span>}
          <span> - {address.neighbourhood}</span>
          <br />
          <button onClick={() => { goToEditAddressPage(navigate) }}>Editar</button>
        </section> : <p>Carregando...</p>}
            <hr />
      <Footer />
    </>
  )
}

export default ProfilePage