import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const [sold, setSold] = useState(false)

    const increaseStock = () => {
        if(counter < itemStock){
            setCounter(counter + 1)
        }
    }

    const decreaseStock = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    const addToCart = (quantity) => {
        if (counter <= itemStock){
            setCounter(1)
            setItemStock(itemStock - quantity)
            setSold(true)
            onAdd(quantity)
        }
        
    }

    useEffect(() => {
        setItemStock(stock)
    },[stock])


    return(
        <div className="">
            <div className="row mb-4">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-dark btn-lg" onClick={decreaseStock}>-</button>
                        <button type="button" className="btn btn-outline-dark btn-lg">{counter}</button>
                        <button type="button" className="btn btn-outline-dark btn-lg" onClick={increaseStock}>+</button>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    {sold ? <Link to={"/cart"} className="btn btn-dark btn-lg">TERMINAR COMPRA</Link> : <button type="button" className="btn btn-dark btn-lg" onClick={ () => {addToCart(counter)}}>AGREGAR AL CARRITO</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount