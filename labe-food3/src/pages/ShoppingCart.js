import React from 'react'
import { BASE_URL } from '../constants/urls';
import axios from "axios"
import ShoppingCard from "../pages/ShoppingCard"
import { useState, useContext, useEffect } from "react";
import GlobalStateContext from "../globalState/GlobalStateContext";
import Header from "../components/Header"
import { useParams } from 'react-router-dom';



export default function ShoppingCart() {

    //váriaveis que guardam os dados dos restaurantes
    const { states } = useContext(GlobalStateContext);
    const { restaurantes } = states;

    //váriavel para guardar os dados do restaurante selecionado
    const [selectedRestaurantProducts, setSelectedRestaurantProducts] = useState([]);

    //váriavel para pegar o id do restaurante via URL
    const { id } = useParams();

    //função para pegar os detalhes do restaurante via API
    useEffect(() => {
       
        axios
            .get(`${BASE_URL}restaurants/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((res) => setSelectedRestaurantProducts(res.data.restaurant.products))
            .catch((err) => {
                alert("Algo deu errado, tente novamente!")
                console.log(err.response.message)
            })
    }, [])

    return (
        <main>
            <Header
              
            />

            <section>

                {restaurantes && restaurantes.map((restaurante) => {
                    if (id === restaurante.id) {
                        return <div key={restaurante.id}>
                            <img src={restaurante.logoUrl} alt="imagem restaurante" />
                            <h1 className="greenTitle">{restaurante.name}</h1>
                            <p>{restaurante.category}</p>
                            <div>
                                <p>{restaurante.deliveryTime} min</p>
                                <p className="space">Frete R${restaurante.shipping},00</p>
                            </div>
                            <p>{restaurante.address}</p>
                        </div>
                    }
                })}

                {/* tudo que não for bebida e acompanhamento entra aqui :) */}
                <h3>Principais</h3>
                {selectedRestaurantProducts && selectedRestaurantProducts.map((product) => {
                    if (product.category !== "Bebida" && product.category !== "Acompanhamento") {
                        return <ShoppingCard key={product.id}
                            name={product.name}
                            id={product.id}
                            product={product}
                            description={product.description}
                            photo={product.photoUrl}
                            price={product.price} />
                    }
                })}

                {/* tudo que for acompanhamento entra aqui :) */}
                <h3>Acompanhamentos</h3>
                {selectedRestaurantProducts && selectedRestaurantProducts.map((product) => {
                    if (product.category === "Acompanhamento") {
                        return <ShoppingCard key={product.id}
                            name={product.name}
                            id={product.id}
                            product={product}
                            description={product.description}
                            photo={product.photoUrl}
                            price={product.price} />
                    }
                })}

                {/* tudo que for bebida entra aqui :) */}
                <h3>Bebidas</h3>
                {selectedRestaurantProducts && selectedRestaurantProducts.map((product) => {
                    if (product.category === "Bebida") {
                        return <ShoppingCard key={product.id}
                            name={product.name}
                            id={product.id}
                            product={product}
                            description={product.description}
                            photo={product.photoUrl}
                            price={product.price} />
                    }
                })}

            </section>

        </main>
    )
}
