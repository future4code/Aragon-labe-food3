import { useContext, useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import GlobalStateContext from "../globalState/GlobalStateContext"
import { convertPrice } from "../utils/ConvertPrice"

function CartPage () {
    const context = useContext(GlobalStateContext)
    const { orders } = context.states
    const showOrders = orders.map((order) => {
        return(
            <section key={order.products.id}>
                <hr />
                <img src = {order.products.photoUrl} width={"100px"}/>
                <p>{order.products.name}</p>
                <p>{order.products.description}</p>
                <p>{convertPrice(order.products?.price)}</p>
                <p>{order.quantity}</p>
            </section>
        )
    })

    return (
        <>
        <Header currentPage={"cart"}/>
        {showOrders}
        <hr />
        <Footer />
        </>
    )
}

export default CartPage