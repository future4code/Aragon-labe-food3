function RestaurantCards({ id, description, shipping, address, name, logoUrl, deliveryTime, category }) {
    return (
        <section>
            <img src={logoUrl} width={"200px"} height={"150px"} alt="Imagem restaurantes" />
            <p><i>{description}</i></p>           
            {id}            
            <h6>Restaurante: {name}</h6>            
            <br />
            <p><b>Endereço: </b>{address}</p>
            <br />
            <p><b>Tempo de Entrega: </b>{deliveryTime}</p>
            <br />
            <p><b>Categoria: </b>{category}</p>
            <br />
            <p><b>Compra: </b>{shipping}</p>
        </section>
    )
}
export default RestaurantCards