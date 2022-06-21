import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RestaurantCard from "../components/RestaurantCard"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToLoginPage } from "../routes/coordinator"
import styled from "styled-components"

const HomeStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;   
    width :100vw ;

    h2{
        margin: 20px;
    }
`
const Input = styled.input`
    width: 89vw;
    height: 7vh;
    margin: auto;
    display: flex;
    justify-content: center;
    border: solid 1px gray;
    border-radius: 4px;
    
`

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
            <HomeStyled>
                <h2>Ifuture</h2>
            </HomeStyled>
            <hr />
                <Input
                    placeholder= "Restaurante"
                    value={search}
                    onChange={onChangeSearch}

                />          
            <p />
            {showRestaurants}            
            <Footer />        
        </> 
    )
}

export default HomePage