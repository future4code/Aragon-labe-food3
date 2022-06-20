import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../routes/coordinator"
import styled from "styled-components"

const RestaurantCardStyled = styled.main`
    display: flex;
    border: solid 0.2px gray;
    flex-direction: column; 
    align-items: center;
    border-radius: 10px;
    width: 92%;
    margin: auto;
    height: 25vh;
    margin-top: 15px;
    
    img{
        width: 92vw;
        height: 16vh;
        border-radius: 10px;
        cursor: pointer;        
    }

    article{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 10px;
        color: gray;
        font-size: 13px;
        margin-top: 20px;
    }

    input{
        font-size: 20px;
    }

    h5{
        margin-left: 2.3vw;
        margin-top:-1px;
    }

    p{
        margin-left: 2.3vw;
        margin-top:-35px;
        color: gray;        
    }     
`

const Span = styled.span`
    font-size: 15px;
    color: red;
    margin-left: 10px;
    margin-bottom: 2px;
`

const I = styled.i `
    margin-left: 45vw;
    color: gray;
`

function RestaurantCard(props) {

const navigate = useNavigate()
    return (
        <RestaurantCardStyled>
            <section
                onClick={() => goToDetailsPage(navigate, props.restaurant?.id)}
                    key={props.restaurant?.id}>
                <img src={props.restaurant?.logoUrl} alt= {`logo do restaurante ${props.restaurant?.name}`}/>
                <br />
                <Span><b>{props.restaurant?.name}</b></Span>
                <br />
                {props.isDetail===true && <h5>{props.restaurant?.category}</h5>}
                <article>
                <span><i>{props.restaurant?.deliveryTime - 10}-{props.restaurant?.deliveryTime} min</i></span>
                <br />
                <span><I>Frete R$ {props.restaurant?.shipping},00</I></span>
                <p />
                <br/>
                </article>
                {props.isDetail===true && <p><i>{props.restaurant?.address}</i></p>}
            </section>
        </RestaurantCardStyled>
    )
}
export default RestaurantCard