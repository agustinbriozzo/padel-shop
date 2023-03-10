import { addDoc, doc, collection, getFirestore, writeBatch, getDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(item => ({id:item.id, title:item.name, quantity:item.quantity, price:item.price, price_total:item.quantity * item.price})),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const batch = writeBatch(db);

            cart.forEach(item => {
                let product = doc(db, "products", item.id);
                getDoc(product).then((snapShot) => {
                    batch.update(product, {stock:snapShot.data().stock - item.quantity});
                });
            });
            
            batch.commit();
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                        <table className="table">                                
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.name} width={150} /></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle text-end">{item.quantity}</td>
                                        <td className="align-middle text-end">${item.quantity * item.price}</td>
                                    </tr>
                                    ))
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"><b>Total a Pagar</b></td>
                                    <td className="text-end"><b>${sumTotal()}</b></td>
                                </tr>
                            </tbody>
                        </table>    
                </div>
            </div>

            <div className="row my-5">
                <div className="col-md-12">
                        <form>
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre:</label>
                                <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label for="telefono" className="form-label">Tel??fono:</label>
                                <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Tel??fono" onInput={(e) => {setTelefono(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <button type="button" className="btn btn-dark btn-lg" onClick={generarOrden}>GENERAR PEDIDO</button>
                        </form>
                    </div>
            </div>

            <div className="row">
                <div className="col text-center">
                {orderId !== "" ? <Navigate to={"/thankyou/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;