import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToLogin, goBack } from "../routes/coordinator"
import { useEffect, useState } from "react"
import RestaurantCards from "../components/RestaurantCards"

export default function RestaurantDetails() { // declarando variaveis de estado 
    const [selectrestaurants, setSelectRestaurante] = useState({})

    const navigate = useNavigate()
    const params = useParams()



    const getRestaurants = () => {
        axios
            .get(`${BASE_URL}/restaurants/${params.restaurantId}`, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            }).then((res) => {
                setSelectRestaurante(res.data.restaurant.products)
                console.log(res.data)
            }).catch((err) => {
            
                console.log(err)
            })
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (!token) {
            goToLogin(navigate)
        }
    }, [])

    useEffect(() => {
        getRestaurants()
    }, [])
const showSelectRestaurant = selectrestaurants.restaurants?.map((selectrestaurant) => {
    return(
        <RestaurantCards
        key={selectrestaurant.id}
        description={selectrestaurants.description}
        logoUrl={selectrestaurants.logoUrl}
        name={selectrestaurants.name}
        address={selectrestaurants.address}
        category={selectrestaurants.category}
        shipping={selectrestaurants.shipping}
        deliveryTime={selectrestaurants.deliveryTime}

    />
    )
})

    
    return (
        <main>
            <Header

            />
            <hr />
           
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <section>
                    <article>
                       {showSelectRestaurant}
                    </article>
                </section>
          
</main>

      )
}
