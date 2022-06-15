import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GlobalStateContext from "../globalState/GlobalStateContext"

function RestaurantDetails(){
    const {states, getters} = useContext(GlobalStateContext)
    const {restaurantes} = states
    const params = useParams()
    const{getRestaurantDetails} = getters

    useEffect(() =>{
        getRestaurantDetails(params.restaurantId)
    },[])
     


return(

<article>

</article>
)
   
}
export default RestaurantDetails