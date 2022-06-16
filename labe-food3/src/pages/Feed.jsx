import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import GlobalStateContext from '../globalState/GlobalStateContext'
import RestaurantCards from "../components/RestaurantCards"
import useProtectedPage from '../hooks/useProtectedPage'

function Feed() {
   
   useProtectedPage()

    const { states, getters } = useContext(GlobalStateContext)
    const { restaurantes } = states
   
    const { getRestaurantes } = getters // lista restaurante
   
   


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
                                <br/>           
                   <input list={"category"} action={"handleLocateCategory"}/>
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