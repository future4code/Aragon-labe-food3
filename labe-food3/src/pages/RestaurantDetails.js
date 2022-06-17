import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { goToFeed } from "../routes/coordinator"
import { useContext, useEffect, } from "react"
import useProtectedPage from "../hooks/useProtectedPage"
import GlobalStateContext from "../globalState/GlobalStateContext"
import RestaurantDetailsCard from "../components/Selecoes/RestaurantDetailsCard"

export default function RestaurantDetails() { // declarando variaveis de estado 

    const navigate = useNavigate()
    const params = useParams()
    useProtectedPage()
    const { states, getters } = useContext(GlobalStateContext)
    const { selectRestaurants } = states
    const { getRestaurantDetails } = getters

    useEffect(() => {
        getRestaurantDetails(params.restaurantId)
    }, [])


    const showRestaurantes = selectRestaurants.products?.map((element) => {

        return (


            <RestaurantDetailsCard
                key={element.id}
                description={element.description}
                price={element.price}
                photoUrl={element.photoUrl}
                name={element.name}
                category={element.category}
            />
        )
    })

    return (
        <main>
            <Header
                isProtected={false}
            />
            <hr />
            <button onClick={() => goToFeed(navigate)}>Voltar</button>
            <section>
               
                    {showRestaurantes}
              
            </section>

        </main>

    )
}
