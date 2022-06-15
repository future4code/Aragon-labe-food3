import { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import GlobalStateContext from '../globalState/GlobalStateContext'
import RestaurantCards from "../components/RestaurantCards"
import { useNavigate } from 'react-router-dom'
import { goToLogin } from "../routes/coordinator"
import useUnprotectedPage from '../hooks/useUnprotectedPage'
import useProtectedPage from '../hooks/useProtectedPage'

function Feed() {
    const navigate = useNavigate()
   useProtectedPage()

    const { states, getters } = useContext(GlobalStateContext)
    const { restaurantes } = states
    const { getRestaurantes } = getters

    const [restaurantSelect, setRestaurantSelect] = useState("")


    // const onChangeRestaurant = (event) => {
    //     setRestaurantSelect(event.target.value);
    // };

    useEffect(() => {
       getRestaurantes()
    },[])
  

    const showRestaurantes = restaurantes.restaurants?.map((restaurante) => {

        return (


            <RestaurantCards
                key={restaurante.id}
                description={restaurante.description}
                logoUrl={restaurante.logoUrl}
                name={restaurante.name}
                address={restaurante.address}
                category={restaurante.category}
                shipping={restaurante.shipping}
                deliveryTime={restaurante.deliveryTime}

            />
        )
    })
    return (
        <main>
            <Header
                isProtected={false} />
            <hr />
            <section>

                <form>
                    <label>
                    <input placeholder='restaurante'
                    name="name"
                    // onChange={onChangeRestaurant}
                    // required
                                        />
                {/* <option value={""} >Ordem Numérica</option>
                <option value={"asc"} >A-Z</option>
                <option value={"desc"} >Z-A</option>
               */}
                    </label>
                </form>
            </section>
            <section>
                <h3>Lista de restaurantes</h3>


                {showRestaurantes}
              
            </section>
        </main>
    )
}

export default Feed