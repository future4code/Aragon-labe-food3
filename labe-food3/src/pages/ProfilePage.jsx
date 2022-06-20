import { useContext, useEffect } from "react"
import Header from "../components/Header"
import { goToEditAddressPage, goToEditProfilePage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import GlobalStateContext from "../globalState/GlobalStateContext"
import styled from "styled-components"

const HeaderStyle = styled.header`
  text-align: center;

`
const SectionStyled = styled.section`
  margin: 12px;

  button{
    margin-top:10px;
  }
 
`

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
      <HeaderStyle>
        <Header currentPage={"profile"} />
      </HeaderStyle> 
      
      <hr />
      <SectionStyled>
      {profile ?
        <section key={profile.id}>
         <span>Nome: {profile.name}</span>
          <br />
          <span>Email: {profile.email}</span>
          <br />
          <span>Cpf: {profile.cpf}</span>
          <br />
          <button onClick={() => { goToEditProfilePage(navigate) }}>Editar</button>
          <p></p>
         
        </section> : <p>Carregando...</p>}

      {address ?
        <section>
         
          <span>Endereço: {address.street}, </span>
          <br />
          <span>Número: {address.number} </span>
          <br />
          {address.complement !== null &&
            <span>Complemento: {address.complement}</span>}
            <br />
          <span>Bairro: {address.neighbourhood}</span>
         
          <br />
          <button onClick={() => { goToEditAddressPage(navigate) }}>Editar</button>
    
        </section> : <p>Carregando...</p>}
            
            <hr />
            <p>Histórico de pedidos</p>  
      </SectionStyled>       
      <Footer />
    </>
  )
}

export default ProfilePage