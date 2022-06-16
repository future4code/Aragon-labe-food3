
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import useProtectedPage from '../hooks/useProtectedPage'
import { goToLogin } from '../routes/coordinator'
import { requestAddAddress } from '../services/requests'

const SignUpAddress = () => {
  useProtectedPage()
  const navigate=useNavigate()
  const{
    form, onChange,clear
  }=useForm({
    street:"", number:"", neighbourhood:"", city:"", state:"", complement:"", 
  })
  const signupAdd=(e)=>{
    e.preventDefault()

   requestAddAddress(form,clear,navigate) 
  }
  return (
    <section>
        <h2>Cadastro de endereço</h2>
<form onSubmit={signupAdd}>
  <label htmlFor={"street"}> rua:</label>
<input 
id={"street"}
name={"street"}
value={form.street}
onChange={onChange}
/>
<br/>

<label htmlFor={"number"}> Número:</label>
<input 
id={"number"}
name={"number"}
value={form.number}
onChange={onChange}
/>
<br/>

<label htmlFor={"neighbourhood"}> bairro:</label>
<input 
id={"neighbourhood"}
name={"neighbourhood"}
value={form.neighbourhood}
onChange={onChange}
/>
<br/>
<label htmlFor={"city"}> Ciddade:</label>
<input 
id={"city"}
name={"city"}
value={form.city}
onChange={onChange}
/>
<br/>
<label htmlFor={"state"}> Estado:</label>
<input 
id={"state"}
name={"state"}
value={form.state}
onChange={onChange}
/>
<br/>
<label htmlFor={"complement"}> complemento:</label>
<input 
id={"complement"}
name={"complement"}
value={form.complement}
onChange={onChange}
/>
<br/>
<button type={"submit"}> cadastrar</button><br/>
<button onClick={()=>goToLogin(navigate)}> voltar</button><br/>

</form>
    </section>
  )
}

export default SignUpAddress