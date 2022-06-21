import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RestaurantCard from "../components/RestaurantCard"
import ProductsCard from "../components/ProductsCard"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { goToLoginPage } from "../routes/coordinator"
import styled from "styled-components"

const HeadersStyle = styled.header`
    text-align: center;
`

function DetailsPage() {
    const context = useContext(GlobalStateContext)
    const { getRestaurantDetails } = context.getters
    const { details } = context.states
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (!token) { goToLoginPage(navigate) }
    }, [])

    useEffect(() => {
        getRestaurantDetails(params.id)
        console.log(details)
    }, [])

    const showProducts = details.restaurant &&
        details.restaurant.products.map((product) => {
            return (
                <>
                    <ProductsCard
                        product={product}
                        restaurant={details.restaurant}
                        key={product.id}
                    />
                </>
            )
        })

    return (
        <>
            <HeadersStyle>
                <Header currentPage={"details"} />
            </HeadersStyle>
            
            <hr />
            <RestaurantCard
                restaurant={details.restaurant}
                isDetail={true}
            />
            {showProducts}
            <Footer />
        </>
    )
}

export default DetailsPage