import { useContext, useState } from "react"
import GlobalStateContext from "../globalState/GlobalStateContext"

function ProductsCard(props) {
    const [isModal, setIsModal] = useState(false)
    const context = useContext(GlobalStateContext)
    const { orders, productQuantity } = context.states
    const { setOrders, setProductQuantity } = context.setters

    const toggleModal = () => {
        setProductQuantity("")
        setIsModal(!isModal)
    }

    const getProductOrder = () => {
        const newOrder = {
            products: props.product,
            quantity: productQuantity
        }
        toggleModal()

        console.log(newOrder)
        setOrders([...orders, newOrder])
    }

    const onChangeQuantity = (e) => {
        setProductQuantity(e.target.value)
    }

    return (
        <section>
            <p />
            <img 
            src={props.product.photoUrl} 
            width={"120px"} 
            alt={`foto de ${props.product.name}`} 
            />
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
            <button onClick={toggleModal}>Adicionar ao Carrinho</button>
                        
            {
                isModal &&
                <div>
                    <input
                        placeholder="quantidade"
                        value={productQuantity}
                        onChange={onChangeQuantity}
                        type="number"
                    />
                    <button onClick={() => {
                        getProductOrder()

                    }}>Adicionar</button>
                    <button onClick={toggleModal}>Cancelar</button>
                    <p />
                    <p />
                </div>
            }
        </section>
    )
}

export default ProductsCard