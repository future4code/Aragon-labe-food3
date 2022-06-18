import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RestaurantCard from "../components/RestaurantCard"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToLoginPage } from "../routes/coordinator"

function HomePage() {
    const context = useContext(GlobalStateContext)
    const { profile, restaurants } = context.states
    const { getProfile, getRestaurants } = context.getters
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            goToLoginPage(navigate)
        }
    }, [])
    useEffect(() => {
        getProfile(navigate)
        getRestaurants()
    }, [])
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    const onChangeFilter = (e) => {
        setFilter(e.target.value)
    }
    const showRestaurants = restaurants ? restaurants
        .filter((restaurant) => {
            const textSearch = search.toLowerCase()
            const restaurantsFiltered = restaurant.name.toLowerCase()
            const descriptionFiltered = restaurant.description.toLowerCase()
            return restaurantsFiltered.includes(textSearch) || descriptionFiltered.includes(textSearch)
        })

        .map((restaurant) => {
            return (
                <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    isDetail={false}
                />
            )
        }) : <p>carregando...</p>

    return (
        <>
            <Header currentPage={"home"} />
            <hr />
            <input
                placeholder="Pesquisar Restaurante"
                value={search}
                onChange={onChangeSearch}
            />
            <p />
            {showRestaurants}
            <hr />
            <Footer />
        </>
    )
}
export default HomePage