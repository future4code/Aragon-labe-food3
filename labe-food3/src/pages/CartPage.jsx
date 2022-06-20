import { useContext, useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { convertPrice } from "../utils/ConvertPrice"
import styled from "styled-components"

const Headers = styled.header`
    text-align: center;
`

const Section = styled.section `
    p{
        font-size: 13px;
    }
`

function CartPage () {
    const context = useContext(GlobalStateContext)
    const { orders } = context.states
    const showOrders = orders.map((order) => {
        return(
            <Section key={order.products.id}>
                <hr />
                <img src = {order.products.photoUrl} width="100px"/>
                <p>{order.products.name}</p>
                <p>{order.products.description}</p>
                <p>{convertPrice(order.products?.price)}</p>
                <p>{order.quantity}</p>
            </Section>
        )
    })

    return (
        <>
        <Headers>
        <Header currentPage={"cart"}/>
        </Headers>
        
        {showOrders}
        <hr />
        <Footer />
        </>
    )
}

export default CartPage