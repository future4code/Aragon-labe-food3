import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../routes/coordinator"

function RestaurantCard(props) {

const navigate = useNavigate()
    return (
        <>
            <section
                onClick={() => goToDetailsPage(navigate, props.restaurant?.id)}
                    key={props.restaurant?.id}>
                <img width={"180px"} src={props.restaurant?.logoUrl} alt= {`logo do restaurante ${props.restaurant?.name}`}/>
                <br />
                <span><b>{props.restaurant?.name}</b></span>
                <br />
                {props.isDetail===true && <h4><u><i>{props.restaurant?.category}</i></u></h4>}
                <span><i>{props.restaurant?.deliveryTime - 10}-{props.restaurant?.deliveryTime} min</i></span>
                <br />
                <span><i>Frete R$ {props.restaurant?.shipping},00</i></span>
                <p />
                <br/>
                {props.isDetail===true && <p><i>{props.restaurant?.address}</i></p>}
            </section>
        </>
    )
}
export default RestaurantCard