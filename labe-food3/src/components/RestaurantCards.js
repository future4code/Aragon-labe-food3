

function RestaurantCards({ id, description, shipping, address, name, logoUrl, deliveryTime, category }) {


    return (
        <section>
            <img src={logoUrl} width={"200px"} height={"150px"} alt="Imagem restaurantes" />
            <h3> {description}</h3>
            {id}
            <span><b>Restaurante:</b>{name}</span>
            <br />
            <p><b>Endereço:</b>{address}</p>
            <br />
            <p>Tempo de Entrega:<b>{deliveryTime}</b></p>
            <br />
            <p><b>Categoria:</b>{category}</p>
            <br />
            <p><b>Compra:</b>{shipping}</p>

        </section>
    )
}
export default RestaurantCards