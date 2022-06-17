import React from 'react'


export default function RestaurantDetailsCard({ id, description, price, name, category, photoUrl}) {
    return (
        <section>
            {id}
            <img src={photoUrl} width={"200px"} height={"150px"} alt="Imagem restaurantes" />
            <h3> {description}</h3>
            <span><b>Restaurante:</b>{name}</span>        
            <br />
            <p>Preço:<b>{price}</b></p>
            <br />
            <p><b>Categoria:</b>{category}</p>
            <br />
          </section>
    )
}
