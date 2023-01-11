import React from "react";
import arrayProducts from "./json/products.json"
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProducts.filter(item => item.cat === id) : arrayProducts)
            }, 2000)
        })

        promesa.then((data) => {
            setItems(data)
        })
    }, [id])
    return(
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer