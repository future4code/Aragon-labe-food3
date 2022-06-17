import axios from "axios"
import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"
import { BASE_URL } from "../constants/urls"


const GlobalState = (props) => {

    const [restaurantes, setRestaurantes] = useState([])
    const [restaurantSelect, setRestaurantSelect] = useState({})
    const [locateRestaurant, setLocate] = useState("") //buscar restaurante
    const [category, setCategory] = useState([])   // opçoes de  categoria
    const [selectRestaurants, setSelectRestaurant] = useState([]) // seleção de restaurante
    const [cartItems, setCartItems] = useState([]);
    
    
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist) {
          setCartItems(
            cartItems.map((x)=> x.id === product.id ? {...exist, qty: exist.qty + 1} : x 
            
            )
          );
        }else {
          setCartItems([...cartItems, {...product, qty: 1}]);
        }
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
                setSelectRestaurant(res.data)
                const categoryResponse = (res.data.restaurants.map((restaurant) => restaurant.category).sort())
               setCategory([...new Set(categoryResponse)])
                
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    const getRestaurantDetails = (restaurantId) => {
        axios
            .get(`${BASE_URL}/restaurants/${restaurantId}`, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            }).then((res) => {
                setSelectRestaurant(res.data.restaurant)
                console.log(res.data.restaurant)
                }).catch((err) => {
            
                console.log(err)
            })
    }

    const states = { restaurantes, restaurantSelect,locateRestaurant,category,selectRestaurants }
    const setters = { setRestaurantes, setRestaurantSelect, setLocate, setCategory, setSelectRestaurant }
    const getters = { getRestaurantes, getRestaurantDetails, onAdd }
    return (
        <GlobalStateContext.Provider value={{ states, setters, getters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
