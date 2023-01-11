import React from "react";
import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)

    const increaseStock = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }
    }

    const decreaseStock = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    const onAdd = () => {
        if(stock > 0){
            alert("Agregaste " + counter + " productos al carrito")
        }else{
            alert("no contamos con stock del producto seleccionado")
        }
    }

    return(
        <div className="">
            <div className="row mb-2">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decreaseStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={increaseStock}>+</button>
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col">
                <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount