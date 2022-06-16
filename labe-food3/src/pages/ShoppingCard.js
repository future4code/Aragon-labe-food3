import GlobalStateContext from "../globalState/GlobalStateContext";
import { useState, useContext } from "react";

export const ShoppingCard = (props) => {

    const { cart, setCart, addToCart, onAdd } = useContext(GlobalStateContext);


    //váriavel com o estado do botão
    const [open, setOpen] = useState(false)

    //função que muda o estado para true e abre
    const handleClickOpen = () => {
        setOpen(true)
    }
    
    //função que muda o estado para false e fecha
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <main>
     <div>           
         
          <figure>
                <img src={props.photo} alt="foto do lanche" />
            </figure>
           
                <section>
                    <h2>{props.name}</h2>
                    <button>2</button>
                </section>
                
                <div>{props.description}</div>
            
                    <h6>R$ {props.price}0</h6>   
                    <button onClick={handleClickOpen}>Adicionar</button> 

                    {/* configurações da caixa de dialogo */}
                    <input
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                    />
                        <input id="form-dialog-title">Selecione a quantidade desejada</input>
                   
                            <form>
                                <label
                                    id="demo-simple-select-autowidth"
                                    autoWidth
                                    // value={form.quantity}
                                    // onChange={}
                                >
                                    <input value={1}>1</input>
                                    
                                </label>
                            </form>
                       
                       
                            <button onClick={()=> onAdd(props.product)} color="primary">
                                Adicionar Ao Carrinho
                            </button>
                     
      </div>

      </main>
      
    )
}
export default ShoppingCard