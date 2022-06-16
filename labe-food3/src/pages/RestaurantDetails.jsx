// import { useContext, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import GlobalStateContext from "../globalState/GlobalStateContext"

// function RestaurantDetails(){
//     const {states, getters} = useContext(GlobalStateContext)
//     const {restaurantes} = states
//     const params = useParams()
//     const{getRestaurantDetails} = getters

//     useEffect(() =>{
//         getRestaurantDetails(params.restaurantId)
//     },[])



// return(

// <article>

// </article>
// )

// }
// export default RestaurantDetails
import axios from "axios"
import Header from "../components/Header"
import { useState, useEffect } from "react"
import RestaurantCards from "../components/RestaurantCards"
import { SelectRestaurant } from "../components/Selecoes/SelectRestaurant"
import { BASE_URL } from "../constants/urls"

export default function RestaurantDetails(props) { // declarando variaveis de estado 
    const [search, setSearch] = useState("") //cria-se um estado chamado setSeacrh  que salva os dados da entrada de pesquisa em cada ocorrência do changeevento. 
    const [restaurantes, setRestaurantes] = useState([])  // criou a variavel que vai receber uma lista e guardar no estado
    const [categorias, setCategorias] = useState([]) // opções das categorias
    const [filteredRestaurantes, setFilteredRestaurantes] = useState([]) // restaurante filtrados seja pelo texto ou categoria

    // método recebe uma string como argumento e filtra os restaurantes 
    const handleSearch = (e) => {
        const textFilter = e.target.value
        setSearch(textFilter)
        if (!textFilter)
            return setFilteredRestaurantes(restaurantes);

        const filteredList = restaurantes.filter(restaurantItem => {
            return restaurantItem.name.toLowerCase().includes(textFilter.toLowerCase())
        })

        setFilteredRestaurantes(filteredList)
    }

    // método que filtra a categoria dos restaurantes
    const handleSearchCategory = (categoryName) => {
        if (!categoryName)
            return setFilteredRestaurantes(restaurantes)

        const filteredList = restaurantes.filter(restaurantItem => restaurantItem.category.toLowerCase().includes(categoryName.toLowerCase()))
        setFilteredRestaurantes(filteredList)
    }

    const getRestaurants = () => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        axios
            .get(`${BASE_URL}/restaurants`, header)
            .then(async (res) => {
                const restaurantesResponse = res.data.restaurants
                setRestaurantes(restaurantesResponse)
                setFilteredRestaurantes(restaurantesResponse)
                const categoriasResponse = restaurantesResponse.map((restaurant) => restaurant.category).sort()
                setCategorias([...new Set(categoriasResponse)])
            })
            .catch((err) => {
                alert('Ops, deu algo errado, tente novamente!')
                console.log(err)
            })
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    return (
        <main>
            <Header />
            <hr />
            <form>
                <input
                    value={search}
                    onChange={handleSearch}
                    label="Restaurante"
                    variant="outlined"
                    fullWidth
                />
            </form>

            <SelectRestaurant list={categorias} action={handleSearchCategory} />

            {filteredRestaurantes.length === 0 && (
                <p>Nenhum restaurante encontrado</p>
            )
            }

            {filteredRestaurantes.map((restaurant) => {
                return (
                    <RestaurantCards
                        key={restaurant.id}
                        image={restaurant.logoUrl}
                        placeName={restaurant.name}
                        deliveryTime={restaurant.deliveryTime}
                        deliveyValue={restaurant.shipping}
                        pathName={restaurant.id}
                    />
                )
            })
            }

        </main>
    )
}