import React, { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)
    const [itemStock, setItemStock] = useState(0)

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity)
        addItem(item, quantity)
    }

    useEffect(() => {
        setItemStock(item.stock)
    },[item])

    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} alt={item.name} className="img-fluid"/>
            </div>
            <div className="col-md-4 offset-md-2 m-5">
                <h1>{item.name}</h1>
                <h3>{item.price} €</h3>
                <p>{item.description}</p>
                <div>
                <ItemCount stock={item.stock} onAdd = {onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail