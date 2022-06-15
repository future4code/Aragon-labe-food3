import axios from "axios"
import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"
import { BASE_URL } from "../constants/urls"


const GlobalState = (props) => {

    const [restaurantes, setRestaurantes] = useState([])
    const [restaurantSelect, setRestaurantSelect] = useState({})

    const getRestaurantDetails = (restaurantId) => {
        axios
            .get(`${BASE_URL}/restaurants/${restaurantId}`)
            .then((res) => {
                setRestaurantSelect(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const getRestaurantes = () => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")

            }
        }
        axios
            .get(`${BASE_URL}/restaurants`, header)
            .then((res) => {
                setRestaurantes(res.data)

            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    const states = { restaurantes, restaurantSelect }
    const setters = { setRestaurantes, setRestaurantSelect }
    const getters = { getRestaurantes, getRestaurantDetails }
    return (
        <GlobalStateContext.Provider value={{ states, setters, getters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
