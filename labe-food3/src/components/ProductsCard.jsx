import { useContext, useState } from "react"
import GlobalStateContext from "../globalState/GlobalStateContext"
import styled from "styled-components"
import Footer from "./Footer"

const ProductsCardStyle = styled.main`
    display: flex;
    border: solid 0.2px gray;
    flex-direction: column; 
    align-items: center;
    border-radius: 10px;
    width: 92%;
    margin: auto;
    height: 12.5vh;
    margin-top: 15px;
    font-size: 12px;    

    img{
        margin-right: 61.9vw;
        height: 12.5vh;
        margin-top: -1.4vh;
        border-radius: 8px;
        width: 25vw;
    }

    h3{
        margin-left: 27vw;
        margin-bottom: -0.9vh;
        margin-top: -11.8vh;
        color: red;
    }

    p{
        margin-left: 27vw;        
    }

    button{
        margin-top: -90px;
        margin-left: 70vw;
        border-radius: 10px 0px;
        border: solid 1px black;
        height: 4vh;
        width: 22vw;
        background-color: white;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input{
        margin-left: 45vw;
        border-radius: 4px;
        border: solid 1px gray;
        padding-top: 3px;
        width: 23vw;
    }
`

const Button = styled.button`   
    margin-bottom: 86px;
`
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
       <ProductsCardStyle>
             <section>
            <p />
            <img 
            src={props.product.photoUrl} 
            alt={`foto de ${props.product.name}`} 
            />
            <h3>{props.product.name}</h3>
            <p color={"gray"}>{props.product.description}</p>
            <p><b> R$ {props.product.price}</b> </p>
            <button onClick={toggleModal}>Adicionar ao carrinho</button>
                        
            {
                isModal &&                  
                <div>
                <input
                    placeholder="quantidade"
                    value={productQuantity}
                    onChange={onChangeQuantity}
                    type="number"
                    />
                   
                    <Button onClick={() => {
                        getProductOrder()

                    }}>Adicionar</Button>
                    <Button onClick={toggleModal}>Cancelar</Button>
                    <p />
                    <p />
                </div>                
            }
        </section>
       </ProductsCardStyle>       
    )
}

export default ProductsCard